// Run script after page loads
document.addEventListener("DOMContentLoaded", function () {

    // Page navigation
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        document.getElementById(pageId + '-page').classList.add('active');

        window.scrollTo(0, 0);
    }

    // Course navigation and highlighting
    function navigateToCourse(courseId) {
        showPage('home');

        setTimeout(() => {
            const courseElement = document.getElementById(courseId);

            if (courseElement) {
                courseElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                courseElement.classList.add('course-highlight');

                setTimeout(() => {
                    courseElement.classList.remove('course-highlight');
                }, 3000);
            }
        }, 100);
    }

    // Course category links
    document.querySelectorAll('.footer-col ul li a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const courseId = this.getAttribute('href').substring(1);
            navigateToCourse(courseId);
        });
    });

    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(button => {
        button.addEventListener('click', function () {
            alert('Social login feature would be implemented here.');
        });
    });

    // Newsletter subscription with Formspree
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {

            const emailInput = document.getElementById('newsletter-email');
            const email = emailInput.value;

            if (email) {

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    return;
                }

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