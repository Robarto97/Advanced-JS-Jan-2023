class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length === this.capacity) {
      throw Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      paid: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const match = this.books.find((b) => b.bookName == bookName);

    if (!match) {
      throw Error(`${bookName} is not in the collection.`);
    }
    if (match.paid) {
      throw Error(`${bookName} has already been paid.`);
    } else {
      match.paid = true;
      return `${bookName} has been successfully paid.`;
    }
  }

  removeBook(bookName) {
    const index = this.books.findIndex((b) => b.bookName == bookName);
    const match = this.books[index];

    if (!match) {
      throw Error(`The book, you're looking for, is not found.`);
    }
    if (!match.paid) {
      throw Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    } else {
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`;
    }
  }

  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      let result = [];
      result.push(
        `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`
      );
      let sortedBooks = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      for (const book of sortedBooks) {
        result.push(
          `${book.bookName} == ${book.bookAuthor} - ${
            book.paid ? "Has Paid" : "Not Paid"
          }.`
        );
      }
      return result.join("\n");
    }

    let result = [];
    for (const book of this.books) {
      if (book.bookAuthor === bookAuthor) {
        result.push(
          `${book.bookName} == ${book.bookAuthor} - ${
            book.paid ? "Has Paid" : "Not Paid"
          }.`
        );
      }
      return result.join("\n");
    }
    throw Error(`${bookAuthor} is not in the collection.`);
  }
}

const library = new LibraryCollection(2);
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.addBook("Ulysses", "James Joyce"));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// const library = new LibraryCollection(5);
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");
// console.log(library.getStatistics());
