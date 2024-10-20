/*const carousel = document.getElementById("carousel");
const items = carousel.children;
const totalItems = items.length;
let currentIndex = 0;

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  updateCarousel();
}

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

  // Move the first item to the end or the last item to the beginning
  if (currentIndex === totalItems - 1) {
    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.appendChild(carousel.firstElementChild);
      currentIndex = totalItems - 2;
      carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease";
      }, 50);
    }, 500);
  } else if (currentIndex === 0) {
    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.prepend(carousel.lastElementChild);
      currentIndex = 1;
      carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
      setTimeout(() => {
        carousel.style.transition = "transform 0.5s ease";
      }, 50);
    }, 500);
  }
}

document
  .getElementById("prevBtn")
  .addEventListener("click", () => moveCarousel(-1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => moveCarousel(1));

// Optional: Auto-play
setInterval(() => moveCarousel(1), 3000);
*/