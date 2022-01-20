function wordsUpperCase(input){
    input = input.toUpperCase();
    let arr = [...input.matchAll(/[A-Za-z0-9]+/g)];
    console.log(arr.join(", "));
}
wordsUpperCase('Hi, how are you?');
