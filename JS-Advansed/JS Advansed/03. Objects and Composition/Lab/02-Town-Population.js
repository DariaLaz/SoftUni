function townPopulation(input){
    let towns = {};
    for (const prop of input) {
        let [town, populationAsText] = prop.split(' <-> ');
        let population = Number(populationAsText);
        if(!towns[town]){
            towns[town] = 0;
        }
        towns[town] += population;
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}


townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)