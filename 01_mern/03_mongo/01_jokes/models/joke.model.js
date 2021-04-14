const mongoose = require('mongoose');

// model - is the shape of the json data that we want to put in to the collection
const JokeSchema = new mongoose.Schema (
    {
        // shape of my json objects to be stored in the database
        jokeText: {
            type: String,
            required: [true, "You forgot the joke..." ],
        },

        jokeTitle: {
            type: String,
            required: [true, "You forgot the name of the joke"],
        }
    },
    {
        // options object
        timestamps: true,
    }
);

// model name is the name of our collection in the database
//  BUT....
//    it will be lower cased as a collection name
const modelName = "Joke"

const Joke = mongoose.model(modelName, JokeSchema);

module.exports = Joke;