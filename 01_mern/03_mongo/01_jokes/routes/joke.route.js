const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/joke/:id', JokeController.getJoke);
    app.get('/api/jokes/', JokeController.getAllJokes);
    app.put('/api/update/:id', JokeController.updateJoke);
    app.delete('/api/delete/:id', JokeController.deleteJoke);
    app.post('/api/create', JokeController.createJoke);
}