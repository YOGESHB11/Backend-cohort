const express = require('express');
const underScore = require('underscore')
const newLodash = require('lodash')
const abc = require('../introduction/intro')
const xyz = require('../logger/logger')
const efg = require('../util/helper')
const hij = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {

    console.log('My batch is', abc.name)
    abc.printName()
    xyz.welcome()
    efg.printDate()
    efg.printMonth()
    efg.getBatchInfo()
    hij.trim()
    hij.LowerCase()
    hij.UpperCase()
    let weekend = ["saturday","sunday"]
    let result = underScore.first(weekend , 0)
    console.log(result)
    let monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let chunkArr = newLodash.chunk(monthsOfYear , 4)
    console.log(chunkArr)
    let numArr = [1,3,5,7,9,11,13,15,17,19]
    let tailArr = newLodash.tail(numArr) 
    console.log(tailArr)
    let dupArr1 = [1,3,5,5]
    let dupArr2 = [2,3,5,6]
    let dupArr3 = [4,6,7,8]
    let dupArr4 = [7,8,9,7]
    let dupArr5 = [8,9,8,10,9]
    let unionArr = newLodash.union(dupArr1,dupArr2,dupArr3,dupArr4,dupArr5)
    console.log(unionArr)
    let paiArr1 = ['horror' , 'The shinning']
    let paiArr2 = ['drama' , 'Titanic']
    let paiArr3 = ['thriller' , 'Shutter Island']
    let paiArr4 = ['fantasy' , 'Labyrinth']
    let mergedArr = newLodash.fromPairs([paiArr1,paiArr2,paiArr3,paiArr4])
    console.log(mergedArr)
    res.send('My second ever api!')
    

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason