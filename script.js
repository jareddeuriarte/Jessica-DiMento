const imageLinks = {
    set1: [
        'assets/travel/JDiMento_SpainFilm-19.jpeg',
        'assets/travel/JDiMento_SpainFilm2023-12.jpeg',
        'assets/travel/JDiMento_SpainFilm2023-65.jpeg',

        'assets/travel/JDiMento_SpainFilm2023-98.jpeg',

        'assets/travel/JDiMento_SpainFilm2023-117.jpeg',
        'assets/travel/JDiMento_SpainFilm2023-182.jpeg',


  
    ],
    set2: [
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
        'https://placehold.co/600x400',
    ],
    // Add more sets as needed
};


const imageContainer = document.getElementById('imageContainer');

// Function to generate images based on the selected link set
function generateImages(linkSet) {
    const images = imageLinks[linkSet];

    if (images) {
        // Clear existing images
        imageContainer.innerHTML = '';

        // Create and append image elements
        images.forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            imageContainer.appendChild(img);
        });
    } else {
        console.error('Link set not found.');
    }
}

// Event listeners for anchor tags
document.getElementById('linkSet1').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    generateImages('set1');
});

document.getElementById('linkSet2').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    generateImages('set2');
});

// Initial generation of images (optional)
generateImages('set1');
