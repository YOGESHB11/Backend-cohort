const myName = "Yogesh"

let welcome = function() {
    console.log('Welcome to my application. I am  ', myName , ' and a part of FunctionUp PLutonium cohort.')
}

module.exports.displayName = myName
module.exports.welcome = welcome