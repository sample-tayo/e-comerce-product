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

// Add to cart button
const addToCartBtn = document.getElementById("addToCartBtn");
const productTitle = document.getElementById("productTitle");
const discountAmountElement = document.querySelector(".discount-amount");
const discountAmount = parseFloat(discountAmountElement.textContent.trim());
/*
addToCartBtn.addEventListener("click", function () {
  const numberTrim = parseInt(numberElement.textContent.trim());
  console.log(discountAmount);
  console.log("Button clicked!");
  console.log(numberTrim);

  // Clone the cartitem template
  const cartitemTemplate = document.getElementById("cartitem");
  const cartitemClone = cartitemTemplate.cloneNode(true);

  // Modify the contents of the cloned cartitem
  const productName = cartitemClone.querySelector(".productName");
  productName.textContent = productTitle.textContent;

  const productAmount = cartitemClone.querySelector(".productAmount");
  productAmount.textContent = `${discountAmount} x ${numberTrim}`;

  const totalAmount = cartitemClone.querySelector(".totalAmount");
  totalAmount.textContent = `${discountAmount * numberTrim}`;

  // Add the cloned cartitem to the cart container
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.appendChild(cartitemClone);

  const deleteIcon = cartitemClone.querySelector(".cartDelete img");
  deleteIcon.addEventListener("click", function () {
    // Remove the entire cart item when delete icon is clicked
    cartContainer.removeChild(cartitemClone);
  });
}); */

addToCartBtn.addEventListener("click", function () {
  const numberTrim = parseInt(numberElement.textContent.trim());

  // Get the cartContainer element
  const cartContainer = document.getElementById("cartContainer");

  // Create a new cart item template
  const cartItemTemplate = document.createElement("div");
  cartItem.classList.add("cartItem");

  cartItem.innerHTML = `
  <div class="produtthumb">
    <img src="/assets/image-product-1-thumbnail.jpg" alt="" style="width: 32px; height: 32px" />
  </div>
  <div class="purchaseItemDetails">
    <div class="productName">${productTitle.textContent}</div>
    <div class="totalProductCalulation">
      <div class="productAmount">
      ${discountAmount} x ${numberTrim}
      </div>
      <div class="totalAmount">${discountAmount * numberTrim}</div>
    </div>
  </div>
  <div class="cartDelete">
    <img src="/assets/icon-delete.svg" alt="delete" />
  </div>
`;

  cartContainer.appendChild(cartItem);

  const deleteIcon = cartItem.querySelector(".cartDelete img");
  deleteIcon.addEventListener("click", function () {
    cartContainer.removeChild(cartItem);
  });
});
