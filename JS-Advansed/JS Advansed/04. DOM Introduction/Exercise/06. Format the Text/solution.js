function solve() {
  let textSent = Array.from(document.getElementById('input').value.trimEnd().split('.'));
  let result = '';
  
  while(textSent.length > 0){
    let currentPar = '<p>';
    for (let i = 0; i < 3; i++) {
      let currentSent = textSent.shift().replace('.', '');
      currentPar += currentSent.trimEnd();
      if(currentSent.length > 0){
        currentPar += '.'
      }
      if(textSent.length == 0){
        break;
      }
    }
    currentPar += '</p>'
    if(currentPar != '<p></p>'){
      result += currentPar;
    }
  }
  document.getElementById('output').innerHTML = result.trimEnd();
}