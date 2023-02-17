
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


function showMore() {
    let startIndex = (currentPage - 1) * 6;
    let endIndex = currentPage * 6;
    let paginatedProject = project_table.slice(startIndex, endIndex);

    //clear previous items
    var projects_works = document.querySelector('#projects_works');
    projects_works.innerHTML = "";

    //create project items
    paginatedProject.forEach(function (project) {
        var projectHTML = `
    <div class="projects">
        <div class="project-container">
            <div class="project-details">
                <div class="project-name">${project.projectName}</div>
                <div class="project-description">
                ${project.projectDescription}
                </div>
            </div>
            <div class="project-botton flex gap-5">
                <a href='${project.link}' target='blank' class="view">View</a>
                <span class='tools'>${project.tools.tool1}</span>
                <span class='tools'>${project.tools.tool2}</span>
                <span class='tools'>${project.tools.tool3}</span>
                <span class='tools'>${project.tools.tool4}</span>
            </div>
            <div class="project-preview">
                <video id='video' src="${project.video}" width="105%" loop muted poster="${project.image}"> </video>
                <img class='play-icon' src="/assets/img/icon/play.png" alt="">
            </div>
        </div>   
    </div> `
        projects_works.innerHTML += projectHTML

        /*  spanTools = document.querySelectorAll('.tools') */
        /*var toolsValues = Object.values(project.tools) */

        let toolsIcon = document.querySelectorAll('.project-botton')
        toolsIcon.forEach(function (tool) {
            const spanTools = tool.querySelectorAll(' .tools')
            for (let index = 0; index < spanTools.length; index++) {
                if (spanTools[index].innerHTML == "undefined") {
                    tool.removeChild(spanTools[index])
                }
            }
        });
    })

    var pagination = document.querySelector('.pagination')

    pagination ? pagination.innerHTML = '' : null

    // Create show more button
    let show = document.createElement("div")
    show.classList.add('afficher')
    pagination.appendChild(show)
    show.innerHTML = 'Show more'


}

