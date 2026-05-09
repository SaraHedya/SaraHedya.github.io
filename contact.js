document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        document.getElementById("result").innerText = "Please fill all fields";
    }
    else
    {
    document.getElementById("result").innerText = "Message Sent.Thank You!"; 

    document.getElementById("contactForm").reset(); 
    }

  
});

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
