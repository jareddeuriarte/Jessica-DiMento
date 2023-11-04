document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slidesToShow = 3; // Change this to 4 to display 4 images at a time
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - slidesToShow) {
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
      currentIndex = slides.length - slidesToShow;
      updateCarousel();
    }
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;
  }
});
