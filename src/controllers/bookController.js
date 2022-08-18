const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

/* Write create APIs for both books and authors ---> If author_id is not available then do not accept 
the entry(in neither the author collection nor the books collection)*/

const createAuthor = async function(req,res) {
    let data = req.body;
    let result = await AuthorModel.create(data);
    res.send({msg : result})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
/*List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- 
    first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )*/

const listOfBooks = async function (req,res) {
    let data = await AuthorModel.findOne({author_name : "Chetan Bhagat"}).select({author_id :1 , _id : 0})
    //res.send({data: data})
    let id = data.author_id
    let result = await BookModel.find({author_id : id})
    res.send({data : data,msg : result})
}
/* find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  
( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)*/
const updatePrice = async function(req,res) {
    let data = await BookModel.findOneAndUpdate({name : "Two states"},{ $set : {price : 100}}).select({author_id : 1,price : 1 , _id :0})
    //res.send({msg : data})
    let newPrice = data.price;
    let id = data.author_id;
    let result = await AuthorModel.findOne({author_id : id}).select({author_name:1,_id:0})
    res.send({Author : result.author_name , Updated_price :newPrice})
    
}

/*Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and 
get all the authorName corresponding to the authorId’s ( by querying authorModel)*/

const range = async function(req,res){
    let data = await BookModel.find({ price : { $gte: 50, $lte: 100} }).select({ author_id :1 , _id :0})
    //res.send({msg : data});
    let id = data.map(a => a.author_id);
    let result = await AuthorModel.find({author_id : id}).select({author_name : 1,_id : 0});
    res.send(result)
    
}

module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.listOfBooks = listOfBooks
module.exports.updatePrice = updatePrice
module.exports.range = range
