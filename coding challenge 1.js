/*John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

var joelHeight = 180;
var jorgeHeight = 150;
var caroHeight = 160;

var joelAge = 26;
var jorgeAge = 27;
var caroAge = 29;

var joelScore = joelHeight + (joelAge * 5);
var jorgeScore = jorgeHeight + (jorgeAge * 5);
var caroScore = caroHeight + (caroAge * 5);

if (joelScore > jorgeScore && joelScore > caroScore){
	console.log('Joel wins with a score of ' + joelScore);
} else if (jorgeScore > joelScore && jorgeScore > caroScore){
	console.log('Jorge wins with a score of ' + jorgeScore);
} else if (caroScore > joelScore && caroScore > jorgeScore){
	console.log('Caro wins with a score of ' + caroScore);
} else {
	console.log ('It\'s a tie');
}