/**
 * Portfolio Website - Main JavaScript
 * Author: OualiCode
 * Version: 1.0.0
 */

'use strict';

// ========================================
// DOM ELEMENTS
// ========================================
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const resumeBtn = document.getElementById('resume-btn');
const downloadCvBtn = document.getElementById('download-cv-btn');
const learnMoreBtn = document.getElementById('learn-more-btn');
const getInTouchBtn = document.getElementById('get-in-touch-btn');

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
    // Ganti dengan URL PDF CV Anda yang sebenarnya
    CV_URL: 'CV. Dzaki Al Faridzi.pdf',
    // Ganti dengan email Anda
    EMAIL: 'jakieee277@gmail.com',
    // Ganti dengan Intagram URL
    INSTAGRAM_URL: 'https://www.instagram.com/dzakiialfa16_?igsh=Zzk2MHUyaDhsdmF3',
    WHATSAPP_URL: 'https://wa.me/6285934742376'
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const utils = {
    /**
     * Debounce function to limit function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Smooth scroll to element
     * @param {HTMLElement} element - Target element
     */
    smoothScroll: (element) => {
        if (!element) return;
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },

    /**
     * Open PDF in new tab
     * @param {string} url - PDF URL
     */
    openPdf: (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
    },

    /**
     * Send email
     * @param {string} email - Email address
     */
    sendEmail: (email) => {
        window.location.href = `mailto:${email}`;
    }
};

// ========================================
// NAVIGATION & HEADER
// ========================================
const navigation = {
    /**
     * Initialize navigation functionality
     */
    init: () => {
        navigation.toggleMobileMenu();
        navigation.handleActiveLink();
        navigation.handleHeaderScroll();
    },

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu: () => {
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && 
                !navLinks.contains(e.target) && 
                navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    },

    /**
     * Handle active link based on scroll position
     */
    handleActiveLink: () => {
        if (!sections.length || !navLinkItems.length) return;

        const scrollHandler = utils.debounce(() => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinkItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('load', scrollHandler);
    },

    /**
     * Handle header style on scroll
     */
    handleHeaderScroll: () => {
        if (!header) return;

        const scrollHandler = utils.debounce(() => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 10);

        window.addEventListener('scroll', scrollHandler);
        // Trigger once on load
        scrollHandler();
    }
};

// ========================================
// PDF & RESUME HANDLERS
// ========================================
const documentHandlers = {
    /**
     * Initialize document handlers
     */
    init: () => {
        documentHandlers.handleResumeButtons();
    },

    /**
     * Handle resume and CV buttons
     */
    handleResumeButtons: () => {
        // Resume button in navigation
        if (resumeBtn) {
            resumeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                utils.openPdf(CONFIG.CV_URL);
            });
        }

        // Download CV button in hero section
        if (downloadCvBtn) {
            downloadCvBtn.addEventListener('click', (e) => {
                e.preventDefault();
                utils.openPdf(CONFIG.CV_URL);
            });
        }
    }
};

// ========================================
// BUTTON HANDLERS
// ========================================
const buttonHandlers = {
    /**
     * Initialize button handlers
     */
    init: () => {
        buttonHandlers.handleLearnMore();
        buttonHandlers.handleGetInTouch();
        buttonHandlers.handleSocialLinks();
    },

    /**
     * Handle Learn More button
     */
    handleLearnMore: () => {
        if (!learnMoreBtn) return;
        
        learnMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            const skillsSection = document.querySelector('#skills');
            
            if (aboutSection && skillsSection) {
                // Scroll to skills section
                utils.smoothScroll(skillsSection);
            }
        });
    },

    /**
     * Handle Get In Touch button
     */
    handleGetInTouch: () => {
        if (!getInTouchBtn) return;

        getInTouchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            utils.sendEmail(CONFIG.EMAIL);
        });
    },

    /**
     * Handle social links
     */
    handleSocialLinks: () => {
        // WhatsApp link
        const WALink = document.querySelector('.social-link .fa-whatsapp')?.parentElement;
        if (WALink) {
            WALink.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(CONFIG.WHATSAPP_URL, '_blank', 'noopener noreferrer');
            });
        }

        // INSTAGRAM_URL
        const ig_link = document.querySelector('.social-link .fa-instagram')?.parentElement;
        if (ig_link) {
            ig_link.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(CONFIG.INSTAGRAM_URL, '_blank', 'noopener noreferrer');
            });
        }

        // Email link
        const emailLink = document.querySelector('.social-link .fa-envelope')?.parentElement;
        if (emailLink) {
            emailLink.addEventListener('click', (e) => {
                e.preventDefault();
                utils.sendEmail(CONFIG.EMAIL);
            });
        }
    }
};

// ========================================
// ANIMATIONS & INTERACTIONS
// ========================================
const animations = {
    /**
     * Initialize animations
     */
    init: () => {
        animations.observeElements();
    },

    /**
     * Intersection Observer for fade-in animations
     */
    observeElements: () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.project-card, .exp-item, .skill-tag, .stat-item'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
};

// ========================================
// INITIALIZATION
// ========================================
const init = () => {
    console.log('Portfolio website initialized');
    
    // Initialize all modules
    navigation.init();
    documentHandlers.init();
    buttonHandlers.init();
    animations.init();

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-content p:first-child');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${currentYear} Dzaki Al Faridzi. All rights reserved.`;
    }
};

// Start everything when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

// ========================================
// EXPORT FOR MODULE USE (if needed)
// ========================================
// export { init, utils, navigation, documentHandlers, buttonHandlers, animations };