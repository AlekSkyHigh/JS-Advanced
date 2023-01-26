// Write a JS function that expands a hidden section of text when a link is clicked. The link should disappear as the rest of the text shows up.
// Input/Output
// There will be no input/output, your program should instead modify the DOM of the given HTML document

function showText() {

    let textElement = document.getElementById('text')
    textElement.style.display = 'inline';

    let showMoreElement = document.getElementById('more');
    showMoreElement.style.display = 'none';
}
