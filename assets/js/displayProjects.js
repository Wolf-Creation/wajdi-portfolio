let projectPerPage = 6
let totalPages = Math.ceil(project_table.length / projectPerPage)
let currentPage = 1
var pagination = document.querySelector('.pagination')
var projects_works = document.querySelector('#projects_works');
const categories = document.querySelectorAll('.cat');

let selectedCategory = 'all'
let cat_projects = []
let ProjectPerCategory = []
let index = 0

// Dispaly projects
function displayProjects(category) {

    let startIndex = (currentPage - 1) * projectPerPage;
    let endIndex = currentPage * projectPerPage;
    let paginatedProject = category.slice(startIndex, endIndex);

    //clear previous items
    projects_works.innerHTML = "";

    //create project items
    paginatedProject.forEach(function (project) {
        var projectHTML = `
            <div class="projects" id="projects">
                <div class="project-container">
                <div class="project-details">
                        <div class="project-name">${project.projectName}</div>
                        <div class="project-description">
                        ${project.projectDescription}
                        </div>
                    </div>
                    <div class="project-botton flex gap-1">
                        <a href='${project.link}' target='blank' class="view">View</a>
                        <span class='tools'>${project.tools.tool1}</span>
                        <span class='tools'>${project.tools.tool2}</span>
                        <span class='tools'>${project.tools.tool3}</span>
                        <span class='tools'>${project.tools.tool4}</span>
                    </div>
                    <div class="project-preview">
                        <video id='video' src="${project.video}" width="100%" loop muted poster="${project.image}"> </video>
                        <img class='play-icon' src="/assets/img/icon/play.png" alt="">
                    </div>
                </div>   
            </div> `

        projects_works.innerHTML += projectHTML

        let toolsIcon = document.querySelectorAll('.project-botton')
        toolsIcon.forEach(function (tool) {
            const spanTools = tool.querySelectorAll('.tools')
            for (let index = 0; index < spanTools.length; index++) {
                if (spanTools[index].innerHTML == "undefined") {
                    tool.removeChild(spanTools[index])
                }
            }
        });
    });
    updatePaginationButtons(totalPages)
    var video = document.getElementById("video");
    var projects = document.getElementById("projects");
    playVideo()
    index = 0
    cat_projects = []
    return selectedCategory
}

// Create pagination in html 
function createPagination(index, table) {

    pagination ? pagination.innerHTML = '' : null

    // Create Previous button
    let hRef = document.createElement('a')
    let previous = document.createElement("button")
    hRef.href = '#project'
    previous.classList.add('prevBtn')
    pagination.appendChild(hRef)
    hRef.appendChild(previous)
    previous.innerHTML = '&laquo;'

    // Create pagination buttons
    for (let i = 1; i <= index; i++) {
        let hRef = document.createElement('a')
        let button = document.createElement("button");
        hRef.href = '#project'
        button.classList.add('page');
        button.innerHTML = i;
        pagination.appendChild(hRef);
        hRef.appendChild(button)

        button.addEventListener("click", function () {
            currentPage = i;
            displayProjects(table);
            setActive(currentPage)
            /* playVideo() */
        });
    }

    // Create Next button
    let hRef2 = document.createElement('a')
    let next = document.createElement("button")
    hRef2.href = '#project'
    next.classList.add('nextBtn')
    pagination.appendChild(hRef2)
    hRef2.appendChild(next)
    next.innerHTML = '&raquo;'

    next.addEventListener('click', function () {
        currentPage++
        currentPage = currentPage > index ? index : currentPage;
        if (currentPage <= index) {
            displayProjects(table);
            setActive(currentPage)
            /* playVideo() */
        }
    })
    previous.addEventListener('click', function () {
        currentPage--
        currentPage = currentPage < 1 ? 1 : currentPage;
        if (currentPage > 0) {
            displayProjects(table);
            setActive(currentPage)
            /* playVideo() */
        }
    })
}

createPagination(totalPages, project_table)

//Update the pagination buttons 
function updatePaginationButtons(index) {
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

//set active to the current page
function setActive(index) {
    let pages = document.querySelectorAll('.page')
    // Remove active class from all buttons
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    // Add active class to the selected button
    pages[index - 1].classList.add("active");
}

//display projects for each category
categories.forEach(category => {
    category.addEventListener('click', function () {
        currentPage = 1
        // remove the actif class from all categories
        categories.forEach(cat => cat.classList.remove('actif'));
        // add the actif class to the selected category
        this.classList.add('actif');

        // show the projects based on the selected category
        selectedCategory = this.dataset.category;
        if (selectedCategory != 'all' && selectedCategory != 'Private') {
            project_table.forEach(project => {
                if (project.category === selectedCategory) {
                    cat_projects.push(project)
                    index++
                }
            });

            let totalPages = Math.ceil(index / projectPerPage)
            console.log(totalPages);
            ProjectPerCategory = cat_projects
            createPagination(totalPages, ProjectPerCategory)
            displayProjects(ProjectPerCategory)
            updatePaginationButtons(totalPages)
            setActive(currentPage)

            if (document.querySelectorAll('#video').length == 1) {
                document.getElementById('video').addEventListener("mouseover", function () {
                    document.getElementById('video').play();
                    document.getElementById('video').style.filter = 'blur(0)';
                    document.querySelector('.play-icon').style.display = "none"
                });
                document.getElementById('video').addEventListener("mouseout", function () {
                    document.getElementById('video').pause();
                    document.getElementById('video').style.filter = 'blur(1px)';
                    document.querySelector('.play-icon').style.display = "block"
                });
            }
        } else if (selectedCategory == 'Private') {
            function showItemsWithPassword() {
                const password = prompt("Enter password:");

                if (password === "2023") {
                    let totalPages = Math.ceil(private_table.length / projectPerPage)
                    let currentPage = 1
                    displayProjects(private_table)
                    createPagination(totalPages, private_table)
                    updatePaginationButtons(totalPages)
                    setActive(currentPage)
                } else {
                    alert("Incorrect password");
                }
            }
            showItemsWithPassword()
        }

        else {
            let totalPages = Math.ceil(project_table.length / projectPerPage)
            createPagination(totalPages, project_table)
            displayProjects(project_table)
            setActive(currentPage)
            /* var video = document.getElementById("video");
            playVideo() */
        }
    });
});

//read automatically video preview
function playVideo() {
    var playIcon = document.querySelectorAll('.play-icon')
    if (window.innerWidth > 697 && selectedCategory != 'Private') {
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
    else {
        for (let index = 0; index < video.length; index++) {
            playIcon[index].style.display = "none"
        }
    }
}

function autoPlayMobileVideo() {

    // Itération sur toutes les vidéos pour détecter si elles sont visibles
    for (var i = 0; i < video.length; i++) {
        var videoElement = video[i];
        var videoRect = videoElement.getBoundingClientRect();

        // Si la vidéo est visible sur la page, on la lance
        if (videoRect.top < window.innerHeight && videoRect.bottom >= 0) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    }
}

function showItemsWithPassword() {
    const password = prompt("Enter password:");

    if (password === "2023") {
        // Replace this with the code that shows the items
        console.log("Items are displayed");
    } else {
        alert("Incorrect password");
    }
}
