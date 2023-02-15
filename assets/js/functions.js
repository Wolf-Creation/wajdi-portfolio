
//Get number of blogs
var blogs = () => {
    var screen_width = window.innerWidth
    if (screen_width > 870) {
        var blogs_per_width = Math.trunc((screen_width - (screen_width * 0.16)) / 365)
        return blogs_per_page = blogs_per_width * 2
    } else {
        return blogs_per_page = project_table.length
    }
}

//Get number of pages
var numPages = () => {
    return Math.ceil(project_table.length / blogs())
}

let currentPage = 1;
/* let totalPages = Math.ceil(project_table.length / blogs()); */
var pagination = document.querySelector('.pagination')


// Create pagination in html 
function createPagination() {

    pagination ? pagination.innerHTML = '' : null

    // Create Previous button
    let hRef = document.createElement('a')
    let previous = document.createElement("button")
    hRef.href = '#projects'
    previous.classList.add('prevBtn')
    pagination.appendChild(hRef)
    hRef.appendChild(previous)
    previous.innerHTML = '&laquo;'

    // Create pagination buttons
    for (let i = 1; i <= numPages(); i++) {
        let hRef = document.createElement('a')
        let button = document.createElement("button");
        hRef.href = '#projects'
        button.classList.add('page');
        button.innerHTML = i;
        pagination.appendChild(hRef);
        hRef.appendChild(button)

        button.addEventListener("click", function () {
            currentPage = i;
            displayProjects();
            setActive(currentPage)
            playVideo()
        });
    }

    // Create Next button
    let hRef2 = document.createElement('a')
    let next = document.createElement("button")
    hRef2.href = '#projects'
    next.classList.add('nextBtn')
    pagination.appendChild(hRef2)
    hRef2.appendChild(next)
    next.innerHTML = '&raquo;'

    var screen_width = window.innerWidth
    if (screen_width < 868) {
        hidePagination()
    } else {
        showPagination()
    }

    next.addEventListener('click', function () {
        currentPage++
        currentPage = currentPage > numPages() ? numPages() : currentPage;
        if (currentPage <= numPages()) {
            displayProjects();
            setActive(currentPage)
            playVideo()
        }
    })
    previous.addEventListener('click', function () {
        currentPage--
        currentPage = currentPage < 1 ? 1 : currentPage;
        if (currentPage > 0) {
            displayProjects();
            setActive(currentPage)
            playVideo()
        }
    })
}

createPagination()


//Update the pagination buttons 
function updatePaginationButtons() {
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");

    if (currentPage === 1) {
        prevBtn.style.opacity = "50%";
        nextBtn.style.opacity = "100%";
    } else if (currentPage === numPages()) {
        nextBtn.style.opacity = "50%";
        prevBtn.style.opacity = "100%"
    }
    else {
        nextBtn.style.opacity = "100%";
        prevBtn.style.opacity = "100%"
    }
}


function setActive(index) {
    let pages = document.querySelectorAll('.page')
    // Remove active class from all buttons
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    // Add active class to the selected button
    pages[index - 1].classList.add("active");
}



// Dispaly projects
function displayProjects() {

    let startIndex = (currentPage - 1) * blogs();
    let endIndex = currentPage * blogs();
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

    });
    updatePaginationButtons()
    var video = document.getElementById("video");
}


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


//Category filter function
const categories = document.querySelectorAll('.cat');
const projects = document.querySelectorAll('.projects');
let selectedCategory = 'all'
let cat_projects = []
let ProjectPerCategory = []
let index = 0
categories.forEach(category => {
    category.addEventListener('click', function () {
        currentPage = 1
        // remove the actif class from all categories
        categories.forEach(cat => cat.classList.remove('actif'));
        // add the actif class to the selected category
        this.classList.add('actif');

        // show the projects based on the selected category
        selectedCategory = this.dataset.category;
        if (selectedCategory != 'all') {
            project_table.forEach(project => {
                if (project.category === selectedCategory) {
                    cat_projects.push(project)
                    index++
                }
            });
            let projectsNumber = index
            ProjectPerCategory = cat_projects
            hidePagination()
            createPaginationCategory(projectsNumber)
            updatePag(Math.ceil(projectsNumber / blogs()))
            displayProjectsCat()
            console.log(document.querySelectorAll('#video'));
            playVideo()
            if (document.querySelectorAll('#video').length == 1) {
                document.getElementById('video').addEventListener("mouseover", function () {
                    document.getElementById('video').play();
                });
                document.getElementById('video').addEventListener("mouseout", function () {
                    document.getElementById('video').pause();
                });
            }

        }
        else {
            createPagination()
            setActive(currentPage)
            displayProjects()
            var video = document.getElementById("video");
            playVideo()
        }
    });
});

