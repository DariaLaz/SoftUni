class LibraryCollection{
    constructor(capacity){
        this.capacity = Number(capacity);
        this.books = [];
    }
    addBook(bookName, bookAuthor){
        if(this.books.length == this.capacity){
            throw new Error("Not enough space in the collection.");
        }
        let book ={
            bookName,
            bookAuthor,
            payed: false
        }
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName){
        if(!this.books.some(x => x.bookName == bookName)){
            throw new Error(`${bookName} is not in the collection.`)
        } else if(this.books.find(x => x.bookName == bookName).payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        this.books.find(x => x.bookName == bookName).payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName){
        if(!this.books.some(x => x.bookName == bookName)){
            throw new Error(`The book, you're looking for, is not found.`)
        } else if(!this.books.find(x => x.bookName == bookName).payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(this.books.find(x => x.bookName == bookName));
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        if(!bookAuthor){
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            for (const book of this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))){
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed? 'Has Paid' : 'Not Paid'}.`)
            }
            return result.join('\n')
        } else{
            let currBook = this.books.find(x => x.bookAuthor == bookAuthor);
            if(!currBook){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
           return(`${currBook.bookName} == ${currBook.bookAuthor} - ${currBook.payed? 'Has Paid' : 'Not Paid'}.`)
        }
    }
}