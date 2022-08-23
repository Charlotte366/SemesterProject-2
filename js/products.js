import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";

const productsUrl = baseUrl + "shoes"; 

async function getProducts() {
 

    try {
        const response = await fetch(productsUrl);
        const shoe  = await response.json();

        console.log(shoe);

        
       
        renderProducts(shoe);
        searchProducts(shoe);

            
        } catch (error) {
        console.log(error);
    }
}

getProducts();





























