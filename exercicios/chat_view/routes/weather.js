var express = require('express');
var router = express.Router();

let request = require('request');
let apiKey = 'a8ff83e4ee34923c01db884f553d116e';
let city = 'campinas';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`

router.get('/', function (req, res, next) {
let msg;  

    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', error);
        } else {
            let weather = JSON.parse(body);
            let message = `${weather.main.temp}°C em ${weather.name}. E o tempo: ${weather.weather[0].description}!`;
            msg = message;
            return res.json({msg});
        } 
    });
});

module.exports = router;
