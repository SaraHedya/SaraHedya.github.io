document.addEventListener("DOMContentLoaded", function() {

    let orders = JSON.parse(localStorage.getItem("cart")) || [];

    const container = document.getElementById("ordersContainer");
    const cartCount = document.getElementById("cartCount");


    window.addToCart = function(productName) {
        orders.push(productName);
        localStorage.setItem("cart", JSON.stringify(orders));
        updateCartCount();
        displayOrders();
    }


    function updateCartCount() {
        if (cartCount) cartCount.innerText = orders.length;
    }


    window.displayOrders = function() {
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


    window.removeItem = function(index) {
        orders.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(orders));
        updateCartCount();
        displayOrders();
    }


    window.toggleOrders = function() {
        const section = document.getElementById("ordersSection");
        if (!section) return;

        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            displayOrders();
        } else {
            section.style.display = "none";
        }
    }


    updateCartCount();
    displayOrders();
});