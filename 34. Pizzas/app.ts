let myPizza : string[] = ["Fajita Pizza", "Pepperoni Pizza", "Tikka Pizza"];

// print only names of pizza
for(let i =0; i < myPizza.length; i++ ){
    console.log(myPizza[i]);
}

// printing names and sentence/message
for(let i =0; i < myPizza.length; i++ ){
    console.log(`I like to eat ${myPizza[i]}`);
}
console.log(
    `\nI really like to eat Pizzas. Pizza comes in a variety of flavours and toopings, allowing individual customize it to their liking`
);
