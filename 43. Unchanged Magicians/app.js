"use strict";
let magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let great_magicians1 = [];
    magicians.forEach(magicians => {
        great_magicians.push(`${magicians} THE GREAT`);
    });
    return great_magicians;
}
let great_magicians = make_great(magicians.slice());
console.log("Original MAgicians:");
showmagicians(magicians);
console.log("Great magicians");
Showmagicians(great_magicians);
