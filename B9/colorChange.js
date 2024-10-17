// Function to change the color of the paragraph
function changeColor() {
    var paragraph = document.getElementById("colorText");
    paragraph.style.color = "blue"; // Change the color to blue
}

// Add event listener to the button
window.onload = function() {
    var button = document.getElementById("colorButton");
    button.addEventListener("click", changeColor);
};
