// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     let y = document.forms["myForm"]["email"].value;
//     if (x == ""|| y == "") {
//       alert("Nama dan email harus diisi !");
//       return false;
//     }
//   }
//   function isChecked(){
//     var genderM=document.getElementById('gender_male').checked;
//     var genderF=document.getElementById('gender_female').checked;

//     if(genderM.checked==false && genderF.checked==false )
//        {
//             alert("You must select male or female");
//             return false;
//        }   
//   }
// function setFormMessage(formElement, type, message) {
//   const messageElement = formElement.querySelector(".form__message");

//   messageElement.textContent = message;
//   messageElement.classList.remove("form__message--success", "form__message--error");
//   messageElement.classList.add(`form__message--${type}`);
// }
// function setInputError(inputElement, message) {
//   inputElement.classList.add("form__input--error");
//   inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// } 
// function clearInputError(inputElement) {
//   inputElement.classList.remove("form__input--error");
//   inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const loginForm = document.querySelector("#login");
//   const createAccountForm = document.querySelector("#createAccount");

//   document.querySelector("#linkCreateAccount").addEventListener("click", e => {
//       e.preventDefault();
//       loginForm.classList.add("form--hidden");
//       createAccountForm.classList.remove("form--hidden");
//   });

//   document.querySelector("#linkLogin").addEventListener("click", e => {
//       e.preventDefault();
//       loginForm.classList.remove("form--hidden");
//       createAccountForm.classList.add("form--hidden");
//   });

//   loginForm.addEventListener("submit", e => {
//       e.preventDefault();

//       // Perform your AJAX/Fetch login

//       setFormMessage(loginForm, "error", "Invalid username/password combination");
//   });

//   document.querySelectorAll(".form__input").forEach(inputElement => {
//       inputElement.addEventListener("blur", e => {
//           if (e.target.id === "fname" && e.target.value.length > 0 && e.target.value.length < 10) {
//               setInputError(inputElement, "Username must be at least 10 characters in length");
//           }
//       });

//       inputElement.addEventListener("input", e => {
//           clearInputError(inputElement);
//       });
//   });
// });
const regisForm = document.getElementById("regisbox").required;
const regisButton = document.getElementById("button-form").required;



regisButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = regisForm.email.value;
    const password = regisForm.password.value;

    if (email === "jimmy@gmail.com" && password === "itdiv123") {
        // window.location.href="Home.html";
        alert("You have successfully register.");
        location.reload();
    }
})
