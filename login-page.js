const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "jimmy@gmail.com" && password === "itdiv123") {
        // window.location.href="Home.html";
        alert("You have successfully logged in.");
        location.reload();
    }
    else if(email===""&&password==="")
    {
        alert("email and password are required");
    }
    else{
        alert("wrong email or password");
    }

})
