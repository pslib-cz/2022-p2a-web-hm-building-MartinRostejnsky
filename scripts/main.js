function showMenu() {
    var items = document.querySelectorAll(".nav-item");
    Array.prototype.forEach.call(items, function(el) {
        el.classList.toggle("active");
    })
}

window.onclick = function(event) {
    var active = document.querySelectorAll(".active")
    if (!event.target.matches('.menubtn')) {
        Array.prototype.forEach.call(active, function(el) {
            el.classList.remove("active");
            console.log(event.target);
        });
    }
}