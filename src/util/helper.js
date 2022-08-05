let today = new Date();


let printDate = function() {
    console.log("Date & Time : ", today)
}
 
let printMonth = function() {
    let today = new Date()
    let date = today.getMonth();
    console.log("Month : " , date)
}

let getBatchInfo = function() {
    console.log("Plutonium , W3D5 , the topic of the day is Nodejs module system")

}

module.exports.getBatchInfo = getBatchInfo
module.exports.printMonth = printMonth
module.exports.printDate = printDate

