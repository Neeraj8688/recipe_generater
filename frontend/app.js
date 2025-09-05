// Recipe data and app state

 // Complete Updated Recipe Data with High-Quality Images
// Replace your existing recipeData.recipes array with this one

const recipeData = {
  "recipes": [
    {
      "id": 1,
      "title": "Classic Spaghetti Carbonara",
      "image":"https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["spaghetti", "eggs", "parmesan cheese", "bacon", "black pepper", "salt"],
      "quantities": ["400g spaghetti", "4 large eggs", "100g parmesan cheese", "200g bacon", "black pepper to taste", "salt to taste"],
      "instructions": [
        "Cook spaghetti in salted boiling water until al dente",
        "Fry bacon until crispy, reserve the fat",
        "Beat eggs with grated parmesan and black pepper",
        "Drain pasta, immediately toss with bacon and fat",
        "Remove from heat, add egg mixture while tossing quickly",
        "Serve immediately with extra parmesan"
      ],
      "cookingTime": 20,
      "difficulty": "Medium",
      "cuisine": "Italian",
      "servings": 4,
      "rating": 4.8,
      "tags": ["pasta", "quick", "classic"]
    },
    {
      "id": 2,
      "title": "Chicken Tikka Masala",
      "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["chicken breast", "yogurt", "tomatoes", "onions", "garlic", "ginger", "cream", "garam masala", "turmeric", "cumin"],
      "quantities": ["500g chicken breast", "200ml yogurt", "400g canned tomatoes", "2 onions", "4 cloves garlic", "2cm ginger", "100ml cream", "2 tsp garam masala", "1 tsp turmeric", "1 tsp cumin"],
      "instructions": [
        "Marinate chicken in yogurt and spices for 2 hours",
        "Grill chicken pieces until cooked through",
        "Sauté onions, garlic, and ginger until fragrant",
        "Add spices and cook for 1 minute",
        "Add tomatoes and simmer for 10 minutes",
        "Add grilled chicken and cream, simmer for 5 minutes",
        "Serve with rice or naan"
      ],
      "cookingTime": 45,
      "difficulty": "Medium",
      "cuisine": "Indian",
      "servings": 4,
      "rating": 4.7,
      "tags": ["curry", "spicy", "popular"]
    },
    {
      "id": 3,
      "title": "Caesar Salad",
      "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["romaine lettuce", "parmesan cheese", "croutons", "anchovies", "lemon", "olive oil", "garlic", "eggs"],
      "quantities": ["2 heads romaine lettuce", "100g parmesan cheese", "100g croutons", "6 anchovy fillets", "2 lemons", "100ml olive oil", "2 cloves garlic", "2 egg yolks"],
      "instructions": [
        "Wash and chop romaine lettuce",
        "Make dressing with anchovies, garlic, lemon juice, and egg yolks",
        "Slowly whisk in olive oil to make emulsion",
        "Toss lettuce with dressing",
        "Add croutons and grated parmesan",
        "Serve immediately"
      ],
      "cookingTime": 15,
      "difficulty": "Easy",
      "cuisine": "American",
      "servings": 4,
      "rating": 4.5,
      "tags": ["salad", "healthy", "quick"]
    },
    {
      "id": 4,
      "title": "Beef Tacos",
      "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["ground beef", "taco shells", "onions", "garlic", "tomatoes", "lettuce", "cheese", "cumin", "chili powder", "lime"],
      "quantities": ["500g ground beef", "8 taco shells", "1 onion", "3 cloves garlic", "2 tomatoes", "1 head lettuce", "200g cheddar cheese", "1 tsp cumin", "1 tsp chili powder", "2 limes"],
      "instructions": [
        "Brown ground beef with onions and garlic",
        "Add cumin and chili powder, cook for 2 minutes",
        "Warm taco shells in oven",
        "Chop tomatoes and lettuce",
        "Grate cheese",
        "Assemble tacos with beef, vegetables, and cheese",
        "Serve with lime wedges"
      ],
      "cookingTime": 25,
      "difficulty": "Easy",
      "cuisine": "Mexican",
      "servings": 4,
      "rating": 4.6,
      "tags": ["mexican", "quick", "family-friendly"]
    },
    {
      "id": 5,
      "title": "Mushroom Risotto",
      "image": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["arborio rice", "mushrooms", "onions", "white wine", "parmesan cheese", "butter", "vegetable stock", "garlic"],
      "quantities": ["300g arborio rice", "400g mixed mushrooms", "1 onion", "200ml white wine", "100g parmesan cheese", "50g butter", "1.5L vegetable stock", "3 cloves garlic"],
      "instructions": [
        "Heat stock and keep warm",
        "Sauté mushrooms until golden, set aside",
        "Cook onions and garlic until soft",
        "Add rice, stir for 2 minutes",
        "Add wine, stir until absorbed",
        "Add stock gradually, stirring constantly",
        "Fold in mushrooms, butter, and parmesan",
        "Serve immediately"
      ],
      "cookingTime": 35,
      "difficulty": "Medium",
      "cuisine": "Italian",
      "servings": 4,
      "rating": 4.4,
      "tags": ["vegetarian", "creamy", "comfort"]
    },
    {
      "id": 6,
      "title": "Thai Green Curry",
      "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["chicken thighs", "coconut milk", "green curry paste", "thai basil", "eggplant", "bamboo shoots", "fish sauce", "palm sugar", "lime leaves"],
      "quantities": ["600g chicken thighs", "400ml coconut milk", "3 tbsp green curry paste", "1 cup thai basil", "2 thai eggplants", "200g bamboo shoots", "2 tbsp fish sauce", "1 tbsp palm sugar", "4 lime leaves"],
      "instructions": [
        "Heat thick coconut milk and fry curry paste until fragrant",
        "Add chicken and cook until sealed",
        "Add remaining coconut milk and bring to boil",
        "Add eggplant and bamboo shoots",
        "Season with fish sauce and palm sugar",
        "Add lime leaves and basil",
        "Serve with jasmine rice"
      ],
      "cookingTime": 30,
      "difficulty": "Medium",
      "cuisine": "Thai",
      "servings": 4,
      "rating": 4.9,
      "tags": ["spicy", "aromatic", "authentic"]
    },
    {
      "id": 7,
      "title": "Greek Moussaka",
      "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["eggplant", "ground lamb", "onions", "tomatoes", "bechamel sauce", "parmesan cheese", "olive oil", "oregano", "cinnamon"],
      "quantities": ["3 large eggplants", "600g ground lamb", "2 onions", "400g canned tomatoes", "500ml bechamel sauce", "100g parmesan cheese", "100ml olive oil", "2 tsp oregano", "1 tsp cinnamon"],
      "instructions": [
        "Slice and salt eggplant, let drain for 30 minutes",
        "Fry eggplant slices until golden",
        "Make meat sauce with lamb, onions, tomatoes, and spices",
        "Layer eggplant and meat sauce in baking dish",
        "Top with bechamel sauce and cheese",
        "Bake at 180°C for 45 minutes until golden",
        "Rest for 10 minutes before serving"
      ],
      "cookingTime": 90,
      "difficulty": "Hard",
      "cuisine": "Greek",
      "servings": 6,
      "rating": 4.3,
      "tags": ["traditional", "hearty", "baked"]
    },
    {
      "id": 8,
      "title": "Japanese Chicken Teriyaki",
      "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["chicken thighs", "soy sauce", "mirin", "sake", "sugar", "ginger", "garlic", "sesame oil", "green onions"],
      "quantities": ["600g chicken thighs", "100ml soy sauce", "50ml mirin", "50ml sake", "2 tbsp sugar", "2cm ginger", "2 cloves garlic", "1 tsp sesame oil", "2 green onions"],
      "instructions": [
        "Mix soy sauce, mirin, sake, and sugar for teriyaki sauce",
        "Marinate chicken in half the sauce for 30 minutes",
        "Pan-fry chicken skin-side down until crispy",
        "Flip and cook until done",
        "Add remaining sauce and simmer until glazed",
        "Garnish with chopped green onions",
        "Serve with steamed rice"
      ],
      "cookingTime": 25,
      "difficulty": "Easy",
      "cuisine": "Japanese",
      "servings": 4,
      "rating": 4.7,
      "tags": ["sweet", "glazed", "popular"]
    },
    {
      "id": 9,
      "title": "French Onion Soup",
      "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["onions", "beef stock", "white wine", "gruyere cheese", "bread", "butter", "thyme", "bay leaves"],
      "quantities": ["6 large onions", "1.5L beef stock", "200ml white wine", "200g gruyere cheese", "6 slices bread", "50g butter", "2 tsp thyme", "2 bay leaves"],
      "instructions": [
        "Slice onions thinly and caramelize slowly in butter",
        "Add wine and reduce by half",
        "Add stock, thyme, and bay leaves",
        "Simmer for 30 minutes",
        "Toast bread and grate cheese",
        "Serve soup topped with bread and cheese",
        "Grill until cheese is bubbly and golden"
      ],
      "cookingTime": 60,
      "difficulty": "Medium",
      "cuisine": "French",
      "servings": 6,
      "rating": 4.5,
      "tags": ["soup", "comfort", "classic"]
    },
    {
      "id": 10,
      "title": "Moroccan Tagine",
      "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["lamb shoulder", "apricots", "almonds", "onions", "cinnamon", "ginger", "saffron", "honey", "preserved lemons"],
      "quantities": ["800g lamb shoulder", "200g dried apricots", "100g almonds", "2 onions", "2 tsp cinnamon", "2 tsp ginger", "1/2 tsp saffron", "2 tbsp honey", "2 preserved lemons"],
      "instructions": [
        "Brown lamb pieces in tagine or heavy pot",
        "Add onions and cook until soft",
        "Add spices and cook until fragrant",
        "Add water to barely cover meat",
        "Simmer covered for 1.5 hours",
        "Add apricots, almonds, and preserved lemons",
        "Cook 30 minutes more until tender",
        "Serve with couscous"
      ],
      "cookingTime": 150,
      "difficulty": "Hard",
      "cuisine": "Moroccan",
      "servings": 6,
      "rating": 4.6,
      "tags": ["slow-cooked", "aromatic", "exotic"]
    },
    {
      "id": 11,
      "title": "Caprese Salad",
      "image": "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "black pepper"],
      "quantities": ["4 large tomatoes", "250g fresh mozzarella", "1 cup fresh basil", "50ml olive oil", "30ml balsamic vinegar", "salt to taste", "black pepper to taste"],
      "instructions": [
        "Slice tomatoes and mozzarella into thick rounds",
        "Arrange alternating with basil leaves on plate",
        "Drizzle with olive oil and balsamic vinegar",
        "Season with salt and pepper",
        "Let stand 10 minutes before serving",
        "Serve at room temperature"
      ],
      "cookingTime": 10,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "servings": 4,
      "rating": 4.4,
      "tags": ["fresh", "simple", "no-cook"]
    },
    {
      "id": 12,
      "title": "Korean Bulgogi",
      "image": "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["beef sirloin", "soy sauce", "sesame oil", "garlic", "ginger", "pear", "brown sugar", "green onions", "sesame seeds"],
      "quantities": ["600g beef sirloin", "100ml soy sauce", "2 tbsp sesame oil", "6 cloves garlic", "2cm ginger", "1 asian pear", "3 tbsp brown sugar", "4 green onions", "2 tbsp sesame seeds"],
      "instructions": [
        "Slice beef very thinly against the grain",
        "Grate pear, garlic, and ginger",
        "Mix marinade with soy sauce, sesame oil, and sugar",
        "Marinate beef for at least 2 hours",
        "Cook beef in hot pan for 2-3 minutes",
        "Garnish with green onions and sesame seeds",
        "Serve with rice and lettuce wraps"
      ],
      "cookingTime": 20,
      "difficulty": "Medium",
      "cuisine": "Korean",
      "servings": 4,
      "rating": 4.8,
      "tags": ["marinated", "quick-cook", "flavorful"]
    },
    {
      "id": 13,
      "title": "Mediterranean Quinoa Bowl",
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["quinoa", "cucumber", "tomatoes", "olives", "feta cheese", "red onion", "olive oil", "lemon", "oregano"],
      "quantities": ["1 cup quinoa", "1 cucumber", "2 tomatoes", "1/2 cup olives", "100g feta cheese", "1/2 red onion", "3 tbsp olive oil", "1 lemon", "1 tsp oregano"],
      "instructions": [
        "Cook quinoa according to package instructions",
        "Dice cucumber and tomatoes",
        "Slice red onion thinly",
        "Mix olive oil, lemon juice, and oregano for dressing",
        "Combine all ingredients in a bowl",
        "Top with crumbled feta cheese",
        "Drizzle with dressing and serve"
      ],
      "cookingTime": 20,
      "difficulty": "Easy",
      "cuisine": "Mediterranean",
      "servings": 4,
      "rating": 4.6,
      "tags": ["healthy", "vegetarian", "fresh"]
    },
    {
      "id": 14,
      "title": "Vietnamese Pho",
      "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["beef bones", "rice noodles", "beef sirloin", "onions", "ginger", "star anise", "cinnamon", "fish sauce", "lime", "basil", "cilantro"],
      "quantities": ["1kg beef bones", "400g rice noodles", "300g beef sirloin", "2 onions", "4cm ginger", "3 star anise", "1 cinnamon stick", "3 tbsp fish sauce", "2 limes", "1 cup basil", "1 cup cilantro"],
      "instructions": [
        "Roast beef bones and onions until golden",
        "Simmer bones with spices for 4-6 hours",
        "Strain broth and season with fish sauce",
        "Cook rice noodles according to package",
        "Slice beef very thinly",
        "Assemble bowls with noodles and raw beef",
        "Pour hot broth over beef to cook it",
        "Garnish with herbs and lime"
      ],
      "cookingTime": 300,
      "difficulty": "Hard",
      "cuisine": "Vietnamese",
      "servings": 6,
      "rating": 4.9,
      "tags": ["soup", "aromatic", "traditional"]
    },
    {
      "id": 15,
      "title": "Chocolate Lava Cake",
      "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["dark chocolate", "butter", "eggs", "sugar", "flour", "vanilla extract", "salt"],
      "quantities": ["200g dark chocolate", "100g butter", "4 eggs", "100g sugar", "50g flour", "1 tsp vanilla extract", "pinch salt"],
      "instructions": [
        "Melt chocolate and butter together",
        "Beat eggs with sugar until pale",
        "Mix in melted chocolate mixture",
        "Fold in flour and vanilla",
        "Grease ramekins and fill with batter",
        "Bake at 200°C for 12-14 minutes",
        "Let rest for 1 minute before serving",
        "Dust with powdered sugar"
      ],
      "cookingTime": 25,
      "difficulty": "Medium",
      "cuisine": "French",
      "servings": 4,
      "rating": 4.8,
      "tags": ["dessert", "chocolate", "indulgent"]
    },
    {
      "id": 16,
      "title": "Ethiopian Doro Wat",
      "image": "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["chicken thighs", "onions", "garlic", "ginger", "berbere spice", "paprika", "cardamom", "cinnamon", "cloves", "wine", "hard-boiled eggs"],
      "quantities": ["1kg chicken thighs", "4 onions", "6 cloves garlic", "4cm ginger", "3 tbsp berbere", "2 tsp paprika", "1 tsp cardamom", "1 cinnamon stick", "4 cloves", "200ml wine", "4 hard-boiled eggs"],
      "instructions": [
        "Marinate chicken in lemon juice and salt",
        "Caramelize onions slowly for 45 minutes",
        "Add garlic, ginger, and spices",
        "Add chicken and cook until sealed",
        "Add wine and simmer for 1 hour",
        "Add hard-boiled eggs in last 15 minutes",
        "Serve with injera bread"
      ],
      "cookingTime": 120,
      "difficulty": "Hard",
      "cuisine": "Ethiopian",
      "servings": 6,
      "rating": 4.7,
      "tags": ["spicy", "traditional", "aromatic"]
    },
    {
      "id": 17,
      "title": "Peruvian Ceviche",
      "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["white fish", "lime juice", "red onion", "cilantro", "aji amarillo", "sweet potato", "corn", "salt", "black pepper"],
      "quantities": ["500g white fish", "200ml lime juice", "1 red onion", "1/2 cup cilantro", "1 tbsp aji amarillo", "2 sweet potatoes", "1 cup corn", "salt to taste", "black pepper to taste"],
      "instructions": [
        "Cut fish into small cubes",
        "Marinate fish in lime juice for 15 minutes",
        "Slice red onion very thinly",
        "Boil sweet potatoes until tender",
        "Cook corn kernels",
        "Mix fish with onions and cilantro",
        "Add aji amarillo and season",
        "Serve with sweet potato and corn"
      ],
      "cookingTime": 30,
      "difficulty": "Easy",
      "cuisine": "Peruvian",
      "servings": 4,
      "rating": 4.5,
      "tags": ["fresh", "citrusy", "healthy"]
    },
    {
      "id": 18,
      "title": "Lebanese Hummus",
      "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&auto=format",
      "ingredients": ["chickpeas", "tahini", "lemon juice", "garlic", "olive oil", "cumin", "salt", "paprika"],
      "quantities": ["400g cooked chickpeas", "3 tbsp tahini", "3 tbsp lemon juice", "2 cloves garlic", "2 tbsp olive oil", "1/2 tsp cumin", "salt to taste", "paprika for garnish"],
      "instructions": [
        "Drain and rinse chickpeas",
        "Blend chickpeas with tahini and lemon juice",
        "Add garlic and cumin",
        "Slowly add olive oil while blending",
        "Season with salt",
        "Garnish with paprika and olive oil",
        "Serve with pita bread"
      ],
      "cookingTime": 15,
      "difficulty": "Easy",
      "cuisine": "Lebanese",
      "servings": 6,
      "rating": 4.6,
      "tags": ["dip", "vegetarian", "protein-rich"]
    },
    {"id": 19, "title": "Butter Chicken", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&auto=format", "ingredients": ["chicken", "butter", "tomatoes", "cream", "garam masala", "ginger", "garlic"], "quantities": ["600g chicken", "50g butter", "400g tomatoes", "150ml cream", "2 tsp garam masala", "2cm ginger", "4 cloves garlic"], "instructions": ["Marinate chicken with spices", "Cook in butter and tomato sauce", "Finish with cream"], "cookingTime": 40, "difficulty": "Medium", "cuisine": "Indian", "servings": 4, "rating": 4.8, "tags": ["north indian", "creamy", "popular"]},
    {"id": 20, "title": "Chicken Biryani", "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&h=600&fit=crop&auto=format", "ingredients": ["basmati rice", "chicken", "yogurt", "onions", "garam masala", "saffron"], "quantities": ["2 cups basmati", "600g chicken", "1/2 cup yogurt", "2 onions", "1 tbsp garam masala", "pinch saffron"], "instructions": ["Marinate chicken", "Parboil rice", "Layer and dum cook"], "cookingTime": 90, "difficulty": "Hard", "cuisine": "Indian", "servings": 6, "rating": 4.9, "tags": ["rice", "aromatic"]},
    {"id": 21, "title": "Paneer Tikka", "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&auto=format", "ingredients": ["paneer", "yogurt", "spices", "bell peppers", "onions"], "quantities": ["400g paneer", "1/2 cup yogurt", "spice mix", "1 bell pepper", "1 onion"], "instructions": ["Marinate paneer", "Skewer with veggies", "Grill until charred"], "cookingTime": 30, "difficulty": "Medium", "cuisine": "Indian", "servings": 4, "rating": 4.7, "tags": ["tandoori", "starter"]},
    {"id": 22, "title": "Chole Bhature", "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&auto=format", "ingredients": ["chickpeas", "onions", "tomatoes", "spices", "flour"], "quantities": ["2 cups chickpeas", "2 onions", "2 tomatoes", "spice mix", "2 cups flour"], "instructions": ["Cook chole", "Knead and fry bhature"], "cookingTime": 75, "difficulty": "Hard", "cuisine": "Indian", "servings": 4, "rating": 4.6, "tags": ["punjabi", "street food"]},
    {"id": 23, "title": "Masala Dosa", "image": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&h=600&fit=crop&auto=format", "ingredients": ["dosa batter", "potatoes", "onions", "mustard seeds", "curry leaves"], "quantities": ["3 cups batter", "4 potatoes", "1 onion", "1 tsp mustard", "10 curry leaves"], "instructions": ["Make masala", "Spread dosa", "Fill and fold"], "cookingTime": 40, "difficulty": "Medium", "cuisine": "Indian", "servings": 4, "rating": 4.8, "tags": ["south indian", "breakfast"]},
    {"id": 24, "title": "Idli Sambar", "image": "https://images.unsplash.com/photo-1626776877935-2c36e1cd543d?w=800&h=600&fit=crop&auto=format", "ingredients": ["idli batter", "toor dal", "tamarind", "veggies", "spices"], "quantities": ["3 cups batter", "1 cup toor dal", "2 tbsp tamarind", "mixed veg", "spice mix"], "instructions": ["Steam idli", "Cook sambar", "Serve hot"], "cookingTime": 45, "difficulty": "Easy", "cuisine": "Indian", "servings": 4, "rating": 4.7, "tags": ["south indian", "comfort"]},
    {"id": 25, "title": "Pav Bhaji", "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&auto=format", "ingredients": ["mixed vegetables", "butter", "pav bhaji masala", "bread"], "quantities": ["4 cups veg", "50g butter", "2 tbsp masala", "8 pav"], "instructions": ["Mash and cook bhaji", "Toast pav in butter"], "cookingTime": 35, "difficulty": "Easy", "cuisine": "Indian", "servings": 4, "rating": 4.6, "tags": ["mumbai", "street food"]},
    {"id": 26, "title": "Samosa", "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&auto=format", "ingredients": ["flour", "potatoes", "peas", "spices"], "quantities": ["2 cups flour", "4 potatoes", "1/2 cup peas", "spice mix"], "instructions": ["Prepare dough", "Fill and shape", "Deep fry"], "cookingTime": 60, "difficulty": "Medium", "cuisine": "Indian", "servings": 6, "rating": 4.5, "tags": ["snack", "fried"]},
    {"id": 27, "title": "Palak Paneer", "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&auto=format", "ingredients": ["spinach", "paneer", "cream", "garlic", "garam masala"], "quantities": ["500g spinach", "300g paneer", "50ml cream", "4 cloves garlic", "1 tsp garam masala"], "instructions": ["Blanch spinach and puree", "Simmer with spices", "Add paneer"], "cookingTime": 35, "difficulty": "Easy", "cuisine": "Indian", "servings": 4, "rating": 4.7, "tags": ["vegetarian", "creamy"]},
    {"id": 28, "title": "Rogan Josh", "image": "https://images.unsplash.com/photo-1585238341710-4d3ee26d607f?w=800&h=600&fit=crop&auto=format", "ingredients": ["mutton", "yogurt", "kashmiri chili", "spices"], "quantities": ["700g mutton", "1/2 cup yogurt", "2 tsp chili", "spice mix"], "instructions": ["Sear meat", "Slow cook with spices"], "cookingTime": 90, "difficulty": "Hard", "cuisine": "Indian", "servings": 5, "rating": 4.6, "tags": ["kashmiri", "aromatic"]},
    {"id": 29, "title": "Dal Makhani", "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&auto=format", "ingredients": ["black lentils", "kidney beans", "butter", "cream", "spices"], "quantities": ["1 cup urad", "1/4 cup rajma", "50g butter", "100ml cream", "spice mix"], "instructions": ["Simmer lentils overnight", "Finish with butter and cream"], "cookingTime": 120, "difficulty": "Hard", "cuisine": "Indian", "servings": 6, "rating": 4.8, "tags": ["punjabi", "rich"]},
    {"id": 30, "title": "Paneer Butter Masala", "image": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&auto=format", "ingredients": ["paneer", "tomatoes", "butter", "cream", "kasuri methi"], "quantities": ["400g paneer", "400g tomatoes", "50g butter", "100ml cream", "1 tsp kasuri methi"], "instructions": ["Make makhani gravy", "Simmer paneer in sauce"], "cookingTime": 40, "difficulty": "Medium", "cuisine": "Indian", "servings": 4, "rating": 4.8, "tags": ["north indian", "restaurant style"]},
    {"id": 31, "title": "Gulab Jamun", "image": "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=800&h=600&fit=crop&auto=format", "ingredients": ["khoya", "sugar", "cardamom", "ghee"], "quantities": ["250g khoya", "1 cup sugar", "1/2 tsp cardamom", "ghee for frying"], "instructions": ["Knead dough", "Fry balls", "Soak in syrup"], "cookingTime": 60, "difficulty": "Medium", "cuisine": "Indian", "servings": 6, "rating": 4.7, "tags": ["dessert", "festive"]},
    {"id": 32, "title": "Jalebi", "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&auto=format", "ingredients": ["flour", "sugar", "yogurt", "saffron"], "quantities": ["2 cups flour", "1.5 cups sugar", "2 tbsp yogurt", "pinch saffron"], "instructions": ["Ferment batter", "Pipe spirals", "Fry and dip in syrup"], "cookingTime": 90, "difficulty": "Hard", "cuisine": "Indian", "servings": 6, "rating": 4.6, "tags": ["dessert", "sweet"]},
  ],
  // ... rest of your commonIngredients, cuisineTypes, etc. stay the same

  "commonIngredients": [
    "chicken", "beef", "pork", "fish", "eggs", "milk", "cheese", "butter",
    "onions", "garlic", "tomatoes", "potatoes", "carrots", "bell peppers",
    "broccoli", "spinach", "lettuce", "rice", "pasta", "bread", "flour",
    "olive oil", "salt", "pepper", "basil", "oregano", "thyme", "parsley",
    "lemon", "lime", "ginger", "soy sauce", "coconut milk", "yogurt",
    "mushrooms", "zucchini", "eggplant", "cucumber", "celery", "corn",
    "green beans", "asparagus", "cauliflower", "cabbage", "kale", "arugula",
    "avocado", "sweet potato", "beets", "radish", "turnip", "parsnip",
    "lamb", "turkey", "duck", "shrimp", "salmon", "tuna", "cod", "tilapia",
    "bacon", "ham", "sausage", "chorizo", "prosciutto", "pancetta",
    "cream", "sour cream", "buttermilk", "heavy cream", "mascarpone",
    "mozzarella", "cheddar", "feta", "goat cheese", "ricotta", "gouda",
    "brie", "camembert", "blue cheese", "swiss cheese", "parmesan",
    "almonds", "walnuts", "pecans", "cashews", "pistachios", "hazelnuts",
    "peanuts", "sunflower seeds", "pumpkin seeds", "sesame seeds",
    "quinoa", "barley", "oats", "bulgur", "couscous", "wild rice",
    "brown rice", "jasmine rice", "basmati rice", "arborio rice",
    "spaghetti", "penne", "fettuccine", "linguine", "rigatoni", "macaroni",
    "lasagna", "ravioli", "gnocchi", "orzo", "angel hair", "fusilli",
    "coconut oil", "vegetable oil", "canola oil", "sesame oil", "walnut oil",
    "balsamic vinegar", "apple cider vinegar", "red wine vinegar", "rice vinegar",
    "honey", "maple syrup", "agave", "brown sugar", "white sugar", "powdered sugar",
    "vanilla extract", "almond extract", "cinnamon", "nutmeg", "cloves",
    "cardamom", "star anise", "bay leaves", "rosemary", "sage", "dill",
    "cilantro", "mint", "chives", "tarragon", "marjoram", "fennel seeds",
    "cumin", "coriander", "paprika", "cayenne", "chili powder", "curry powder",
    "turmeric", "garam masala", "sumac", "za'atar", "herbes de provence",
    "worcestershire sauce", "hot sauce", "sriracha", "fish sauce", "oyster sauce",
    "hoisin sauce", "teriyaki sauce", "barbecue sauce", "ketchup", "mustard",
    "mayonnaise", "pesto", "tahini", "hummus", "salsa", "guacamole",
    "capers", "olives", "pickles", "anchovies", "sundried tomatoes",
    "artichokes", "hearts of palm", "water chestnuts", "bamboo shoots",
    "ginger root", "galangal", "lemongrass", "kaffir lime leaves", "curry leaves",
    "coconut", "coconut cream", "coconut water", "coconut flakes", "coconut oil",
    "chocolate", "cocoa powder", "dark chocolate", "milk chocolate", "white chocolate",
    "nuts", "dried fruits", "raisins", "dates", "figs", "apricots", "cranberries",
    "banana", "apple", "orange", "lemon", "lime", "grapefruit", "berries",
    "strawberries", "blueberries", "raspberries", "blackberries", "cherries",
    "peach", "pear", "plum", "mango", "pineapple", "kiwi", "papaya",
    "pomegranate", "watermelon", "cantaloupe", "honeydew", "grapes"
  ],
  "cuisineTypes": ["Italian", "Indian", "American", "Mexican", "Thai", "Greek", "Japanese", "French", "Moroccan", "Korean", "Mediterranean", "Vietnamese", "Ethiopian", "Peruvian", "Lebanese"],
  "difficultyLevels": ["Easy", "Medium", "Hard"]
};

// 🆕 ADD THESE FUNCTIONS AT THE BEGINNING OF YOUR FRONTEND app.js

// Check authentication on page load  
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
    // ... your existing DOMContentLoaded code
});

function checkAuthentication() {
    const userMenu = document.getElementById('userMenu');
    const loginBtn = document.getElementById('loginBtn');
    const username = document.getElementById('username');
    
    if (authService.isAuthenticated()) {
        const user = authService.getUser();
        if (userMenu) userMenu.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'none';
        if (username) username.textContent = `Hello, ${user.username}!`;
    } else {
        if (userMenu) userMenu.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'block';
    }
}

// 🆕 REPLACE YOUR EXISTING findRecipes FUNCTION WITH THIS:
async function findRecipes() {
    console.log('Finding recipes with ingredients:', selectedIngredients);
    
    if (selectedIngredients.length === 0) {
        alert('Please select at least one ingredient!');
        return;
    }
    
    showLoading();
    
    try {
        const result = await authService.fetchRecipes({
            ingredients: selectedIngredients.join(',')
        });
        
        if (result.success) {
            // Your existing recipe processing code...
            filteredRecipes = result.data;
            hideLoading();
            displayRecipes(filteredRecipes, 'Found Recipes');
        } else {
            hideLoading();
            alert('Error finding recipes: ' + result.error);
        }
    } catch (error) {
        hideLoading();
        alert('Network error. Please try again.');
    }
}

// Configuration
const USE_ML_SERVICE = true;
const ML_SERVICE_URL = '/ml';

// App state
let selectedIngredients = [];
let filteredRecipes = [];
let currentView = 'all'; // 'all' or 'favorites'
let favorites = [];

// Initialize favorites from localStorage
try {
  favorites = JSON.parse(localStorage.getItem('recipeFavorites') || '[]');
} catch (e) {
  favorites = [];
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  console.log('Initializing app...');
  renderCommonIngredients();
  populateFilterOptions();
  updateNavigationButtons();
  updateSelectedIngredients();
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Get DOM elements
  const ingredientInput = document.getElementById('ingredientInput');
  const addIngredientBtn = document.getElementById('addIngredientBtn');
  const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const findRecipesBtn = document.getElementById('findRecipesBtn');
  const allRecipesBtn = document.getElementById('allRecipesBtn');
  const favoritesBtn = document.getElementById('favoritesBtn');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  
  // Filter elements
  const cuisineFilter = document.getElementById('cuisineFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const timeFilter = document.getElementById('timeFilter');
  const sortFilter = document.getElementById('sortFilter');

  // Ingredient input events
  if (ingredientInput) {
    ingredientInput.addEventListener('input', function(e) {
      console.log('Input changed:', e.target.value);
      handleIngredientInput(e);
    });
    
    ingredientInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addIngredientFromInput();
      }
    });
  }
  
  if (addIngredientBtn) {
    addIngredientBtn.addEventListener('click', function() {
      console.log('Add ingredient button clicked');
      addIngredientFromInput();
    });
  }
  
  // Navigation events
  if (allRecipesBtn) {
    allRecipesBtn.addEventListener('click', function() {
      console.log('All recipes button clicked');
      switchView('all');
    });
  }
  
  if (favoritesBtn) {
    favoritesBtn.addEventListener('click', function() {
      console.log('Favorites button clicked');
      switchView('favorites');
    });
  }
  
  // Clear all button
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', function() {
      console.log('Clear all button clicked');
      clearAllIngredients();
    });
  }
  
  // Find recipes button
  if (findRecipesBtn) {
    findRecipesBtn.addEventListener('click', function() {
      console.log('Find recipes button clicked');
      findRecipes();
    });
  }
  
  // Filter events
  if (cuisineFilter) {
    cuisineFilter.addEventListener('change', applyFilters);
  }
  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', applyFilters);
  }
  if (timeFilter) {
    timeFilter.addEventListener('change', applyFilters);
  }
  if (sortFilter) {
    sortFilter.addEventListener('change', applyFilters);
  }
  
  // Modal events
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }
  
  // Close autocomplete when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.ingredient-input-container')) {
      hideAutocomplete();
    }
  });
}

