// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

var yearsOfBirth = [1960, 1952, 1989, 2011];
var yearsOfBirth2 = [1950, 1945, 1963, 2013];



function printFullAge(yearsOfBirth) {

	var emptyArray = [];
	var booleanArray = [];

	yearsOfBirth.forEach(function(element) {
  		emptyArray.push((new Date()).getFullYear() - element);
	});

	emptyArray.forEach(function(element) {
		if (element >= 18){
		console.log('This person is ' + element + ' and is therefore of adult age');
		} else {
		console.log('This person is ' + element + ' and therefore is not yet an adult');
		}
	});

	emptyArray.forEach(function(element) {
		if (element >= 18) {
			booleanArray.push (true);
		} else {
			booleanArray.push (false);
		}
	});
	console.log(booleanArray);
}

var full_1 = printFullAge(yearsOfBirth);
var full_2 = printFullAge(yearsOfBirth2);














