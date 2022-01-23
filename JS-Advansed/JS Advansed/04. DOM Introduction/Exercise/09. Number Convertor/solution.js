function solve() {
    let binary = document.createElement('option');
    let hexadecimal = document.createElement('option');
    binary.value = 'binary';
    binary.innerHTML = 'Binary';
    hexadecimal.value = 'hexadecimal';
    hexadecimal.innerHTML = 'Hexadecimal';
    document.querySelector('#selectMenuTo').appendChild(binary);
    document.querySelector('#selectMenuTo').appendChild(hexadecimal);

    let result = function result() {
        let result = 0;
        let num = document.querySelector('#input').value;
        let numSyst = document.querySelector('#selectMenuTo');
        
        if(numSyst.value == 'binary'){
            let rem;
            let i = 1;
            while (num != 0) {
                rem = num % 2;
                num = parseInt(num / 2);
                result = result + rem * i;
                i = i * 10;
            }
        } else if(numSyst.value == 'hexadecimal'){
            result = Number(num).toString(16).toUpperCase();
        }
        document.querySelector('#result').value = result;
    }
    document.getElementsByTagName('button')[0].onclick = result;
}