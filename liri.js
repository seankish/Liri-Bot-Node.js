require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');
var axios = require('axios');
var input = process.argv[2];
var title = process.argv[3];    
artistName = input;
var command = "";
if (process.argv.length > 3){

    for(var i = 3; i<process.argv.length; i++){
        command +=process.argv[i];
        
    }
}


function concert(artistName) {
    var date = moment(response.data[i].datetime).format("MM/DD/YY HH:mm:ss")
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(url).then(function(response) {
       for(var i = 0; i<response.data.length;i++) {
       Console.log("The band " + artistName + "is playing at...")
       console.log("Venue: " + response.data[1].venue.name)
       console.log(response.data[i].venue.city + ", " + response.data[i].venue.country);
       console.log("date "+ date)
       };
    });
};
concert(artistName);