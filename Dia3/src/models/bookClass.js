export class Book{
    id_book!;
    title!;
    type!;
    author!;
    price!;
    photo!;

    constructor(id_book = 0, title, type, author, price, photo){
        this.id_book = id_book;
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
    }
}