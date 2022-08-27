
const mid1= function ( req, res, next) {
    if(!req.headers["isfreeappuser"]){
       return res.send({msg : "Header is not present ... Execution Terminated !!"})
    }
    next()
}

module.exports.mid1= mid1
