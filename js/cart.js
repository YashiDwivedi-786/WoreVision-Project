
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price, image) {
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        let product = {
            name: productName,
            price: price,
            image: image
        };

        cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(productName + " added to cart!");
    updateCartCount();
}


function handleAddToCart(btn, name, price, image) {
    addToCart(name, price, image);
    btn.innerText = "Added";
    btn.disabled = true;
}

//Cart Item Count

function updateCartCount() {
    let cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}
updateCartCount();

// DISPLAY

function displayCart() {
    let cartContainer = document.getElementById("cartItems");
    if (!cartContainer) return;
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        if (!item.quantity) {
            item.quantity = 1;
        }
        
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
<img src="${item.image}" class="cart-img">
<span class="cart-name">${item.name}</span>
<span class="cart-price">₹${item.price}</span>
<div class="qty-controls">
<button onclick="decreaseQty(${index})">-</button>
<span>${item.quantity}</span>
<button onclick="increaseQty(${index})">+</button>
</div>

<button onclick="removeItem(${index})" class="remove-btn">Remove</button>
`;
        cartContainer.appendChild(div);
        total += item.price * item.quantity;
    });

    // let totalDiv = document.createElement("h3");

    // totalDiv.classList.add("cart-total");

    // totalDiv.innerText = "Total: ₹" + total;

    // cartContainer.appendChild(totalDiv);

    let checkoutTotal = document.getElementById("checkout-total");
    if (checkoutTotal) {
        checkoutTotal.innerText = total;
    }
}

// REMOVE

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


function increaseQty(index) {
    cart[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
    updateCartCount();

}

function goToCheckout() {
    window.location.href = "checkout.html";
}


displayCart();
