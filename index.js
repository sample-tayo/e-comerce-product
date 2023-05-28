// navbar function
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML =
      '<img src="/assets/icon-menu.svg" alt="bars" />';
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML =
      '<img src="/assets/icon-close.svg" alt="close" />';
  }
}

toggle.addEventListener("click", toggleMenu, false);

// Select all elements with the class 'thumbnail' and store them in the 'thumbnails' variable
const thumbnails = document.querySelectorAll(".thumbnail");

// Define a function to handle the click event
function handleClick() {
  // Remove the 'active' class from all thumbnails
  thumbnails.forEach(function (thumb) {
    thumb.classList.remove("active");
  });

  // Add the 'active' class to the currently clicked thumbnail
  this.classList.add("active");
}

// Attach the click event listener to each thumbnail element
thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", handleClick);
});

// Update product image on thumbnail click
const productImgElement = document.querySelector(".product-img img");

thumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    const thumbnailSrc = this.dataset.imageSrc;
    productImgElement.src = thumbnailSrc;
  });
});

// Quantity control
const numberElement = document.querySelector(".number");
const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");

let number = 0;

function updateNumber() {
  numberElement.textContent = number;
}

minusButton.addEventListener("click", function () {
  number--;
  updateNumber();
});

plusButton.addEventListener("click", function () {
  number++;
  updateNumber();
});

// Cart toggle
const cart = document.querySelector(".cart");
const hiddenContainer = document.querySelector("#hidden");

cart.addEventListener("click", function () {
  if (hiddenContainer.style.display === "none") {
    hiddenContainer.style.display = "block";
  } else {
    hiddenContainer.style.display = "none";
  }
});
