"use strict";
// create a variable called alien_colours
let alien_colours = "green";
//Write an if statement to test whether the alien’s color is green. If it is,
// print a message that the player just earned 5 points.
if (alien_colours == "green") {
    console.log("the player just earned 5 points");
}
// Write one version of this program that passes the if test and another that fails. 
// (The version that fails will have no output.)
alien_colours = "red";
if (alien_colours == "red") {
    console.log("the player just earned 5 points");
}
