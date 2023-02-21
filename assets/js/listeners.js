var nav = document.querySelector('.main')
var menuNav = document.querySelector('.menu-button')
var menuClose = document.querySelector('.close-button')

var listenerFunctions = {
    openNav: ()=> {
        menuNav.style.display = 'none'
        menuClose.style.display ='block'
        nav.style.display = 'block'
        
    },

    closeNav: ()=> {
        menuNav.style.display = 'block'
        menuClose.style.display = 'none'
        nav.style.display = 'none'
    }
}

var setuplisteners =()=>{
    menuNav.onclick = listenerFunctions.openNav
    menuClose.onclick = listenerFunctions.closeNav
}



