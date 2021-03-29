const BookController = require('../controllers/book.controller');
module.exports = function(app){
    app.get('/api/books', BookController.getBooks);
    app.post('/api/books', BookController.createBook);
}
