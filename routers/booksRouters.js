const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { updateBookMW, createValidationMW } = require('../middlewares/booksMW');
const BooksController = require('../controllers/bookControllers');

const imageFolderPath = path.resolve(__dirname, '..', 'public', 'images');

const isImageFolderExists = fs.existsSync(imageFolderPath);

if (!isImageFolderExists) {
  fs.mkdirSync(imageFolderPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageFolderPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const booksRouter = express.Router();

booksRouter.get('/', BooksController.getBooks);
booksRouter.get('/:bookId', BooksController.getBook);
booksRouter.delete('/:bookId', BooksController.deleteBook);
booksRouter.put('/:bookId',updateBookMW, BooksController.updateBook);
booksRouter.post(
  '/',
  upload.single('bookImage'),
  createValidationMW,
  BooksController.createBook
);

module.exports = booksRouter;