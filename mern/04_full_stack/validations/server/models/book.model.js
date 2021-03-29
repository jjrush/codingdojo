const mongoose = require('mongoose');


function validatePages(value) {
    if ( Number.isInteger && value > 0 ) {
        return true
    } else {
        return false
    }
}


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ]
    },
    numberOfPages: {
        type: Number,
        required: true,
        validate: {
            validator: validatePages,
            message: "Pages must be greater than 0"
        }
    }    
}, { timestamps: true });





module.exports = mongoose.model('Book', BookSchema);
