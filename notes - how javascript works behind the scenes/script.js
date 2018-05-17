//////////////////////////
//How the code is exectuted: parsers and engines

//JS runs in the browser - the browser has a javascript engine such as google's V8 engine - these exectute the code. 
// In the engine, the first thing that happens is that the JS code is parsed by the engine to make sure that the syntax is correct. 
// If the code is correct the parser produces a data structure known as the abstract syntax tree. This is then translated into Machine code. 
//The Machiene code is not JS, instead it is code that can be executed by the computers processor.

///////////////////////
//execution contexts and the execution stack

//The execution context can be thought of as a wrapper that stores variables and in which a piece of our code is evaluated and executed.

//The default execution context is always the global execution context.
//The global context is where any code is executed that is not inside a fuction - i.e. it's for variables and functions that are not inside a function.
//The global context is associated with the global object, which in the case of the browser is the window object.
//So declaring a variable in the global context is like declaring it in the window object. e.g. var lastname is equal to window.lastname - last name is stored in the window object (remember that properties are just variables attached to objects). 
//When a function is called it gets it's own execution context which is placed ontop of the current execution context, forming the execution stack - the context ontop of the stack is the active context. 
//When the functions carry out somthing they are removed from the stack.

//////////////////////////////
//creation, execution phases and hoisting
// We can associate an execution context with an object e.g. global context is assciated with window object.
// An execution context object contains three properties (the variable object, the scope chain, and the 'this' variable).
//How the execution context is created - this happens in two stages:
//1)the creation phase
//  a)creation of the variable object 
//     In this stage, first the argument object is created which contains all the arguments that were passed   into the function, next the code is scanned for function declarations: for each function a property is created in the variable object, pointing to the function. Finally code is scanned for variable declarations:for each variable a property is created in the variable object and set to undefined.  (these last two events are known as hoisting - it basically means they are available before the execution phase starts.) Note that the function is defined but the variables arn't. 
//  b)"              " scope chain
//  c) the value of 'this'  variable is determined

//2)Execution phase - The code in the function is ran line by line

//////////////////////////////
//hoisting in practice 
//because functions are hoisted you can use function declarations before they are declaired, you can't do this for function expressions because they are stored as a variable and variables are undefined. You therefore also can't use a variable before it's defined.


//variables 
// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);
//The above piece of code will console log both 23 and 65 even though they have the same name. This is because the age variable is stored in the variable object of the global execution context and the age variable in the function is stored in the variable object of the function execution context object (the function gets it's own execution context).

///////////////////////////////////////
// Lecture: Scoping

// In other languages scopes are created via if blocks, for blocks etc but in Javascript the only way to create a new scope is to create a new function.
// Lexical scoping (lexical means position): a function that is lexically within another function gets access to the scope of the outer function.
// In the example below everything is contained within the global scope. Within that there is the first scope which is everything in between the first {} and within that the second scope sits between the next {}. The 2nd scope doesn't have access to all the variables it needs, so it moves up to the first scope and then the global scope. 
//This is called the scope chain.
//The scope chain does not work the other way around i.e. the global scope does not have access variables b and c unless we return them. 

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//The execution stack is the order in which functions are called, the scope chain is the order in which they are written in the code.
// Example to show the differece between execution stack and scope chain
//the third function only has access to variables a and d
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}

///////////////////////////////////////
// Lecture: The this keyword
//This is the final stage of the creation phase
//in a regular function call the this keyword points at the global object which is the window object.
//in a method call it points to the object containing the method. 


/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);   //this will log the window object
}
*/

var john = {
    name: 'John',
    yearOfBirth:1990,
    calculateAge: function() {
        console.log(this); //will console log the john object because it is a method.
        function innerFunction() {
            console.log(this);//will console log the window because it isn't a method.
        }
        innerFunction();
    }
}

john.calculateAge();


//method borrowing 
//The this keyword is only assigned a value when an object calls a method.
var mike = {
    name: 'Mike',
    yearOfBirth:1984
};

mike.calculateAge = john.calculateAge;

mike.calculateAge();








