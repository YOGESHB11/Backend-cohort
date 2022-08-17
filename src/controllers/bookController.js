const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const booksList= async function (req, res) {
    let bookList = await BookModel.find().select({bookName : 1,authorName : 1, _id :0})
    res.send({Data : bookList})
}

const booksYear = async  function(req , res){
    let bookYear = req.body.year
    let storedData = await BookModel.find( { year : bookYear})
    res.send({Data : storedData})
}


const getParticularBooks = async function(req,res) {
    let data = req.body;
    let result = await BookModel.find(data);
    res.send({msg : result});
}

const getXINRBooks = async function(req,res) {
    let data = await BookModel.find({"price.INRprice" : {$in: ["100INR", "200INR","500 INR"]}}) ; 
    res.send({msg : data})
}

const getRandomBooks = async function(req , res) { 
    let data = await BookModel.find({$or : [{stockAvailable : true},{totalPages : {$gt : 500}}]})
    res.send({msg : data})
}

module.exports.createBook= createBook
module.exports.booksList= booksList
module.exports.booksYear = booksYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks