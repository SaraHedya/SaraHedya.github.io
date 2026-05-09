document.getElementById("signinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        document.getElementById("result").innerText = "Please fill all fields";
    } else {
        document.getElementById("result").innerText = "Signed in successfully ... Redirecting";
        document.getElementById("signinForm").reset();
        
           setTimeout(function() {
        window.location.href = "main.html";
    }, 2000);
    }
});

function signUp() {
    window.location.href = "signup.html";
}

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