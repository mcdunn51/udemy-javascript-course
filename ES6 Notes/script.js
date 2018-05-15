// Let and Const

//ES5 
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name 5);

//ES6 //let is like the old var - use let if you want to mutate the variable. 
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

//in ES5 var is function scoped, but in ES6, let and const are block scoped, so the es5 function will work, but the ES6 one won't.
// function driversLicence(passedTest) {
// 	if (passedTest) {
// 		var firstName = 'John';
// 		var yearOfBirth = 1990;
// 	}
// 	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car');
// }
// driversLicence(true);

//ES6

// function driversLicence6(passedTest) {
// 	if (passedTest) {
// 		let firstName = 'John';
// 		const yearOfBirth = 1990;
// 	}
// 	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car');
// }
// driversLicence6(true);

//To make the ES6 variables work this way you can declare them outside of the block (you can't define the const value inside the function);

// function driversLicence6(passedTest) {
//	let firstName;
//  const yearOfBirth = 1990;
// 	if (passedTest) {
// 		firstName = 'John';
// 		yearOfBirth = 1990;
// 	}
// 	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car');
// }

// driversLicence6(true);

////////////////////////////////////
//Blocks and IIFEs
//In ES5, we used IIFEs to create data privicy e.g. the following won't work
// (function() {
//	var c = 3;
// })();
// console.log(c);

//In ES6, we can simply use a block 
// {
// 	const a = 100;
// 	let b = 100
// } 
// 	console.log(a + b);

////////////////////////////////
//strings

// let firstName = 'john';
// let lastName ='smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
// 	return 2016 - year;
// }

//ES5
//console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' +calcAge(yearOfBirth) + ' years old.');

//ES6 
//In ES6 we have template literals
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is {calcAge(yearOfBirth)} years old.`);

/////////////////////////
//Arrow functions

//const years = [1990, 1965, 1982, 1937];

//ES5 el is the current element
// var ages5 = years.map(function(el) {
// 	return 2016 - el;
// });
// console.log(ages5);

//ES6 This will produce exactly the same as above.
// let ages = years.map(el => 2016 - el);
// console.log(ages6);

//if you use more than one parameter or none parameters you need to use parenthesis e.g.
// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
// console.log(ages6);

//if you have more than two lines of code then you have to use {} and the return keyword.
// ages = years.map((el, index) => {
// 	const now = new
// 	Date().getFullYear();
// 	const age =now -el;
// 	return `Age element {$index +1 }: ${age}.` 
// });
// console.log(ages6);

//////////////////////
// Arrow functions: lexical 'this' keyword
//ES5 
//Here we have an object that contains a method. The method then contains a callback function. When you use the this keyword within a method you have access to the properties within the object. However using the this keyword within a regular function (like in the call back function contained within the method), it points to the global object, which in the case of the browser is the window object and color and position are not defined in the window object, so we can't access them this way.
// var box5 = {
// 	color:'green',
// 	position: 1,
// 	clickMe: function() {

// 		document.querySelector('.green'.addEventListener('click', function() {
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}
// }
// box5.clickMe();

// a way to get around this in ES5 is to do the following:

// var box5 = {
// 	color:'green',
// 	position: 1,
// 	clickMe: function() {
// 		var self = this;
// 		document.querySelector('.green'.addEventListener('click', function() {
// 			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
// 			alert(str);
// 		});
// 	}
// }
// box5.clickMe();

//ES6
// Lexical Scoping just means that it uses 'this' from the code that contains the Arrow Function.  
// var box5 = {
// 	color:'green',
// 	position: 1,
// 	clickMe: function() {
// 		document.querySelector('.green'.addEventListener('click', () => {
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}
// }
// box5.clickMe();

//be carefull with arrow functions though because the following won't work because the following would mean that the this keyword would point to the global object again. 
//var box5 = {
// 	color:'green',
// 	position: 1,
// 	clickMe: () => {
// 		document.querySelector('.green'.addEventListener('click', () => {
// 			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 			alert(str);
// 		});
// 	}
// }
// box5.clickMe();

///////////////////////
//destructuring 
//This is a way to extract data from a data structure such as an object or an array

//ES5
//var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6 
// const [name, age] = ['john', 26];
// console.log(name);
// console.log(age);

// for an object:
// const obj = {
// 	firstName : 'john',
// 	lastName: 'smith'
// }

// The names have to be the same. This creates two, new seperate variables that store john and smith.  
// const {firstName, lastName} = obj;
//console.log(firstName);
//console.log(lastName);

//If you wanted to change the names of the variables
//const {firstName: a, lastName: b} = obj;
//console.log(firstName);
//console.log(lastName);

//destructuring is also usefull when a fuction returns two or more values (in ES5 we would have just returned an object).
// function calcAgeRetirement(year) {
// 	const age = new Date().getFullYear() - year;
// 	return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

//////////////////////
///arrays

//const boxes = document.querySelectorAll('.box');

//ES5 
//Note: the querySelectorAll method returns a node list, not an array. In order to get it to return an array:
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
// 	cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
// There is a new method called 'from' that transforms node lists into an array
//const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.background = 'dodgerblue');

//ES5
//If we want to go through the Items in an array, we can use forEach or .map however we can not break from these, so in order to do this, we have to use a for loop. 
//for (var i = 0; i < boxesArr5.length; i++) {
// 	if(boxesArr5[i]).className === 'box blue'{
// 		continue;
// 	}
//	boxesArr5[i].textContent = 'I changed to blue';
// }

//ES6
//There is a new loop that combines the for and the forEach - the forOf. This allows us to define the current element of an array:
// for (const cur of boxesArr6) {
// 	if (cur.className === 'box blue') {
// 		continue;
// 	} 
// 	cur.textContent = 'I changed to blue';
// }

//////////////////////
//The spread operator
//This is used to expand elements of an array

// function addFourAges(a, b, c, d) {
// 	return a + b + c + d;
// } 

// var sum1 = addFourAges(18, 30, 12, 21);

// console.log(sum1);

// say we had an array with four numbers in. In order to pass those numbers into the function:
//Note: The apply method takes any arguments as an array and passes those arguments into the function on which it is called.
//ES5 
// var ages = [18, 30, 12, 21];

// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

//ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3); 

//you can also use it to join arrays:

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Anne'];
// const bigFamily = [...familySmith, 'Dave' ...familyMiller];
// console.log(bigFamily);


//and on nodes and node lists:
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes]; 
console.log(all); //This will return a node list.















































