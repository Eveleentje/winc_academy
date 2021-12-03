//bouncer at the pub

const age = 25;
if (age >= 18) {
    console.log("welcome to the pub")
} 
else {
    console.log("you are too young, please do not enter")
}

// discounts

if (age >= 18 && age <= 25) {
console.log("you get 50% discount")
}
else {
    console.log("you don't get a discount")
}

// ladies night

const isFemale = true;
if (isFemale == true) {
    console.log("welcome to ladies night")
}
else {
    console.log("sorry, this night is ladies only. we hope to see you back some other day")
}

// driver status

const driverStatus = 'bob';
if (driverStatus == 'bob') {
    console.log("you are allowed to drive")
}
else {
    console.log("you cannot drive")
}

// free beer 

const firstName = 'Eveleen';
if (firstName === 'Bram' || firstName === 'Sarah') {
    console.log("You get a free beer!")
}
else {
    console.log("You don't get a free beer")
}

// freebies

const totalAmount = 1000;
if (totalAmount > 100) {
    console.log("You get a free bottle of champagne!")
}
else if (totalAmount >= 50 && totalAmount <= 100) {
    console.log("You get free nachos!")
}
else if (totalAmount >= 25 && totalAmount <= 50) {
    console.log("You get free veggie bitterballen!")
}
else {
    console.log("Your bill is too small for freebies")
}