import { baseUrl } from "./settings/api.js";
import { getExistingCart } from "./utils/cartFunctions.js";

const cartProducts = getExistingCart();

const addtoCart = document.querySelector(".btn");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log("id:" + id);

const detailUrl = baseUrl + "products/" + id; 
console.log(detailUrl);

(async function() {
    const container = document.querySelector(".containerDetails");

    try {
        const response = await fetch(detailUrl);
        const data = await response.json();

 
        var showImage;
        const imageurl = data.image_url;
        const imageValue = data.image;
       
        if (imageValue != null) 
        {showImage = "http://localhost:1337" + data.image.formats.small.url;
        }
        else {
        showImage = imageurl}

 
      container.innerHTML = `<div class="card card-featured mb-3" style="max-width: 100%;">
                              <div class="row g-0">
                                <div class="col-md-4">
                                   <img src ="${showImage}"class="img-thumbnail">
                                </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                 <div class="card-title"><h3>${data.title}</h3></div>
                                   <div class="card-text"><p>${data.description}</p></div>
                                   <div class="card-text"><h5> Price: ${data.price}</h5></div>
                                  </div>
                                 </div>
                                </div>
                             </div>`

                            
    
    addtoCart.addEventListener("click", handleClick);

    function handleClick() {
    const title = data.title;
    const price = data.price;
    const link =  data.id;
    const image = showImage;
    console.log(title, price);

    const cartItem = {title: title, price: price, id: id, image: image};
    const currentCart = getExistingCart();
    currentCart.push(cartItem);
    saveToCart(currentCart);

    function saveToCart(cart) {
      localStorage.setItem("cartProducts", JSON.stringify(cart));
  } }

       
        } catch (error) {
        console.log(error);
    }
})();






