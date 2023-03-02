//Team 

const teamBtn = document.getElementById('team-add-btn');
const teamPerson = document.getElementById('team-person-name');
const teamPost = document.getElementById('team-person-post');
const teamBox = document.getElementById('team-box');
const addTeamBtn = document.getElementById('add-team-btn');
const teamWrapper = document.getElementById('team-wrapper');
const openTeamSec = document.getElementById('open-team-sec-btn');
const teamEditSec = document.getElementById('team-edit-section');
const teamSecBanner = document.getElementById('team-banner-info')

// Next Section
const planStart = document.getElementById('plan');

// Open Team section
openTeamSec.addEventListener('click', () => {
    console.log('Okay')
    teamEditSec.classList.add('team-section-open')
    planStart.classList.add('plan-section-show-heading')
    bodyShadow.classList.toggle('body-shadow-active');
    teamSecBanner.classList.toggle('team-info-banner')

})

// Team show wrapper
addTeamBtn.addEventListener('click', () => {
    teamWrapper.classList.toggle('team-wrapper-show');
    teamBox.classList.add('borders');
})
let namesArr = [];
let postArr = [];

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

    // Save items in array
    itemsArray(namesArr, name)
    itemsArray(postArr, post)


    //  save input in local storage
    const nameJSON = JSON.stringify(namesArr);
    const postJSON = JSON.stringify(postArr);

    localStorage.setItem('name', nameJSON);
    localStorage.setItem('post', postJSON);

})





// Function save items in array

function itemsArray(arr, item) {
    arr.push(item.innerHTML)

}



