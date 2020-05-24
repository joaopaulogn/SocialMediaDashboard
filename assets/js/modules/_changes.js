// This imports the constants and functions for the changes in hover e theme states happens
import { html, cards } from './_constants.js';

// Function to change themes to dark or light
export function changeTheme(colors) {
    Object.keys(colors).
        map(key => {
            html.style.setProperty(key, colors[key]);
        });
};

// Function to change card hover depending on the theme
export function changeHover(change) {
    const classHover = 'card-dark';

    cards.forEach(card => {
        if (change == 'dark') {
            card.classList.add(classHover);
        } else if (change == 'light') {
            card.classList.remove(classHover);
        }
    });
};