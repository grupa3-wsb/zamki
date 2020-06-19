const toggleMenu = document.querySelector(".js-toggle-menu"),
    menuItems = document.querySelector(".nav-items"),
    navItem = document.querySelector(".nav-item");

toggleMenu.addEventListener('click', function () {

    if (toggleMenu.classList.contains('open')) {
        toggleMenu.classList.remove("open");
        menuItems.style.display = "none";
    } else {
        toggleMenu.classList.add("open");
        menuItems.style.display = "flex";
    }
});

navItem.addEventListener('click', function () {
    menuItems.style.display = "none";
})