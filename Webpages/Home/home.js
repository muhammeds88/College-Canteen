document.addEventListener("DOMContentLoaded", function () {
  // Homepage Script
  const categories = document.querySelectorAll(".category-content");
  if (categories.length > 0) {
    const items = JSON.parse(localStorage.getItem("Items")) || {};

    Object.keys(items).forEach((category) => {
      const categoryContent = document
        .getElementById(category)
        ?.querySelector(".category-content");
      if (categoryContent) {
        items[category].forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";

          const imageURL = item.image || ""; // Use the stored image data directly

          card.innerHTML = `
            <div class="info">
                <div class="top">
                    <div class="name">${item.name}</div>
                    <div class="amount">Rs. ${item.amount}</div>
                </div>
                <div class="mid">
                    <div class="rating">${"★".repeat(item.rating)}${"☆".repeat(
            5 - item.rating
          )}</div>
                </div>
                <div class="bottom">
                    <div class="description">${item.description}</div>
                </div>
            </div>
            <div class="container">
                <div class="img-container">
                    <img src="${imageURL}" alt="item-image" width="150px">
                </div>
            </div>
            <div class="info serve">
                <div class="serves">Serves: ${item.serves}</div>
            </div>
            <div class="item_quantity">
                <button class="decrease">-</button>
                <span class="quantity">0</span>
                <button class="increase">+</button>
            </div>
          `;

          categoryContent.appendChild(card);

          let quantity = 0;
          const quantitySpan = card.querySelector(".quantity");
          card
            .querySelector(".increase")
            .addEventListener("click", function () {
              quantity++;
              quantitySpan.textContent = quantity;
            });

          card
            .querySelector(".decrease")
            .addEventListener("click", function () {
              if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
              }
            });
        });
      } else {
        console.error(`Category element with id ${category} not found`);
      }
    });
  } else {
    console.error("No categories found on the page");
  }
});
