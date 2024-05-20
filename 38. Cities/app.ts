function describe_city(nameOfCity:string, Country:string="Pakistan"){
    return `${nameOfCity} is in ${Country}`
}

let city1 = describe_city("Cape Town","South Africa")
let city2 = describe_city("Mumbai", "India")
let city3 = describe_city("Karachi","Pakistan ")
let city4 = describe_city("Dubai", "UAE")

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);