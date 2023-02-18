const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//post data that you get from form

app.post('/', function(req, res){

    // to print cityname in console only for testing
    // get form fill access through name
    console.log(req.body.cityName);
    
    // add your city name that want you to get temp
    const query = req.body.cityName;

    //add your API key
    const apiKey = ""; 

    // add your URL---https://api.openweather.org
    const url = ""; // add + query + to the API 

    https.get(url, function(response){

        // to print the status code in console
        console.log(response.statusCode);

        response.on("data", function(data){

            // get access of data form JSON object 
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;

            // you can pass several res write 
            res.write("<h1>The Temprature in " + query + " is " + temp +" degree celcius</h1>")

            //only one res send you can pass
            res.send();
        })
    })
});

app.listen(port, function(){
    console.log("server is running on "+ {port});
});