let booksDb = [
  {
    id: 0,
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    synopsis: 'A story about teenage alienation and rebellion.',
    pageCount: 214,
    price: 110.99,
    isAvailable: false,
    coverImage: null,
  },
  {
    id: 1,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    synopsis: 'A classic novel about the American dream.',
    pageCount: 218,
    price: 712.99,
    isAvailable: true,
    coverImage: null,
  },
  {
    id: 2,
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    synopsis: 'A novel about racial injustice in the Deep South.',
    pageCount: 324,
    price: 415.49,
    isAvailable: true,
    coverImage: null,
  },
  {
    id: 3,
    name: '1984',
    author: 'George Orwell',
    synopsis: 'A dystopian novel about totalitarianism.',
    pageCount: 328,
    price: 214.99,
    isAvailable: false,
    coverImage: null,
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    synopsis: 'A romantic novel about manners and marriage.',
    pageCount: 279,
    price: 216.99,
    isAvailable: true,
    coverImage: null,
  },
];

class Book {
  static async findOne(id) {
    const book = booksDb.find((book) => book.id === id);
    return book;
  }

  static async findAll() {
    return booksDb;
  }

  static async create(bookData) {
    const newBook = { ...bookData };

    newBook.id = Date.now();

    booksDb.push(newBook);

    return newBook;
  }

  static async remove(id) {
    const foundBook = await Book.findOne(id);

    if (foundBook) {
      booksDb = booksDb.filter((book) => book.id !== +id);
      return foundBook;
    } else {
      throw new Error('Book not found');
    }
  }

  static async updateOne(id, dataToUpdate) {
    const foundBook = await Book.findOne(id);

    if (foundBook) {
      let updatedBook;

      booksDb = booksDb.map((bookInDb) => {
        if (bookInDb.id === +id) {
          updatedBook = {
            ...bookInDb,
            ...dataToUpdate,
          };

          return updatedBook;
        }

        return bookInDb;
      });

      return updatedBook;
    } else {
      throw new Error('Book not found');
    }
  }
}

module.exports = Book;
