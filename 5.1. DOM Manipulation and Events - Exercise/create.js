function create(words) {

   let contentElement = document.getElementById('content');

   words.forEach(string => {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');

      paragraphElement.style.display = 'none';
      paragraphElement.textContent = string;

      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement);

   });

   contentElement.addEventListener('click', function (event) {
      event.target.firstChild.style.display = 'block';
   });

}
