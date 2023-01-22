// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.

function cityRecord(name, population, treasury) {

    const result = {
        name,
        population,
        treasury
    };

    return result;
}

console.log(cityRecord(
    'Tortuga',
    7000,
    15000
))

console.log(cityRecord(
    'Santo Domingo',
    12000,
    23500
));
