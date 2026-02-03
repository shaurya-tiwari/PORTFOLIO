document.addEventListener('DOMContentLoaded', () => {
    /**
     * Text Highlighter Scroll Reveal Logic
     * Uses IntersectionObserver for high-performance scroll detection.
     */

    const highlightElements = document.querySelectorAll('.highlight');

    const observerOptions = {
        // Trigger when 20% of the element is visible
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px' // Offset triggers slightly above bottom
    };

    const highlightObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay for multiple highlights in view
                // This creates a more natural "reading" sequence
                const delay = 300; // ms

                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * delay);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    highlightElements.forEach(el => {
        highlightObserver.observe(el);
    });
});
