document.addEventListener("DOMContentLoaded", function () {
    // Input Page Script
    const itemForm = document.getElementById("itemForm");
    if (itemForm) {
      itemForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const item = {
          name: document.getElementById("name").value,
          amount: document.getElementById("amount").value,
          description: document.getElementById("description").value,
          rating: document.getElementById("rating").value,
          serves: document.getElementById("serves").value,
          category: document.getElementById("category").value,
          image: null, // Initialize image as null initially
        };
  
        // Check if an image file was selected
        const imageFile = document.getElementById("image").files[0];
        if (imageFile) {
          const reader = new FileReader();
          reader.onload = function (e) {
            item.image = e.target.result; // Store the base64-encoded image data in item.image
            saveItem(item); // Call function to save the item with the image
          };
          reader.readAsDataURL(imageFile); // Read the selected file as a data URL
        } else {
          saveItem(item); // If no image was selected, save the item without an image
        }
      });
    }
  
    // Function to save item to localStorage
    function saveItem(item) {
      const items = JSON.parse(localStorage.getItem("Items")) || {};
      if (!items[item.category]) {
        items[item.category] = [];
      }
      items[item.category].push(item);
      localStorage.setItem("Items", JSON.stringify(items));
      alert('Item added successfully!'); // Add an alert to confirm the item was added
  
      // Optionally, you can refresh the page or update dynamically here
      location.reload();
    }
  });

// Function to clear all items from localStorage
function deleteItems() {
  localStorage.clear();
}