//Create pagination for each category
function createPaginationCategory(event) {
    var numPage = Math.ceil(event / blogs())
    pagination ? pagination.innerHTML = '' : null
    // Create Previous button
    let hRef = document.createElement('a')
    let previous = document.createElement("button")
    hRef.href = '#projects'
    previous.classList.add('prevBtn')
    pagination.appendChild(hRef)
    hRef.appendChild(previous)
    previous.innerHTML = '&laquo;'

    // Create pagination buttons
    for (let i = 1; i <= numPage; i++) {
        let hRef = document.createElement('a')
        let button = document.createElement("button");
        hRef.href = '#projects'
        button.classList.add('page');
        button.innerHTML = i;
        pagination.appendChild(hRef);
        hRef.appendChild(button)

        button.addEventListener("click", function () {
            currentPage = i;
            displayProjectsCat()
            updatePag(numPage)
            playVideo()
        });
    }

    // Create Next button
    let hRef2 = document.createElement('a')
    let next = document.createElement("button")
    hRef2.href = '#projects'
    next.classList.add('nextBtn')
    pagination.appendChild(hRef2)
    hRef2.appendChild(next)
    next.innerHTML = '&raquo;'

    var screen_width = window.innerWidth
    if (screen_width < 868) {
        hidePagination()
    } else {
        showPagination()
    }

    next.addEventListener('click', function () {
        currentPage++
        currentPage = currentPage > numPage ? numPage : currentPage;
        if (currentPage <= numPage) {
            displayProjectsCat();
            updatePag(numPage)
            playVideo()
        }
    })
    previous.addEventListener('click', function () {
        currentPage--
        currentPage = currentPage < 1 ? 1 : currentPage;
        if (currentPage > 0) {
            displayProjectsCat();
            updatePag(numPage)
            playVideo()
        }
    })

}

//Display Projects for each category
function displayProjectsCat() {
    let startIndex = (currentPage - 1) * blogs();
    let endIndex = currentPage * blogs();
    let paginatedProject = ProjectPerCategory.slice(startIndex, endIndex);
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
            <div class="project-botton flex gap-10">
                <a href='${project.link}' target='blank' class="view">View</a>
                <span class="tools">${project.tools}</span>
            </div>
            <div class="project-preview">
                <video id='video' src="${project.video}" width="105%" loop muted poster="${project.image}"> </video>
                <img class='play-icon' src="/assets/img/icon/play.png" alt="">
            </div>
        </div>   
    </div> `
        projects_works.innerHTML += projectHTML
    });
    setActive(currentPage)
    index = 0
    cat_projects = []
    return selectedCategory
}


function updatePag(index) {
    var prevBtn = document.querySelector(".prevBtn");
    var nextBtn = document.querySelector(".nextBtn");
    if (currentPage === 1 & index != 1) {
        prevBtn.style.opacity = "50%";
        nextBtn.style.opacity = "100%";
    } else if (currentPage === index & index != 1) {
        nextBtn.style.opacity = "50%";
        prevBtn.style.opacity = "100%"
    }
    else if (index = 1) {
        prevBtn.style.opacity = "50%";
        nextBtn.style.opacity = "50%";
    }
    else {
        nextBtn.style.opacity = "100%";
        prevBtn.style.opacity = "100%"
    }

}


function playVideo() {
    var playIcon = document.querySelectorAll('.play-icon')
    for (let index = 0; index < video.length; index++) {
        video[index].addEventListener("mouseover", function () {
            video[index].play();
            video[index].style.filter = 'blur(0)';
            playIcon[index].style.display = "none"
        });
        video[index].addEventListener("mouseout", function () {
            video[index].pause();
            video[index].style.filter = 'blur(1px)';
            playIcon[index].style.display = "block"
        });
    }
}

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

