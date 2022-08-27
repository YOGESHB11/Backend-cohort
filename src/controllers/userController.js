const userModel= require("../models/userModel")


const createUser = async function(req,res){
    let header = req.headers.isfreeappuser
    req.body["isFreeAppUser"] = header
    let data = req.body;
    let savedData = await userModel.create(data);
    
    res.send({msg : savedData});
}

module.exports.createUser = createUser

