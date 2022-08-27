const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");
const ProductController = require("../controllers/productController");
const OrderController = require("../controllers/orderController");
const MW = require("../middlewares/commonMiddlewares");

router.post('/createProduct' , ProductController.createProduct);

router.post('/createUser' , MW.mid1 , UserController.createUser);

router.post('/createOrder' , MW.mid1 , OrderController.createOrder);
 
module.exports = router;