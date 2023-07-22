// hamburger menu
const hamburger = document.getElementById("btn-menu");
const navigation = document.getElementById("menu");

function toggleMenu() {
    hamburger.classList.toggle("open");
    navigation.classList.toggle("hidden");
    document.body.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
}


hamburger.addEventListener("click", toggleMenu);