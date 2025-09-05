// Authentication utility functions
class AuthService {
    constructor() {
        this.baseURL = '/api';
        this.token = localStorage.getItem('authToken');
    }

    async register(userData) {
        try {
            const response = await fetch(`${this.baseURL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                this.token = data.token;
                return { success: true, data };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            return { success: false, error: 'Network error' };
        }
    }

    async login(email, password) {
        try {
            const response = await fetch(`${this.baseURL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                this.token = data.token;
                return { success: true, data };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            return { success: false, error: 'Network error' };
        }
    }

    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        this.token = null;
        window.location.href = '/login.html';
    }

    isAuthenticated() {
        return !!this.token;
    }

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    getAuthHeaders() {
        return {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json',
        };
    }

    async fetchRecipes(filters = {}) {
        try {
            const params = new URLSearchParams(filters);
            const response = await fetch(`${this.baseURL}/recipes?${params}`);
            const data = await response.json();
            return { success: true, data };
        } catch (error) {
            return { success: false, error: 'Failed to fetch recipes' };
        }
    }

    async addToFavorites(recipeId) {
        try {
            const response = await fetch(`${this.baseURL}/favorites/${recipeId}`, {
                method: 'POST',
                headers: this.getAuthHeaders(),
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: 'Failed to add to favorites' };
        }
    }

    async removeFromFavorites(recipeId) {
        try {
            const response = await fetch(`${this.baseURL}/favorites/${recipeId}`, {
                method: 'DELETE',
                headers: this.getAuthHeaders(),
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: 'Failed to remove from favorites' };
        }
    }

    async getFavorites() {
        try {
            const response = await fetch(`${this.baseURL}/favorites`, {
                headers: this.getAuthHeaders(),
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: 'Failed to fetch favorites' };
        }
    }
}

// Initialize auth service
const authService = new AuthService();
