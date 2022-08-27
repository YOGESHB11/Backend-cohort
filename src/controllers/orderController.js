const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel")

const createOrder = async function(req,res){
    let userId = req.body.userId;
    let prodId = req.body.productId;
    let header = req.headers.isfreeappuser
    let userData = await userModel.findById(userId);
    if(!userData) res.send({msg : "document is not found in userModel with given user Id"});
    let prodData = await productModel.findById(prodId);
    if(!prodData) res.send({msg :"document is not found in productModel with given prod Id"});
    if(header == 'true'){
        req.body["amount"] = 0;
        req.body["isFreeAppUser"] = header 
    let data = await orderModel.create(req.body);
    res.send({msg : data});
    }
    else if(header == 'false'){
        let userData = await userModel.findById(userId);
        let prodData = await productModel.findById(prodId);
        if(userData.balance > prodData.price){
            let remaining = userData.balance - prodData.price;
            req.body["amount"] = prodData.price;
            req.body["isFreeAppUser"] = header;
            let save = await orderModel.create(req.body);
            await userModel.updateOne({_id : userId},{$set : {balance : remaining}})
            res.send({msg : save})
        }
        else if(userData.balance < prodData.price){
            res.send({msg : "Insufficient balance"})
        }
    }


}

module.exports.createOrder = createOrder