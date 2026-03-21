
const suggestions = [
    "Search eyeglasses...",
    "Try round frames...",
    "Find blue light glasses...",
    "Explore sunglasses..."
];

let index = 0;
let charIndex = 0;
let typing = true;

const searchBar = document.getElementById("searchBar");

function typeEffect() {
    if (!searchBar) return;
    let currentText = suggestions[index];
    if (typing) {
        charIndex++;
        searchBar.setAttribute("placeholder", currentText.substring(0, charIndex));
        if (charIndex === currentText.length) {
            typing = false;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        charIndex--;
        searchBar.setAttribute("placeholder", currentText.substring(0, charIndex));
        if (charIndex === 0) {
            typing = true;
            index = (index + 1) % suggestions.length;
        }
    }
    setTimeout(typeEffect, 100);
}
typeEffect();


// Search filter

if (searchBar) {
    searchBar.addEventListener("keyup", function () {
        let searchValue = searchBar.value.toLowerCase();
        let products = document.querySelectorAll(".card");
        products.forEach(function (card) {
            let title = card.querySelector("h3").innerText.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// SProduct hover effect

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

function showLogin() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function slideLeft(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft -= 300;
}


function slideRight(id) {
    const slider = document.getElementById(id);
    slider.scrollLeft += 300;
}

function rate(stars) {
    const allStars = document.querySelectorAll(".rating-box span");
    allStars.forEach((star, index) => {
        if (index < stars) {
            star.classList.add("filled")
            star.textContent = "⭐"; // filled
        } else {
            star.classList.remove("filled")
            star.textContent = "☆"; // empty
        }
    });
    document.querySelector(".rating-box p").innerText = "Thank you for rating us! 😊";
}

function addToCartFromPage() {
    const name = document.getElementById("productName").innerText;
    const price = document.getElementById("productPrice").innerText.replace("₹", "");
    const image = document.getElementById("productImage").src;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        name: name,
        price: price,
        image: image
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}
