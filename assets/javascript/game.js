var letters = ["a","b","c"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;


// what is this for
var guessedLetters = [];

// check this
var playerGuesses = null;

//link to html Guesses Left
var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

//link to html Guesses So Far
var updateGuessesSoFar = function () {
    document.querySelector("#guessesSoFar").innerHTML = guessedLetters.join(", ");
}

var updatePlayerGuesses = function () {
    playerGuesses = letters[Math.floor(Math.random()*letters.length)];
}


//reset function
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateGuessesLeft();
    updateGuessesSoFar();
    updatePlayerGuesses();
}

//This from google books
//Define the Function - fundtion letterGuess() {}
//Retrieve Guess - funtion letterGuess() { var playerGuess = document.getElementByID("guess")}
//Test and Update Loop - for (var L = 0; L<secretName.lenght;L++)}
