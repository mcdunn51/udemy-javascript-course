//21b235db7631a50c6e8f947b9ee51f78
//webpack knows where to find the dependencies.
import axios from 'axios';

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const key = '21b235db7631a50c6e8f947b9ee51f78';
		try {
			const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
			this.result = result.data.recipes;
			// console.log(this.result);
		} catch(e) {
			alert (e);
		}
	}
}




