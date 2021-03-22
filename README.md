# interactive-form
In this project, we used JavaScript to enhance an interactive registration form for a fictional Full Stack conference.

Using the supplied HTML and CSS files, we added our own JavaScript to make the form more user-friendly by:

* Adding customized and conditional behavior and interactivity

* Validating user input and providing helpful error messages when the user enters invalid information into the form fields.


![Markdown Logo](https://media.giphy.com/media/onuQC2HMoALNNJP7pW/giphy.gif)

## Realtime error handling

```javascript
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
    e.preventDefault();
    if (nameIsValid != true) {
        validationFail(selectedName);
        e.preventDefault();
      } else {
        validationPass(selectedName);
   
    }

```