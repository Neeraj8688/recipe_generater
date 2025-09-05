from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os
import logging
from datetime import datetime

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:5000"])

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class RecipeRecommendationSystem:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
        self.recipe_features = None
        self.recipes_data = None
        self.load_sample_data()
    
    def load_sample_data(self):
        """Load sample recipe data for demonstration"""
        sample_recipes = [
            {
                'id': 1,
                'title': 'Classic Spaghetti Carbonara',
                'ingredients': 'spaghetti eggs parmesan cheese bacon black pepper salt',
                'cuisine': 'Italian',
                'difficulty': 'Medium',
                'cooking_time': 20,
                'tags': 'pasta quick classic',
                'rating': 4.8
            },
            {
                'id': 2,
                'title': 'Chicken Tikka Masala',
                'ingredients': 'chicken breast yogurt tomatoes onions garlic ginger cream spices',
                'cuisine': 'Indian', 
                'difficulty': 'Medium',
                'cooking_time': 45,
                'tags': 'curry spicy popular',
                'rating': 4.7
            },
            {
                'id': 3,
                'title': 'Caesar Salad',
                'ingredients': 'romaine lettuce parmesan cheese croutons anchovies lemon olive oil',
                'cuisine': 'American',
                'difficulty': 'Easy',
                'cooking_time': 15,
                'tags': 'salad healthy quick',
                'rating': 4.5
            },
            {
                'id': 4,
                'title': 'Beef Tacos',
                'ingredients': 'ground beef taco shells onions garlic tomatoes lettuce cheese spices lime',
                'cuisine': 'Mexican',
                'difficulty': 'Easy',
                'cooking_time': 25,
                'tags': 'mexican quick family-friendly',
                'rating': 4.6
            },
            {
                'id': 5,
                'title': 'Thai Green Curry',
                'ingredients': 'chicken thighs coconut milk green curry paste thai basil eggplant bamboo shoots',
                'cuisine': 'Thai',
                'difficulty': 'Medium',
                'cooking_time': 30,
                'tags': 'spicy aromatic authentic',
                'rating': 4.9
            }
        ]
        
        self.recipes_data = pd.DataFrame(sample_recipes)
        
        # Create feature text by combining ingredients, cuisine, and tags
        feature_text = (self.recipes_data['ingredients'] + ' ' + 
                       self.recipes_data['cuisine'] + ' ' + 
                       self.recipes_data['tags']).fillna('')
        
        self.recipe_features = self.vectorizer.fit_transform(feature_text)
        logger.info(f"Loaded {len(sample_recipes)} sample recipes")
    
    def get_recommendations(self, user_ingredients, max_cooking_time=None, cuisine_preference=None, num_recommendations=5):
        """Get recipe recommendations based on user inputs"""
        try:
            # Create user profile from ingredients
            user_profile = ' '.join(user_ingredients).lower()
            if cuisine_preference:
                user_profile += f' {cuisine_preference.lower()}'
            
            user_vector = self.vectorizer.transform([user_profile])
            
            # Calculate similarities
            similarities = cosine_similarity(user_vector, self.recipe_features).flatten()
            
            # Filter by cooking time if specified
            valid_indices = range(len(similarities))
            if max_cooking_time:
                valid_indices = [i for i in valid_indices 
                               if self.recipes_data.iloc[i]['cooking_time'] <= max_cooking_time]
            
            # Get top recommendations
            valid_similarities = [(i, similarities[i]) for i in valid_indices]
            valid_similarities.sort(key=lambda x: x[1], reverse=True)
            
            recommendations = []
            for i, similarity in valid_similarities[:num_recommendations]:
                recipe = self.recipes_data.iloc[i].to_dict()
                recipe['similarity_score'] = float(similarity)
                recipe['match_percentage'] = min(int(similarity * 100), 100)
                recommendations.append(recipe)
            
            return recommendations
        
        except Exception as e:
            logger.error(f"Error in get_recommendations: {str(e)}")
            return []

# Initialize the recommendation system
recommender = RecipeRecommendationSystem()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'ML Recipe Recommendation Service',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0',
        'recipes_loaded': len(recommender.recipes_data) if recommender.recipes_data is not None else 0
    })

@app.route('/api/recommend', methods=['POST'])
def recommend_recipes():
    """Get recipe recommendations based on user inputs"""
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'ingredients' not in data:
            return jsonify({
                'success': False,
                'error': 'Missing ingredients parameter'
            }), 400
        
        ingredients = data['ingredients']
        if isinstance(ingredients, str):
            ingredients = [ing.strip() for ing in ingredients.split(',')]
        
        max_cooking_time = data.get('max_cooking_time')
        cuisine_preference = data.get('cuisine')
        num_recommendations = min(data.get('num_recommendations', 5), 10)
        
        logger.info(f"Getting recommendations for ingredients: {ingredients}")
        
        # Get recommendations
        recommendations = recommender.get_recommendations(
            ingredients, 
            max_cooking_time, 
            cuisine_preference, 
            num_recommendations
        )
        
        return jsonify({
            'success': True,
            'data': {
                'recommendations': recommendations,
                'query': {
                    'ingredients': ingredients,
                    'max_cooking_time': max_cooking_time,
                    'cuisine_preference': cuisine_preference
                },
                'count': len(recommendations)
            }
        })
    
    except Exception as e:
        logger.error(f"Error in recommend_recipes: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    debug = os.environ.get('DEBUG', 'False').lower() == 'true'
    
    logger.info(f"Starting ML Service on port {port}")
    logger.info(f"Debug mode: {debug}")
    app.run(host='0.0.0.0', port=port, debug=debug)
