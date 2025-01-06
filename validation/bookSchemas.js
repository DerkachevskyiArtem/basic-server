const yup = require('yup');

module.exports.UPDATE_BOOK_SCHEMA = yup.object({
  name: yup.string(),
  author: yup.string(),
  synopsis: yup.string(),
  pageCount: yup.number(),
  price: yup.number(),
  isAvailable: yup.boolean(),
});

module.exports.CREATE_BOOK_SCHEMA = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
  synopsis: yup.string(),
  pageCount: yup.number(),
  price: yup.number().required(),
  isAvailable: yup.boolean(),
});