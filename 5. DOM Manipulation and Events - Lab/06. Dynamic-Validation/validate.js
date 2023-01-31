// Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the class "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
// A valid email is considered to be in the format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style. Submit only the validate() function in Judge.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document.


function validate() {
    
    let inputEmailElement = document.getElementById('email');

    let regex = /\b([a-z]+@[a-z]+\.[a-z]+)\b/g;

    inputEmailElement.addEventListener('change', (event) => {

        if(event.target.value.match(regex)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error')
        }
    });
}
