import { baseUrl } from "/js/settings/api.js";

const productsUrl = baseUrl + "shoes"; 

(async function() {
 
        const containerHello = document.querySelector(".hello");
    
        try {
            const response = await fetch(productsUrl);
            const json = await response.json();
    
            console.log(json);
    
            containerHello.innerHTML ="";
    
            json.forEach(function (product) {
            // console.log(product.featured) 
    							
           
              {
                containerFeatured.innerHTML += `<div class="col-md-6 col-lg-3">
                                                 <div class="card product">
                                                <a href="productsdetail.html?id=${product.attributes.id}"</a>
                                                 <div class="card-body">
                                                  <h2 class="card-title">${product.attributes.title}</h2>
                                                  <h4 class="card-text">Price: ${product.attributes.price}</h4>
                                                  </div>
                                                   </div>
                                                </div>`;
     }
    }
            )
        } catch (error) {
            console.log(error);
        }
    }
)();