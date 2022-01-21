function heroicInventory(input){
    let results = [];

    for (let hero of input) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level)
        items = items ? items.split(', ') : [];

        results.push({name, level, items});
        }
        return(JSON.stringify(results));
    }
heroicInventory(['Isacc / 25 / Apple, GravityGun',
                'Derek / 12 / BarrelVest, DestructionSword',
                'Hes / 1 / Desolator, Sentinel, Antara']
)
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])