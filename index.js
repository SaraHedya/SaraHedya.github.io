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

