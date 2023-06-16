
# Understanding ES6
## Var

var was the original way to declare variables in JavaScript.It has a function scope, 
which means that the variable is accessible within the function it's declared in, 
or the global scope if it's declared outside of any function.


```javascript
var x = 5;
var x = 10; // Re-declaring a variable with var is allowed
x = 15; // Reassigning a variable with var is allowed

```
## let

let has a block scope, which means that the variable is accessible within the block it's declared in, including inner blocks.

**let** variables can be reassigned but cannot be re-declared:

```javascript

function example() {
    let x = 5;
    if (true) {
        let x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Output: 5
}

console.log(x); // Output: ReferenceError: x is not defined
example();
```

```javascript
let x = 5;
let x = 10; // Error: Identifier 'x' has already been declared
x = 15; // Reassigning a variable with let is allowed

```

## const:

**const** is another way to declare variables in JavaScript that was introduced in ES6.It also has a block scope like let, but once a const variable is declared, it cannot be reassigned or re-declared:

```javascript
const x = 5;
x = 10;         // Error: Assignment to constant variable
const x = 10;     // Error: Identifier 'x' has already been declared
```


However, if a const variable is an **object** or an array, its properties or elements can be modified:


```javascript

const person = { fname: "John",lname:"Doe" };
person.fname = "Jane"; 
person.age = 32; 

console.table(person)

```
  **Output**


![Image Description](const._var.png)

As funcitons are not repeted so we store the function into const type varibale.

```javascript
const revString=function(str){
    return str.split('').reverse().join('');
}
console.log(revString('hello 12'))
```
**Output**

![Image Description](cons_split.png)

** In the Above Code **
## Split()
The split() method splits a string into an array of substrings.

The split() method returns the new array.

The split() method does not change the original string.

If (" ") is used as separator, the string is split between words.


## join()

The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).

**In summary, var has a function scope, let and const have a block scope, let variables can be reassigned but not re-declared, const variables cannot be reassigned or re-declared, but their properties can be modified if they are objects or arrays.**

