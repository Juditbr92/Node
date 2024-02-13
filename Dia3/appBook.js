const express = require('express')
let cors = require('cors')

const bookRoutes = require('./src/router/bookRoute');
const errorHandling = require('./src/error/errorHandling');

const appBook = express();
appBook.set('port', 3000)

appBook.use(express.urlencoded({ extended: false }));
appBook.use(express.json());


appBook.use(cors())
appBook.use(errorHandling)
appBook.use(bookRoutes);


module.exports = appBook;



