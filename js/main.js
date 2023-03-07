//Loading effects
var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
        } else {
            loader.style.opacity = opacity;
            window.setTimeout(function() {
                loadNow(opacity - 0.01);
            }, 30);
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
var navbar__list = document.getElementById("navbar__list")
function showMenu(){
    navbar__list.style.right = "0"
}
function hideMenu(){
    navbar__list.style.right = "-200px"
}