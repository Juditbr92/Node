const express = require('express')
const cors = require('cors')

const bookRoutes = require('./src/router/bookRoute')

const appBook = express();

appBook.set('port', 3000)
appBook.use(bookRoutes)



module.exports = appBook;



