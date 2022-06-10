import { baseUrl } from "./settings/api.js";


const productsUrl = baseUrl + "products"; 

document.querySelector(".btn-logout").addEventListener("click", () => {
localStorage.removeItem("token");
location.href = "/"
});


(async function() {
    const row = document.querySelector(".list-group");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        row.innerHTML ="";

        json.forEach(function (products) {
        var description = products.description;
        var descriptionLength = 50;
        var trimmedDescription = description.substring(0, descriptionLength);
        console.log(trimmedDescription);


       
    var showImage;
    const imageurl = products.image_url;
    const imageValue = products.image;
   
    if (imageValue != null) 
    {showImage = "http://localhost:1337" + products.image.formats.thumbnail.url;
    }
    else {
    showImage = imageurl}

    

            row.innerHTML += 
            `<div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <div class="mb-1"><h3>${products.title}</h3></div>
              <div class="edit">
                <a href="adminedit.html?id=${products.id}"><i class="fas fa-pencil-alt"></i></a>
               
               
              </div>
            </div>
            <div class="mb-1"><p>${trimmedDescription}...</p></div>
            <img src="${showImage}" style="width: 18rem" class="card-img-top" alt="..." />
            <small> Price: ${products.price}</small>
            </div>`
        })
            
        } catch (error) {
        console.log(error);
    }
})();





