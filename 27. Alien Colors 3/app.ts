// Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor : string = "blue";

// If the alien is green, print a message that the player earned 5 points.
if (alienColor=="green") {
    console.log("the player earn 5 points");
}

// If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor=="yellow"){
    console.log("the player earn 10 points");
}

// If the alien is red, print a message that the player earned 15 points.
else if (alienColor=="red"){
    console.log("the player earn 15 points");
 }
else {
    console.log("please select right color");
}
// Write three versions of this program, making sure 
// each message is printed for the appropriate color alien.

// version 2
alienColor= "red";
if (alienColor=="green") {
    console.log("the player earn 5 points");
}
else if (alienColor=="yellow"){
    console.log("the player earn 10 points");
}
else if (alienColor=="red"){
    console.log("the player earn 15 points");
 }
 else {
    console.log("please select right color");
}

// version 3
alienColor = "yellow"
if (alienColor=="green") {
    console.log("the player earn 5 points");
}
else if (alienColor=="yellow"){
    console.log("the player earn 10 points");
}
else if (alienColor=="red"){
    console.log("the player earn 15 points");
 }
 else {
    console.log("please select right color");
}
