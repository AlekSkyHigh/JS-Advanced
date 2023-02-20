class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            })
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    };

    payBook(bookName) {

        let match = this.books.find(b => b.bookName === bookName);

        if (match === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (match.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        } else {
            match.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {

        const index = this.books.findIndex(b => b.bookName === bookName)
        const match = this.books[index];

        if (match === undefined) {
            throw new Error(`The book, you're looking for, is not found.`)
        }

        if (match.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`
        }
    }

    getStatistics(bookAuthor) {

        if (bookAuthor === undefined) {

            let sortedBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)

            sortedBook.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n').trim();

        } else {

            let match = this.books.find(ba => ba.bookAuthor === bookAuthor);

            if (match === undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                let result = [];

                let paid = match.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${match.bookName} == ${match.bookAuthor} - ${paid}.`)

                return result.join('\n').trim();

            }

        }

    }

}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust'); //paid == false
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote'); //paid == true
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));


// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

