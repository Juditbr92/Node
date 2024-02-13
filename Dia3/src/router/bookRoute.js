const { Router } = require('express');
const router = Router();

const bookController = require('../Controller/books.controller')
const libraryController = require('../Controller/library.controller')

router.get('/', bookController.welcome)

router.get('/book', bookController.getBook);
router.post('/book', bookController.createBook);
router.put('/book', bookController.modifyBook)
router.delete('/book', bookController.deleteBook);
router.get('/books', libraryController.getBooks);
router.post('/books', libraryController.addBookToLibrary)
router.delete('/books', libraryController.deleteBookfromLibrary)
router.put('/books', libraryController.modifyBookFromLibrary)

module.exports = router;