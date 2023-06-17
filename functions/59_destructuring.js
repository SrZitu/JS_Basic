// Destructuring is a way to extract values from arrays or objects and assign them to variables in a single statement.
//This makes it easy to work with complex data structures and can result in cleaner and more concise code.

//     Let's start with arrays. Here's an example of destructuring an array in JavaScript:


// const myArray = [1, 2, 3];
// const [a, b, c] = myArray;

// In this example, we define an array myArray with three values.We then use destructuring to assign the values to variables a, b, and c in a single statement.The resulting values of a, b, and c are 1, 2, and 3 respectively.

// Destructuring can also be used with objects.Here's an example of destructuring an object in JavaScript:


const myObject = { name: "John", age: 30 };
const { name, age } = myObject;
console.log(name,age);

// In this example, we define an object myObject with two properties: name and age.We then use destructuring to assign the values of name and age to variables with the same name in a single statement.The resulting values of name and age are "John" and 30 respectively.

// Destructuring can also be used with nested objects and arrays.Here's an example of destructuring a nested object in JavaScript:


// const myObject = { name: "John", age: 30, address: { street: "Main St", city: "New York" } };
// const { name, age, address: { street, city } } = myObject;

// In this example, we define an object myObject with three properties: name, age, and address.The address property is itself an object with two properties: street and city.We then use destructuring to assign the values of name, age, street, and city to variables in a single statement.

// Destructuring can also be used with default values.Here's an example of destructuring with default values in JavaScript:


// const myArray = [1];
// const [a, b = 2] = myArray;
// In this example, we define an array myArray with one value.We then use destructuring to assign the first value to variable a and the second value to variable b, with a default value of 2 if the second value is not present in the array.

//     Overall, destructuring is a powerful feature in JavaScript that can make working with arrays and objects more intuitive and concise.

const numbers = [1, 2, 3, 4, 5];


const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// ### Destructuring the object properties into variables
// ```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 30
};


const { firstName, lastName, id } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(id);       // Output: 30


//Function Parameter Destructuring:

function printFullName({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

const persons = {
  firstName: 'John',
  lastName: 'Doe'
};

printFullName(persons); // Output: John Doe




// Destructuring to extract relevant data from the response

// Simulated API response or database query result
// const apiResponse = {
//   status: 'success',
//   data: {
//     id: 123,
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@example.com',
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       country: 'USA'
//     }
//   }
// };

// // Destructuring to extract relevant data from the response
// const {
//   data: {
//     id,
//     firstName,
//     lastName,
//     email,
//     address: { street, city, country }
//   }
// } = apiResponse;

// console.log(id);        // Output: 123
// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(email);     // Output: johndoe@example.com
// console.log(street);    // Output: 123 Main St
// console.log(city);      // Output: New York
// console.log(country);   // Output: USA


function calculateTotal(price, quantity = 1, taxRate = getTaxRate()) {
    console.log(taxRate);
    const total = price * quantity * (1 + taxRate);
    console.log(`Total: $${total.toFixed(2)}`);
  }
  
  function getTaxRate() {
    return 0.1; // Assuming a tax rate of 10%
  }
  
  calculateTotal(50); // Output: Total: $55.00


//   In JavaScript, when defining default parameters for a function with multiple parameters, it's generally recommended to place the parameters with default values at the end of the parameter list. This allows you to omit those parameters when calling the function, while still providing values for the preceding parameters.

// Here's an example to illustrate this best practice:


function greet(firstName, lastName = 'Doe', age = 30) {
  console.log(`Hello, ${firstName} ${lastName}! You are ${age} years old.`);
}

greet('John'); // Output: Hello, John Doe! You are 30 years old.
greet('Jane', 'Smith', 25); // Output: Hello, Jane Smith! You are 25 years old.