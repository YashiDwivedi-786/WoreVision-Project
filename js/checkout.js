let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach(item => {
    if (!item.quantity) {
        item.quantity = 1;
    }
    item.price = Number(item.price);
    total += item.price * item.quantity;
});

let totalDisplay = document.getElementById("finalTotal");

if (totalDisplay) {
    totalDisplay.innerText = "" + total;
}
document.getElementById("checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});
