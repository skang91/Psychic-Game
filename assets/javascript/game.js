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

//update funfunions
updateGuessesLeft();
updateGuessesSoFar();


//function for keyboard input
document.onkeydown = function() {
    
    //reduce guess by one
    guessesLeft--;

    var letters = event.key.toLowerCase();
    
    //add guess letters
    guessesSoFar.push(letters);

    //update fucntion
    updateGuessesLeft();
    updateGuessesSoFar();


    //if function for add by 1 wins and losses
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
