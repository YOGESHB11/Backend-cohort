const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.post("/createAuthor",BookController.createAuthor)

router.get("/listOfBooks", BookController.listOfBooks)

router.get("/updatePrice" , BookController.updatePrice)

router.get("/range" , BookController.range)

module.exports = router;