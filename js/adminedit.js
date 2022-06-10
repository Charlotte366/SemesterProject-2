import { baseUrl } from "./settings/api.js";
import {getToken} from "./utils/storage.js";
import displayMessage from "./components/displayMessage.js";
import deleteButton from "./components/productDelete/deleteButton.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


if (!id) {
    document.location.href = "/";
}
console.log("id:" + id);

const detailUrl = baseUrl + "products/" + id; 
console.log(detailUrl);

const form = document.querySelector("form");
const title = document.querySelector("#addTitle");
const price = document.querySelector("#addPrice");
const description = document.querySelector("#addDescription");
const message = document.querySelector(".message-container");
const featured = document.getElementById("addFeatured");
const imageUrl = document.querySelector("#addImage");
const idInput = document.querySelector("#id");



(async function() {
    const container = document.querySelector(".container-edit");
  

    try {
        const response = await fetch(detailUrl);
        const edit = await response.json();
console.log(edit);
        title.value = edit.title;
        price.value = edit.price;
        description.value = edit.description;
        imageUrl.value = edit.imageUrl;
        idInput.value = edit.id;



if (edit.featured == true){
    featured.checked = true
} else {featured.checked = false
}

deleteButton(edit.id);

    console.log(edit);
    } catch (error) {
        console.log(error);
    }
})();

document.getElementById("publishButton").addEventListener("click", submitForm);


function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const descriptionValue = description.value.trim();
    const priceValue = parseFloat(price.value);
    const imageValue = imageUrl.value.trim();
    const idValue = idInput.value;
   
    
    var featuredValue

  if (featured.checked == true){
    featuredValue = "true";
  } else {
    featuredValue = "false";
  }

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
    return displayMessage("Do you have correct values?", ".message-container");
}

   
    console.log(titleValue, priceValue, descriptionValue, imageValue, featuredValue, idValue);

    updateProduct(titleValue, descriptionValue, priceValue, imageValue, featuredValue, idValue);
    
}


async function updateProduct(title, description, price, image, featured, id) {
    const url = baseUrl + "products/" + id;

    const data = JSON.stringify({ title: title, description: description, price: price, image_url: image, featured: featured, id: id});
    
    const token = getToken();

    const options = {
        method: "PUT",
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
 
            form.reset();
        }

        if (json.error) {
      
        }

        console.log(json);
    } catch (error) {
        console.log(error);
   
    }

}