function solve() {
  let currStep = 0;
  let correctAnswers = 0;
  let answearsBtns = document.querySelectorAll('.answer-text')
  let sections = document.getElementsByTagName('section')
  let answer = (e) =>{
    if(e.currentTarget.textContent == 'onclick' ||
       e.currentTarget.textContent == 'JSON.stringify()' ||
       e.currentTarget.textContent == 'A programming API for HTML and XML documents'){
        correctAnswers++;
       }
    sections[currStep].style.display = 'none'
    currStep++;
    if(currStep < 3){
      sections[currStep].style.display = 'block'
    }else {
      let result = ''
      if(correctAnswers == 3){
         result = "You are recognized as top JavaScript fan!"
      } else{
           result = `You have ${correctAnswers} right answers`
      }
      document.querySelector('#results').style.display = 'block'
      document.querySelector('#results li h1').textContent = result;
    }
  }
  for (const answear of answearsBtns) {
    answear.addEventListener('click', answer)
  }
}
