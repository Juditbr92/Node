let library =[
    {
        id_book: 1,
        title: 'El nombre del viento',
        type: 'Fantasy', 
        author: 'Patrick Rothfuss',
        price: 12,
        photo: 'https://ih1.redbubble.net/image.5006111680.1733/raf,750x1000,075,t,101010:01c5ca27c6.u1.jpg'
    },

    {
        id_book: 2,
        title: 'Dime quien soy',
        type: 'Historic', 
        author: 'Julia Navarro',
        price: 20,
        photo: 'https://m.media-amazon.com/images/I/91yu2bAqlDL._AC_UF1000,1000_QL80_.jpg'
    },

    {
        id_book: 3,
        title: '1984',
        type: 'Science fiction', 
        author: 'George Orwell',
        price: 14,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgle_N07ozlKiQl1CMgnmblzOA6cpRRAKQaw&usqp=CAU'
    },

    {
        id_book: 4,
        title: 'Patria',
        type: 'Historic', 
        author: 'Fernando Aramburu',
        price: 17,
        photo: 'https://m.media-amazon.com/images/I/71P6414BRDL._AC_UF894,1000_QL80_.jpg'
    }, 

    {
        id_book: 5,
        title: "El ruiseñor",
        type: "Novela histórica",
        author: "K. Hannah",
        price: 18,
        photo: "https://www.moitoconto.com/imagenes/9788466/978846633840.JPG"
    }

];

function getBooks(req, res) {
    let response;

    const foundBook = library.find(book => book.id_book === Number(req.query.id_book));
    
    if (foundBook) {
        response = foundBook;
    } else {
        response = library
    }

    res.send(response)
}

function addBookToLibrary(req, res) {
    let response;

    const currentBooks = library.find(book => Number(book.id_book === Number(req.body.id_book)))

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
    const idBook = Number(req.query.id_book);
    const foundBookIndex = library.findIndex(book => book.id_book === idBook)

    if(foundBookIndex !== -1){
        library[foundBookIndex] = {
            ...library[foundBookIndex],
            ...req.body ?? {}
        };
        response = { error: false, code: 200, message: `This book has been modified`};
    } else {
        response = { error: true, code: 200, message: 'This book cannot be modified'}
    }
    res.send(response)
}

function deleteBookfromLibrary( req, res) {
    let response;
    const idBook = Number(req.query.id_book);
    const bookToRemove = library.findIndex(book => book.id_book === idBook)

    if(bookToRemove !== -1){
        library.splice(bookToRemove, 1);
        response = { error: false, code: 200, message: 'Book deleted'}
    } else {
        response = { error: true, code: 200, message: 'Book not found'}
    }
    res.send(response)
}


module.exports = { getBooks, addBookToLibrary, deleteBookfromLibrary, modifyBookFromLibrary }