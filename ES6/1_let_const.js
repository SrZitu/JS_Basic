//var
var x = 5;
var x = 10; // Re-declaring a variable with var is allowed
x = 15; // Reassigning a variable with var is allowed
console.log(x); //output: 15

//let
function example() {
    let x = 5;
    if (true) {
        let x = 10;
        console.log(x); 
    }
    console.log(x); 
}

// console.log(x);  //// Output: ReferenceError: x is not defined
example();


//var
//property modifiable means can insert update or delete.
const person = { fname: "John",lname:"Doe" };
person.fname = "Jane"; 
person.age = 32; 

console.table(person)

