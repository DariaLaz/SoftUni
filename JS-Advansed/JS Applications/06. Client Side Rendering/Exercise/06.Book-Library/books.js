export async function books(){
    const url = 'http://localhost:3030/jsonstore/collections/books';
    let bookResponse = await fetch(url);
    let bookResult = await bookResponse.json();
    return bookResult;
}