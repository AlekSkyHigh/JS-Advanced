window.addEventListener('load', solve);

function solve() {

    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');

    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (modelInputElement.value == ''
            || descriptionInputElement.value == ''
            || Number(yearInputElement.value) <= 0
            || Number(priceInputElement.value <= 0)) {
            return;
        }

        tableRow = document.createElement('tr');
        tableRow.setAttribute('class', 'info');

        let td1 = document.createElement('td');
        td1.textContent = `${modelInputElement.value}`;

        let td2 = document.createElement('td');
        td2.textContent = `${Number(priceInputElement.value).toFixed(2)}`;

        let moreBtn = document.createElement('button');
        moreBtn.setAttribute('class', 'moreBtn');
        moreBtn.textContent = 'More Info';

        let butBtn = document.createElement('button');
        butBtn.setAttribute('class', 'buyBtn');
        butBtn.textContent = 'Buy it';

        let tdButtons = document.createElement('td');
        tdButtons.appendChild(moreBtn);
        tdButtons.appendChild(butBtn);

        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(tdButtons);

        let informationListElement = document.getElementById('furniture-list');
        informationListElement.appendChild(tableRow)

        let tr = document.createElement('tr');
        tr.setAttribute('class', 'hide');

        let td3 = document.createElement('td');
        td3.textContent = `Year: ${yearInputElement.value}`

        td4 = document.createElement('td');
        td4.setAttribute('colspan', '3');
        td4.textContent = `Description: ${descriptionInputElement.value}`;

        tr.appendChild(td3);
        tr.appendChild(td4);
        informationListElement.appendChild(tr);

        let priceInputThrowback = Number(priceInputElement.value);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';

        moreBtn.addEventListener('click', (event) => {

            if (event.target.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info';
                tr.style.display = 'contents';
            } else if (event.target.textContent = 'Less Info') {
                moreBtn.textContent = 'More Info';
                tr.style.display = 'none';
            }

        })

        butBtn.addEventListener('click', () => {

            tableRow.remove();
            tr.remove()

            let totalPriceElement = document.querySelector('.total-price');

            let total = Number(totalPriceElement.textContent);
            total += Number(priceInputThrowback);

            totalPriceElement.textContent = total.toFixed(2);
        })
    })

}
