// Import all the cards of the page
import { cards, active } from "./_constants.js";

export default function initScrollAnimation() {

    // 87% percent of the page height
    const windowHeight = window.innerHeight * 0.9;

    if (window.innerWidth <= 700) {

        // Function which watchs any change on the card penultimate
        function mutationElement() {
            function handleMutation(mutation) {
                const element = mutation[0].target;
                if (element.classList.contains(active)) {
                    element.nextElementSibling.classList.add(active);
                }
            };

            // Element to be observed
            const observerTarget = cards[cards.length - 2];
            const observer = new MutationObserver(handleMutation);

            // Element properties to be watch
            observer.observe(observerTarget, { attributes: true });
        };
        mutationElement();

        // Function activated by the event
        function handleScroll() {
            cards.forEach(card => {
                // Top of each card
                const topElement = card.getBoundingClientRect().top;
                // Condition to show the card
                const conditionToVisible = (topElement - windowHeight) < 0;

                if (conditionToVisible) {
                    card.classList.add(active);
                } else if (card.classList.contains(active)) {
                    card.classList.remove(active);
                }
            })
        };
        handleScroll();

        // Event listener which check if has scroll on the page
        window.addEventListener('scroll', handleScroll);
    }
};