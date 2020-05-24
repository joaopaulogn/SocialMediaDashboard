// Function to set the values of the local storage according with the theme
export function setValueTheme(colors) {
    Object.keys(colors).
        map(key => {
            localStorage.setItem(key, colors[key]);
        });
};
