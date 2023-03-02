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

// new section


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
    span.style.cssText = ` padding-top: 8px; padding-bottom: 8px; display: flex; `
    span.innerHTML = input.value;
    let list = document.createElement('select');
    list.innerHTML = namesArr.map(n => `<option value="name">${namesArr[n].value}</option>`).join('');
    // list.innerHTML = `<option value="name">${localStorage.getItem('name')}</option>`
    output.append(span, list)
    input.value = "";
}