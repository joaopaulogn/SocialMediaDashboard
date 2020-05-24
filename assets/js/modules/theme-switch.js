// This imports the constants and functions to theme change to work
import { changeTheme, changeHover } from './_changes.js';
import { darkColors, lightColors, label, theme } from './_constants.js';
import { handleLeave } from './theme-preview.js';
import { setValueTheme } from './_local-storage.js';

// Function to get computed HTML styles
export function getStyles(element, style) {
    return window.getComputedStyle(element).getPropertyValue(style);
};

export default function initThemeSwitch() {

    // Elements for DOM manipulation
    const checkbox = document.querySelector('[data-theme="checkbox"]');

    // Function activated by the event
    function handleChange(e) {

        function conditionTheme(colors, hover, classList) {
            changeTheme(colors);
            changeHover(hover);

            classList == 'add'
                ? label.classList.add(theme.dark)
                : label.classList.remove(theme.dark);
        }

        if (e.target.checked) {
            conditionTheme(darkColors, theme.dark, 'add');
            label.removeEventListener('mouseleave', handleLeave);
            setValueTheme(darkColors);
        } else {
            conditionTheme(lightColors, theme.light);
            setValueTheme(lightColors);
        }
    };

    // Event listener to watch every change in the checkbox
    checkbox.addEventListener('change', handleChange);
}