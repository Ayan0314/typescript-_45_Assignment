"use strict";
let cars = "Subaro";
//Test1 : Equality Comparison (True)
console.log("Is cars == 'Subaro'? I predict true.");
console.log(cars == 'Subaro'); // True
// Test 2 : strict quality comparison (True)
console.log("Is cars === 'Subaro'? I predict true.");
console.log(cars === 'Subaro'); // True
// Test 3 : inequality comaparison (false)
console.log("Is cars != 'Subaro'? I predict false.");
console.log(cars != 'Subaro'); // false
//Test 4 : strict inequality comparison (false)
console.log("Is cars !== 'Subaro'? I predict false.");
console.log(cars !== 'Subaro'); // false
// Test 5 : less than comparison (false)
console.log("Is cars < 'Subaro'? I predict false.");
console.log(cars < 'Subaro'); // false (lexicographic comparison)
// Test 6 : greater than comparison (false)
console.log("Is cars > 'Subaro'? I predict false.");
console.log(cars > 'Subaro'); // false (lexicographic comparison)
// Test 7 : less than and equal comparison (true)
console.log("Is cars <= 'Subaro'? I predict true.");
console.log(cars <= 'Subaro'); // true
// Test 8 : less than and equal comparison (true)
console.log("Is cars >= 'Subaro'? I predict true.");
console.log(cars >= 'Subaro'); // true
// Test 9 : checking truthiness (true)
console.log("Is car? I predict true");
console.log(cars); // true (non-empty string is truthy)
// Test 10 : checking falsiness (false)
console.log("Is car? I predict false");
console.log(cars); // false  (negation of a truthy value)
