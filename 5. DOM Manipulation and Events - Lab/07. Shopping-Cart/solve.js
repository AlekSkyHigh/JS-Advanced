function solve() {

   let productsElement = document.querySelectorAll('.product');
   let textAreaElement = document.querySelector('textarea');
   let addBtnElement = document.querySelectorAll('.add-product');
   let checkoutElement = document.querySelector('.checkout')
   let totalPrice = 0;
   let shoppingCart = []; //Unique products only


   for (let product of addBtnElement) {

      product.addEventListener('click', function (event) {

         let item = event.currentTarget.children[1].children[0].textContent;
         let price = event.currentTarget.children[3].textContent;

         textAreaElement.textContent += `Added ${item} for ${price} to the cart.\n`;

         totalPrice += Number(price);
         if (!shoppingCart.includes(item)) {
            shoppingCart.push(item);
         };
      });
   };

   checkoutElement.addEventListener('click', (e) => {

      textAreaElement.textContent = `You bought ${shoppingCart.join(', ')} for ${totalPrice.toFixed(2)}.`;

      addBtnElement.forEach(e => e.setAttribute('disabled', ''));
      checkoutEl.setAttribute('disabled', '');
   });

}
