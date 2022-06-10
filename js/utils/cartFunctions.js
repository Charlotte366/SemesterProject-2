export function getExistingCart() {
    const cart = localStorage.getItem("cartProducts");

    if (cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}