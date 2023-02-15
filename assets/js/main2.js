var screen_width = window.innerWidth
window.onload = () => {
    blogs()
    numPages()
    displayProjects()
    setActive(1)
    playVideo()
}

window.onresize = function () {
    currentPage = 1
    blogs()
    numPages()
    createPagination()
    displayProjects()
    setActive(1)
    insertHidden()
    playVideo()
}

setuplisteners()

