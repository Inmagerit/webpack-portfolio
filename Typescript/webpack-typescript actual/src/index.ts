import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
alert('hello')

document.addEventListener('DOMContentLoaded', () => {
    const colorSelector = document.getElementById('colorSelector') as HTMLInputElement;

    // Event listener for the color input change
    colorSelector.addEventListener('input', (event) => {
        const selectedColor = (event.target as HTMLInputElement).value;

        // Change background color of the page
        document.body.style.backgroundColor = selectedColor;
    });
});