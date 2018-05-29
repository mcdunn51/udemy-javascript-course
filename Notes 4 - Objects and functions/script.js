//////////////////////////
//everything is an object: inheritance and the prototype chain

//almost everything is an object in JS
//There are two different data types in JS: 
//Primitives (numbers, strings, booleans, undefined, null)
//Objects (arrays, functions, objects, dates, wrappers for Numbers, strings and booleans)
//OOP - is programming that makes heavy use of objects interacting with each other through methods and properties.
//An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
//objects are used to store data, structure applications into modules and keep code clean.
//constructors aka prototypes (which are known as classes in other languages) are blueprints for objects (instances of that particular constructor).  
//inheritance is when one object gets access to another objects properties and methods.
//JS is a prototype based language - this means that inheritance works by using prototypes. 

//Every JS object has a prototype property -this is what make inheritance possible in JS.

//The prototype property of an object is where we put methods and properties that we want other objects to inherit. 
//each object we create is an instance of the object constructor (the object object).
//The object object is at the top of the prototype chain.
//The Constructor's prototype property is not the prototype of the constructor itself, it's the prototype of all instances that are created through it. 
//When a certain method or property is called, the search starts in the object itself and if it cannot be found the search moves onto the objects prototype. This continues until the method is found. This is the prototype chain. If a method or property can't be found then null is returned. 

////////////////////////
//function constructors

//the function constructor is a way to make a blueprint for an object
//always start the name with a capital

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

//It is common to add methods to the constructor function's prototype property.
Person.prototype.calculateAge = function() {
	function() {
		console.log(2016-
			this.yearOfBirth);
	}
};

// you can also add properties but it isn't soo common.
Person.prototype.lastName = 'Smith';

//This is called instantiation - john is an instance of the person object
//when we use the 'new' operator, first an empty object is created and then the constructor function is called with the arguments specified.  
//In a normal function, the this keyword points to the global object, but what happens here is, when the function constructor is called, the this keyword within the function constructor now points to the empty object.  

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

////////////////////////
//Prototype chain in the console

//the console is good for inspecting objects and the prototye chain for axample if you type john, it will list the properties of the john object.
//it will also show the prototype of the function constructor, and within this it will show the prototype property of the object function constructor
//note: The person object is an instance of the object function constructor.
//note: the prototype of john is the prototype property of the function constructor.
//To see the person prototype property, type person.prototype in the console.
//The hasOwnProperty lets you know if an object has a particular property. 
//an array is an object - it has access to the prototype property of the array function constructor if you were to inspect an array you would see all of the methods it has access to.

/////////////////////////
//creating objects: object.create

//This is another way to create objects that inherit from a prototype.
//don't have to start with a capital

var personProto = {
	calculateAge: function() {
		console.log(2016 -
			this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//or:

var jane = Object.create(personProto,
{
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: {value: 'designer'}
}); 


///////////////////////////
//primitives Vs Objects

//variables containing primitives hold the data inside of the variable itself
//variables containing objects do not contain the object, instead they contain a reference to the place in the memory where the object is stored

var a = 23;
var b = a;
a = 46;

console.log(a);//will log 46
console.log(b);//will log 23 

//with objects:
var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //logs 30
console.log(obj2.age); //logs 30

//obj2 contains a reference that points to obj1 and obj1 contains a reference that points to the object in the memory.
//It works the same way with functions:
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age); //will log 27
console.log(obj.city); //will log San Francisco

//age doesn't change because it's a primitive 
//when you pass an object into a function, your actually passing in a reference that points to the object. The object itself also has a reference that points to where it is stored in the memory.

///////////////////////////
//First Class Functions: passing functions as arguments

//functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.

// a function is an instance of the object type;
// a function behaves like any other object;
// we can store functions in a variable;
// we can pass a function as an argument to another function
// we can return a function from a function

// a callback function is a function that you pass into another function

var years = [1990, 1965, 1937, 2005, 1998];

functionn arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));             //here the calculate age function is called (as a callback function) with the first element of the array as an argument 
	}
	return arrRes;
} 

function calculateAge(el) {
	return 2016 - el;
}

function isAdult(el) {
	return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var adult = arrayCalc(years, isAdult); 
console.log(ages); 
console.log(fullAges);

////////////////////////
//first class functions: functions returning functions

//The below makes use of a generic function from which you can then use more specific functions i.e. once you found out their profession you could ask more specific questions. 

function interviewQuestion(job) {
	if (job === 'designer') {
		return function (name) {
			console.log (name + ', can you please explain what UX design is?');
		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log (name + ', what subject do you teach?')
		}
	} else {
		return function (name) {
			console.log ('what do you do' + name + '?');
		}
	}
}

var teacherQuestion = interviewQuestion(teacher); //the anonomous function then becomes the value of teacherQuestion. So we can then call the anonomous function:

teacherQuestion('John');

//you could also do:

interviewQuestion('teacher')('Mark');

/////////////////////////
//Immediately invoked function expressions (IIFE):

// a way of creating data privacy





































