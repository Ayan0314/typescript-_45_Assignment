"use strict";
//Choose a color for an alien 
//as you did in Exercise 25, and write an if-else chain.
let alien_colours = "green";
// If the alien’s color is green, print a statement that
// the player just earned 5 points for shooting the alien.
if (alien_colours == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points.");
}
alien_colours = "red";
if (alien_colours == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
