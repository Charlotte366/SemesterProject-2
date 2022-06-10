import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

const productsUrl = baseUrl + "products"; 

async function getProducts() {
 

    try {
        const response = await fetch(productsUrl);
        const products  = await response.json();

        console.log(products);

        
       
        renderProducts(products);
        searchProducts(products);

            
        } catch (error) {
        console.log(error);
    }
}

getProducts();





























