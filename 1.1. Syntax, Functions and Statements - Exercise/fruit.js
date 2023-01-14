// Write a function that calculates how much money you need to buy fruit. You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram. 
// Print the following text on the console:  
// `I need ${money} to buy {weight} kilograms {fruit}.`
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.

function fruit(food, weightInGrams, priceInKilograms) {

    let weightInKilograms = weightInGrams / 1000;
    let moneyNeeded = weightInKilograms * priceInKilograms;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${food}.`);
}

fruit('orange', 2500, 1.80)

fruit('apple', 1563, 2.35)