// Ensure Unsplash images include reliable params and add a lightweight CDN fallback
function formatImageUrl(url, title) {
  try {
    if (!url) return 'https://via.placeholder.com/600x400?text=No+Image';
    const isExternal = url.startsWith('http://') || url.startsWith('https://');
    // If pointing to backend proxy path, ensure correct host:port (5000)
    if (url.startsWith('/api/recipe-image')) {
      // Use a direct external image based on the recipe title to avoid backend dependency
      const query = encodeURIComponent(`${title || 'food'},food,recipe`);
      // Unsplash Source provides a simple way to fetch a representative image by query
      return `https://source.unsplash.com/800x500/?${query}`;
    }
    // Normalize Unsplash parameters
    if (isExternal && url.includes('images.unsplash.com')) {
      const hasParams = url.includes('?');
      const params = 'auto=format&fit=crop&w=800&q=70';
      url = hasParams ? `${url}&${params}` : `${url}?${params}`;
    }
    // Route through backend proxy to avoid hotlink blocks
    if (isExternal) {
      const seed = encodeURIComponent(String(title || 'recipe'));
      // Prefer using the direct URL; if hotlinking becomes an issue, consider enabling the proxy again.
      return url;
    }
    return url;
  } catch (_) {
    return 'https://via.placeholder.com/600x400?text=No+Image';
  }
}

