import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";

const HeroUrl = baseUrl + "home"; 

(async function() {
    const container = document.querySelector(".containerHero");

    try {
        const response = await fetch(HeroUrl);
        const json = await response.json();

        container.innerHTML = `<img src ="http://localhost:1337${json.hero_banner.formats.large.url}">`;

    } catch (error) {
        console.log(error);
    }
})();


const productsUrl = baseUrl + "products?featured=true"; 

console.log(productsUrl);



(async function() {
    const containerFeatured = document.querySelector(".featured-product");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        console.log(json);

        containerFeatured.innerHTML ="";

        json.forEach(function (product) {
         console.log(product.featured) 

         var showImage;
  const imageurl = product.image_url;
  const imageValue = product.image;
 
  if (imageValue != null) 
  {showImage = "http://localhost:1337" + product.image.formats.thumbnail.url;
  }
  else {
  showImage = imageurl}								
       
          {
            containerFeatured.innerHTML += `<div class="col-md-6 col-lg-3">
                                             <div class="card product">
                                            <a href="productsdetail.html?id=${product.id}"</a>
                                            <img src="${showImage}" style="background-image"  class="card-img-top embed-responsive embed-responsive-4by3">
                                             <div class="card-body">
                                              <h2 class="card-title">${product.title}</h2>
                                              <h4 class="card-text">Price: ${product.price}</h4>
                                              </div>
                                               </div>
                                            </div>`;
 }})





    } catch (error) {
        console.log(error);
    }
})();


















         

