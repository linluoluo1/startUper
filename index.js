
// Plan and steps input/output
const openPlanSecBtn = document.getElementById('open-plan-sec-btn');
const planSecInfo = document.getElementById('plan-sec-info');
const planSection = document.getElementById('plan-section');
const stepsItemsInput = document.getElementById('steps-items-input');
const stepsItemsBtn = document.querySelectorAll("#steps-items-btn");
const mustDoSteps = document.getElementById('must-do-steps');
const shouldDoSteps = document.getElementById('should-do-steps');
const wouldDoSteps = document.getElementById('would-do-steps');
const ifHaveTimeDoSteps = document.getElementById('if-have-time-do-steps');
//Team 
const teamBtn = document.getElementById('team-add-btn');
const teamPerson = document.getElementById('team-person-name');
const teamPost = document.getElementById('team-person-post');
const teamBox = document.getElementById('team-box');
const addTeamBtn = document.getElementById('add-team-btn');
const teamWrapper = document.getElementById('team-wrapper');

const bodyShadow = document.querySelector('.body-shadow');



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
    let list = document.createElement('select')
    span.className = "tasks-area";
    span.style.cssText = ` padding-top: 8px; padding-bottom: 8px; display: flex; `
    span.innerHTML = input.value;
    output.append(span, list)
    input.value = "";
}

// Team show wrapper
addTeamBtn.addEventListener('click', () => {
    teamWrapper.classList.toggle('team-wrapper-show');
    teamBox.classList.add('borders');
})

// Team add people
teamBtn.addEventListener('click', () => {
    let name = document.createElement('span');
    let post = document.createElement('span');
    name.className = 'team-name';
    post.className = 'team-post';
    name.style.cssText = `padding: 8px; font-weight: bold;`
    post.style.cssText = `padding: 8px; font-weight: bold; color: blue;`
    name.innerHTML = `${teamPerson.value}` + " ";
    post.innerHTML = `${teamPost.value} `
    teamBox.append(name, post)
    teamPerson.value = "";
    teamPost.value = "";
})