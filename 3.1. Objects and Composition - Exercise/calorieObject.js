// Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.

// Solve 1 of 2:
function calorieObject(arrayOfStrings) {

    let result = {};

    for (let i = 0; i < arrayOfStrings.length; i += 2) {

        let food = arrayOfStrings[i];
        let calories = Number(arrayOfStrings[i + 1]);
        result[food] = calories;
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])



// Solve 2 of 2:
// function calorieObject(arrayOfStrings) {

//     return arrayOfStrings.reduce((acc, curr, index) => {

//         if (index % 2 === 0) acc[curr] = Number(arrayOfStrings[index + 1]);
//         return acc;
//     }, {});

// }
// console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
