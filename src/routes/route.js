const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

router.get('/movies', function(req,res){
    let movies = ['3 Idiots','Rocketry','RRR','Interstellar','M.S.Dhoni']
    res.send(movies)
});

router.get('/movies/:indexNumber', function(req,res){
    let movies = ['3 Idiots','Rocketry','RRR','Interstellar','M.S.Dhoni']
    let address = req.params.indexNumber
    if(address > movies.length -1 || address <= -1){
        res.send("Error : Use a valid index")
    }
    else{
        res.send(movies[address])
    }
    
});

router.get('/films' , function(req,res){
    let films = [{
        "id" : 1,
        "name" : "RRR"
    },{
        "id" : 2,
        "name" : "Interstellar"
    },{
        "id" : 3,
        "name" : "Rocketry"
    },{
        "id" : 4,
        "name" : "3 Idiots"
    }]
    
    res.send(films)
       
});

router.get('/films/:filmId' , function(req,res){ 
let films = [{
    id : 1,
    name : "RRR"
},{
    id : 2,
    name : "Interstellar"
},{
    id : 3,
    name : "Rocketry"
},{
    id : 4,
    name : "3 Idiots"
}];

let newId = req.params.filmId;
let len = films.length

for( let i = 0 ; i<films.length ; i++){
    let film = films[i]
    if(newId>len || newId == 0 || newId < 0 ){
        
        res.send("No such film exist with thus Id")
        
    }   
  
    if(newId == film.id){
        res.send(film)
    }

}


});

module.exports = router;