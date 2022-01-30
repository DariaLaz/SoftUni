function create(words) {
   let contentElement = document.querySelector('#content');
   for (const word of words) {
      let createDiv = document.createElement('div');
      let createParagraph = document.createElement('p');
      createParagraph.style.display = 'none';
      createParagraph.textContent = word
      createDiv.appendChild(createParagraph);
      createDiv.addEventListener('click', (e) =>{
         e.currentTarget.querySelector('p').style.display = 'block';
      })
      contentElement.appendChild(createDiv)
   }
}