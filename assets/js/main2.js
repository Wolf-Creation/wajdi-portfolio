var screen_width = window.innerWidth
window.onload = () => {
    blogs()
    numPages()
    displayProjects()
    setActive(1)
    playVideo()
    if (window.innerWidth < 1080) {
        document.querySelector('.slider-video').src = "/assets/img/slider/slider_mobile_x264.mp4"
    }
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

