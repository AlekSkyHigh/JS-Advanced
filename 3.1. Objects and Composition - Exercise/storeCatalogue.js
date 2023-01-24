// You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order. 
// Input
// The input comes as an array of strings. Each element holds info about a product in the following format:
// "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
// Output
// As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.

// Solve 1 of 2:
function storeCatalogue(array) {

    let result = array.sort((a, b) => a.localeCompare(b));

    let current = [];
    let firstLetter = '';

    for (let i = 0; i < result.length; i++) {
        current = result[i].split(' : ');

        if (result[i][0] !== firstLetter) {
            console.log(result[i][0]);
        }

        console.log(`  ${current[0]}: ${current[1]}`);
        firstLetter = result[i][0];
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])


// Solve 2 of 2:
function storeCatalogue(arr) {

    let catalogue = {};

    for (const line of arr) {
        let [product, price] = line.split(' : ');
        let firstLetter = product[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][product] = price;
    }

    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b)); 

    for (const key of sorted) {
        console.log(key);
        let sortedProduct = Object.keys(catalogue[key]).sort((a, b) =>
            a.localeCompare(b)
        )

        for (const product of sortedProduct) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
}
