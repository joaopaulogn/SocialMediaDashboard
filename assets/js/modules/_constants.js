// This import a function to get styles of HTML element
import { getStyles } from './theme-switch.js';

// The DOM elements
export const html = document.documentElement;
export const cards = document.querySelectorAll('[data-card]');
export const label = document.querySelector('[data-theme="switch"]');

// Object which stores the initial colors (light)
export const lightColors = {
    '--bg': getStyles(html, '--bg'),
    '--header': getStyles(html, '--header'),
    '--card': getStyles(html, '--card'),
    '--text': getStyles(html, '--text'),
    '--main-text': getStyles(html, '--main-text'),
};

// Object which stores the dark colors
export const darkColors = {
    '--bg': 'hsl(230, 17%, 14%)',
    '--header': 'hsl(232, 19%, 15%)',
    '--card': 'hsl(228, 28%, 20%)',
    '--text': 'hsl(228, 34%, 66%)',
    '--main-text': 'hsl(0, 0%, 100%)',
};

export const theme = {
    dark: 'dark',
    light: 'light',
}