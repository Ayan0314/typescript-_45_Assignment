"use strict";
let current_users = ["Arham", "Admin", "Affan", "Anas", "Ali"];
let new_users = ["Kabeer", "Ayan", "Malaha", "Admin", "Usman"];
new_users.forEach((new_users) => {
    if (current_users.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new user name. `);
    }
    else {
        console.log(`${new_users} is available`);
    }
});
