// Create function edit() that takes three parameters.
// Input/Output
// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
// You have to replace all occurrences of the match inside the text content of the given element with a replacer.

// Solve 1:
function editElement(element, match, replacer){
    while(element.textContent.includes(match)){
        element.textContent = element.textContent.replace(match, replacer)
    }
};

// Solve 2:
// function edit(element, match, replacer){
//     let pattern = new RegExp(match, 'g');
//     element.textContent = element.textContent.replace(pattern, replacer)
// };
