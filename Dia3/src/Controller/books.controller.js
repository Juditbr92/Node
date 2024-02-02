let book = null;

function welcome(req, res){
    res.send('Bienvenido al servidor de MyBooks')
}

function getBook(req, res) {
    let response; 
    if(book){
        response = book;
    } else {
        response = {error: true, code: 200, message: 'There are no books to show'}
    }
    res.send(response)
}

function createBook(req, res){
    let response;

    if(!book){
        book = req.body; 
        response = {error: false, code: 200, message: 'A new book has been created', book}
    } else {
        response = {error: true, code: 200, message: 'This book already exists'}
    }
    res.send(response)
}

function modifyBook(req, res){
    let response;

    if(book) {
        book = {
            ...book, 
            ...req.body ?? {}
        }
        response = {error: false, code: 200, message: 'Book updated', book}
    } else {
        response = {error: true, code: 200, message: 'This book does not exist'}
    }

    res.send(response)
}

function deleteBook(req, res){
    let response;

    if(book){
        book = null;    
        response = { error: false, code: 200, message: 'This book has been deleted'}
    } else {
        response = { error: true, code: 200, message: 'This book does not exist'}
    }
    res.send(response)
}

module.exports = {welcome, getBook, createBook, modifyBook, deleteBook}