function getRecipePlaceholder(title) {
  // Static food placeholder to avoid random non-food images
  return 'https://placehold.co/800x500?text=Food+Image';
}

function renderCommonIngredients() {
  const commonIngredientTags = document.getElementById('commonIngredientTags');
  if (!commonIngredientTags) return;
  
  commonIngredientTags.innerHTML = '';
  recipeData.commonIngredients.slice(0, 12).forEach(ingredient => {
    const tag = createIngredientTag(ingredient, false);
    tag.addEventListener('click', function() {
      console.log('Common ingredient clicked:', ingredient);
      addIngredient(ingredient);
    });
    commonIngredientTags.appendChild(tag);
  });
}

function createIngredientTag(ingredient, isSelected = false) {
  const tag = document.createElement('button');
  tag.className = isSelected ? 'selected-tag' : 'ingredient-tag';
  tag.textContent = ingredient;
  
  if (isSelected) {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-tag';
    removeBtn.innerHTML = '✕';
    removeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      removeIngredient(ingredient);
    });
    tag.appendChild(removeBtn);
  }
  
  return tag;
}

function populateFilterOptions() {
  const cuisineFilter = document.getElementById('cuisineFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  
  if (cuisineFilter) {
    recipeData.cuisineTypes.forEach(cuisine => {
      const option = document.createElement('option');
      option.value = cuisine;
      option.textContent = cuisine;
      cuisineFilter.appendChild(option);
    });
  }
  
  if (difficultyFilter) {
    recipeData.difficultyLevels.forEach(difficulty => {
      const option = document.createElement('option');
      option.value = difficulty;
      option.textContent = difficulty;
      difficultyFilter.appendChild(option);
    });
  }
}

function handleIngredientInput(e) {
  const query = e.target.value.trim().toLowerCase();
  console.log('Handling ingredient input:', query);
  
  if (query.length < 2) {
    hideAutocomplete();
    return;
  }
  
  const suggestions = recipeData.commonIngredients
    .filter(ingredient => 
      ingredient.toLowerCase().includes(query) && 
      !selectedIngredients.includes(ingredient)
    )
    .slice(0, 5);
  
  showAutocomplete(suggestions);
}

function showAutocomplete(suggestions) {
  const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');
  if (!autocompleteSuggestions) return;
  
  if (suggestions.length === 0) {
    hideAutocomplete();
    return;
  }
  
  autocompleteSuggestions.innerHTML = '';
  suggestions.forEach(suggestion => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.textContent = suggestion;
    item.addEventListener('click', function() {
      addIngredient(suggestion);
      document.getElementById('ingredientInput').value = '';
      hideAutocomplete();
    });
    autocompleteSuggestions.appendChild(item);
  });
  
  autocompleteSuggestions.classList.remove('hidden');
}

