let cart = [];

function addToCart(productId) {
    cart.push(productId);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    for (let productId of cart) {
        const li = document.createElement('li');
        li.textContent = `Product ${productId}`;
        cartList.appendChild(li);
    }
}
