document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".items_list");
    const saveButton = document.getElementById("saveButton");
  
    // Random food items array
    const foodItems = [
      "Pizza", "Burger", "Sushi", "Pasta", "Salad",
      "Fries", "Ice Cream", "Cake", "Sandwich", "Steak",
      "Tacos", "Dumplings", "Soup", "Curry", "Noodles"
    ];
  
    // Function to get random food items
    function getRandomFoodItems() {
      const randomItems = [];
      const itemCount = Math.floor(Math.random() * 2) + 1; // 5-8 items
      const usedIndices = new Set();
  
      while (randomItems.length < itemCount) {
        const randomIndex = Math.floor(Math.random() * foodItems.length);
        if (!usedIndices.has(randomIndex)) {
          randomItems.push(foodItems[randomIndex]);
          usedIndices.add(randomIndex);
        }
      }
  
      return randomItems;
    }
  
    if (categories.length > 0) {
      const items = JSON.parse(localStorage.getItem("items")) || {};
  
      if (Object.keys(items).length === 0) {
        categories.forEach((category) => {
          const randomFoodItems = getRandomFoodItems();
          const categoryId = category.parentElement.id;
          items[categoryId] = [];
  
          randomFoodItems.forEach((foodItem) => {
            const card = document.createElement("div");
            card.className = "each_item";
            card.innerHTML = `<input type="checkbox"> ${foodItem}`;
            category.appendChild(card);
  
            items[categoryId].push({
              name: foodItem,
              checked: false
            });
          });
        });
  
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        Object.keys(items).forEach((category) => {
          const categoryContent = document
            .getElementById(category)
            ?.querySelector(".items_list");
          if (categoryContent) {
            items[category].forEach((item) => {
              const card = document.createElement("div");
              card.className = "each_item";
  
              card.innerHTML = `
                <input type="checkbox" ${item.checked ? "checked" : ""}>
                ${item.name}
              `;
  
              categoryContent.appendChild(card);
            });
          } else {
            console.error(`Category element with id ${category} not found`);
          }
        });
      }
    } else {
      console.error("No categories found on the page");
    }
  
    categories.forEach((category) => {
      category.addEventListener("change", function () {
        saveButton.disabled = false;
      });
    });
  
    saveButton.addEventListener("click", () => {
      const newItems = {};
  
      categories.forEach((category) => {
        const categoryId = category.parentElement.id;
        newItems[categoryId] = [];
  
        category.querySelectorAll(".each_item").forEach((item) => {
          const checkbox = item.querySelector("input[type='checkbox']");
          newItems[categoryId].push({
            name: item.textContent.trim(),
            checked: checkbox.checked
          });
        });
      });
  
      localStorage.setItem("items", JSON.stringify(newItems));
      saveButton.disabled = true;
    });
  
    const dateContainers = document.querySelectorAll('.date');
    dateContainers.forEach(container => {
      const dateInput = document.createElement('input');
      dateInput.type = 'date';
  
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
  
      dateInput.value = `${year}-${month}-${day}`;
  
      const formattedDate = `${day}/${month}/${String(year).slice(2)} - ${today.toLocaleDateString('en-US', { weekday: 'long' })}`;
      const dateDisplay = document.createElement('h2');
      dateDisplay.className = 'formatted-date';
      dateDisplay.textContent = formattedDate;
  
      dateInput.addEventListener('change', (event) => {
        const selectedDate = new Date(event.target.value);
        const selectedDay = String(selectedDate.getDate()).padStart(2, '0');
        const selectedMonth = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const selectedYear = selectedDate.getFullYear();
        const selectedFormattedDate = `${selectedDay}/${selectedMonth}/${String(selectedYear).slice(2)} - ${selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
        dateDisplay.textContent = selectedFormattedDate;
      });
  
      container.appendChild(dateInput);
      container.appendChild(dateDisplay);
    });
  });
  