function hideAutocomplete() {
  const autocompleteSuggestions = document.getElementById('autocompleteSuggestions');
  if (autocompleteSuggestions) {
    autocompleteSuggestions.classList.add('hidden');
  }
}

function addIngredientFromInput() {
  const ingredientInput = document.getElementById('ingredientInput');
  if (!ingredientInput) return;
  
  const ingredient = ingredientInput.value.trim().toLowerCase();
  console.log('Adding ingredient from input:', ingredient);
  
  if (ingredient) {
    addIngredient(ingredient);
    ingredientInput.value = '';
    hideAutocomplete();
  }
}

function addIngredient(ingredient) {
  console.log('Adding ingredient:', ingredient);
  if (!selectedIngredients.includes(ingredient)) {
    selectedIngredients.push(ingredient);
    updateSelectedIngredients();
  }
}

function removeIngredient(ingredient) {
  console.log('Removing ingredient:', ingredient);
  selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
  updateSelectedIngredients();
}

function clearAllIngredients() {
  console.log('Clearing all ingredients');
  selectedIngredients = [];
  updateSelectedIngredients();
  resetFiltersAndResults();
}

function updateSelectedIngredients() {
  const selectedTags = document.getElementById('selectedTags');
  if (!selectedTags) return;
  
  selectedTags.innerHTML = '';
  
  if (selectedIngredients.length === 0) {
    selectedTags.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">No ingredients selected</p>';
    return;
  }
  
  selectedIngredients.forEach(ingredient => {
    const tag = createIngredientTag(ingredient, true);
    selectedTags.appendChild(tag);
  });
}

