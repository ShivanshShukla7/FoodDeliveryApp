let cartItems = [];

function addToCart(name, price) {
    cartItems.push({
        name: name,
        price: price
    });

    displayCart();
}

function displayCart() {

    let cart = document.getElementById("cart");

    if (cartItems.length === 0) {
        cart.innerHTML = "Cart is empty";
        return;
    }

    let total = 0;
    let items = "";

    cartItems.forEach(function(item) {
        items += item.name + " - ₹" + item.price + "<br>";
        total += item.price;
    });

    cart.innerHTML =
        items + "<br><b>Total: ₹" + total + "</b>";
}
