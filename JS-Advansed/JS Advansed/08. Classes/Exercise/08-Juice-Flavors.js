function solve(arrOfJuices){
    let alljuices = new Map();
    let allBottles = new Map();

    for (const j of arrOfJuices) {
        let [juiceName, juiceQuantity] = j.split(' => ');

        if(!alljuices.has(juiceName)){
            alljuices.set(juiceName, 0);
        }
        alljuices.set(juiceName, alljuices.get(juiceName) + Number(juiceQuantity));

        while (alljuices.get(juiceName) >= 1000){
            if(!allBottles.has(juiceName)){
                allBottles.set(juiceName, 0);
            }
            alljuices.set(juiceName, alljuices.get(juiceName) - 1000);
            allBottles.set(juiceName, allBottles.get(juiceName) + 1);
        }
    }

    for (const [jName, jQuantity] of allBottles) {
        console.log(`${jName} => ${jQuantity}`)
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])