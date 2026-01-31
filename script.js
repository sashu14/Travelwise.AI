document.addEventListener('DOMContentLoaded', () => {
    const planTripBtn = document.getElementById('plan-trip-btn');

    if (planTripBtn) {
        planTripBtn.addEventListener('click', () => {
            // Redirect to the Opal app link
            window.location.href = 'https://opal.google/app/1jMT78L1BeeU6Mg2yt9uDsOYK3dvcNxPb?shared';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'rgba(0, 30, 60, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.background = 'rgba(0, 51, 102, 0.7)';
        }
    });
});
