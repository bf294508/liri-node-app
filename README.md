# liri-node-app

Overview

    LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

liri's avaliable function

concert-this
spotify-this-song
movie-this
do-what-it-says


concert-this

Type in any artist/band name,  it will return you name of the venue, venue location, date of Event.

spotify this song

Type in any song name, it will return you artist's name, song's name, a preview link of the song from Spotify and The album that the song is from.

movie this

Type in any movie name, it will return you the title of moive, year the movie came out, IMDB rating of the movie, Rotten Tomatos Rating of the movie, contry where the movie was produced, Language of the movie, Plot of the movie and actors in the movie.

do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.