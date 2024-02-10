// main pagination

var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// end
function homepg() {
    document.title = "M PRODUCTION | Home";
}
function aboutpg() {
    document.title = "M PRODUCTION | About";
}
function supportpg() {
    document.title = "M PRODUCTION | Service";
}
function porfospg() {
    document.title = "M PRODUCTION | Porfolio's";
}
function staffpg() {
    document.title = "M PRODUCTION | Staff's";
}
function contactpg() {
    document.title = "M PRODUCTION | Contact";
}

// progress bar

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// end

