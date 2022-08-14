const mongoose = require('mongoose') ;

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true,
    },
    authorName : String,
    category : {
        type : String,
        enum : ["fiction" , "action" , "fantasy" , "history"  , "biography" , "horror" , "crime" , "poetry"]
    } ,
    year : String
}, { timestamps: true});

module.exports = mongoose.model('Folder',bookSchema)