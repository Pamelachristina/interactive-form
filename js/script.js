'use strict';

const nameText = document.getElementById('name');
const emailText = document.getElementById('mail');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');
const tshirtColorOptions = document.getElementById('shirt-colors');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const heartJs = document.querySelectorAll('[data-theme="heart js"]');
const registerActivities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');


// set focus on first text field when the page loads
nameText.focus();

// hide "Other-job-role" text field unless "Other" 
// is selected fromthe Job Role drop down.
otherJobRole.style.display = 'none';

let showOtherJob = function () {
    if(jobRole.value === 'other')  {
        otherJobRole.style.display = 'initial';
    }else {
        otherJobRole.style.display = 'none';
    }
};

jobRole.addEventListener('change', showOtherJob);


////////////T-shirt info section/////////////////////
document.getElementById('color').disabled = true;


tshirtDesign.addEventListener('change', (e) => {
    document.getElementById('color').disabled = false;
    if (e.target.value === 'js puns') {
        // loop over option element 
        for ( let i = 0; i < jsPuns.length; i++) {
            tshirtColorOptions.style.display = 'block';
            jsPuns[i].style.display = 'block';
            heartJs[i].style.display = 'none';
        }
    }else if (e.target.value === 'heart js') {
        // loop over option element 
        for ( let i = 0; i < heartJs.length; i++) {
            tshirtColorOptions.style.display = 'block';
            jsPuns[i].style.display = 'none';
            heartJs[i].style.display = 'block';
        }
        
        
            
    }
});

/////////////////Register for Activities section/////////////

let totalCost = 0;

registerActivities.addEventListener('change', (e) => {
    const choice = e.target;
    let choiceCost = choice.getAttribute('data-cost');
    choiceCost = +(choiceCost);

        if (choice.checked){
            totalCost += choiceCost;
        }else {
            totalCost -= choiceCost;
        }
        activitiesCost.textContent = `Total: $ ${totalCost}`;
});

