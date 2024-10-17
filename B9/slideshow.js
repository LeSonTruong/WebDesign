var currentSlide = 0; // Starting slide index
var slides = document.getElementsByClassName("slide"); // Get all slide elements

// Hide all slides except the current one
function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[index].style.display = "block"; // Show the selected slide
}

// Go to the previous slide
function previousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop to the last slide
    }
    showSlide(currentSlide);
}

// Go to the next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    }
    showSlide(currentSlide);
}

// Initialize the slideshow by showing the first slide
window.onload = function() {
    showSlide(currentSlide);

    // Automatically move to the next slide every 5 seconds (5000 milliseconds)
    setInterval(function() {
        nextSlide();
    }, 3000);
};
