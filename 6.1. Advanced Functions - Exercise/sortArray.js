function sortArray(numbers, order) {

    if(order === 'asc'){
        numbers.sort((a,b) => a - b);
    } else {
        numbers.sort((a,b) => b - a);
    }

    return numbers;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))

console.log(sortArray([14, 7, 17, 6, 8], 'desc'))
