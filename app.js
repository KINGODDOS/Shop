document.addEventListener('DOMContentLoaded', () => {

    const pages = document.querySelectorAll('.page');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Function to handle routing
    const router = () => {
        // 1. Get the current hash from the URL, or default to #login
        const route = window.location.hash || '#login';

        // 2. Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });

        // 3. Show the page that matches the hash
        const activePage = document.querySelector(route + '-page');
        if (activePage) {
            activePage.classList.remove('hidden');
        } else {
            // If route is invalid, show login page as a fallback
            document.getElementById('login-page').classList.remove('hidden');
        }
    };

    // --- Event Listeners ---

    // Listen for hash changes (when a link is clicked)
    window.addEventListener('hashchange', router);

    // Listen for initial page load
    window.addEventListener('load', router);
    
    // Fake login functionality
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        console.log('Login attempt successful!');
        // On successful login, navigate to the main page
        window.location.hash = '#main';
    });
    
    // Fake signup functionality
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Signup attempt successful!');
        // After signup, you can redirect to login or main page
        window.location.hash = '#login';
    });

    // Logout functionality
    logoutBtn.addEventListener('click', () => {
        console.log('User logged out.');
        // Navigate back to the login page
        window.location.hash = '#login';
    });

});
