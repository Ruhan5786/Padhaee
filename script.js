// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Course navigation and highlighting
function navigateToCourse(courseId) {
    // First show the courses page
    showPage('home');
    
    // Wait a bit for page transition then scroll to course
    setTimeout(() => {
        const courseElement = document.getElementById(courseId);
        if (courseElement) {
            // Scroll to the course card
            courseElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Add highlight effect
            courseElement.classList.add('course-highlight');
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                courseElement.classList.remove('course-highlight');
            }, 3000);
        }
    }, 100);
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Basic validation
            if (email && password) {
                alert('Login successful! Welcome back to PADHAEE.');
                showPage('home');
                loginForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
            
            if (!terms) {
                alert('Please agree to the Terms of Service and Privacy Policy.');
                return;
            }
            
            alert('Account created successfully! Welcome to PADHAEE.');
            showPage('home');
            signupForm.reset();
        });
    }

    // Course category links
    document.querySelectorAll('.footer-col ul li a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = this.getAttribute('href').substring(1); // Remove the # symbol
            navigateToCourse(courseId);
        });
    });

    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Social login feature would be implemented here.');
        });
    });

    // Forgot password link
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Password reset feature would be implemented here.');
        });
    }

    // Newsletter subscription with Formspree
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            const emailInput = document.getElementById('newsletter-email');
            const email = emailInput.value;
            
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    return;
                }
                // If email is valid, Formspree will handle the submission
                alert('Thank you for subscribing to our newsletter!');
            } else {
                e.preventDefault();
                alert('Please enter your email address.');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Don't prevent default for course category links (handled above)
        if (!this.closest('.footer-col')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});