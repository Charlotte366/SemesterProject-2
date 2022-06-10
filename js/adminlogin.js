import displayMessage from "./components/displayMessage.js";
import { saveToken, saveUser } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";



const HeroUrl = baseUrl + "home";

(async function () {
    const container = document.querySelector(".containerBackground");

    try {
        const response = await fetch(HeroUrl);
        const json = await response.json();

        container.innerHTML = `<img src ="http://localhost:1337${json.hero_banner.formats.large.url}">`;

    } catch (error) {
        console.log(error);
    }
})();



const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector("message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    //message.innerhtml ="";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("Wrong values", ".message-container");
    }

    doLogin(usernameValue, passwordValue);

}

async function doLogin(username, password) {
    const url = baseUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
    method: "POST",
    body: data,
    headers: {
        "Content-type": "application/JSON",
    },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            //displayMessage("warning", "Successfully logged in", ".message-container");

            saveToken(json.jwt);
            saveUser(json.user);
            location.href ="adminproducts.html";
        }

        if (json.error) {
            displayMessage("warning", "Invalid login details", ".message-container");
        }
        console.log(json);
    } catch (error) {
        console.log(error);
    }
    
}









