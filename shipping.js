

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartCount = document.getElementById('cartCount');
if (cartCount) {
    cartCount.innerText = cart.length;
}

function toggleOrders() {
    const ordersSection = document.getElementById('ordersSection');
    ordersSection.style.display = ordersSection.style.display === 'none' ? 'block' : 'none';

    const ordersContainer = document.getElementById('ordersContainer');
    ordersContainer.innerHTML = '';
    cart.forEach(item => {
        ordersContainer.innerHTML += `<div class="card"><h3>${item}</h3></div>`;
    });

    }