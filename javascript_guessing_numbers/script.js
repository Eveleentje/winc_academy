var user = prompt("Welcome! What is your name?");
if (user != null) {
    var welcome = alert("Hey " + user);
}

// number game

function getNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var result = getNumber(0,25);
console.log(result);

// start loop

var stepOne = function() {
const guessNumber = prompt("Enter a number between 0 and 25 to start guessing..."); 
var numberInteger = parseInt(guessNumber);

if (numberInteger === result) {
    return alert(`Congratulations, you won! Bye ${user} `);
}
else { alert("Unfortunately, that is not correct!");
stepOne(); }
};

stepOne();

