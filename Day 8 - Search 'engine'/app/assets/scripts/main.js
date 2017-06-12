


const database = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(database)
	.then(blob => blob.json())
	.then(data => cities.push(...data)); // spreads database array into cities. With ordinary .push(data) there will be pushed just one array of 1k items into cities

function dynamicSearch(wordMatch, cities){
	return cities.filter(place =>  {
		//does city or state matches wat was searched?
		const regex = RegExp(wordMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
};

// add comas between population numbers	- tnx Stackoverflow
function numWithcomas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // fuck regex
}

function displayResults(){
	const matchArray = dynamicSearch(this.value, cities);
	const html = matchArray.map( place => {
		const regex = new RegExp(this.value, 'gi'); // g-global i-insensitive
		// find whatever is matched with regex and replace it with the span(highlight)
		const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numWithcomas(place.population)}</span>
		`;
	}).join(''); // joint to display strings, not array
	suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayResults);
searchInput.addEventListener('keyup', displayResults);