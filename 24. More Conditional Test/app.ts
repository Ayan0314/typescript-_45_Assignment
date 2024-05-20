let car : string = "Subaro";
let age : number = 17;
let numbers : number[] = [1,2,3,4];

// **String Tests**
//Test 1  : Equality (true)
console.log("Is car === 'Subaro'? I predict true. ");
console.log(car === 'Subaro'); // True (case sensitive)

//Test 2 : strict equality (false)
console.log("Is car == 'Subaro'? I predict false. ");
console.log(car == 'Subaro'); // false (case sensitive)

// Test 3 : inequality (True)
console.log("Is car != 'Toyota'? I predict true. ");
console.log(car != 'Toyota'); // True

// Test 4 : inequality (false)
console.log("Is car !== 'Subaro'? I predict false. ");
console.log(car !== 'Subaro'); // false (case sensitive)

// **Lower case Function Test**

// Test 5 : lower conversion (true)
console.log("Is car.tolowercase() == 'Subaro'? I predict true. ");
console.log(car == car.toLowerCase()); // true (converted to lowercase)

// Test 6 : lower case conversion (false)
console.log("Is car.tolowercase() === 'Subaro'? I predict false. ");
console.log(car === car.toLowerCase()); // false (original value remains uppercase)

// **Numerical Tests**

// Test 7 : equality (true)
console.log("Is age == 17? I predict true. ");
console.log(age == 17);//(true)

// Test 8 : Inequality (false)
console.log("Is age != 20? I predict false. ");
console.log(age != 20); //(false)

// Test 9 : Greater than (false)
console.log("Is age > 20? I predict false. ");
console.log(age > 20); //(false)

// Test 10 : Less than equal (true)
console.log("Is age <= 17? I predict true. ");
console.log(age <= 17); //(true)

// **Logic Operators**

// Test 11 : AND (True)
console.log("Is age > 17 && age < 20? I predict True. ");
console.log(age > 17 && age < 20); //(true both condition met)

// Test 12 : OR (False)
console.log("Is age > 20 || age < 17? I predict false. ");
console.log(age > 20 || age < 17); //(false neither condition met)

// **Array Test** 

// Test 13 : In Array (true)
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);// true ( check for index existance)

// Test 14 : Not in Array (false)
console.log("Is 5 not in numbers? I predict true.");
console.log(5 not in numbers);//true ( negation of "in" operators)










