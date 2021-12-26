// Checking if a number is big

const numberCheck = function(number) {
    if (number > 100) {
        return "true";
    }
    else {
        return "false";
    }
}

const result = numberCheck(99);
console.log(result);

// This function produces something

// pt2: Brenda the Bouncer Bot

const bouncerBot = function(crowd,age) {
    if (crowd >= 100) {
        return "it's too busy now, come back later";
    }
    else if (age < 18) {
        return "this is a club for adults";
    }
    else {
        return "come in";
    }
    
}

const result2 = bouncerBot(100,17);
console.log(result2);

// This function produces something

// pt 3. Calculating the average of 5 numbers

const averageNumber = function(numbers) {
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const sum = (numbers.reduce(reducer));

const average = (sum/numbers.length);

return (Math.round(average));
};

const result3 = averageNumber([5, 10, 6, 3, 8]);
console.log(result3);

// This function produces something 

