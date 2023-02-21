/* var getData = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve ([
                {
                    projectName : "Dengry.619",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Figma",
                    details :{
                        detail1 :"Designing template",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "Pointini",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Figma",
                    details :{
                        detail1 :"Designing template",
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "SOS Remorquage",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Figma",
                    details :{
                        detail1 :"Designing template",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "PERSOMODE",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Figma",
                    details :{
                        detail1 :"Designing template",
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "DRINKS",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Figma",
                    details :{
                        detail1 :"Designing template",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "Box Express",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Photoshop",
                    details :{
                        detail1 :"Affiche publicitaire",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "Aftercode",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Photoshop",
                    details :{
                        detail1 :"Affiche publicitaire",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                },
                {
                    projectName : "MIT",
                    projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
                    tools : "Photoshop",
                    details :{
                        detail1 :"Affiche publicitaire",
                        detail2 : "Logo creation"
                    },
                    image: "/assets/img/projects/Logofolio.jpg"
                }
            ])
        },2000)
    })
}

var useData = async ()=>{
    var data = await getData()
    var projects = document.getElementById('projects_works')
    projects? projects.innerHTML = "" : null

    data.forEach(project => {
        var projectItem = `
                <div class="projects">
                    <div class="preject-container">
                        <div class="project-details">
                            <div class="project-name">${project.projectName}</div>
                            <div class="project-description">
                            ${project.projectDescription}
                            </div>
                        </div>
                        <div class="project-botton flex gap-10">
                            <span class="view">View</span>
                            <span class="tools">${project.tools}</span>
                        </div>
                        <div class="project-preview">
                            <div class="project-name">${project.projectName}</div>
                            <ul>
                                <li>${project.details.detail1}</li>
                                <li>${project.details.detail2}</li>
                            </ul>
                            <div class="project-img">
                                <img src="${project.image}" width="220" alt="">
                            </div>
                        </div>
                    </div>   
                </div> 
                `
                projects.innerHTML += projectItem
                console.log(projectItem);
    });
}

useData() */


var cat = document.querySelector(".cat")
cat.style.backgroundColor = '#DDBA00'
cat.style.color = 'black'



//Pagination

var current_page = 1
function blogs() {
    var screen_width = window.innerWidth
    var blogs_per_width = Math.trunc((screen_width-(screen_width*0.16)+60)/322)
    return blogs_per_page = blogs_per_width*2
}


var project_table = [
    {
        projectName : "Dengry.619",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Figma",
        details :{
            detail1 :"Designing template",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "Pointini",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Figma",
        details :{
            detail1 :"Designing template",
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "SOS Remorquage",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Figma",
        details :{
            detail1 :"Designing template",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "PERSOMODE",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Figma",
        details :{
            detail1 :"Designing template",
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "DRINKS",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Figma",
        details :{
            detail1 :"Designing template",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "Box Express",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Photoshop",
        details :{
            detail1 :"Affiche publicitaire",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "Aftercode",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Photoshop",
        details :{
            detail1 :"Affiche publicitaire",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    },
    {
        projectName : "MIT",
        projectDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem vero, nisi officiis fugit minima praesentium quam illum dolor vitae?",
        tools : "Photoshop",
        details :{
            detail1 :"Affiche publicitaire",
            detail2 : "Logo creation"
        },
        image: "/assets/img/projects/Logofolio.jpg"
    }]

function prevPage() {
    if (current_page >1) {
        current_page--
        changePage(current_page)
    }
}

function nextPage(){
    if (current_page < numPage ) {
        current_page++
        changePage(current_page)
    }
}

function numPage() {
    return Math.ceil(project_table.length / blogs())
}


function changePage(page) {
    var btn_prev = document.getElementById('btn_prev')
    var btn_next = document.getElementById('btn_next')
    var projects = document.getElementById('projects_works')
    var page_span = document.getElementById('pages')
    
    //page validation
    
    if (page < 1) {
        page = 1
    }
    if (page > numPage) {
        page = numPage()
    }
    
    projects? projects.innerHTML = "" : null
    
    
    for (let index = (page-1)*blogs(); index < (page*blogs()); index++) {
            var projectItem = `
                <div class="projects">
                    <div class="preject-container">
                        <div class="project-details">
                            <div class="project-name">${project_table[index].projectName}</div>
                            <div class="project-description">
                            ${project_table[index].projectDescription}
                            </div>
                        </div>
                        <div class="project-botton flex gap-10">
                            <span class="view">View</span>
                            <span class="tools">${project_table[index].tools}</span>
                        </div>
                        <div class="project-preview">
                            <div class="project-name">${project_table[index].projectName}</div>
                            <ul>
                                <li>${project_table[index].details.detail1}</li>
                                <li>${project_table[index].details.detail2}</li>
                            </ul>
                            <div class="project-img">
                                <img src="${project_table[index].image}" width="220" alt="">
                            </div>
                        </div>
                    </div>   
                </div> 
                `
            projects.innerHTML += projectItem
    }
    
    
    if (page == 1) {
        btn_prev.style.backgroundColor = '#0f0f0f'
    }
    else{
        btn_prev.style.visibility = 'visible'
    }
    
    if (page == numPage()) {
        btn_next.style.backgroundColor= '#0f0f0f'
    }
    else{
        btn_next.style.visibility = 'visible'
    }
}

function Pages() {
    var page_span = document.getElementById('pages')
    page_span.innerHTML= ''
    for (let index = 0; index < numPage(); index++) {
        var span = document.createElement('span')
        span.setAttribute('class','page')
        document.getElementById('pages').appendChild(span)
        span.innerHTML = index+1
        console.log(span);
    }
}


window.onload = function () {
    changePage(1)
    Pages()
}

window.onresize = function () {
    changePage(1)
    Pages()
}

btn_next.onclick = function () {
    nextPage()
    changePage(current_page)
}
