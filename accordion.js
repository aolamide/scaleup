const accordionButtons = document.querySelectorAll('.accordion-button');

// Loop through each accordion button
accordionButtons.forEach(button => {
    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Toggle the 'accordion-collapse' class on the next element sibling
        button.parentElement.nextElementSibling.classList.toggle('accordion-collapse');

        // Rotate the arrow icon
        button.querySelector('svg').classList.toggle('rotate-180');
    });
});