//////////////////////
//objects and properties 
//a benefit of objects over storing data as an array is that objects have key value pairs (i.e. a name and a value) (each key value pair is called a property) - the order we define values in an array is important but in an object it isn't.
//object literals are the {}

// var john = {
// 	name: 'John',
// 	lastName: 'Smith',
// 	yearOfBirth: 1990,
// 	job: 'Teacher',
// 	isMarried: false,
// };

//To read a value 
// console.log(john.lastName);
//or
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]); //will log Teacher

//to mutate
// john.lastName ='Miller';
//or
// john['job'] = 'programmer';

// There is another way to create an object
// var jane = new Object();
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;


/////////////////////////
//objects and methods
//Note objects can also hold arrays and functions.
// var john = {
	// name: 'John',
	// lastName: 'Smith',
	// yearOfBirth: 1990,
	// job: 'Teacher',
	// isMarried: false,
	//    family: ['Jane', 'Mark', 'Bob'];
// this is a function expression.
	//  calculateAge: function(yearOfBirth){
	//		return 2016 - yearOfBirth;
// 		} 
// };

//console.log(john.family[1]);// will outpt Mark
//console.log(john.calculateAge(1989));// outputs 27

//using the 'this' keyword:
// var john = {
	// name: 'John',
	// lastName: 'Smith',
	// yearOfBirth: 1990,
	// job: 'Teacher',
	// isMarried: false,
	//    family: ['Jane', 'Mark', 'Bob'];
	//  calculateAge: function(){
	//		return 2016 - this.yearOfBirth;
// 		} 
// };

//console.log(john.calculateAge());// outputs 27














