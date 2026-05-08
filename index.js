document.addEventListener("DOMContentLoaded", function() {

    let orders = JSON.parse(localStorage.getItem("cart")) || [];


    function addToCart(productName) {
        orders.push(productName);
        localStorage.setItem("cart", JSON.stringify(orders));
        updateCartCount();
        displayOrders();
    }


    function updateCartCount() {
        const count = document.getElementById("cartCount");
        if (count) count.innerText = orders.length;
    }


    function toggleOrders() {
        const section = document.getElementById("ordersSection");
        if (!section) return;

        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            displayOrders();
        } else {
            section.style.display = "none";
        }
    }


    function displayOrders() {
        const container = document.getElementById("ordersContainer");
        if (!container) return;

        container.innerHTML = "";

        if (orders.length === 0) {
            container.innerHTML = "<h3>Your cart is empty </h3>";
            return;
        }

        orders.forEach((item, index) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${item}</h3>
                <p>Ready to purchase</p>
                <button class="btn">Remove</button>
            `;


            card.querySelector("button").onclick = function() {
                removeItem(index);
            };

            container.appendChild(card);
        });
    }


    function removeItem(index) {
        orders.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(orders));
        updateCartCount();
        displayOrders();
    }


    updateCartCount();
    displayOrders();


    window.addToCart = addToCart;
    window.toggleOrders = toggleOrders;
});