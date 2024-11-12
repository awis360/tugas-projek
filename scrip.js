let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = ${item.product} - Rp. ${item.price};
        cartItems.appendChild(listItem);
    });

    document.getElementById("total-price").textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja Anda kosong!");
        return;
    }
    const orderData = JSON.stringify(cart);
    fetch("checkout.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: orderData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        cart = [];
        totalPrice = 0;
        updateCart();
    })
    .catch(error => console.error("Error:", error));
}