export async function students(){
    const url = 'http://localhost:3030/jsonstore/advanced/table';

    let studentsResponse = await fetch(url);
    let studentsResult = await studentsResponse.json();
    return studentsResult;
}