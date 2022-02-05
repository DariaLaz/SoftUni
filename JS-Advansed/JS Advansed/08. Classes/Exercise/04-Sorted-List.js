class List{
    constructor(){
        this.arrOfNumbers = [];
        this.size = this.arrOfNumbers.length
    }
    add(num){
        this.arrOfNumbers.push(Number(num));
        this.arrOfNumbers.sort((a, b) => a - b);
        this.size++;
    }
    remove(index){
        if (index < 0 || index >= this.arrOfNumbers.length) {
            throw new Error('');
        }
        this.arrOfNumbers.splice(index, 1);
        this.size--;
    }
    get(index){
        if (index < 0 || index >= this.arrOfNumbers.length) {
            throw new Error('');
        }
        return this.arrOfNumbers[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
