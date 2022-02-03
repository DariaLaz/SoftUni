function solve(input){
    let cards = []
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };
    for (const str of input) {
        let face = str.slice(0, str.length - 1)
        let suit = str[str.length - 1]

        if(!faces.includes(face) || !suits[suit]){
            console.log(`Invalid card: ${str}` )
            return
        }
        let card = `${face}${suits[suit]}`
        cards.push(card)
    }
    console.log(cards.join(' '))
}

solve(['AS', '10D', 'KH', '2C'])
solve(['5S', '3D', 'QD', '1C'])