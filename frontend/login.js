// DOM Elements
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const switchToLoginText = document.getElementById('switchToLoginText');
const message = document.getElementById('message');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if already logged in
    if (authService.isAuthenticated()) {
        window.location.href = '/index.html';
        return;
    }
    
    setupEventListeners();
});

function setupEventListeners() {
    // Tab switching
    loginTab.addEventListener('click', () => switchTab('login'));
    registerTab.addEventListener('click', () => switchTab('register'));
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('register');
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('login');
    });
    
    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    
    // Password confirmation validation
    const confirmPassword = document.getElementById('confirmPassword');
    const registerPassword = document.getElementById('registerPassword');
    
    confirmPassword.addEventListener('input', () => {
        if (confirmPassword.value !== registerPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });
}

function switchTab(tab) {
    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        document.querySelector('.auth-footer p:first-child').classList.remove('hidden');
        switchToLoginText.classList.add('hidden');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        document.querySelector('.auth-footer p:first-child').classList.add('hidden');
        switchToLoginText.classList.remove('hidden');
    }
    hideMessage();
}

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginBtn = document.getElementById('loginBtn');
    
    // Show loading state
    loginBtn.classList.add('loading');
    loginBtn.disabled = true;
    hideMessage();
    
    try {
        const result = await authService.login(email, password);
        
        if (result.success) {
            showMessage('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1500);
        } else {
            showMessage(result.error, 'error');
        }
    } catch (error) {
        showMessage('An unexpected error occurred', 'error');
    } finally {
        loginBtn.classList.remove('loading');
        loginBtn.disabled = false;
    }
}

async function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerBtn = document.getElementById('registerBtn');
    
    // Validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Show loading state
    registerBtn.classList.add('loading');
    registerBtn.disabled = true;
    hideMessage();
    
    try {
        const result = await authService.register({
            username,
            email,
            password
        });
        
        if (result.success) {
            showMessage('Account created successfully! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1500);
        } else {
            showMessage(result.error, 'error');
        }
    } catch (error) {
        showMessage('An unexpected error occurred', 'error');
    } finally {
        registerBtn.classList.remove('loading');
        registerBtn.disabled = false;
    }
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
}

function hideMessage() {
    message.style.display = 'none';
    message.className = 'message';
}

// Enter key handling
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeForm = document.querySelector('.auth-form:not(.hidden)');
        if (activeForm) {
            activeForm.dispatchEvent(new Event('submit'));
        }
    }
});
