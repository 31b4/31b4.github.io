document.addEventListener('DOMContentLoaded', function() {
    // Calculate and update age automatically
    function calculateAge() {
        const birthDate = new Date(2005, 0, 4); // January 4, 2005 (month is 0-indexed)
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // If birthday hasn't occurred this year yet, subtract 1
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
    
    // Update age in the page
    const ageDisplay = document.getElementById('age-display');
    const metaDescription = document.getElementById('meta-description');
    
    if (ageDisplay) {
        const currentAge = calculateAge();
        ageDisplay.textContent = currentAge;
        
        // Update meta description with current age
        if (metaDescription) {
            metaDescription.setAttribute('content', 
                `Portfolio of Bence Szilagyi, a ${currentAge}-year-old developer from Hungary showcasing projects and achievements.`
            );
        }
    }

    // Luxury loading overlay functionality
    const loadingOverlay = document.getElementById('loading-overlay');
    const contentContainer = document.querySelector('.milky-way');
    
    // Start time to ensure minimum loading duration
    const startTime = Date.now();
    const minLoadTime = 2500; // 2.5 seconds for dramatic effect
    
    // Function to hide loading overlay with minimum duration
    function hideLoadingOverlay() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
            // First stage: Hide the content (letters and progress bar)
            if (loadingOverlay) {
                loadingOverlay.classList.add('content-hidden');
            }
            
            // Second stage: Hide the background after a short delay
            setTimeout(() => {
                if (loadingOverlay) {
                    loadingOverlay.classList.add('hidden');
                }
                
                            if (contentContainer) {
                contentContainer.classList.add('loaded');
            }
                
                            // Trigger entrance animations
            triggerEntranceAnimations();
            
            // Re-initialize button functionality after loading screen disappears
            setTimeout(() => {
                console.log('🔄 Re-initializing buttons after loading screen');
                initSmoothScrolling();
            }, 500);
            
            // Remove overlay from DOM after transition completes
            setTimeout(() => {
                if (loadingOverlay && loadingOverlay.parentNode) {
                    loadingOverlay.parentNode.removeChild(loadingOverlay);
                }
            }, 1200);
            }, 0); // 300ms delay between content and background fade
        }, remainingTime);
    }
    
    // Enhanced entrance animations
    function triggerEntranceAnimations() {
        // Animate content elements with staggered timing
        const animatedElements = document.querySelectorAll('.navbar, #whoami, .content');
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, index * 200);
        });
    }
    
    // Content is initially hidden by CSS
    
    // Hide loading overlay when everything is loaded
    if (document.readyState === 'complete') {
        hideLoadingOverlay();
    } else {
        window.addEventListener('load', hideLoadingOverlay);
    }
    
    // Fallback to ensure loading screen doesn't stay forever
    setTimeout(() => {
        hideLoadingOverlay();
    }, 6000); // 6 second maximum

    const glowbox = document.getElementById("glowbox");
    const background = document.querySelector(".background");
    // After a short delay (adjust as needed), add the final shadow class
    setTimeout(function() {
        if (glowbox) {
            glowbox.classList.remove("initial-shadow");
            glowbox.classList.add("final-shadow");
        }
        if (background) {
            background.classList.add("show-background");
        }
    }, 0); // Adjust the delay in milliseconds
    
    // Initialize smooth scrolling for CTA buttons
    initSmoothScrolling();
    
    // Debug: Check if buttons and targets exist
    console.log('🔍 Debugging CTA buttons:');
    console.log('Projects button:', document.querySelector('a[href="#projects"]'));
    console.log('Contact button:', document.querySelector('a[href="#contact"]'));
    console.log('Projects section:', document.getElementById('projects'));
    console.log('Contact section:', document.getElementById('contact'));
    
    // Direct button event listeners as fallback
    const projectsButton = document.querySelector('a[href="#projects"]');
    const contactButton = document.querySelector('a[href="#contact"]');
    
    if (projectsButton) {
        projectsButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🎯 Projects button clicked!');
            const target = document.getElementById('projects');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                console.log('✅ Scrolling to projects section');
            } else {
                console.error('❌ Projects section not found');
            }
        });
    }
    
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🎯 Contact button clicked!');
            const target = document.getElementById('contact');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                console.log('✅ Scrolling to contact section');
            } else {
                console.error('❌ Contact section not found');
            }
        });
    }
});

addEventListener("contextmenu", function(e) {
    e.preventDefault();
}); 



// Smooth scrolling for anchor links - moved inside DOMContentLoaded to ensure DOM is ready
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Check if target element exists
            if (!targetElement) {
                console.warn(`Target element ${targetId} not found`);
                return;
            }

            // Calculate positions
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1 second scroll duration
            let startTime = null;

            // Custom animation function
            function smoothScrollAnimation(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;

                // Custom easing function for smoother stop
                const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

                // Calculate scroll position
                const run = easeOutCubic(timeElapsed / duration) * distance + startPosition;
                window.scrollTo(0, run);

                if (timeElapsed < duration) {
                    requestAnimationFrame(smoothScrollAnimation);
                }
            }

            // Start animation
            requestAnimationFrame(smoothScrollAnimation);
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';

    // Disable context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable copy
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showCopyMessage();
    });

    // Disable cut
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        showCopyMessage();
    });

    // Disable paste
    document.addEventListener('paste', function(e) {
        e.preventDefault();
    });

    function showCopyMessage() {
        const message = document.createElement('div');
        message.textContent = 'Copying is disabled';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.padding = '10px 20px';
        message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        message.style.color = 'white';
        message.style.borderRadius = '5px';
        message.style.zIndex = '9999';

        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);
    }
});

/*
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('a[href="#contact"]');
    contactButton.addEventListener('click', function(e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
*/
