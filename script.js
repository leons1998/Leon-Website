// Simple add to cart functionality
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} added to your cart!`);
    console.log(cart); // You can log the cart to the console for debugging
}
