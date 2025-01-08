const Book = require('../models/Books');

module.exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.status(200).send(books);
};

module.exports.getBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;

  const book = await Book.findOne(+bookId);
  res.send(book);
};

module.exports.createBook = async (req, res) => {
  try {
    const { book, file } = req;

    const newBook = await Book.create({
      ...book,
      coverImage: file.filename,
    });

    res.status(201).send({
      newBook,
    });
  } catch (err) {
    throw new Error(`Failed to create book: ${err.message}`);
  }
};

module.exports.deleteBook = async (req, res) => {
  const {
    params: { bookId },
  } = req;

  try {
    const deletedBook = await Book.remove(+bookId);
    res.send(deletedBook);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports.updateBook = async (req, res) => {
  const {
    book,
    params: { bookId },
    file,
  } = req;

  try {
    const updatedData = { ...book };

    if (file) {
      updatedData.coverImage = file.filename;
    }

    const updatedBook = await Book.updateOne(+bookId, updatedData);
    res.send(updatedBook);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
