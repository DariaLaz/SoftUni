function fromJSONToHTMLTable(input){
    let json = JSON.parse(input);
    let result = [];
    result.push('<table>');
    let headers = '   <tr>';
    for (const key of  Object.keys(json[0])) {
        headers += `<th>${key}</th>`
    }
    headers += '</tr>'
    result.push(headers);

    for (let i = 0; i < json.length; i++) {
        let curRow = '   <tr>';
        for (const value of  Object.values(json[i])) {
            curRow += `<td>${value}</td>`
        }
        curRow += '</tr>';
        result.push(curRow);
    }
     result.push('</table>');
     console.log(result.join('\n'));
 }
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)