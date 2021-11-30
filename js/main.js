const radioButtons = document.querySelectorAll('input[name="toggle-state"]');
const body = document.body;
const toggleBall = document.querySelector('.checkmark');
const hOne = document.querySelector('h1');
const paragraphs = document.querySelector('p');
const themeNumbers = document.querySelectorAll('.theme-numbers p');



const mainDisplay = document.querySelector('.display-section');
const mainDisplayParagraph = document.querySelector('.display-section p');
const calculatorArea = document.querySelector('.calculator');

//EVENT LISTENER FOR RADIO BUTTONS
for (const radioButton of radioButtons) {
        radioButton.onclick = function(event) {
            let eValue = event.target.value;

        if(eValue == 1){
            

        } else if(eValue == 2){
            

        } else if(eValue == 3){
           

        }
    }
}
