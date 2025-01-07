const { UPDATE_BOOK_SCHEMA, CREATE_BOOK_SCHEMA } = require('../validation/bookSchemas');

module.exports.updateBookMW = async (req, res, next) => {
  try {
    const { body } = req;

    req.book = await UPDATE_BOOK_SCHEMA.validate(body);
    
    next();
  } catch (err) {
    res.status(400).send(err.message);
  }
};


module.exports.createValidationMW = async (req, res, next) => {

  try {
    const book = await CREATE_BOOK_SCHEMA.validate(req.body);
    req.book = book;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};