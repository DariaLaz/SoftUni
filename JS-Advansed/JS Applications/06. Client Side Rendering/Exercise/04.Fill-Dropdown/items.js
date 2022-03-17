export async function items(){
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

    let townResponse = await fetch(url);
    let townResult = await townResponse.json();
    
    return townResult;
}