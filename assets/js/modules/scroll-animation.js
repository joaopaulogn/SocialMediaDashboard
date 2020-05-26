// Import all the cards of the page
import { cards } from "./_constants.js";

export default function initScrollAnimation() {

    // 87% percent of the page height
    const windowHeight = window.innerHeight * 0.9;
    const classActive = 'active';

    if (window.innerWidth <= 700) {

         // Function activated by the event
        function handleScroll() {
            cards.forEach(card => {
                // Top of each card
                const topElement = card.getBoundingClientRect().top;
                // Condition to show the card
                const conditionToVisible = (topElement - windowHeight) < 0;

                if (conditionToVisible) {
                    card.classList.add(classActive);
                } else {
                    card.classList.remove(classActive);
                }
            })
        }

        handleScroll();

        // Event listener which check if has scroll on the page
        window.addEventListener('scroll', handleScroll);
    }
};