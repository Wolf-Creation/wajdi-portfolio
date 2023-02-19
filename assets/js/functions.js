
function hidePagination() {
    // Add hide class to the pagination div
    pagination.classList.add('hide')
}

function showPagination() {
    // remove hide class from the pagination div
    pagination.classList.remove('hide')
}

// insert hidden class to bar menu icon
function insertHidden() {
    if (window.innerWidth > 697) {
        barMenu.classList.add('hidden')
        nav.style.display = 'block'
    } else {
        barMenu.classList.remove('hidden')
        nav.style.display = 'none'
        closeMenu.style.display = 'none'
        openMenu.style.display = 'block'
    }
}

insertHidden()

//scroll button function
var scrollTop = document.getElementById("scroll-top-btn")
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
});
scrollTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

