
const paint = function() {
    console.log("The " + color + " wall has been painted " + face);
};

const face = "north";
const color = "green";

paint();

// Single argument q 7: calling the function without an argument returns an error

//  Multiple arguments q 6: the order of the arguments does not matter, 
//  as long as they're placed before calling the function 

// Multitple arguments q 7: switching the arguments in the function definition changes 
// their places in the output too

// Multiple arguments q 8: changing the order of the arguments only has effect
// on the output when it's done in the function definition. Otherwise it does not matter