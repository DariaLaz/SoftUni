function solution(){
    let res = '';
    return {
        append(text){
            res += text;
        },
        removeStart(num){
            res = res.substring(num)
        },
        removeEnd(num){
            res = res.substring(0, (res.length - num))
        },
        print(){
            console.log(res)
        }
    }
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print(); // loa

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); // 34

