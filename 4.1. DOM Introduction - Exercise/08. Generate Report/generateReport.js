function generateReport() {
    const outputElement = document.querySelector('#output');
    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    trs.forEach(row => {
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {

            if (checks[i].checked) {
                current[checks[i].name] = x.textContent;
            }
        })
        result.push(current);
    })

    outputElement.value = JSON.stringify(result);
}
