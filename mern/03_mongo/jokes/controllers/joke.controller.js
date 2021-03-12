const Joke = require('../models/joke.model');

module.exports = {
    helloWorld: (req, res) => {
        return res.json("Hello, world!");
    },

    getJoke: (req, res) => {
        Joke.findOne({})
        .then((oneJoke) => {
            console.log(oneJoke);
            res.json(oneJoke);
        })
        .catch((err) => res.json(err));
    },

    getAllJokes: (req, res) => {
        Joke.find({})
        .then((allJokeArray) => {
            console.log(allJokeArray);
            res.json(allJokeArray);
        })
        .catch((err) => res.json(err));
    },

    createJoke: (req, res) => {
        console.log(req.body);

        Joke.create(req.body)
        .then((newJokeObj) => {
            console.log(newJokeObj);
            // res.json is the equivalent of a return from the function
            res.json(newJokeObj);
        })
        .catch((err) => {
            console.log("in joke create");
            console.log(err);
            // res.json is the equivalent of a return from the function
            res.json( {
            theErrObject: err,
            message: "There was an error"
            } );
        });
    },

    updateJoke: (req, res) => {
        Joke.updateOne({})
        .then((oneJoke) => {
            console.log(oneJoke);
            res.json(oneJoke);
        })
        .catch((err) => res.json(err));
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({})
        .then((oneJoke) => {
            console.log(oneJoke);
            res.json(oneJoke);
        })
        .catch((err) => res.json(err));
    },
}