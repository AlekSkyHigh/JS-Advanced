// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.

// Solve 1 of 2:
function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {

        let cut = Math.max(result.length - k, 0);
        let lastResult = result.slice(cut);

        let sum = 0;

        for (const el of lastResult) {
            sum += el;
        }

        result.push(sum)
    }
    return result;

}
console.log(lastKNumbersSequence(6, 3))
console.log(lastKNumbersSequence(8, 2))


// Solve 2 of 2:
function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {

        result[i] = sumLastK(result, k);
    }

    function sumLastK(array = result, k) {

        k = array.length > k ? k : array.length;

        let sum = 0;

        for (let i = 1; i <= k; i++) {

            sum += array[array.length - i];

        }

        return sum;
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3))
console.log(lastKNumbersSequence(8, 2))
