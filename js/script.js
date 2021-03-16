'use strict';

const nameText = document.getElementById('name');
const emailText = document.getElementById('mail');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');
const options = document.querySelectorAll('#color option');
const selectDesign = document.getElementById('shirt-designs');



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


tshirtDesign.addEventListener('change', () => {
    document.getElementById('color').disabled = false;
    let options = document.querySelectorAll('#color data-theme');
   // loop over option element 
   for ( let i = 0; i < options.length; i++){
       return tshirtColor;
   };
});
