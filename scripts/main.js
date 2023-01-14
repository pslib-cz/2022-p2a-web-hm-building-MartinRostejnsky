function showMenu() {
    document.querySelector("nav menu").classList.toggle("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        document.querySelector("nav menu").classList.remove("active");
    }
}