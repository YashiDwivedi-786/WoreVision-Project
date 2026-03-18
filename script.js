// SEARCH BAR TYPING + ERASING EFFECT

const suggestions = [
"       Search eyeglasses...",
"       Try round frames...",
"       Find blue light glasses...",
"       Explore sunglasses..."
];

let index = 0;
let charIndex = 0;
let typing = true;

const searchBar = document.getElementById("searchBar");

function typeEffect(){

if(!searchBar) return;

let currentText = suggestions[index];

if(typing){

charIndex++;

searchBar.setAttribute("placeholder", currentText.substring(0,charIndex));

if(charIndex === currentText.length){

typing = false;

setTimeout(typeEffect,1500);

return;

}

}else{

charIndex--;

searchBar.setAttribute("placeholder", currentText.substring(0,charIndex));

if(charIndex === 0){

typing = true;

index = (index + 1) % suggestions.length;

}

}

setTimeout(typeEffect,100);

}

typeEffect();


// SEARCH FILTER

if(searchBar){

searchBar.addEventListener("keyup", function(){

let searchValue = searchBar.value.toLowerCase();

let products = document.querySelectorAll(".card");

products.forEach(function(card){

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(searchValue)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}


// SIMPLE PRODUCT HOVER EFFECT

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