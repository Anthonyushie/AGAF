//Loading effects
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
        } else {
            loader.style.opacity = opacity;
            window.setTimeout(function() {
                loadNow(opacity - 0.03);
            }, 50);
        }
    }

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});



//code for toggle menu
var navLinks = document.getElementById("navLinks")
function showMenu(){
    navLinks.style.right = "0"
}
function hideMenu(){
    navLinks.style.right = "-200px"
}