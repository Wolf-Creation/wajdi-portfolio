window.onload = () => {
    displayProjects(project_table)
    setActive(1)
    if (window.innerWidth < 1080) {
        document.querySelector('.slider-video').src = "/assets/img/slider/slider_mobile_x264.mp4"
    }
}

window.onresize = function () {
    currentPage = 1
    displayProjects(project_table)
    setActive(1)
    insertHidden()
}

setuplisteners()