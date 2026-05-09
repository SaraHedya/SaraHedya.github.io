document.getElementById("signupform").addEventListener("submit", function(e) {
    e.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;


    let email = document.getElementById("email").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

      if(firstname === "" || lastname === "" || email === "" || password === "" || confirmpassword === "" || day === ""|| month === ""|| year === ""|| gender === "") {
        document.getElementById("result").innerText = "Please fill all fields";
    } else {

        if(password != confirmpassword)
        {
        document.getElementById("result").innerText = "Password mismatched!";

        }
        else
        {
         document.getElementById("result").innerText = "Registered successfully ... Redirecting";
        document.getElementById("signupform").reset();
        
           setTimeout(function() {
        window.location.href = "index.html";
          }, 2000);
        }
    
    }
    });

   
    function signIn()
{
    window.location.href = "index.html";
}
