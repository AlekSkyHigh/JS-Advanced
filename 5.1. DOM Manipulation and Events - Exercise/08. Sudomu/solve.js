function solve() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const table = document.querySelector('table');
    const checkP = document.querySelector('p');
    const checkBtn = buttons[0];
    const clearBtn = buttons[1];
 
    checkBtn.addEventListener('click', checkInput);
    clearBtn.addEventListener('click', clearFiled);
 
    function checkInput() {
        const matrix = [];
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        for (const line of rows) {
            const row = Array.from(line.children);
            const curRow = [];
            for (const col of row) {
                const currInput = Number(Array.from(col.children)[0].value);
                if (currInput >= 1 && currInput <= rows.length) {
                    curRow.push(currInput);
                } else {
                    curRow.push('');
                }
            }
            matrix.push(curRow);
        }
 
        // chech all rows
        let isRowsCorrect = true;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 1; j < matrix[i].length; j++) {
                let firstInp = matrix[i][0];
                if (firstInp == matrix[i][j] || firstInp == '' || matrix[i][j] == '') {
                    isRowsCorrect = false;
                }
            }
        }
 
        // check all cols
        let isColsCorrect = true;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 1; j < matrix[i].length; j++) {
                let firstInp = matrix[0][i];
                if (firstInp == matrix[j][i] || firstInp == '' || matrix[j][i] == '') {
                    isColsCorrect = false;
                }
            }
        }
 
        if (isColsCorrect && isRowsCorrect) {
            table.style.border = '2px solid green';
            checkP.innerText = 'You solve it! Congratulations!';
            checkP.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            checkP.innerText = 'NOP! You are not done yet...';
            checkP.style.color = 'red';
        }
    }
 
    function clearFiled() {
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        for (const line of rows) {
            const row = Array.from(line.children);
            for (const col of row) {
                Array.from(col.children)[0].value = '';
            }
        }
        table.style.border = '';
        checkP.innerText = '';
        checkP.style.color = '';
    }
}
