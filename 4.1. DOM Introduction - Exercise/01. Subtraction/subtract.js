function subtract() {

    let firstNumber = document.getElementById('firstNumber').value; //still a string
    let secondNumber = document.getElementById('secondNumber').value; //still a string

    let result = Number(firstNumber) - Number(secondNumber);
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}
