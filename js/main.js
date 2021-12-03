const firstRadioButton = document.getElementById('one');
const secondRadioButton = document.getElementById('two');
const thirdRadioButton = document.getElementById('three');
const cachedTheme = localStorage.getItem('theme');
const radioButtons = document.querySelectorAll('input[name="toggle-state"]');
const body = document.body;

const displayArea = document.getElementById('display-area');
const buttons = Array.from(document.querySelectorAll( ".calculator-button-section input[type = button], .reset-equals input[type = button]"));


//CHECKING FOR INITIAL PAGE LOAD
if(firstRadioButton.checked){
    body.classList.add("theme-one");
}

//CHECKING FOR CACHED THEME
if(cachedTheme){
    body.className = "";
    body.classList.add(cachedTheme);
    if(cachedTheme == "theme-one"){
        firstRadioButton.checked = true;
    } else if (cachedTheme == "theme-two"){
        secondRadioButton.checked = true;
    } else {
        thirdRadioButton.checked = true;
    }
}

//EVENT LISTENER FOR RADIO BUTTONS
for (const radioButton of radioButtons) {
    radioButton.onclick = function(event) {
        let eValue = event.target.value;
        if(eValue == 1){
            body.className = "";
            body.classList.add("theme-one");
            window.localStorage.setItem('theme', 'theme-one');

        } else if(eValue == 2){
            body.className = "";
            body.classList.add("theme-two");
            window.localStorage.setItem('theme', 'theme-two');

        } else if(eValue == 3){
            body.className = "";
            body.classList.add("theme-three");
            window.localStorage.setItem('theme', 'theme-three');
        }
    }
}

//CALCULATOR FUNCTIONALITY

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.value){
            case 'RESET':
                displayArea.innerText = "";
                break;
            case 'DEL':
                if(displayArea.innerText){
                    displayArea.innerText = displayArea.innerText.slice(0, -1);
                }
                break;
            case 'x':
                displayArea.innerText += "*";
                break;
            case '=':
                try {
                    displayArea.innerText = eval(displayArea.innerText);
                } catch {
                    displayArea.innerText = 'Error';
                }
                break;
            default:
                displayArea.innerText += e.target.value;
        }
    })
});