const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const tokenAuth = require('../middlewares/tokenAuth');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",tokenAuth ,  userController.updateUser)

router.delete("/users/:userId",tokenAuth , userController.markDeleted)

module.exports = router;