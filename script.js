// =======================================
// Ahmad Digital Store
// script.js Part 1
// =======================================

// Loader

window.addEventListener("load", function () {

setTimeout(function () {

document.getElementById("loader").style.display = "none";

},1500);

});

// ================================
// Mobile Menu
// ================================

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = function(){

if(mobileMenu.style.display=="block"){

mobileMenu.style.display="none";

}else{

mobileMenu.style.display="block";

}

};

// ================================
// Owner Popup
// ================================

const ownerButton=document.getElementById("ownerButton");

const ownerPopup=document.getElementById("ownerPopup");

const closePopup=document.getElementById("closePopup");

ownerButton.onclick=function(){

ownerPopup.style.display="flex";

}

closePopup.onclick=function(){

ownerPopup.style.display="none";

}

window.onclick=function(e){

if(e.target==ownerPopup){

ownerPopup.style.display="none";

}

}

// ================================
// Back To Top Button
// ================================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 ||

document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ================================
// Copy EasyPaisa Number
// ================================

const copyBtn=document.getElementById("copyNumber");

if(copyBtn){

copyBtn.onclick=function(){

navigator.clipboard.writeText("03476650206");

alert("EasyPaisa Number Copied");

}

}
// =======================================
// Search Bar
// =======================================

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".service-card");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =======================================
// Language Switch
// =======================================

const languageBtn=document.getElementById("languageBtn");

let english=false;

if(languageBtn){

languageBtn.onclick=function(){

english=!english;

if(english){

languageBtn.innerHTML="English";

document.title="Ahmad Digital Store";

}else{

languageBtn.innerHTML="اردو | EN";

document.title="Ahmad Digital Store";

}

}

}

// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =======================================
// Review Cards Animation
// =======================================

const reviewCards=document.querySelectorAll(".review-card");

const reviewObserver=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

reviewCards.forEach(function(card){

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.7s";

reviewObserver.observe(card);

});

// =======================================
// Service Cards Animation
// =======================================

const serviceCards=document.querySelectorAll(".service-card");

const serviceObserver=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

serviceCards.forEach(function(card){

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s";

serviceObserver.observe(card);

});
// =======================================
// FAQ Accordion
// =======================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item){

item.addEventListener("click",function(){

this.classList.toggle("active");

});

});

// =======================================
// Counter Animation
// =======================================

const counters = document.querySelectorAll(".counter-card h2");

counters.forEach(function(counter){

const target = parseInt(counter.innerText);

let count = 0;

const speed = target / 80;

function updateCounter(){

if(count < target){

count += speed;

counter.innerText = Math.floor(count) + "+";

requestAnimationFrame(updateCounter);

}else{

if(target == 4){

counter.innerText = "4.9★";

}else if(target == 24){

counter.innerText = "24/7";

}else{

counter.innerText = target + "+";

}

}

}

updateCounter();

});

// =======================================
// Floating WhatsApp Animation
// =======================================

const whatsapp = document.querySelector(".floating-whatsapp");

if(whatsapp){

setInterval(function(){

whatsapp.classList.toggle("pulse");

},1000);

}

// =======================================
// Navbar Shadow On Scroll
// =======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",function(){

if(window.scrollY > 80){

navbar.style.boxShadow = "0 15px 40px rgba(125,60,255,.45)";

}else{

navbar.style.boxShadow = "0 10px 30px rgba(125,60,255,.20)";

}

});

// =======================================
// Active Navigation Link
// =======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",function(){

let current = "";

sections.forEach(function(section){

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(function(link){

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});
// =======================================
// Welcome Popup (Only First Visit)
// =======================================

window.addEventListener("load", function () {

if (!localStorage.getItem("welcomeShown")) {

setTimeout(function () {

alert("Welcome to Ahmad Digital Store 💜");

localStorage.setItem("welcomeShown", "true");

}, 1200);

}

});

// =======================================
// Offer Countdown Timer
// =======================================

const timer = document.getElementById("offerTimer");

if (timer) {

let hours = 23;
let minutes = 59;
let seconds = 59;

setInterval(function () {

seconds--;

if (seconds < 0) {
seconds = 59;
minutes--;
}

if (minutes < 0) {
minutes = 59;
hours--;
}

if (hours < 0) {
hours = 23;
minutes = 59;
seconds = 59;
}

timer.innerHTML =
hours + "h : " +
minutes + "m : " +
seconds + "s";

},1000);

}

// =======================================
// Scroll Progress Bar
// =======================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function(){

if(progressBar){

let scrollTop = document.documentElement.scrollTop;

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

}

});

// =======================================
// Copy WhatsApp Number
// =======================================

const copyWhatsapp = document.getElementById("copyWhatsapp");

if(copyWhatsapp){

copyWhatsapp.onclick = function(){

navigator.clipboard.writeText("03290050285");

alert("WhatsApp Number Copied");

}

}

// =======================================
// Buy Buttons Animation
// =======================================

const buyButtons =
document.querySelectorAll(".buy-btn");

buyButtons.forEach(function(btn){

btn.addEventListener("mouseenter",function(){

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",function(){

btn.style.transform="scale(1)";

});

});

// =======================================
// Console Message
// =======================================

console.log(
"Ahmad Digital Store Website Loaded Successfully."
);
// =======================================
// Customer Reviews Auto Slider
// =======================================

const reviewSlider = document.querySelector(".reviews-slider");

if(reviewSlider){

setInterval(function(){

reviewSlider.scrollBy({

left:350,

behavior:"smooth"

});

if(reviewSlider.scrollLeft + reviewSlider.clientWidth >= reviewSlider.scrollWidth){

reviewSlider.scrollTo({

left:0,

behavior:"smooth"

});

}

},4000);

}

// =======================================
// Auto Close Mobile Menu
// =======================================

document.querySelectorAll(".mobile-menu a").forEach(function(link){

link.addEventListener("click",function(){

mobileMenu.style.display="none";

});

});

// =======================================
// Enter Key Search
// =======================================

if(searchInput){

searchInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

e.preventDefault();

}

});

}

// =======================================
// Buy Button Click Effect
// =======================================

document.querySelectorAll(".buy-btn").forEach(function(btn){

btn.addEventListener("click",function(){

btn.innerHTML="Redirecting...";

setTimeout(function(){

btn.innerHTML="Buy Now";

},2000);

});

});

// =======================================
// Card Hover Animation
// =======================================

document.querySelectorAll(".service-card").forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0) scale(1)";

});

});

// =======================================
// Keyboard Shortcut
// Press "/" to focus Search
// =======================================

document.addEventListener("keydown",function(e){

if(e.key==="/"){

e.preventDefault();

if(searchInput){

searchInput.focus();

}

}

});

// =======================================
// Website Ready
// =======================================

console.log("Ahmad Digital Store v2.0 Ready");
