const Book = require('../models/book.model');
module.exports.createBook = (request, response) => {
    const { title, pages } = request.body;
    Book.create({
        title: title,
        numberOfPages: pages
    })
        .then(book => response.json(book))
        .catch(err => response.status(400).json(err))
}

module.exports.getBooks = (request, response) => {
    Product.find({})
        .then(books => response.json(books))
        .catch(err => response.json(err))
}

