const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburgermenu");
const hamburgerIcon = document.getElementById("hamburgericon");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("visible");

  // Para que el icono no cambie antes de que el navbar sea visible
  // Check that the icon doesn't change before the navbar goes
  setTimeout(() => {
    hamburgerIcon.classList.toggle("visible");
    hamburgerIcon.classList.toggle("fa-times");
  }, 200);
});

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let sliderIndex = 1;

leftButton.addEventListener("click", () => {
  if (sliderIndex === 1) {
    sliderIndex = 3;
    changeSlider();
  } else {
    sliderIndex = sliderIndex - 1;
    changeSlider();
  }
});

rightButton.addEventListener("click", () => {
  if (sliderIndex === 3) {
    sliderIndex = 1;
    changeSlider();
  } else {
    sliderIndex = sliderIndex + 1;
    changeSlider();
  }
});

// Pasar de slider automáticamente cada 5000ms
// Change to next slider automatically each 5000ms

setInterval(() => {
  sliderIndex++;
  changeSlider();
}, 5000);

const slider = document.getElementById("slider");

function changeSlider() {
  switch (sliderIndex) {
    case 1: {
      slider.style.backgroundImage =
        'url("src/static/desktop-image-hero-1.jpg")';
      break;
    }
    case 2: {
      slider.style.backgroundImage =
        'url("src/static/desktop-image-hero-2.jpg")';
      break;
    }
    case 3: {
      slider.style.backgroundImage =
        'url("src/static/desktop-image-hero-3.jpg")';
      break;
    }
    // El caso default ocurre cuando se llama por setInterval
    // Default case is only executed when its called by the function setInterval. It sets sliderIndex in 1 and call the function again.
    default: {
      sliderIndex = 1;
      changeSlider();
      break;
    }
  }
}
