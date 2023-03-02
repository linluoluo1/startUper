// Open section vars
const openIdeaSecBtn = document.getElementById('open-idea-sec-btn');
// Variants vars
const projectBtn = document.getElementById("project-btn");
const draftBtn = document.getElementById("draft-btn");
const projectSec = document.getElementById("project-sec");
const draftSec = document.getElementById("draft-sec");
// Complited idea vars
const ideaItemsBtn = document.getElementById("idea-items-btn");
const ideaItemsArea = document.getElementById("idea-items-area");
const ideaItemsInput = document.getElementById("idea-items-input")
const dotsBtn = document.getElementById('dots-btn');
const editMenu = document.getElementById('edit-menu');
const ideaDescBtn = document.getElementById('idea-desc-btn');
const ideaAddBtn = document.getElementById('idea-add-btn');
const ideaDeleteBtn = document.getElementById('idea-delete-btn');
const projectEditArea = document.getElementById('project-idea');
const mainIdea = document.getElementById('main-idea');
const ideaSecInfo = document.getElementById('idea-sec-info');
const ideaVarBtn = document.getElementById('idea-variants-btn');

// Next section

const teamSec = document.getElementById('team')



// Open Idea section
openIdeaSecBtn.addEventListener('click', () => {
    ideaSecInfo.classList.toggle('idea-sec-info-show');
    ideaVarBtn.classList.add('idea-variants-btn-show');
    bodyShadow.classList.toggle('body-shadow-active');
    teamSec.classList.add('team-section-show');
    console.log(typeof localStorage.getItem('name'))


})

// Main name edit menu btn
dotsBtn.addEventListener('click', () => {
    editMenu.classList.toggle('edit-menu')
})

// Describing idea section
// Visibility of complete vision of project 
projectBtn.addEventListener('click', () => {
    projectSec.classList.toggle("section-visibility");
    draftBtn.classList.toggle('btn-hide');
})

// Visibility of drafts of project 
draftBtn.addEventListener('click', () => {
    draftSec.classList.toggle("section-visibility");
    projectBtn.classList.toggle('btn-hide');
})

// Adding main ideas from input
ideaItemsBtn.addEventListener('click', () => {
    let span = document.createElement('span');
    span.className = "idea-item-bar";
    span.style.cssText = ` padding: 10px`
    span.innerHTML = ideaItemsInput.value;
    ideaItemsArea.append(span);
    ideaItemsInput.value = "";

})

// Edit main idea btn
ideaDescBtn.addEventListener('click', () => {
    projectEditArea.classList.toggle('idea-desc')
})

// Add main idea btn
ideaAddBtn.addEventListener('click', () => {

    if (projectEditArea.value) {
        let span = document.createElement('span');
        span.className = "main-idea-block";
        span.style.cssText = ` padding: 10px`
        span.innerHTML = projectEditArea.value;
        mainIdea.append(span);
        console.log(projectEditArea.value);
        projectEditArea.value = "";
    }



    if (projectEditArea.classList.contains('idea-desc')) {
        projectEditArea.classList.remove('idea-desc')
    }
})

// Delete main idea btn
ideaDeleteBtn.addEventListener('click', () => {
    mainIdea.innerHTML = "";
})

//Idea section ends