let library =[
    {
        id: 1,
        title: 'Dime quien soy',
        author: 'Julia Navarro'
    },

    {
        id: 2,
        title: 'Kafka on the shore',
        author: 'Murakami'
    },

    {
        id: 3,
        title: 'La sombra del viento',
        author: 'Carlos Ruiz Zafón'
    },

    {
        id: 4,
        title: 'Patria',
        author: 'Aramburu'
    },

    {
        id: 5,
        title: 'Todo esto te daré',
        author: 'Dolores Redondo'
    },

    {
        id: 6,
        title: 'El temor de un hombre sabio',
        author: 'Patrick Rothfuss'
    }
];

function getBooks(req, res) {
    let response;

    const foundBook = library.find(book => book.id === Number(req.query.id));
    
    if (foundBook) {
        response = foundBook;
    } else {
        response = library
    }

    res.send(response)
}

function addBookToLibrary(req, res) {
    let response;

    const currentBooks = library.find(book => Number(book.id === Number(req.body.id)))

    if(!currentBooks){
        library.push(req.body)
        response = { error: false, code: 200, message: `A new book has been added to library`}
    } else {
        response = { error: true, code: 200, message: `This book already exists in the library`}
    }

    res.send(response)
}

function modifyBookFromLibrary(req, res){
    let response;
    const idBook = Number(req.query.id);
    const foundBookIndex = library.findIndex(book => book.id === idBook)

    if(foundBookIndex !== -1){
        library[foundBookIndex] = req.body;
        response = { error: false, code: 200, message: `This book has been modified`};
    } else {
        response = { error: true, code: 200, message: 'This book cannot be modified'}
    }
    res.send(response)
}

function deleteBookfromLibrary( req, res) {
    let response;
    const idBook = Number(req.query.id);
    const bookToRemove = library.findIndex(book => book.id === idBook)

    if(bookToRemove !== -1){
        library.splice(bookToRemove, 1);
        response = { error: false, code: 200, message: 'Book deleted'}
    } else {
        response = { error: true, code: 200, message: 'Book not found'}
    }
    res.send(response)
}


module.exports = { getBooks, addBookToLibrary, deleteBookfromLibrary, modifyBookFromLibrary }