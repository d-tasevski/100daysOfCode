const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handlCheck(event){
	// check for shift key down, and that the checkbox is checked
	let inBetween = false;
	if(event.shiftKey && this.checked) {
		// loop through checkboxes
		checkboxes.forEach( checkbox => { 
			console.log(checkbox);
			if(checkbox === this || checkbox === lastChecked) {
				console.log('This is one');
				// this sets inBetween to true or false, depending on its current value
				inBetween = !inBetween;
			}
			if(inBetween) {
				// while inBetween is true this checks inputs
				checkbox.checked = true;
				//this will check all inputs between two selected ones
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlCheck));