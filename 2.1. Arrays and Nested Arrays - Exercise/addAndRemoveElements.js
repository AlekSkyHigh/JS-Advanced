// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array. 
// Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
// The input comes as an array of strings. Each element holds a command. 
// The output is the element of the array, each printed on a new line. In case of an empty array, just print "Empty".

function addAndRemoveElements(arrayOfStrings) {

    let resultArr = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {

        let currentCommand = arrayOfStrings[i];

        if (currentCommand === "add") {
            resultArr.push(i + 1);
        } else {
            resultArr.pop();
        }
    }

    if (resultArr.length <= 0) {
        console.log("Empty");
        return;
    }
    console.log(resultArr.join('\n'));
}

addAndRemoveElements([
    'add',
    'add',
    'add',
    'add'
])

addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
])

addAndRemoveElements([
    'remove',
    'remove',
    'remove'
])
