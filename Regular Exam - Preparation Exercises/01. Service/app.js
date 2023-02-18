window.addEventListener('load', solve);

function solve() {
    let typeProductElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');

    let sendFormBtn = document.querySelector('#right > form > button');

    sendFormBtn.addEventListener('click', (event) => {

        event.preventDefault();

        if (descriptionElement.value == ''
            || clientNameElement.value == ''
            || clientPhoneElement.value == '') {
            return;
        }

        let div = document.createElement('div');
        div.setAttribute('class', 'container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeProductElement.value}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientNameElement.value}, ${clientPhoneElement.value}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionElement.value}`;

        let startRepairBtn = document.createElement('button');
        startRepairBtn.classList.add('start-btn');
        startRepairBtn.textContent = 'Start repair';

        let finishRepairBtn = document.createElement('button');
        finishRepairBtn.classList.add('finish-btn');
        finishRepairBtn.textContent = 'Finish repair';
        finishRepairBtn.disabled = true;


        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startRepairBtn);
        div.appendChild(finishRepairBtn);

        let revievedOrdersElement = document.getElementById('received-orders');
        revievedOrdersElement.appendChild(div);

        let typeProductThrowback = typeProductElement.value;
        let descriptionThrowback = descriptionElement.value;
        let clientNameThrowback = clientNameElement.value;
        let clientPhoneThrowback = clientPhoneElement.value;

        descriptionElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';


        startRepairBtn.addEventListener('click', () => {

            startRepairBtn.disabled = true;
            finishRepairBtn.disabled = false;
        })

        finishRepairBtn.addEventListener('click', () => {

            div.remove()

            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'container');

            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${typeProductThrowback}`;

            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${clientNameThrowback}, ${clientPhoneThrowback}`;

            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${descriptionThrowback}`;

            newDiv.appendChild(h2);
            newDiv.appendChild(h3);
            newDiv.appendChild(h4);

            let completedOrdersElement = document.getElementById('completed-orders');
            completedOrdersElement.appendChild(newDiv);


            let clearBtn = document.querySelector('#completed-orders > button');

            clearBtn.addEventListener('click', () => {

                newDiv.remove();
            })
        })

    });

}
