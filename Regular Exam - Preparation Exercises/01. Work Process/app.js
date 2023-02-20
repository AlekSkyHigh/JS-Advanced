function solve() {

    let fNameElement = document.getElementById('fname');
    let lNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let addWorkerBtn = document.getElementById('add-worker');

    addWorkerBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (fNameElement.value == ''
            || lNameElement.value == ''
            || emailElement.value == ''
            || birthElement.value == ''
            || positionElement.value == ''
            || salaryElement.value == '') {
            return;
        }

        let tbodyElement = document.getElementById('tbody');
        let tableRow = document.createElement('tr'); //should be attached to tbody

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = fNameElement.value;

        let tdLastName = document.createElement('td');
        tdLastName.textContent = lNameElement.value;

        let tdEmail = document.createElement('td');
        tdEmail.textContent = emailElement.value;

        let tdBirth = document.createElement('td');
        tdBirth.textContent = birthElement.value;

        let tdPosition = document.createElement('td');
        tdPosition.textContent = positionElement.value;

        let tdSalary = document.createElement('td');
        tdSalary.id = "allSalaries"; // this should be used later when counting salaries
        tdSalary.textContent = salaryElement.value;

        tableRow.appendChild(tdFirstName);
        tableRow.appendChild(tdLastName);
        tableRow.appendChild(tdEmail);
        tableRow.appendChild(tdBirth);
        tableRow.appendChild(tdPosition);
        tableRow.appendChild(tdSalary);
        tbodyElement.appendChild(tableRow);


        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired')
        firedBtn.textContent = 'Fired';

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = "Edit"

        let tdButtons = document.createElement('td');
        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);

        tableRow.appendChild(tdButtons);


        let fNameThrowback = fNameElement.value;
        let lNameThrowback = lNameElement.value;
        let emailThrowback = emailElement.value;
        let birthThrowback = birthElement.value;
        let positionThrowback = positionElement.value;
        let salaryThrowback = salaryElement.value;

        fNameElement.value = '';
        lNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';


        const sum = document.getElementById("sum");
        let totalSalaries = 0;
        const allSalaries = Array.from(document.querySelectorAll("#allSalaries"));
        allSalaries.forEach((salary) => (totalSalaries += Number(salary.textContent)));
        sum.textContent = totalSalaries.toFixed(2);


        editBtn.addEventListener('click', () => {

            tableRow.remove()

            fNameElement.value = fNameThrowback;
            lNameElement.value = lNameThrowback;
            emailElement.value = emailThrowback;
            birthElement.value = birthThrowback;
            positionElement.value = positionThrowback;
            salaryElement.value = salaryThrowback;

            const sum = document.getElementById("sum");
            let totalSalaries = 0;
            const allSalaries = Array.from(document.querySelectorAll("#allSalaries"));
            allSalaries.forEach((salary) => (totalSalaries += Number(salary.textContent)));
            sum.textContent = totalSalaries.toFixed(2);
        })


        firedBtn.addEventListener('click', () => {

            tableRow.remove()

            const sum = document.getElementById("sum");
            let totalSalaries = 0;
            const allSalaries = Array.from(document.querySelectorAll("#allSalaries"));
            allSalaries.forEach((salary) => (totalSalaries += Number(salary.textContent)));
            sum.textContent = totalSalaries.toFixed(2);
        })

    })

}
solve()
