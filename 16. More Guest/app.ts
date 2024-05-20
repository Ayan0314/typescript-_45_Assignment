let guest_list : string[] = ['Ayan' ,'Affan' ,'Anas' ,'Amaira'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThank You');
// }

let not_present : string = "Anas";
let new_guest: string = "BABAR AZAM";
guest_list[2]= new_guest;
for(let i=0; i<guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
}
console.log(`Mr.${not_present} are not coming in tomorrow dinner`);

guest_list.unshift('Shaheen' ,'Naseem' ,'Amir')
for(let i=0; i<guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow. we found a big table so we decided to invite 4 more guests\nThank You\n');
}
