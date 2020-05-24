export default function initColorText() {

    // Element for DOM manipulation
    const svgs = document.querySelectorAll('svg');

    if (svgs) {

        // Function activated by the event
        function handleSvg() {

            // Loop through SVGs
            svgs.forEach((svg) => {
                const _this = svg;
                const _fill = _this.firstElementChild.getAttribute('fill'); // Getting the SVG fill value
                const _span = _this.nextElementSibling; // Selecting the text beside
                const increase = '#1EB589'; // Color if percentage increase
                const decrease = '#DC414C'; // Color if percentage decrease

                // Fill condition
                if (_fill == increase) {
                    _span.style.color = increase;
                } else if (_fill == decrease) {
                    _span.style.color = decrease;
                }
            });
        }

        // Event which activates the function when loading the page
        window.onload = handleSvg;
    }
}