const { Router } = require('express');
const router = Router();

const bookController = require('../Controller/books.controller')

router.get('/', bookController.welcome)

router.get('/book', bookController.getBook);
router.post('/book', bookController.createBook);
router.put('/book', bookController.modifyBook)
router.delete('/book', bookController.deleteBook)

module.exports = router;