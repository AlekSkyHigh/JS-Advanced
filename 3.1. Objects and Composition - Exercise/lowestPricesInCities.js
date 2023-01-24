// You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
// Input
// The input comes as an array of strings. Each element will hold data about a town, product, and its price at that town. The town and product will be strings, the price will be a number. The input will come in the following format:
// {townName} | {productName} | {productPrice}
// Output
// As output, you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
// The output, for every product, should be in the following format:
// {productName} -> {productLowestPrice} ({townName})
// The order of output in - order of entrance. See the examples for more info.

// Solve 1 of 2:
function lowestPricesInCities(input) {

    let products = [];

    while (input.length > 0) {
        let [town, product, price] = input.shift().split(' | ');

        // check if the product is available:
        if (products.filter(x => x.product === product).length > 0) {

            let obj = products.find(x => x.product === product);

            if (obj.price > Number(price)) {
                obj.price = Number(price);
                obj.town = town;
            }

        } else {
            let obj = { product, town, price: Number(price) };
            products.push(obj)
        }
    };

    for (let product of products) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    };
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])


// Solve 2 of 2:
// function lowestPricesInCities(arr) {

//     let obj = {};

//     for (let index = 0; index < arr.length; index++) {
//         const tokens = arr[index];
//         const [town, product, price] = tokens.split(' | ')

//         if (!obj[product]) obj[product] = {};
//         obj[product][town] = Number(price);
//     }

//     let finalResult = [];
//     for (const key in obj) {
//         let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
//         let [town, price] = sorted[0];
//         finalResult.push(`${key} -> ${price} (${town})`);
//     }

//     return console.log(finalResult.join('\n'))
// }
