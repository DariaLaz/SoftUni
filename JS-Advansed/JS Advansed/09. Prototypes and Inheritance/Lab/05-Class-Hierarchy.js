function solve(){
    function toCm(unit, result){
        if(unit =='mm'){
            return result *= 10;
        } else if(unit == 'cm'){
            return result;
        } else if(unit == 'm'){
            return result /= 100;
        }
    }
    class Figure{
        constructor(unit){
            if(unit){
                this.unit = unit;
            } else{
                this.unit = 'cm'
            }
            this.area = 0
            Object.defineProperty(this, 'area', {
                get: function(){
                    return this.area
                }
            })
        }
        changeUnits(newUnit){
            this.unit = newUnit;
        }
        toString(){
            return `Figures units: ${this.unit}`
        }
        toCm(value){
            if(this.unit =='mm'){
                return value *= 10;
            } else if(this.unit == 'cm'){
                return value;
            } else if(this.unit == 'm'){
                return value /= 100;
            }
        }
    }
    class Circle extends Figure{
        constructor(r){
            super()
            this.radius = r;
            Object.defineProperty(this, 'area', {
                get() {
                    return Math.PI * this.toCm(this.radius) ** 2
                }
            })
        }
        toString(){
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure{
        constructor(width, height, unit){
            super(unit)
            this.width = width;
            this.height = height;
            Object.defineProperty(this, 'area', {
                get() {
                    return this.toCm(this.width) * this.toCm(this.height)
                }
            })
        }
        toString(){
            return `${super.toString()} Area: ${this.area} - width: ${this.toCm(this.width)}, height: ${this.toCm(this.height)}`
        }
    }
    return {
        Figure, Circle, Rectangle
    }
}


let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
