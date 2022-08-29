const tokenAuth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({msg : "Error : Token is mandatory"});
    next();
}
module.exports = tokenAuth