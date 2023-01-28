// Solve 1 of 2:
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let rows = document.querySelectorAll('tbody tr'); // в случая позволява итериране без превръщане в масив;

   function onClick() {
      for (let row of rows) {
         row.classList.remove('select'); //премахваме стиловете на дадените хтмл елементи
         if (input.value !== '' && row.innerHTML.includes(input.value)) {
            row.className = 'select';
         }
      }
      input.value = '';
   }
}

// ----------------------------------------------------------------------------------------------

// Solve 2 of 2:
function solve() {
   const input = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      Array.from(document.querySelectorAll('tbody tr')).forEach(row => {
         
         if(row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      input.value = '';
   }
}
