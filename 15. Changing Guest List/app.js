"use strict";
let guest_list = ['Ayan', 'Affan', 'Anas', 'Amaira'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThank You');
}
let not_present = "Anas";
let new_guest = "BABAR AZAM";
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow\n\nThank You');
}
console.log(`Mr.${not_present} are not coming in tomorrow dinner`);
