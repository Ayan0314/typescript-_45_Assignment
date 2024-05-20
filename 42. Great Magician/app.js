"use strict";
let magicians = ["DON", "RAMEEZ", "CHRIS"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[1] = magicians[1] + "The Great";
    }
}
make_great(magicians);
