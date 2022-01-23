function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = '';
  let textArr = text.split(' ');
  if(namingConvention == 'Camel Case'){
    result += textArr.shift().toLowerCase();
  } else if(namingConvention == 'Pascal Case'){
    let word = textArr.shift().toLowerCase();
    result+= word[0].toUpperCase();
    result+= word.substring(1);
  } else {
    result = 'Error!';
  }
   if(namingConvention == 'Camel Case' || namingConvention == 'Pascal Case'){
     for (let i = 0; i < textArr.length; i++) {
           let word = textArr[i].toLowerCase();
           result+= word[0].toUpperCase();
           result+= word.substring(1);   
     }
   }
  document.getElementById('result').textContent = result; 
}