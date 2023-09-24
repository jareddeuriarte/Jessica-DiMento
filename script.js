// const imageLinks = {
//     set1: [
//         'assets/travel/JDiMento_SpainFilm-19.jpeg',
//         'assets/travel/JDiMento_SpainFilm2023-12.jpeg',
//         'assets/travel/JDiMento_SpainFilm2023-65.jpeg',

//         'assets/travel/JDiMento_SpainFilm2023-98.jpeg',

//         'assets/travel/JDiMento_SpainFilm2023-117.jpeg',
//         'assets/travel/JDiMento_SpainFilm2023-182.jpeg',



//     ],
//     set2: [
//         'https://placehold.co/600x400',
//         'https://placehold.co/600x400',
//         'https://placehold.co/600x400',
//     ],
//     // Add more sets as needed
// };

// WORKING 

// const imageContainer = document.getElementById('imageContainer');

// Function to generate images based on the selected link set
// function generateImages(linkSet) {
//     const images = imageLinks[linkSet];

//     if (images) {
//         // Clear existing images
//         imageContainer.innerHTML = '';

//         // Create and append image elements
//         images.forEach((src) => {
//             const img = document.createElement('img');
//             img.src = src;
//             imageContainer.appendChild(img);
//         });
//     } else {
//         console.error('Link set not found.');
//     }
// }

// // Event listeners for anchor tags
// document.getElementById('linkSet1').addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent the default link behavior
//     generateImages('set1');
// });

// document.getElementById('linkSet2').addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent the default link behavior
//     generateImages('set2');
// });

// // Initial generation of images (optional)
// generateImages('set1');


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
        'assets/portraits/JDiMento_A.WREN_OurVinyl-49.jpeg',
        'assets/portraits/JessicaDiMento_DH-8.jpeg',
        'assets/portraits/JessicaDiMento_Oct film-19.jpeg',
        'assets/portraits/JessicaDiMentoFilm-9.jpeg',

    ],


    set3: [
       
      
        'assets/still/Image_09.jpeg',
        'assets/still/WallLight-20.jpeg',
        'assets/still/ZeiselDivider_Black-7.jpeg',
        'assets/still/ZeiselDivider_Black.jpeg',
        'assets/still/ZeiselDivider_white.jpeg',
        'assets/still/test.jpeg',
        'assets/still/CWG1.jpeg',
        'assets/still/CWG2.jpeg',


    ],



    overview: [  // Add an "overview" set of images
        'assets/overview/flowers.jpeg',
        'assets/overview/JessicaDiMento_OurVinyl_OS-61.jpeg',
        'assets/overview/Production_.jpeg',
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

document.getElementById('linkSet3').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    generateImages('set3');
});







// Function to generate "overview" images on page load (default view)
function generateDefaultView() {
    generateImages('overview');
}

// Call the generateDefaultView function on page load
window.addEventListener('load', generateDefaultView);

// Event listener for the "Overview" link
document.getElementById('overviewLink').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    generateImages('overview');
});




