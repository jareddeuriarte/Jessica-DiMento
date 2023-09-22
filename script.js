// Get all accordion toggles and content
const toggles = document.querySelectorAll('.accordion-toggle');
const contents = document.querySelectorAll('.accordion-content');

// Add click event listeners to each toggle button
toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        // Toggle the active class to show/hide the content
        contents[index].classList.toggle('active');
    });
});



// SLIDESHOW
const slideshowContainer = document.querySelector('.slideshow-container');

// Function to change the background image
function changeBackground() {
    slideshowContainer.style.backgroundImage = 'url("new-image.jpg")'; // Replace with your image URL
}

// Call the function to change the background every 5 seconds (adjust as needed)
setInterval(changeBackground, 5000);

