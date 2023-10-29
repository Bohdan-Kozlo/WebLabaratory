const menuIcon = document.getElementById("header_menu");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function() {
    menu.classList.toggle("show");
});

document.getElementById('header_menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});