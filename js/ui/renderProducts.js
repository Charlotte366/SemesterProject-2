export function renderProducts(productsToRender) {
    const allProducts = document.querySelector(".all-products");


    allProducts.innerHTML ="";

    productsToRender.forEach(function (product) {
      var description = product.description;
      var descriptionLength = 50;
      var trimmedDescription = description.substring(0, descriptionLength);
      console.log(trimmedDescription);


     
  var showImage;
  const imageurl = product.image_url;
  const imageValue = product.image;
 
  if (imageValue != null) 
  {showImage = "http://localhost:1337" + product.image.formats.thumbnail.url;
  }
  else {
  showImage = imageurl}

        allProducts.innerHTML +=
    `<div class="col-md-6 col-lg-3">
    <div class="card product">
    <a href="productsdetail.html?id=${product.id}"</a>

<img src="${showImage}" style="background-image"  class="card-img-top embed-responsive embed-responsive-4by3">

            <div class="card-body">
            <h2 class="card-title">${product.title}</h2>
              <h4 class="card-text">
                Price: ${product.price}
                </h4>
                <h5>${trimmedDescription}...</h5>
              </div>
     
           </div>
         </div>`;
    });
}





