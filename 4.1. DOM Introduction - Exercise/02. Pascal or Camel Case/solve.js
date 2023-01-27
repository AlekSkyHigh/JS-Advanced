
// Solve 1 of 2:
function solve() {

  let inputText = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let result = '';

  if (convention === 'Camel Case') {

    for (let i = 0; i < inputText.length; i++) {

      if (inputText[i] === ' ') {
        result += (inputText[i + 1].toUpperCase());
        i++;
      } else {
        result += inputText[i].toLowerCase();
      }
    };

  } else if (convention === 'Pascal Case') {

    result += inputText[0].toUpperCase();

    for (let i = 1; i < inputText.length; i++) {

      if (inputText[i] === ' ') {
        result += (inputText[i + 1].toUpperCase());
        i++;
      } else {
        result += inputText[i].toLowerCase();
      }
    };

  } else {
    result = 'Error!'
  };

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}


// Solve 2 of 2:
function solve() {

  let input = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  const toPascal = (text) =>
    text
      .split(' ')
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join('')

  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  if (convention === 'Pascal Case') {
    resultElement.textContent = toPascal(input);
  } else if (convention === 'Camel Case') {
    resultElement.textContent = toCamelCase(input);
  } else {
    resultElement.textContent = 'Error!'
  }

}
