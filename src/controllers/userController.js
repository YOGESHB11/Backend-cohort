const UserModel = require("../models/userModel")

const createNewBook = async  function(req , res){
    let bookData = req.body
    let storedData = await UserModel.create(bookData)
    res.send({Data : storedData})
}

const getBookData = async function(req , res) {
    let bookList = await UserModel.find()
    res.send({Data : bookList})
}

module.exports.createNewBook = createNewBook
module.exports.getBookData = getBookData