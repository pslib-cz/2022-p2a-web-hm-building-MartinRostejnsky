window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        document.querySelector("nav menu").classList.remove("active");
    } else {
        document.querySelector("nav menu").classList.toggle("active");
    }
}