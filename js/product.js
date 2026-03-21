
const params = new URLSearchParams(window.location.search);

let productName = params.get("name");
let price = params.get("price");
let image = params.get("image");
let category = params.get("category");

document.getElementById("productName").innerText = productName;
document.getElementById("productPrice").innerText = "₹" + price;
document.getElementById("productImage").src = decodeURIComponent(image);

const btn = document.getElementById("addCartBtn");

if (btn) {
    btn.addEventListener("click", () => {
        addToCart(productName, price, image);
        btn.innerText = "Added ✔";
        btn.style.backgroundColor = "green";
        btn.disabled = true;
    });
}
const products = [
    { name: "Classic Round", price: 1999, image: "images/trending 1.jpg", category: "frames" },
    { name: "Modern Square", price: 2499, image: "images/trending 2.jpg", category: "frames" },
    { name: "Metal Frame", price: 2799, image: "images/trending 3.jpg", category: "frames" },

    { name: "Black Aviator", price: 2199, image: "images/sunglasses 1.jpg", category: "sunglasses" },
    { name: "Retro Square", price: 1999, image: "images/sunglasses 2.jpg", category: "sunglasses" },
    { name: "Gradient Lens", price: 2499, image: "images/sunglasses 3.jpg", category: "sunglasses" },

    { name: "Blue Light lens", price: 1999, image: "images/lenses 1.jpg", category: "lenses" },
    { name: "Gem Pink Lenses", price: 999, image: "images/lenses 2.jpg", category: "lenses" },
    { name: "Bright Green Lens", price: 1299, image: "images/lenses 3.jpg", category: "lenses" },

    { name: "Classic Frame", price: 1999, image: "images/accessories 4.jpg", category: "accessories" },
    { name: "Premium Frame", price: 2499, image: "images/accessories 1.jpg", category: "accessories" },
    { name: "Lens Cleaning Kit", price: 399, image: "images/accessories 2.jpg", category: "accessories" },
    { name: "Stylish Eyeglass Chain", price: 299, image: "images/accessories 3.jpg", category: "accessories" },

    { name: "Blue Leather Case", price: 449, image: "images/cases 1.jpg", category: "case" },
    { name: "Galaxy Hard Cover Case", price: 249, image: "images/cases 3.jpg", category: "case" },
    { name: "Blue&Black Pouch", price: 299, image: "images/cases 6.jpg", category: "case" },
];

const container = document.getElementById("relatedProducts");

if (container && category) {
    let found = false;
    products.forEach(product => {
        if (
            product.category.toLowerCase().trim() === category.toLowerCase().trim() &&
            product.name !== productName
        ) {
            found = true;
            let card = document.createElement("div");
            card.classList.add("related-card");
            card.innerHTML = `
                <a href="product.html?name=${product.name}&price=${product.price}&image=${encodeURIComponent(product.image)}&category=${product.category}">
                    <img src="${product.image}">
                    <h4>${product.name}</h4>
                    <p>₹${product.price}</p>
                </a>
            `;
            container.appendChild(card);
        }
    });

    if (!found) {
        container.innerHTML = "<p>No related products found</p>";
    }
}
