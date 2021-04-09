function demoPreviousElementSibling() {
    const buttonOne = document.getElementById('button-one');
    const prevElementSibling = buttonOne.previousElementSibling;
    prevElementSibling.innerText = 'Previous element sibling to button 1';
    const nextElementSibling = buttonOne.nextElementSibling;
    nextElementSibling.innerText = 'Next element sibling to button 1';
}

function checkTheCheckBoxAndEnterText(event) {
    const cb = document.querySelector('div input');
    cb.checked = true;
    //set the next element to have matching text to the button
    cb.nextElementSibling.value = event.target.innerText;

}

function makeBackgroundGreen(target) {
    target.classList.Add('greenBackground');
}

/*make a listener so when a user clicks the push me button, we call
checkTheCheckBoxAndEnterText */
//get the button
const pushMeButton = document.getElementById('button-one');
//no parens after method name means that the event object is passed
//as param automatically
pushMeButton.addEventListener('click', checkTheCheckBoxAndEnterText);

/* when you click on the don't push me button, change its text color to yellow
I'm using an anonymous function to add the class makeTextYellow to the event target*/

const dontPushMe = document.getElementById('button-two');
dontPushMe.addEventListener('click', (event) => 
event.target.setAttribute('class','makeTextYellow'));