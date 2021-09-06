const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(

);

// const Book = model('Book', bookSchema);
// module.exports = Book;

module.exports = model('Book', bookSchema);
