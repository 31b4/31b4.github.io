document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Main.js loaded successfully!');
    
    // Luxury loading overlay functionality
    const loadingOverlay = document.getElementById('loading-overlay');
    const contentContainer = document.querySelector('.milky-way');
    
    console.log('Loading overlay found:', !!loadingOverlay);
    console.log('Content container found:', !!contentContainer);
    
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
                    contentContainer.style.opacity = '1';
                    contentContainer.style.transform = 'translateY(0)';
                }
                
                // Trigger entrance animations
                triggerEntranceAnimations();
                
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
    
    // Initialize content as hidden initially
    if (contentContainer) {
        contentContainer.style.opacity = '0';
        contentContainer.style.transform = 'translateY(20px)';
        contentContainer.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
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
});

addEventListener("contextmenu", function(e) {
    e.preventDefault();
}); 



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Target element
        const targetElement = document.querySelector(this.getAttribute('href'));

        // Initial setup
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Change this to adjust speed
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

            if (timeElapsed < duration) requestAnimationFrame(smoothScrollAnimation);
        }

        // Start animation
        requestAnimationFrame(smoothScrollAnimation);
    });
});


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
