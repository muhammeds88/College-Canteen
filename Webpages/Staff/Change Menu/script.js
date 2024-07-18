document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".items_list");
    const saveButton = document.getElementById("saveButton");
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // Load mode preference from localStorage
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
        body.classList.add(savedMode);
        modeToggle.textContent = savedMode === "dark-mode" ? "Light Mode" : "Dark Mode";
    }

    // Event listener for mode toggle button
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        modeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("mode", isDarkMode ? "dark-mode" : "light-mode");
    });

    if (categories.length > 0) {
        const items = JSON.parse(localStorage.getItem("items")) || {};

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

                    // Add event listener to toggle checkbox
                    card.addEventListener("click", (event) => {
                        if (event.target.tagName !== "INPUT") {
                            const checkbox = card.querySelector("input[type='checkbox']");
                            checkbox.checked = !checkbox.checked;
                            saveButton.disabled = false;
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
        dateInput.id = 'dateInput';

        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        dateInput.value = `${year}-${month}-${day}`;

        const formattedDate = `- ${today.toLocaleDateString('en-US', { weekday: 'long' })}`;
        const dateDisplay = document.createElement('h2');
        dateDisplay.className = 'formatted-date';
        dateDisplay.setAttribute('id', 'dateInput');
        dateDisplay.textContent = formattedDate;

        dateInput.addEventListener('change', (event) => {
            const selectedDate = new Date(event.target.value);
            const selectedFormattedDate = `- ${selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}`;
            dateDisplay.textContent = selectedFormattedDate;
        });

        container.appendChild(dateInput);
        container.appendChild(dateDisplay);
    });
});

function deleteItems() {
    if (confirm("Are you sure you want to clear all items?")) {
        const items = document.querySelectorAll(".each_item input[type='checkbox']");
        items.forEach(item => {
            item.checked = false;
        });
        localStorage.removeItem("items");
        document.getElementById("saveButton").disabled = true;
    }
}
