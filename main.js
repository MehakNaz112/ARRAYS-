//ASSIGNMENT OF ARRAY
//QUESTION:1
//Create an array named fruits that contains the following string elements:"Apple","Banana","Mango","Orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//QUESTION:2
//Declare an array named numbers that can contain only number elements and initialize it with the value 10,20,30, and 40.
var numbers = [10, 20, 30, 40];
console.log(numbers);
//QUESTION:3
//Acess the third element of the fruits array and assign it to a variable named thirdFruit.
var thirdFruit = ["apple", "banana", "mango", "orange"];
console.log(thirdFruit[3]);
//QUESTION:4
//Change the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number, "Number");
//QUESTION:5
//add the element "grape" to the end of the fruits array using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.push("grape");
console.log(fruit, "fruit");
//QUESTION:6
//Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
var lastFruit = ["apple", "banana", "mango", "orange"];
lastFruit.pop();
console.log(lastFruit);
//QUESTION:7
//Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
var firstFruit = ["apple", "banana", "mango", "orange"];
firstFruit.shift();
console.log(firstFruit);
//QUESTION:8
//Add the element "kiwi" to the beginning of the fruits array using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.unshift("kiwi");
console.log(fruit, "fruit");
//QUESTION:9
//Remove two element from fruit array starting from index 1 using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.splice(1, 2);
console.log(fruit);
//QUESTION:10
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.splice(2, 0, "pineapple", "pear");
console.log(fruit);
//QUESTION 11
//Create a new array named citrusfruit that contain the first two elements of the fruit array using the method.
var fruit = ["Apple", "Banana", "mango", "Orange"];
var citrusfruits = fruits.splice(0, 2);
console.log(citrusfruits);
//QUESTION 12
//Create a new array named lastTwoFruits that contains the last two elements of the fruits array using method.
var fruit = ["Apple", "Banana", "Mango", "Orange"];
var lastTwoFruits = fruits.splice(-2);
console.log(lastTwoFruits);
