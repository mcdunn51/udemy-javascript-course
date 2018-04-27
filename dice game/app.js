/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//You can change the styles in JS, here we are hiding the dice picture:
document.querySelector('.dice').style.display = 'none';

//set the initial scores to 0
document.getElementById('score-0').textContent = '0'; 
document.getElementById('score-1').textContent = '0'; 
document.getElementById('current-0').textContent = '0'; 
document.getElementById('current-1').textContent = '0';

/*when someone clicks on the .btn roll class an anonomous function 
(a function with noi name) will be executed*/  
document.querySelector('.btn-roll').addEventListener('click', function() {

	//1. generate a Random whole number between 1 and 6 
	dice = Math.floor(Math.random() * 6) + 1;

	//2. Display the result (show the relavent dice picture)
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';

	//3. Update the current score IF the rolled number was NOT a 1
	if (dice !== 1) {
		//Add score 
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		//Else next player and....

		/*This is the normal way of writing an if statement:
		if(activePlayer === 0) {
			activePlayer = 1;
		} else {
			activePlayer = 0;
		}
		*/

		//This is the same if statement: 
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		//reset the current score to 0
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//You can add or remove classes from elements 
		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		//toggle adds a class if it isn't there, or takes it off if it is there
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// hide the dice when the player changes 
		document.querySelector('.dice').style.display = 'none';

	}

});

document.querySelector('.btn-hold').addEventListener('click', function () {
	//Add current score to Global score 
	scores[activePlayer] += roundScore;

	//Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	// Check if player won the game

	if (scores[activePlayer] <= 100 ) {
		//you won the game!!!
	} 

});


//This is a setter - it sets a value
// document.querySelector('#current-0' + activePlayer).textContent = dice;

//This is a getter - it gets a value
// var x = document.querySelector('#score-0').textContent;