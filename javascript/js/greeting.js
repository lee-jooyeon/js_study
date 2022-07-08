const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// const USERNAME_KEY = "username";
// const HIDDEN_CLASSNAME = "hidden";

function submitForm (event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    // greeting.innerText = "hello " + username;
    pagePrint(username);
}

function pagePrint(username){
    greeting.innerText = `Hello  ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", submitForm);
}else{
    pagePrint(savedUsername);
}