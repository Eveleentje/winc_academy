const paintWall1 = function() {
    console.log("The wall has been painted red");
};

paintWall1();

const paintWall2 = function(color) {
    console.log("The wall has been painted " + color);
};

paintWall2("green");

const paintWall3 = function(face,color) {
    console.log("The " + face + " wall has been painted " + color);
};

paintWall3("north","yellow");

// The order of the arguments matters:

paintWall3("purple","south");

const paintWall4 = function(face,color) {
    console.log("The " + face + " wall has been painted " + color);
};

paintWall4("northeast","eggshell");
