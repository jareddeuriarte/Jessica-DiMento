document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 3) {
      currentIndex++;
      updateCarousel();
    } else {
      currentIndex = 0;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else {
      currentIndex = carousel.children.length - 3;
      updateCarousel();
    }
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (100 / carousel.children.length)}%)`;
  }
});



const carouselImages = document.querySelectorAll(".carousel-slide img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

carouselImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightbox.style.display = "block";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");

  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 4) {
      currentIndex++;
      updateCarousel();
    } else {
      currentIndex = 0;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else {
      currentIndex = carousel.children.length - 4;
      updateCarousel();
    }
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (100 / carousel.children.length)}%)`;
  }



  
  const carouselImages = document.querySelectorAll(".carousel-slide img");

  carouselImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightbox.style.display = "block";
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
