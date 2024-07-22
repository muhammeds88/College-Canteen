document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const ordersList = document.getElementById('orders-list');

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        modeToggle.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    // Simulated past orders
    const pastOrders = [
        'Order #1: Burger and Fries - $5.99',
        'Order #2: Veggie Pizza - $7.99',
        'Order #3: Chicken Sandwich - $6.99'
    ];

    pastOrders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = order;
        ordersList.appendChild(li);
    });

    // Handle form submission (dummy example)
    document.getElementById('update-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Your details have been updated!');
    });
});
