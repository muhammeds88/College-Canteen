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
        attachCloseButtonListener(meal); // Attach event listener to the new close button
    }
    inputBox.value = "";
    saveData(meal); 
}

function attachCloseButtonListener(meal) {
    var listContainer = document.querySelector('.list-container-' + meal);
    var closeButtons = listContainer.getElementsByClassName("close");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function() {
            var listItem = this.parentElement;
            listItem.remove();
            saveData(meal);
        });
    }
}

function saveData(meal) {
    var listContainer = document.querySelector('.list-container-' + meal); 
    localStorage.setItem(meal, listContainer.innerHTML); 
}

function showTasks() {
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

showTasks();
