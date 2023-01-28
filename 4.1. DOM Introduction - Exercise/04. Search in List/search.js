// Solve 1 of 2:
function search() {

   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      if (town.textContent.includes(userWord)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${count} matches found`;
}


// Solve 2 of 2:
function search() {

   const itemList = Array.from(document.querySelectorAll('#towns li'));  //array with li
   const resutDiv = document.querySelector('#result');
   const searchInput = document.querySelector('#searchText');
   let counter = 0;

   itemList.forEach((element) => {
      if (element.textContent.includes(searchInput.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   });

   resutDiv.textContent = `${counter} matches found`;
}
