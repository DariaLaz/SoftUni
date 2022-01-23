function generateReport() {
    let headsEl = (document.querySelectorAll('input[type="checkbox"]'));
    let heads = Array.from(document.querySelectorAll('input'))
    let rows = Array.from(document.querySelectorAll('tr'))
    rows.shift();
    let result = [];
    let activeCols = [];
    for (let i = 0; i < headsEl.length; i++) {
        if(headsEl[i].checked){
            activeCols.push(i);
        }
    }
    for (const row of rows) {
        let currentRow = {};
        for (const col of activeCols) {
            let prop = heads[col].name;
            currentRow[prop] = row.children[col].textContent;
        }
        result.push(currentRow);
    }

    document.querySelector('#output').value = JSON.stringify(result)
}