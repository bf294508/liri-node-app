require("dotenv").config();
var fs = require("fs");
var axios =require("axios")
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
var operator = process.argv[2];
var inputs = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.

switch (operator){
case "concert-this":
    concertThis(inputs);
    break;

case "spotify-this-song":
    spotifyThisSong(inputs);
    break;

case "movie-this":
    movieThis(inputs);
    break; 

case "do-what-it-says":
    doWhatItSays(inputs);
    break;
}

// to get information about concert.
function concertThis(inputs){
    axios.get("https://rest.bandsintown.com/artists/" + inputs + "/events?app_id=codingbootcamp")
    .then(function(response) {    
       for (var i=0; i<response.data.length;i++){
        var datetime = response.data[i].datetime; 
        var dateArr = datetime.split('T'); 
        var infom =
            "======================================================================" +
                    "\nVenue Name: " + response.data[i].venue.name + 
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + moment(dateArr[0]).format("MM/DD/YYYY")
            "======================================================================";
         console.log(infom);
       }
    });
    
}

// to get information about spotify-this-songt.

function spotifyThisSong(inputs){
    spotify
    .search({ type: 'track', query: inputs })
    .then(function(response) {
        for (var i = 0; i < 20; i++) {
            var spotifyinfo = 
                "==============================================================" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyinfo);
        } 
    })
    .catch(function(err) {
      console.log(err);
    });
}


// to get information about movie-this.
function movieThis(inputs) {
    axios.get("https://www.omdbapi.com/?t=" + inputs + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
            var movieinfo = 
                "===================================================================" +
                    "\nTitle of the Movie: " + response.data.Title + 
                    "\nYear the movie came out: " + response.data.Year +
                    "\nIMDB Rating of the movie: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating of the movie: " + response.data.Ratings[0].Value +
                    "\nCountry where the movie was Produced: " + response.data.Country +
                    "\nLanguage of the movie: " + response.data.Language +
                    "\nPlot of the movie: " + response.data.Plot +
                    "\nActors in the movie: " + response.data.Actors;
            console.log(movieinfo);
    })
    .catch(function (error) {
        console.log(error);
    });
    
}

function doWhatItSays(inputs){
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        // console.log(data);
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
      
        spotifyThisSong(dataArr[1]);
      
      });
}