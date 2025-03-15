// script.js

document.addEventListener('DOMContentLoaded', function() {
    const timelineCards = document.querySelectorAll('.timeline-card');

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && // Adjust threshold as needed (85% viewport height from top)
            rect.bottom >= 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        timelineCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.classList.add('in-view');
            }
        });
    }

    // Initial check on page load
    handleScrollAnimation();

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);
});
