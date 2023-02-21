var nav = document.querySelector('.top-header-right> nav')
var openMenu = document.querySelector('.bar-menu>.open')
var closeMenu = document.querySelector('.bar-menu>.close')
var barMenu = document.querySelector('.bar-menu')
var prevBtn = document.querySelector(".prevBtn");
var nextBtn = document.querySelector(".nextBtn");


var listenerFunctions = {
    navOpen: () => {
        openMenu.style.display = 'none'
        closeMenu.style.display = 'block'
        nav.style.display = 'block'
    },
    navClose: () => {
        openMenu.style.display = 'block'
        closeMenu.style.display = 'none'
        nav.style.display = 'none'
    }
}

var setuplisteners = () => {

    openMenu.onclick = listenerFunctions.navOpen
    closeMenu.onclick = listenerFunctions.navClose

}
