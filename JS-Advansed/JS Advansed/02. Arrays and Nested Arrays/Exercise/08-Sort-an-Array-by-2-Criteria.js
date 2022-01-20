function sortArrByTwoCriteria(arr){
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}
sortArrByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrByTwoCriteria(['test', 'Deny', 'omen', 'Default']);