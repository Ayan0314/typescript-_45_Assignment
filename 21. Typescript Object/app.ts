interface item {
    name : string 
    rate : number
}
//create two objects
const book : item ={
    name : "ESSENTIAL TYPESCRIPT"
    rate:450
}

const myBook : item ={
    name : "Ayan's Book"
    rate :100
}
console.log(`book name : ${book.name}, price : ${book.price}`);
console.log(`myBook name : ${myBook.name}, price : ${myBook.price}`);