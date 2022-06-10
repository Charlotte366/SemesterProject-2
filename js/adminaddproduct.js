import displayMessage from "./components/displayMessage.js";
import {getToken} from "./utils/storage.js";
import {baseUrl} from "./settings/api.js";


const form = document.querySelector("form");
const title = document.querySelector("#addTitle");
const price = document.querySelector("#addPrice");
const description = document.querySelector("#addDescription");
const featured = document.getElementById("addFeatured");
const image = document.querySelector("#addImage");

document.getElementById("publishButton").addEventListener("click", submitForm);



function submitForm(event) {
    event.preventDefault();

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);
    const imageValue = image.value.trim();
    
    var featuredValue

  if (featured.checked == true){
    featuredValue = "true";
  } else {
    featuredValue = "false";
  }

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
    return displayMessage("Do you have correct values?", ".message-container");
}

   

    console.log(titleValue, priceValue, descriptionValue, imageValue, featuredValue);

    addProduct(titleValue, descriptionValue, priceValue, imageValue, featuredValue);
    
}


async function addProduct(title, description, price, image, featured) {
    const url = baseUrl + "products";

    const data = JSON.stringify({ title: title, description: description, price: price, image_url: image, featured: featured});
    
    const token = getToken();

    const options = {
        method: "POST",
        body: data, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };
    

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            //displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if (json.error) {
            //displayMessage.displayMessage("error", json.message, ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
        //displayMessage("error", ".message-container");
    }

}






