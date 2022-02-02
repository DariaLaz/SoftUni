function solution(...input){
    let result = [];
    let counter = []
    for (const arg of input) {
        if(!result.includes(typeof(arg))){
            result[typeof(arg)] = [];
            counter[typeof(arg)] = 0;
        }
        result[typeof(arg)].push(arg)
        counter[typeof(arg)]++;
    }
    let entries = Object.entries(counter).sort((a, b) => b[1] - a[1]);
    for (const arr of entries) {
        return(`${arr[0]}: ${result[arr[0]].join(', ')}`)
    }
    for (const arr of entries) {
        return(`${arr[0]} = ${arr[1]}`);
    }
}

console.log(solution('cat', 42, function () { console.log('Hello world!'); }))
// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1
