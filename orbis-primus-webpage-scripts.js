<!-- Show Slideshow -->
var slideIndex = 0;
var automaticSlideshow = true;
runSlides();
/* Automatic slideshow */
function runSlides() {
    if (automaticSlideshow === true) {
        setTimeout(runSlides, 3000); // Change image every 2 seconds
        changeSlide(1);
    }
}
/* Pause automatic slideshow */
function pauseSlides() {
    automaticSlideshow = false;
    var pauseButton = document.getElementById("pauseButton");
    pauseButton.style.display = "none"
    var playButton = document.getElementById("playButton");
    playButton.style.display = "block"
}
/* Play automatic slideshow */
function playSlides() {
    automaticSlideshow = true;
    var playButton = document.getElementById("playButton");
    playButton.style.display = "none"
    var pauseButton = document.getElementById("pauseButton");
    pauseButton.style.display = "block"
    runSlides();
}
<!-- Change to a slide relative to current by n -->
function changeSlide(n) {
    showSlides(slideIndex += n);
}
<!-- Set slideIndex to and show slide n -->
function showSlide(n) {
    showSlides(slideIndex = n);
}
<!-- Show slide n. Will hide all slides and dots, -->
<!-- then display the right ones for slide n. -->
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshowslide");
    var dots = document.getElementsByClassName("dot");
    var slide_dots = [];
    <!-- Get dots for slide n -->
    for (i = 0; i < dots.length; i += slides.length + 1)
        slide_dots.push(dots[i]);
    <!-- If trying to go right from last slide, go to first slide -->
    if (n > slides.length) {
        slideIndex = 1
    }
    <!-- If trying to go left from first slide, go to last slide -->
    if (n < 1) {
        slideIndex = slides.length
    }
    <!-- Hide all slides -->
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    <!-- Hide all dots -->
    for (i = 0; i < slide_dots.length; i++) {
        slide_dots[i].className = slide_dots[i].className.replace(" visible", "");
    }
    <!-- Display current slide -->
    slides[slideIndex - 1].style.display = "inline-block";
    <!-- Display correct dot -->
    slide_dots[slideIndex - 1].className += " visible";
}

<!-- Keep navigation bar from being scrolled out -->
window.addEventListener("scroll", function() {
    var topNav = document.getElementById('topnav');
    var slideshowHeight = document.getElementById('slideshowcontainer').offsetHeight;
    if (window.pageYOffset >= slideshowHeight) {
        topNav.style.position = 'fixed';
        topNav.style.top = 0;
    } else {
        topNav.style.position = 'relative';
        topNav.style.top = '';
    }
});

<!-- Change active navigation bar button -->
function setActiveNavBarButton(navBarButton) {
    var topNavButtons = document.getElementsByClassName("topnavbutton");
    <!-- Inactivate all page contents -->
    for (i = 0; i < topNavButtons.length; i++) {
        topNavButtons[i].className = topNavButtons[i].className.replace(" active", "")
    }
    <!-- Activate new button -->
    navBarButton.className += " active";
}
setActiveNavBarButton(document.getElementById("start"));
