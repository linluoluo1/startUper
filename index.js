const projectBtn = document.getElementById("project-btn");
const draftBtn = document.getElementById("draft-btn");
const projectSec = document.getElementById("project-sec");
const draftSec = document.getElementById("draft-sec");
const ideaItemsBtn = document.getElementById("idea-items-btn");
const ideaItemsArea = document.getElementById("idea-items-area");
const ideaItemsInput = document.getElementById("idea-items-input")
const dotsBtn = document.getElementById('dots-btn');
const editMenu = document.getElementById('edit-menu');

projectBtn.addEventListener('click', () => {
    projectSec.classList.toggle("section-visibility");
    draftBtn.classList.toggle('btn-hide');
})

draftBtn.addEventListener('click', () => {
    draftSec.classList.toggle("section-visibility");
    projectBtn.classList.toggle('btn-hide');
})

ideaItemsBtn.addEventListener('click', () => {
    let span = document.createElement('span');
    span.className = "idea-item-bar";
    span.style.cssText = ` padding: 10px`
    span.innerHTML = ideaItemsInput.value;
    ideaItemsArea.append(span);
    ideaItemsInput.value = "";

})

dotsBtn.addEventListener('click', () => {
    editMenu.classList.toggle('edit-menu')
})