function solve() {
    let rowElements = Array.from(document.querySelectorAll('tbody tr'));
    let table = document.querySelector('table')
    let checkElement = document.querySelector('#check p')
    let matrix = [];
    let onClick = () => {
        for (const row of rowElements) {
            let currentRow = Array.from(row.querySelectorAll('td input'));
            matrix.push(currentRow);
        }

        let checkRows = checkRowsFunc(matrix);
        let checkCols = checkColsFunc(matrix);

        if(checkCols && checkRows){
            checkElement.textContent = 'You solve it! Congratulations!';
            checkElement.style.color = 'green';
            table.style.border = '2px solid green';
        } else{
            checkElement.textContent = "NOP! You are not done yet...";
            checkElement.style.color = 'red';
            table.style.border = '2px solid red';
        }
        console.log(matrix)
        function checkRowsFunc(matrix){
            let isValid = true;
            for (let row = 0; row < 3; row++) {
                if(matrix[row][0].value==matrix[row][1].value ||
                    matrix[row][1].value==matrix[row][2].value ||
                    matrix[row][2].value==matrix[row][0].value){
                        isValid = false;
                    }
            }
            return isValid;
        }

        function checkColsFunc(matrix){
            let isValid = true;
            for (let col = 0; col < 3; col++) {
                if(matrix[0][col].value==matrix[1][col].value ||
                    matrix[2][col].value==matrix[1][col].value ||
                    matrix[2][col].value==matrix[0][col].value){
                        isValid = false;
                    }
            }
            return isValid;
        }
    }
    let clearFunc = () => {
        let allEls = document.querySelectorAll('tbody td input');
        for (const el of allEls) {
            el.value = ''
        }
        table.style.border = 'none';
        checkElement.textContent = '';
        checkElement.style.color = '';
    }
    document.getElementsByTagName('button')[0].addEventListener('click', onClick)
    document.getElementsByTagName('button')[1].addEventListener('click', clearFunc)

}