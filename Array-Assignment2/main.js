//==============================ASSIGNMENT OF ARRAY===============================================
//================================ Question 1 ====================================================
//Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
var fruit = ["apple", "banana", "mango", "orange"];
console.log(fruit, "Fruits");
//=============================== Question 2 =====================================================
//Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
var number = [10, 20, 30, 40];
console.log(number, "Numbers");
//============================== Question 3 ======================================================
//Access the third element of the fruits array and assign it to a variable named thirdFruit.
var thirdFruit = fruit[2];
console.log(thirdFruit, "Third Fruit");
//============================ Question 4 =======================================================
//Change the second element of the numbers array to 25.
number[1] = 25;
console.log(number, "Change the second element of the number to 25");
//========================== Question 5 =======================================================
//Add the element "grape" to the end of the fruits array using the method.
fruit.push("grapes");
console.log(fruit, "Add the element grapes to the end of the fruit array");
//========================= Question 6 =====================================================
//Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
var lastFruit = fruit.pop();
console.log(fruit, "Remove the last element from the fruit array");
//========================== Question 7 ====================================================
//Remove the first element from the fruits array using the method and assign it to a variable named firstFruit
var firstFruit = fruit.shift();
console.log(fruit, "Remove the first element from the fruit array");
//============================== Question 8 =================================================
//Add the element "kiwi" to the beginning of the fruits array using the method.
fruit.unshift("Kiwi");
console.log(fruit, "Add the element kiwi to the beginning of the fruits array");
//================================ Question 9 ================================================
//Remove 2 elements from the fruits array starting from index 1 using the method.
fruit.splice(1, 2);
console.log(fruit, "Remove 2 elements from the fruit array");
//============================= Question 10 ============================================
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruit.splice(2, 0, "pineapple", "pear");
console.log(fruit, "Insert the element pineapple and pear at index 2");
//============================ Question 11 ===================================================
//Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var citrusFruits = fruit.slice(0, 2);
console.log(citrusFruits, "First Two Fruits");
//========================== Question 12 =====================================================
//Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
var lastTwoFruits = fruit.slice(-2);
console.log(lastTwoFruits, "Last Two Fruits");
