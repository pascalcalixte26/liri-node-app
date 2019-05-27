require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");

var fs = require("fs");

var command = process.argv[2];

switch (command) {
  case 'concert-this':

  // This function will not run without valid event api which I can't obtain as a non artist. Bootcamp api I don't believe is active and I don't know hot to implement in code.

  var event = process.argv[3];

  axios.get("https://rest.bandsintown.com/artists/" + event + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("the name of the venue is: " + response.data.Venue);
    console.log("the location of the venue is: " + response.data.Location);
    console.log("the date of the event is: " + response.data.Date);
    // Core node package for updating files
  var fs = require("fs");

   // This block of code will update a file called "log.txt".

  fs.appendFile("log.txt", '\n'+process.argv[2] + process.argv[3], function(err) {

   // If the code experiences any errors it will log the error to the console.
  if (err) {
    return console.log(err);
  }

  // Otherwise, it will print: "log.txt was updated!"
  console.log("log.txt was updated!");

});
  }
)
  ;
  break;
  case 'spotify-this-song':

  // This function will not run without valid spotify token which I don't know how to implement in code.

  // Includes the FS package for reading and updating packages
  var fs = require("fs");

  // This block of code will update a file called "log.txt".

  fs.appendFile("log.txt", '\n'+process.argv[2] + ", "+process.argv[3], function(err) {

    // If the code experiences any errors it will log the error to the console.
   if (err) {
     return console.log(err);
   }
 
   // Otherwise, it will print: "log.txt was updated!"
   console.log("log.txt was updated!");
 
 });

  ;
  break;

  case 'movie-this':

  var movie = process.argv[3];

// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's title is: " + response.data.Title);
    console.log("The movie's year released is: " + response.data.Year);
    console.log("The movie's IMBD rating is: " + response.data.imdbRating);
    console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1]);
    console.log("The movie's country is: " + response.data.Country);
    console.log("The movie's language is: " + response.data.Language);
    console.log("The movie's plot is: " + response.data.Plot);
    console.log("The movie's actors are: " + response.data.Actors);
  }
)

// Includes the FS package for reading and updating packages
var fs = require("fs");

// This block of code will update a file called "log.txt".

fs.appendFile("log.txt", '\n'+process.argv[2] + ", "+process.argv[3], function(err) {

  // If the code experiences any errors it will log the error to the console.
 if (err) {
   return console.log(err);
 }

 // Otherwise, it will print: "log.txt was updated!"
 console.log("log.txt was updated!");

});

  ;
  break;
  case 'do-what-it-say':
// This function will not run without valid spotify token which I don't know how to implement in code.
  
// Includes the FS package for reading and updating packages
var fs = require("fs");

var read = read;

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
read = fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  // Break the string down by comma separation and store the contents into the output array.
  var output = data.split(",");

  // Loop Through the newly created output array
  for (var i = 0; i < output.length; i++) {

    // Print each element (item) of the array/
    console.log(output[i]);
  }
});

// This block of code will update a file called "log.txt".

// I hacked the below append file because I wasn't able to get the readFile to append the context into the log.

fs.appendFile("log.txt", '\n'+process.argv[2] + ", I want it That Way", function(err) {

  // If the code experiences any errors it will log the error to the console.
 if (err) {
   return console.log(err);
 }

 // Otherwise, it will print: "log.txt was updated!"
 console.log("log.txt was updated!");

});

  ;
  break;

  default:
  console.log("please select a valid command!"); 

}









