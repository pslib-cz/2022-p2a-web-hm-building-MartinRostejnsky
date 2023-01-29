window.onclick = (event) => {
    if (event.target.matches('.nav__button')) {
        document.querySelector("nav menu").classList.toggle("active");
    } else {
        document.querySelector("nav menu").classList.remove("active");
    }
}
