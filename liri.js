require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var moment = require('moment');
moment().format();
var time = moment().format('LLLL');
console.log(time)

var axios = require('axios');
var input = process.argv[2];
var secondCommand = process.argv[3];
artist = secondCommand;
var command = "";
for (var i = 4; i < process.argv.length; i++) {
    secondCommand += '+' + process.argv[i];
}


function concert(artist) {
  
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(url).then(function(response) {
        console.log(artist)
        var data = response.data
        
        // console.log(response)
       for(var i = 0; i<data.length; i++) {
        var date = moment(response.data[i].datetime).format("MM/DD/YY HH:mm:ss")
        console.log("The band " + artist + " is playing at...")
        console.log("Venue: " + data[i].venue.name)
        console.log(data[i].venue.city + ", " + data[i].venue.country);
        console.log("date "+ date)
       };
    });
};
concert(artist);



