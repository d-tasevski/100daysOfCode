// Puritanic 08.06.17

const inputs = document.querySelectorAll('.controls input');

function handleUpdate () {
	// dataset takes every data- from given element and puts it into object
	const suffix = this.dataset.sizing || ''; 
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
} 

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));