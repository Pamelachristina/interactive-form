'use strict';

const nameText = document.getElementById('name');
const emailText = document.getElementById('mail');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');





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
