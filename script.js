
// Step 1: Declaring Arrays
// Declare an array that stores a list of at least 5 elements. These elements could be numbers, strings, or a combination of both.
// Declaring an array with 5 elements (combination of strings and numbers)
let myArray = ["Apple", 42, "Canada", 7, "Jamil"];

// Logging the array to the console
console.log(myArray);


// Step 2: Accessing Arrays
// Accessing the first, last, and middle elements of the 5 elent array
let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];
let middleElement = myArray[(myArray.length - 1) / 2]; // Because it has odd number of elements

console.log("First Element:", firstElement);
console.log("Middle Element:", middleElement);
console.log("Last Element:", lastElement);

// Step 3: Using Array Properties: Use the .length property to determine the number of elements in your array and log the result to the console.

// Using the .length property to determine the number of elements in the array
let arrayLength = myArray.length;

// Logging the length of the array to the console
console.log(arrayLength, "- Number of elements in the array.",);



// Step 4: Array Methods

// 1. .push() - to add an element to the end
myArray.push("Grape");
console.log(myArray, "- After push- will add Grape at the end");

// 2. .pop() - Removes the last element
myArray.pop();
console.log(myArray,"-After pop- Will remove Grape");

// 3. .shift() - Removes the first element
myArray.shift();
console.log(myArray, "--After shift- will remove Apple", );

// 4. .unshift() - Adds an element to the beginning
myArray.unshift("Watermelon");
console.log(myArray, "--After unshift- Watermelon will be added at the beginning");


//Step 5: Iterating Through Arrays
// Using Traditional For Loop

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i], "-For loop element");
}

// Using the forEach method 
myArray.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});


// Using the map method 
myArray.map(element => 
    console.log(element, "- map element"));


// Step 6: Array Destructuring
// Destructure the first two elements from your array into two separate variables.
let newArray = ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey"];

let [firstAnimal, secondAnimal, ...remainingAnimals] = newArray;


console.log( firstAnimal, "- First Animal");
console.log(secondAnimal, "- Second Animal");
console.log(remainingAnimals, "- Remaining Animals:");

