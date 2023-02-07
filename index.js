const projectBtn = document.getElementById("project-btn");
const draftBtn = document.getElementById("draft-btn");
const projectSec = document.getElementById("project-sec");
const draftSec = document.getElementById("draft-sec");
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
const openIdeaSecBtn = document.getElementById('open-idea-sec-btn');
const ideaSecInfo = document.getElementById('idea-sec-info');
const ideaVarBtn = document.getElementById('idea-variants-btn');
const bodyShadow = document.querySelector('.body-shadow');
const openPlanSecBtn = document.getElementById('open-plan-sec-btn');
const planSecInfo = document.getElementById('plan-sec-info');
const planSection = document.getElementById('plan-section');
// Plan and steps input/output
const stepsItemsInput = document.getElementById('steps-items-input');
const stepsItemsBtn = document.querySelectorAll("#steps-items-btn");
// const shouldItemsBtn = document.getElementById('should-items-btn');
// const wouldItemsBtn = document.getElementById('would-items-btn');
// const ifHaveTimeItemsBtn = document.getElementById('if-have-time-items-btn');
const mustDoSteps = document.getElementById('must-do-steps');
const shouldDoSteps = document.getElementById('should-do-steps');
const wouldDoSteps = document.getElementById('would-do-steps');
const ifHaveTimeDoSteps = document.getElementById('if-have-time-do-steps');

// Open Idea section
openIdeaSecBtn.addEventListener('click', () => {
    ideaSecInfo.classList.toggle('idea-sec-info-show');
    ideaVarBtn.classList.add('idea-variants-btn-show');
    bodyShadow.classList.toggle('body-shadow-active')
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

// Open Plan section
openPlanSecBtn.addEventListener('click', () => {
    planSecInfo.classList.toggle('plan-sec-info-show');
    planSection.classList.add('plan-section-show');
    bodyShadow.classList.toggle('body-shadow-active')
})

// Plan and steps input and output
// ideaItemsBtn.addEventListener('click', () => {
//     let span = document.createElement('span');
//     span.className = "idea-item-bar";
//     span.style.cssText = ` padding: 10px`
//     span.innerHTML = ideaItemsInput.value;
//     ideaItemsArea.append(span);
//     ideaItemsInput.value = "";

// })


stepsItemsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains("must-do-step")) {
            returnSteps(stepsItemsInput, mustDoSteps)
        } else if (btn.classList.contains("should-do-step")) {
            returnSteps(stepsItemsInput, shouldDoSteps)
        } else if (btn.classList.contains("would-do-step")) {
            returnSteps(stepsItemsInput, wouldDoSteps)
        } else {
            returnSteps(stepsItemsInput, ifHaveTimeDoSteps)
        }
    })
})

// Function to return steps from input to exact output
function returnSteps(input, output) {
    let span = document.createElement('span');
    span.className = "tasks-area";
    span.style.cssText = ` padding: 8px`
    span.innerHTML = input.value;
    output.append(span)
    input.value = "";
}
