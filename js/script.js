// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('mobile-menu-open');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
    });

    // Close menu when clicking outside
    mobileMenuOverlay.addEventListener('click', function() {
        menuButton.classList.remove('mobile-menu-open');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuButton.classList.remove('mobile-menu-open');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
        });
    });

    // Navigation - change background color on scroll
    const header = document.getElementById('header-container');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 70; // Account for fixed header
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});