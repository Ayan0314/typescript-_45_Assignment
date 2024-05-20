let guest_list : string[] = ['Ayan' ,'Affan' ,'Anas' ,'Amaira'];
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow.\n\nThank You');
// }

let not_present : string = "Anas";
let new_guest: string = "BABAR AZAM";
guest_list[2]= new_guest;
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow.\nThank You\n');
// }
console.log(`Mr.${not_present} are not coming in tomorrow dinner`);

guest_list.unshift('Shaheen' ,'Naseem' ,'Amir')
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invited you on dinner tommorow. we found a big table so we decided to invite 4 more guests\nThank You\n');
// }
console.log('\nUnfortunately we can not arrange big table , only two people allow.');
while(guest_list.length>2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam,${remove_guest}you are not invited for a dinner`);
}
for(let i=0; i<guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nYes you are still invited for tomorrow dinner\nThank You\n');
}
guest_list.splice(0,2)
console.log(guest_list);
