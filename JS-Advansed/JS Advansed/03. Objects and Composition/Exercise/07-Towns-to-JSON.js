function townToJson(input){
    let result = []
    for (let i = 1; i < input.length; i++) {
        let line = input[i].split('|').filter(n => n);
        result.push({
            Town: line[0].trim(),
            Latitude: Math.round(Number(line[1])* 100) / 100,
            Longitude: Math.round(Number(line[2])* 100) / 100,
        })
    }
    console.log(JSON.stringify(result));
}

townToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])