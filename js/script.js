var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var containers = document.getElementsByClassName("container");

    for (var i = 0; i < containers.length; i++) {
        if (prevScrollpos > currentScrollPos) {
            containers[i].style.top = "0";
        } else {
            containers[i].style.top = "-50px";
        }
    }

    prevScrollpos = currentScrollPos;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let firstSlide = document.getElementById("firstSlide");

    // Check if the first slide should be included in the array
    if (firstSlide) {
        slides = [firstSlide].concat(Array.from(slides));
    }

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}

