function sRight(target) {
    target.parentNode.querySelector('.services-items').scrollLeft += 200;
}

function sLeft(target) {
    target.parentNode.querySelector('.services-items').scrollLeft -= 200;
}

function showMenu() { 
    document.getElementById("menu").classList.toggle("responsive");
}