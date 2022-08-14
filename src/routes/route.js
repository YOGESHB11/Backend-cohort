const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel");
const UserController = require("../controllers/userController");

router.post("/createNewBook" , UserController.createNewBook)

router.get("/getBookData" , UserController.getBookData)

module.exports = router;