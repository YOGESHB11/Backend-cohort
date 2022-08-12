const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
   
      let data = req.body;
      console.log(data)
      let dataName = data.name;
      console.log(dataName)
      let flag = true
      for(let i = 0 ; i<players.length ; i++){
         let player = players[i]
         if(player.name === dataName){
             
             flag = false
             res.send( "Player with such name already exist"  )
             break;
         }  
   }
      if(flag == true){
         players.push(data)
      }
         
         res.send(  { data: players , status: true }  )  
      
      
   });
/*you will be given an array of persons (i.e an array of objects ) .. each person will have a
{name : string , age : number , votingStatus : true/false(boolean)} take input 
in query param as votingAge .. and for all the people above that age, change
votingStatus as true also return an array consisting of only the person that  
can vote.
*/


   let persons = [
      {
          name : "PK",
          age : 10,
          votingStatus : false
      },
      {
         name : "SK",
          age : 20,
          votingStatus : false 
      },
      {
         name : "AA",
          age : 70,
          votingStatus : false 
      },
      {
         name : "SC",
          age : 5,
          votingStatus : false 
      },
      {
         name : "HO",
          age : 40,
          votingStatus : false 
      }
]

router.get('/voters-get-query', function(req, res) {
   let data = req.query  // storing the key value pair object 
   //console.log(data)
   let votingAge = data.votingAge  //storing the votingAge attribute value
   //console.log(votingAge)
   let finalArr = []
   for(let i = 0 ; i<persons.length ; i++){
      let x= persons[i]
      x.age>votingAge ? x.votingStatus = true : x.votingStatus = false
      if(x.votingStatus == true){
         finalArr.push(x)
      }

   } 

   console.log(persons)
   //res.send("dummy response")
   res.send({data : finalArr , status : true})
});




// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;