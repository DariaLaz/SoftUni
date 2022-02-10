(function stringExtension(){
    String.prototype.ensureStart = function(str) {
        if(this.toString().startsWith(str)){
            return this.toString();
        }
        return str + this.toString();
    }
    String.prototype.ensureEnd = function(str){
        if(this.toString().endsWith(str)){
            return this.toString();
        }
        return this.toString() + str;
    }
    String.prototype.isEmpty = function(){
        return (this.length == 0)
    }
    String.prototype.truncate = function(n){
        if(n < 4){
            let res = '';
            for (let i = 0; i < n; i++) {
                res += '.'        
            }
            return res;
        } else if(this.length <= n){
            return this.toString();
        } else if(!this.toString().includes(' ')){
            return `${this.toString().substring(0, n - 3)}...`
        } 
        let splitStr = this.toString().substring(0, n - 2).split(' ')
        splitStr.pop();
        return splitStr.join(' ') + '...'
    }
    String.format = function(string, ...params){
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i])
        }
        return string
    }
})()

let str = 'my string';
str = str.ensureStart('my');    //'my string'
console.log('1 ->' + str)
str = str.ensureStart('hello ');//'hello my string'
console.log('2 ->' + str)
str = str.truncate(16);         //'hello my string'
console.log('3 ->' + str)
str = str.truncate(14);         //'hello my...'
console.log('4 ->' + str)
str = str.truncate(8);          //'hello...'
console.log('5 ->' + str)
str = str.truncate(4);          //'h...'
console.log('6 ->' + str)
str = str.truncate(2);          //'..'
console.log('7 ->' + str)
// str = String.format('The {0} {1} fox', 'quick', 'brown'); //'The quick brown fox'
// console.log(str)
// str = String.format('jumps {0} {1}', 'dog');              //'jumps dog {1}'   
// console.log(str)
