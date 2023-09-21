const menuIcon = document.getElementById("header_menu");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function() {
    menu.classList.toggle("show");
});