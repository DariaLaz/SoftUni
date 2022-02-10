(function extension(){
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        return this.filter(x => x != Number(n));
    }
    Array.prototype.take = function(n){
        return this.slice(0, Number(n))
    }
    Array.prototype.sum = function(){
        return this.reduce((a, n) => (a + n))
    }
    Array.prototype.average = function(){
        return this.reduce((a, n) => (a + n)) / this.length
    }
})()