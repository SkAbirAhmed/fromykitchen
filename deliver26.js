// Simulated order data
const orders = [
];

// Function to populate the order list
function populateOrderList() {
    const ordersElement = document.getElementById("orders");
    ordersElement.innerHTML = "";

    orders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${order.name}</strong>: ${order.address}`;
        ordersElement.appendChild(listItem);
    });
}

// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");

    const order = {
        name: nameInput.value,
        address: addressInput.value
    };

    orders.push(order);
    populateOrderList();

    // Clear the form inputs
    nameInput.value = "";
    addressInput.value = "";
}

// Event listener for form submission
document.getElementById("delivery-form").addEventListener("submit", handleFormSubmission);

// Populate the initial order list
populateOrderList();
