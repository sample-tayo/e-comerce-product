const cartSection = document.getElementById("cartitem");

cartSection.innerHTML = "";
// const numberElement = document.querySelector(".number");
let quantity = parseInt(numberElement.textContent.trim());
const discountAmountElement = document.querySelector(".discount-amount");
const discountAmount = parseFloat(discountAmountElement.textContent.trim());
const productTitle = document.getElementById("productTitle");
const makeCartEmpty = document.getElementsByClassName("makeCartEmpty");
let totalAmount = 0;

const addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", function () {
  // cartSection.innerHTML = "";
  const quantity = parseInt(numberElement.textContent.trim());
  const discountAmount = parseFloat(discountAmountElement.textContent.trim());
  const total = discountAmount * quantity;

  // Create the cart item element
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  // Create the product thumbnail
  const productThumb = document.createElement("img");
  productThumb.src = "/assets/image-product-1-thumbnail.jpg";
  cartItem.appendChild(productThumb);

  // Create the product details container
  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  // Create the product name
  const productName = document.createElement("div");
  productName.classList.add("productName");
  productName.textContent = productTitle.textContent;
  productDetails.appendChild(productName);

  // Create the product amount
  const productAmount = document.createElement("div");
  productAmount.classList.add("productAmount");
  // total.classList.add("totalAmount");
  productAmount.textContent = `$${discountAmount} x ${quantity} = ${total}`;
  productDetails.appendChild(productAmount);

  cartItem.appendChild(productDetails);

  // Create the delete icon
  const deleteIcon = document.createElement("div");
  deleteIcon.classList.add("delete-icon");
  deleteIcon.innerHTML = `<img src="/assets/icon-delete.svg" alt="delete" />`;
  deleteIcon.addEventListener("click", function () {
    cartSection.removeChild(cartItem);
    totalAmount -= total;
    cartTotal.textContent = `$ ${totalAmount}.00`;
  });
  cartItem.appendChild(deleteIcon);
  totalAmount += total;

  // Append the cart item to the cart container
  cartSection.appendChild(cartItem);

  const cartTotal = document.getElementById("total");
  cartTotal.textContent = `$ ${totalAmount}.00`;
});
