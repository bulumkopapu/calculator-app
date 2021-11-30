const firstRadioButton = document.getElementById('one');
const secondRadioButton = document.getElementById('two');
const thirdRadioButton = document.getElementById('three');
const cachedTheme = localStorage.getItem('theme');

const radioButtons = document.querySelectorAll('input[name="toggle-state"]');
const body = document.body;

if(firstRadioButton.checked){
    body.classList.add("theme-one");
}

if(cachedTheme){
    body.className = "";
    body.classList.add(cachedTheme);
}


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



//EVENT LISTENER FOR RADIO BUTTONS
for (const radioButton of radioButtons) {
        radioButton.onclick = function(event) {
            let eValue = event.target.value;

        if(eValue == 1){
            body.className = "";
            body.classList.add("theme-one");

        } else if(eValue == 2){
            body.className = "";
            body.classList.add("theme-two");

        } else if(eValue == 3){
            body.className = "";
            body.classList.add("theme-three");

        }
    }
}
