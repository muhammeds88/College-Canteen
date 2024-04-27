function addtask(meal) {
    var inputBox = document.querySelector('.input-box-' + meal); 
    var listContainer = document.querySelector('.list-container-' + meal); 

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        
        span.addEventListener("click", function() {
            var listItem = this.parentElement;
            listItem.remove();
            saveData(meal);
        });

        li.appendChild(span);
        listContainer.appendChild(li);
        saveData(meal); 
    }
    inputBox.value = "";
}

function saveData(meal) {
    var listContainer = document.querySelector('.list-container-' + meal); 
    localStorage.setItem(meal, listContainer.innerHTML); 
}

function showtasks() {
    var meals = ['breakfast', 'curry', 'lunch', 'fry-omelette', 'snack', 'cold-drink'];
    meals.forEach(function (meal) {
        var listContent = localStorage.getItem(meal); 
        if (listContent) {
            var listContainer = document.querySelector('.list-container-' + meal); 
            listContainer.innerHTML = listContent;
            attachCloseButtonListener(meal); // Attach event listener to the existing close buttons
        }
    });
}

function attachCloseButtonListener(meal) {
    var listContainer = document.querySelector('.list-container-' + meal);
    var closeButtons = listContainer.querySelectorAll(".close");
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var listItem = this.parentElement;
            listItem.remove();
            saveData(meal);
        });
    });
}

showtasks();