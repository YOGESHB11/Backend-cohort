const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")
const MemeController = require("../controllers/memeController")

//-------------------------------(vaccine)-----------------------------------------------

router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.get("/cowin/session",CowinController.getVaccineSession)

router.post("/cowin/getOtp", CowinController.getOtp)

//---------------------------------(weather)---------------------------------------------

router.get("/weather/london", WeatherController.londonWeather)

router.get("/weather/london/temp",WeatherController.londonTemp)

router.get("/weather/city" , WeatherController.listofCities)

//-----------------------------------{memes}--------------------------------------------------

router.post("/memes" , MemeController.memeMaker)

module.exports = router;