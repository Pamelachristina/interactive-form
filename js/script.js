'use strict';

const nameText = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const tshirtDesign = document.getElementById('design');
const tshirtColor = document.getElementById('color');
const tshirtColorOptions = document.getElementById('shirt-colors');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const heartJs = document.querySelectorAll('[data-theme="heart js"]');
const input = document.querySelectorAll('input[type="checkbox"]');
const registerActivities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
const payment = document.querySelector('#payment');
const creditCard = document.querySelector('.credit-card');
const payPal = document.querySelector('.paypal');
const bitCoin = document.querySelector('.bitcoin');
const ccExpirationBox = document.querySelector('.expiration-box');
const yearBox = document.querySelector('.year-box');
const zipBox = document.querySelector('#zip');
const cvvBox = document.querySelector('#cvv');
const ccBox = document.querySelector('.cc-num');
const email = document.querySelector('#email');
const form = document.querySelector('form');


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
            jsPuns[0].selected = true;
        }
    }else if (e.target.value === 'heart js') {
        // loop over option element 
        for ( let i = 0; i < heartJs.length; i++) {
            tshirtColorOptions.style.display = 'block';
            jsPuns[i].style.display = 'none';
            heartJs[i].style.display = 'block';
            heartJs[0].selected = true;
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


for ( let i = 0; i < input.length; i++ ){
    input[i].addEventListener('focus', () => {
        input[i].parentNode.classList.add('focus');
        
    })

    input[i].addEventListener('blur', () => {
        input[i].parentNode.classList.remove('focus');
        
    })
}





/////////// Payment info section//////////////////////

//hide paypal and bitcoin initially
payPal.style.display = 'none';
bitCoin.style.display = 'none';
const ccOption = document.querySelector('#payment [value="credit-card"]');
ccOption.selected = true;



// add event listener
payment.addEventListener('change', (e) => {
    const choice = e.target.value; 
    if (choice == 'paypal'){
        payPal.style.display = 'block';
        bitCoin.style.display = 'none';
        creditCard.style.display = 'none';
        
       

    }else if (choice == 'credit-card'){
        creditCard.style.display = 'block';
        payPal.style.display = 'none';
        bitCoin.style.display = 'none';
        
        
    }else if (choice == 'bitcoin'){
        bitCoin.style.display = 'block';
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
      
    }
});


////////////Form Validation//////////////////

////////////Helper Functions/////////////////
// regex to validate name
function nameVerify (nameText) {
    const nameVal = nameText.getElementsByTagName('INPUT')[0].value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameVal);
    return nameIsValid;
};

// regex to validate email formula from ihateregex.io
function emailVerify (email) {
    const emailVal = email.getElementsByTagName('INPUT')[1].value;
    const emailIsValid = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(emailVal);
    return emailIsValid;
};
// regex to validate 16 digit number
function ccNumberVerify (ccBox) {
    const ccNumberVal = ccBox.getElementsByTagName('INPUT')[10].value;
    const ccNumberIsValid  = /^[0-9]{16}(?:-[0-9]{13})?$/.test(ccNumberVal);
    return ccNumberIsValid; 
};
// regex to validate zipcode
function zipVerify (zipBox) {
    const ccZipVal = zipBox.getElementsByTagName('INPUT')[11].value;
    const ccZipIsValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(ccZipVal);
    return ccZipIsValid;
};
// regex to validate cvv 
function cvvVerify(cvvBox) {
    const cvvVal = cvvBox.getElementsByTagName("INPUT")[12].value;
    const cvvIsValid = /^[0-9]{3}$/.test(cvvVal);
    return cvvIsValid;
  }
  
 // validation pass check 
function validationPass(element) {
    element.classList.add("valid");
    element.classList.remove("not-valid");
    element.lastElementChild.style.display = "none";
  }
 
  // validation fail check
function validationFail(element) {
    element.classList.add("not-valid");
    element.classList.remove("valid");
    element.lastElementChild.style.display = "block";
  }

// event listener to handle all click events
form.addEventListener('submit', (e) => {
    let nameIsValid = nameVerify(e.target);
    const choice1 = document.querySelector('#name');
    const selectedName = choice1.parentElement;
  
    if (nameIsValid != true) {
        validationFail(selectedName);
        e.preventDefault();
      } else {
        validationPass(selectedName);
   
    }

    let emailIsValid = emailVerify(e.target);
    const choice2 = document.querySelector('#email');
    const selectedEmail = choice2.parentElement;
    
    if (emailIsValid != true) {
        validationFail(selectedEmail);
        e.preventDefault();
      } else {
        validationPass(selectedEmail);
   
    }
// checkbox validator 
  const checkboxes = registerActivities.querySelectorAll('[type="checkbox"]');
  let totalActivitiesChecked = 0;
  const select = document.querySelector("#activities-box");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      totalCost += 1;}
      if (totalCost !== 0){
      select.parentElement.classList.remove("not-valid");
      select.parentElement.classList.add("valid");
      select.parentElement.lastElementChild.style.display = "none";
    } else if (totalCost == 0) {
      select.parentElement.classList.add("not-valid");
      select.parentElement.classList.remove("valid");
      select.parentElement.lastElementChild.style.display = "inline";
      e.preventDefault();
    }
 }

    if((ccOption.selected)) {

    let ccNumberIsValid = ccNumberVerify(e.target);
    const choice3 = document.querySelector('#cc-num');
    const selectedCcNum = choice3.parentElement;
   
    if (ccNumberIsValid != true) {
        validationFail(selectedCcNum);
        e.preventDefault();
      } else {
        validationPass(selectedCcNum);
   
    }

    let ccZipIsValid = zipVerify(e.target);
    const choice4 = document.querySelector('#zip');
    const selectedZip= choice4.parentElement;
   
    if (ccZipIsValid != true) {
        validationFail(selectedZip);
        e.preventDefault();
      } else {
        validationPass(selectedZip);
   
    }

    let ccvIsValid = cvvVerify(e.target);
    const choice5 = document.querySelector('#cvv');
    const selectedCvv= choice5.parentElement;
   
    if (ccvIsValid != true) {
        validationFail(selectedCvv);
        e.preventDefault();
      } else {
        validationPass(selectedCvv);
   
    }
  }

})