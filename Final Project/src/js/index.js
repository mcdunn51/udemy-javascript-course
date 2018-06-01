// The controller
import search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

//Global state of the app
// search object 
// current recipe object
// shopping list object
// Liked recipes
const state = {};


const controlSearch = async () => {
// 1) Get query from view
	const query = searchView.getInput();

	if (query) {
		// 2) new search object and add to state
		state.search = new Search(query);

		// 3) prepare UI for results
		searchView.clearInput();
		searchView.clearResults();

		// 4) search for recipies 
		await state.search.getResults();//remember that every asnyc function returns a promise

		// 5) render results on UI
		searchView.renderResults(state.search.result);

	}
}


document.querySelector('.search').addEventListener('submit', e=> {
	e.preventDefault();//stops the page reloading
	controlSearch();//don't put all the logic in this callback function create a new function
});
