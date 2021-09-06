// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router(); // This is the Router class inside the Express library

// ********* require Book model in order to use it *********
const Book = require('../models/Book.model')

// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************



// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/', (req, res) => { // What URL does this answer?
  Book.find()
  .then(allBooks => {
    res.send('books')})
   // You have to continue coding the route
});

module.exports = router;
