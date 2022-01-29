function solve() {
   let addElements = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let totalPrice = 0;
   let listOfProducts = [];
   const onClick = (e) => {
      let productName = e.currentTarget.parentElement.parentElement.querySelector('.product-title').textContent;
      let price = e.currentTarget.parentElement.parentElement.querySelector('.product-line-price').textContent;
      totalPrice += Number(price);
      if(!listOfProducts.includes(productName)){
         listOfProducts.push(productName);
      }
      textAreaElement.textContent += `Added ${productName} for ${price} to the cart.\n`
   }
   for (const button of addElements) {
      button.addEventListener('click', onClick);
   }
   let checkoutElement = document.querySelector('.checkout');
   let allButtons = document.querySelectorAll('button');
   checkoutElement.addEventListener('click', (e) => {
      for (const btn of allButtons) {
         btn.disabled = 'true'
      }
      textAreaElement.textContent += `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
   })
}