function switchView(view) {
  console.log('Switching to view:', view);
  currentView = view;
  updateNavigationButtons();
  
  if (view === 'favorites') {
    showFavorites();
  } else {
    resetFiltersAndResults();
  }
}

function updateNavigationButtons() {
  const allRecipesBtn = document.getElementById('allRecipesBtn');
  const favoritesBtn = document.getElementById('favoritesBtn');
  
  if (allRecipesBtn) {
    allRecipesBtn.classList.toggle('active', currentView === 'all');
  }
  if (favoritesBtn) {
    favoritesBtn.classList.toggle('active', currentView === 'favorites');
  }
}

function showFavorites() {
  console.log('Showing favorites:', favorites);
  
  if (favorites.length === 0) {
    showEmptyState('No Favorite Recipes', 'Start favoriting recipes to see them here!');
    return;
  }
  
  const favoriteRecipes = recipeData.recipes.filter(recipe => favorites.includes(recipe.id));
  displayRecipes(favoriteRecipes, 'Your Favorite Recipes');
  
  const filtersSection = document.getElementById('filtersSection');
  if (filtersSection) {
    filtersSection.classList.add('hidden');
  }
}

async function findRecipes() {
  console.log('Finding recipes with ingredients:', selectedIngredients);
  
  if (selectedIngredients.length === 0) {
    alert('Please select at least one ingredient!');
    return;
  }
  
  showLoading();
  try {
    let results = [];
    if (USE_ML_SERVICE) {
      const mlRecommendations = await fetchMlRecommendations(selectedIngredients);
      results = mapMlToRecipes(mlRecommendations);
    }
    // Fallback to local filtering if ML not available or no results
    if (!results || results.length === 0) {
      results = localFilterRecipes();
    }
    filteredRecipes = results;
    hideLoading();
    if (filteredRecipes.length === 0) {
      showEmptyState();
    } else {
      displayRecipes(filteredRecipes, 'Found Recipes');
      const filtersSection = document.getElementById('filtersSection');
      if (filtersSection) filtersSection.classList.remove('hidden');
    }
  } catch (e) {
    console.error('findRecipes error:', e);
    hideLoading();
    alert('Could not fetch recommendations. Please try again.');
  }
}

