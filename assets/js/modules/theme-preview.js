// This imports the constants and functions to theme preview to work
import { darkColors, label, lightColors, theme } from './_constants.js';
import { changeTheme } from './_changes.js';

// Function activated by the event mouseleave
export function handleLeave() {
    !this.classList.contains(theme.dark)
        ? changeTheme(lightColors)
        : changeTheme(darkColors);
}

export default function initThemePreview() {
    // Function activated by the event mouseover
    function handleOver() {

        !this.classList.contains(theme.dark)
            ? changeTheme(darkColors)
            : changeTheme(lightColors);

        // Event listener to watch if the mouse is out
        this.addEventListener('mouseleave', handleLeave);

    }

    // Event listener to watch if the mouse over the element
    label.addEventListener('mouseover', handleOver);
}