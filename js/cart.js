import { getExistingCart } from "./utils/cartFunctions.js";
const cartProducts = getExistingCart();


const cartProductContainer = document.querySelector(".cartProductContainer");

if (cartProducts.length === 0) {
    cartProductContainer.innerHTML = "<h4>Shopping cart is empty</h4>";
}

document.querySelector(".btn-danger").addEventListener("click", () => {
  localStorage.removeItem("cartProducts")


});



cartProducts.forEach((cartProduct) => {
    cartProductContainer.innerHTML += `<div class="cartProduct">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row">
      <div class="col-md order-md-2">
          <img src="${cartProduct.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${cartProduct.title}</h3>
            <h5>Price: ${cartProduct.price} </h5>
            <a href="productsdetail.html?id=${cartProduct.id}" class="btn btn-primary">Details</a>
          </div>
        </div>
      </div>
    </div>`;
    
    });


var totalPrice = cartProducts.reduce((accum,item) => accum + item.price,0)
cartProductContainer.innerHTML += `<ul class="list-group">
                                   <li class="list-group-item"><h4>Total price: ${totalPrice}</h4></li>
                                   </ul>`






    
   
 

   
   

    
    
                                 

  

   
   
  






