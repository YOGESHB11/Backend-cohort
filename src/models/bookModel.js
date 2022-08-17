const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required : true
    }, 
    authorName: String, 
    tags: [String],
    year : {
        type : Number,
        default : 2022
    },
    stockAvailable: Boolean,
    price: {
        INRprice : String,
        EUprice : String
    },
    totalPages : Number
}, { timestamps: true });


module.exports = mongoose.model('book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
