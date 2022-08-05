let str = "     a string with spaces     "
let str1 = "THIS IS A FRESH START"
let str2 = "getting better day by day"
let trim = function() {
    console.log("TRIM(     a string with spaces     ) : " , str.trim())
}

let  changetoLowerCase = function() {
    console.log("CHANGE TO LOWER CASE (THIS IS A FRESH START) : " ,str1.toLowerCase())
}

let changeToUpperCase = function(){
    console.log("CHANGE TO UPPER CASE(getting better day by day) : " ,str2.toUpperCase())
}

module.exports.trim = trim
module.exports.LowerCase = changetoLowerCase
module.exports.UpperCase = changeToUpperCase
