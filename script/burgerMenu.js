const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        hamburger.classList.remove('open');
    } else {
        menu.classList.add("showMenu");
        hamburger.classList.add('open');
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


