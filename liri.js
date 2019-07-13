require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require('moment');
// moment().format();
var axios = require('axios');
var input = process.argv[2];
var secondCommand = process.argv[3];    
artist = secondCommand;
// var command = "";
// for (var i = 4; i < process.argv.length; i++) {
//     secondCommand += '+' + process.argv[i];
// }


function concert(artist) {
    // var date = moment(response.data[i].datetime).format("MM/DD/YY HH:mm:ss")
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(url).then(function(response) {
        console.log(artist)
        var data = response.data
        
        // console.log(response)
       for(var i = 0; i<data.length; i++) {
        console.log("The band " + artist + " is playing at...")
        console.log("Venue: " + data[i].venue.name)
        console.log(data[i].venue.city + ", " + data[i].venue.country);
    //    console.log("date "+ date)
       };
    });
};
concert(artist);


// function getSong(title) {

//     // Import the spotify API
//     var Spotify = require('node-spotify-api');

//   
//     var spotify = new Spotify(keys.spotify);

//     title = title.replace(' ', '+');


//     spotify
//         .search({ type: 'track', query: title })
//         .then(function(response) {

//             // console.log(response);
//             // console.log(response.tracks.items[0]);

//             // Use first result
//             var firstResult = response.tracks.items[0];

//             // Store song information
//             var artist = firstResult.artists[0].name;
//             var songName = firstResult.name;
//             // var previewLink = firstResult.href;
//             var previewLink = firstResult.external_urls.spotify;
//             var album = firstResult.album.name;


// // SPOTIFY
// else if (action === 'spotify-this-song') {
//     // Search by keyword if provided
//     if (title) {
//         fs.appendFile('log.txt', '\n' + '\n' + 'COMMAND: ' + action + ', "' + title + '"' + '\n', function(err) {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         getSong(title);
//     }
//
//     else {
//         fs.appendFile('log.txt', '\n' + '\n' + 'COMMAND: ' + action + ', "The Sign" by Ace of Base' + '\n', function(err) {
//             if (err) {
//                 console.log(err);
//             }
//         });
//         getSong()
//     }
// }