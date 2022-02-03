function solve(face, suit){
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };
    if(!faces.includes(face) || !suits[suit]){
        throw new Error;
    }
    let card = {
        face,
        suit,
        toString() {
            return `${this.face}${suits[this.suit]}`;
        }
    };
    return card;
}

console.log(solve('A', 'S').toString())  //A♠
console.log(solve('10', 'H').toString())  //10♥
console.log(solve('1', 'C').toString()) //Error