function localFilterRecipes() {
    const matchingRecipes = recipeData.recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
      return selectedIngredients.some(ingredient => 
        recipeIngredients.some(recipeIng => recipeIng.includes(ingredient))
      );
    });
  return matchingRecipes.map(recipe => {
      const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
      const matchCount = selectedIngredients.filter(ingredient => 
        recipeIngredients.some(recipeIng => recipeIng.includes(ingredient))
      ).length;
      return {
        ...recipe,
        relevanceScore: matchCount,
        matchPercentage: Math.round((matchCount / selectedIngredients.length) * 100)
      };
    });
}

async function fetchMlRecommendations(ingredients) {
  try {
    const response = await fetch(`${ML_SERVICE_URL}/api/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ingredients, num_recommendations: 12 })
    });
    const data = await response.json();
    if (data && data.success && data.data && Array.isArray(data.data.recommendations)) {
      return data.data.recommendations;
    }
    return [];
  } catch (e) {
    console.warn('ML service not reachable, falling back to local filtering');
    return [];
  }
}

function mapMlToRecipes(recommendations) {
  if (!Array.isArray(recommendations)) return [];
  const results = [];
  recommendations.forEach(rec => {
    // Try match by id first
    let base = recipeData.recipes.find(r => r.id === rec.id);
    // Fallback match by title
    if (!base && rec.title) {
      base = recipeData.recipes.find(r => r.title.toLowerCase() === rec.title.toLowerCase());
    }
    if (base) {
      results.push({
        ...base,
        relevanceScore: rec.similarity_score || 0,
        matchPercentage: rec.match_percentage || 0
      });
    } else {
      // Create minimal card if not found in local dataset
      results.push({
        id: `ml-${rec.id || rec.title}`,
        title: rec.title || 'Recommended Recipe',
        image: 'https://via.placeholder.com/800x500?text=Recipe',
        ingredients: [],
        quantities: [],
        instructions: [],
        cookingTime: rec.cooking_time || 20,
        difficulty: rec.difficulty || 'Easy',
        cuisine: rec.cuisine || 'General',
        servings: 2,
        rating: rec.rating || 4.5,
        tags: (rec.tags ? String(rec.tags).split(/\s+/) : []),
        relevanceScore: rec.similarity_score || 0,
        matchPercentage: rec.match_percentage || 0
      });
    }
  });
  return results;
}

function showLoading() {
  const loadingSection = document.getElementById('loadingSection');
  const resultsSection = document.getElementById('resultsSection');
  const filtersSection = document.getElementById('filtersSection');
  
  if (loadingSection) loadingSection.classList.remove('hidden');
  if (resultsSection) resultsSection.classList.add('hidden');
  if (filtersSection) filtersSection.classList.add('hidden');
}

function hideLoading() {
  const loadingSection = document.getElementById('loadingSection');
  const resultsSection = document.getElementById('resultsSection');
  
  if (loadingSection) loadingSection.classList.add('hidden');
  if (resultsSection) resultsSection.classList.remove('hidden');
}

function displayRecipes(recipes, title) {
  console.log('Displaying recipes:', recipes.length);
  
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsCount = document.getElementById('resultsCount');
  const resultsHeader = document.getElementById('resultsHeader');
  const emptyState = document.getElementById('emptyState');
  const recipeGrid = document.getElementById('recipeGrid');
  
  if (resultsTitle) resultsTitle.textContent = title;
  if (resultsCount) resultsCount.textContent = `${recipes.length} recipe${recipes.length !== 1 ? 's' : ''}`;
  if (resultsHeader) resultsHeader.classList.remove('hidden');
  if (emptyState) emptyState.classList.add('hidden');
  
  if (recipeGrid) {
    recipeGrid.innerHTML = '';
    
    recipes.forEach((recipe, index) => {
      const card = createRecipeCard(recipe);
      card.style.animationDelay = `${index * 0.1}s`;
      recipeGrid.appendChild(card);
    });
  }
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  
  const isFavorited = favorites.includes(recipe.id);
  const matchIndicator = recipe.matchPercentage ? 
    `<div class="ingredient-match">${recipe.matchPercentage}% match</div>` : '';
  
  card.innerHTML = `
    <div class="recipe-image">
      <img src="${formatImageUrl(recipe.image, recipe.title)}" alt="${recipe.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${getRecipePlaceholder(recipe.title)}';" />
      <button class="favorite-badge ${isFavorited ? 'favorited' : ''}" data-recipe-id="${recipe.id}">
        ${isFavorited ? '♥' : '♡'}
      </button>
      ${matchIndicator}
    </div>
    <div class="recipe-content">
      <h3 class="recipe-title">${recipe.title}</h3>
      <div class="recipe-meta">
        <div class="meta-item">
          <span class="meta-icon">⏱️</span>
          <span>${recipe.cookingTime} min</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">👨‍🍳</span>
          <span>${recipe.difficulty}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">⭐</span>
          <span>${recipe.rating}</span>
        </div>
      </div>
      <div class="recipe-tags">
        ${recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click listeners
  card.addEventListener('click', function(e) {
    if (!e.target.closest('.favorite-badge')) {
      openRecipeModal(recipe);
    }
  });
  
  const favoriteBtn = card.querySelector('.favorite-badge');
  if (favoriteBtn) {
    favoriteBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleFavorite(recipe.id);
    });
  }
  
  return card;
}

function toggleFavorite(recipeId) {
  console.log('Toggling favorite for recipe:', recipeId);
  const index = favorites.indexOf(recipeId);
  
  if (index === -1) {
    favorites.push(recipeId);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
  
  // Update UI
  const favoriteBtn = document.querySelector(`[data-recipe-id="${recipeId}"]`);
  if (favoriteBtn) {
    const isFavorited = favorites.includes(recipeId);
    favoriteBtn.classList.toggle('favorited', isFavorited);
    favoriteBtn.textContent = isFavorited ? '♥' : '♡';
  }
  
  // Update modal favorite button if open
  const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
  if (modalFavoriteBtn) {
    const isFavorited = favorites.includes(recipeId);
    modalFavoriteBtn.classList.toggle('favorited', isFavorited);
    const favoriteIcon = modalFavoriteBtn.querySelector('.favorite-icon');
    if (favoriteIcon) {
      favoriteIcon.textContent = isFavorited ? '♥' : '♡';
    }
  }
  
  // If we're in favorites view and recipe was unfavorited, refresh the view
  if (currentView === 'favorites' && !favorites.includes(recipeId)) {
    showFavorites();
  }
}

function openRecipeModal(recipe) {
  console.log('Opening modal for recipe:', recipe.title);
  
  const modal = document.getElementById('recipeModal');
  const isFavorited = favorites.includes(recipe.id);
  
  // Update modal content
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalTime = document.getElementById('modalTime');
  const modalDifficulty = document.getElementById('modalDifficulty');
  const modalServings = document.getElementById('modalServings');
  const modalRating = document.getElementById('modalRating');
  
  if (modalTitle) modalTitle.textContent = recipe.title;
  if (modalImage) {
    modalImage.src = formatImageUrl(recipe.image, recipe.title);
    modalImage.alt = recipe.title;
    modalImage.onerror = function() {
      this.onerror = null;
      this.src = getRecipePlaceholder(recipe.title);
    };
  }
  if (modalTime) modalTime.textContent = `${recipe.cookingTime} minutes`;
  if (modalDifficulty) modalDifficulty.textContent = recipe.difficulty;
  if (modalServings) modalServings.textContent = `${recipe.servings} servings`;
  if (modalRating) modalRating.textContent = recipe.rating;
  
  // Update ingredients list
  const ingredientsList = document.getElementById('modalIngredients');
  if (ingredientsList) {
    ingredientsList.innerHTML = '';
    recipe.quantities.forEach(quantity => {
      const li = document.createElement('li');
      li.textContent = quantity;
      ingredientsList.appendChild(li);
    });
  }
  
  // Update instructions list
  const instructionsList = document.getElementById('modalInstructions');
  if (instructionsList) {
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
      const li = document.createElement('li');
      li.textContent = instruction;
      instructionsList.appendChild(li);
    });
  }
  
  // Update favorite button
  const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
  if (modalFavoriteBtn) {
    modalFavoriteBtn.classList.toggle('favorited', isFavorited);
    const favoriteIcon = modalFavoriteBtn.querySelector('.favorite-icon');
    if (favoriteIcon) {
      favoriteIcon.textContent = isFavorited ? '♥' : '♡';
    }
    modalFavoriteBtn.onclick = function() {
      toggleFavorite(recipe.id);
    };
  }
  
  // Show modal
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const recipeModal = document.getElementById('recipeModal');
  if (recipeModal) {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function applyFilters() {
  console.log('Applying filters');
  
  if (!filteredRecipes.length && currentView === 'all') return;
  
  let recipesToFilter = currentView === 'favorites' ? 
    recipeData.recipes.filter(recipe => favorites.includes(recipe.id)) : 
    filteredRecipes;
  
  const cuisineFilter = document.getElementById('cuisineFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const timeFilter = document.getElementById('timeFilter');
  const sortFilter = document.getElementById('sortFilter');
  
  // Apply filters
  let filtered = recipesToFilter.filter(recipe => {
    const cuisineMatch = !cuisineFilter?.value || recipe.cuisine === cuisineFilter.value;
    const difficultyMatch = !difficultyFilter?.value || recipe.difficulty === difficultyFilter.value;
    const timeMatch = !timeFilter?.value || recipe.cookingTime <= parseInt(timeFilter.value);
    
    return cuisineMatch && difficultyMatch && timeMatch;
  });
  
  // Apply sorting
  const sortBy = sortFilter?.value || 'relevance';
  if (sortBy === 'time') {
    filtered.sort((a, b) => a.cookingTime - b.cookingTime);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'relevance' && currentView === 'all') {
    filtered.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
  }
  
  displayRecipes(filtered, currentView === 'favorites' ? 'Your Favorite Recipes' : 'Found Recipes');
}

function showEmptyState(title = 'No Recipes Found', message = 'Try adding different ingredients or adjusting your filters.') {
  const resultsHeader = document.getElementById('resultsHeader');
  const emptyState = document.getElementById('emptyState');
  const recipeGrid = document.getElementById('recipeGrid');
  
  if (resultsHeader) resultsHeader.classList.add('hidden');
  if (emptyState) {
    emptyState.classList.remove('hidden');
    const h3 = emptyState.querySelector('h3');
    const p = emptyState.querySelector('p');
    if (h3) h3.textContent = title;
    if (p) p.textContent = message;
  }
  if (recipeGrid) recipeGrid.innerHTML = '';
}

function resetFiltersAndResults() {
  console.log('Resetting filters and results');
  
  // Reset filters
  const cuisineFilter = document.getElementById('cuisineFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const timeFilter = document.getElementById('timeFilter');
  const sortFilter = document.getElementById('sortFilter');
  
  if (cuisineFilter) cuisineFilter.value = '';
  if (difficultyFilter) difficultyFilter.value = '';
  if (timeFilter) timeFilter.value = '';
  if (sortFilter) sortFilter.value = 'relevance';
  
  // Hide results
  const resultsHeader = document.getElementById('resultsHeader');
  const filtersSection = document.getElementById('filtersSection');
  const emptyState = document.getElementById('emptyState');
  const recipeGrid = document.getElementById('recipeGrid');
  
  if (resultsHeader) resultsHeader.classList.add('hidden');
  if (filtersSection) filtersSection.classList.add('hidden');
  if (emptyState) emptyState.classList.add('hidden');
  if (recipeGrid) recipeGrid.innerHTML = '';
}
