function solve() {
    // взимаме полетата, които ни трябват:
    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    // изкарваме секциите, които ни трябват:
    const [inputSection, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addToDo);

    function addToDo(event) {
        event.preventDefault(); // за да не се презарежда страницата при натискане на Add Btn

        // валидираме дали е празно
        if (
            inputDate.value.trim() === '' ||
            inputDesc.value.trim() === '' ||
            inputTask.value.trim() === ''
        ) {
            return;
        }
        // ако не е празно, създаваме ел. article и h3....
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = inputTask.value;
        
        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${inputDesc.value}`;

        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${inputDate.value}`;

        const divBtns = document.createElement('div');
        divBtns.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        startBtn.addEventListener('click', startArticle);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteArticle);

        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(divBtns);

        openSection.lastElementChild.appendChild(article);
      
        inputDate.value = "";
        inputDesc.value = "";
        inputTask.value = "";

        function deleteArticle(){
            article.remove();
        }

        function startArticle(){
            startBtn.remove();
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishArticle);
            divBtns.appendChild(finishBtn);

            progressSection.lastElementChild.appendChild(article);
        }

        function finishArticle() {
            divBtns.remove();
            completeSection.lastElementChild.appendChild(article)
        }
    }   
}
