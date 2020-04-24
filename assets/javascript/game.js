//variables
var letters = ["a","b","c"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var letterToGuess = null;

//link to html Guesses Left
var updateGuessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

//link to html Guesses So Far
var updateGuessesSoFar = function () {
    document.querySelector("#guessesSoFar").innerHTML = guessesSoFar.join(", ");
};

//pick random number from string
var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};


//what is this for?
//updateLetterToGuess();
//updateGuessesLeft();


//review this
document.onkeydown = function() {
    guessesLeft--;
    var letters = event.key.toLowerCase();
    guessesSoFar.push(letters);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (letters === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
};

//reset function
var reset = function() {
    guessesLeft = 9;
    guessesSoFar = [];
    updateGuessesLeft();
    updateGuessesSoFar();
    updateLetterToGuess();
};
