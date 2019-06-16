const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '0ff9a07c71106512f3dc44558d0b6b78';


app.set('view engine', 'ejs')
// use css file
app.use(express.static('public'));
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// get route
app.get('/', function (req, res) {
  // res.send('Hello World!')
  // NEW CODE
  res.render('index');
})
//post route
app.post('/', function (req, res) {
  console.log("In Post");
  let city = req.body.city;
  //res.send(city);
  let url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}"
  //res.send(url);

  request(url, function (err, response, body) {
    console.log("In request");
        let weatherText = "It's ${weather.main.temp} degrees in ${weather.name}!";
        res.render('index', weatherText);
      })
    })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})