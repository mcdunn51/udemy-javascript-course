// Global app controller
//21b235db7631a50c6e8f947b9ee51f78
//webpack knows where to find the dependencies.
import axios from 'axios';

async function getResults(query) {
	// 
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	const key = '21b235db7631a50c6e8f947b9ee51f78';
	try {
		const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
		const recipes = result.data.recipes;
		console.log(recipes);
	} catch(e) {
		alert (e);
	}
}
getResults('pizza');