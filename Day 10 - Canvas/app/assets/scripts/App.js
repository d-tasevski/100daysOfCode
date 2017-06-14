
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'hsl(125, 21%, 50%)' // color of stroke
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; 
ctx.lineWidth = 1;
ctx.globalCompositeOperation = 'luminosity';
// ctx.shadowColor = 'black';
// ctx.shadowBlur = 10;

let isDrawing = false; // handle drawing, so that we can only draw when holding click
let lastX = 0; // where do you start line from?
let lastY = 0; // where do you end line on?
let hue = 0;
let direction = true;

function draw(event){
	if(!isDrawing) return; // stop function from running when there is not mouse down event
	console.log(event);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	// start from
	ctx.moveTo(lastX, lastY);
	// go to 
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
	[lastX, lastY] = [event.offsetX, event.offsetY]; // es6 mf, same as this bellow
// 	lastX = event.offsetX;
// 	lastY = event.offsetY;
	hue++;
	if( hue >= 360) {
		hue = 0;
	}
	if(ctx.lineWidth >= 180 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if (direction) { // if trued increment
		ctx.lineWidth++;
	} else {		// if false decrement
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', (event) => {
	isDrawing = true;
	// update last X and Y - so that we can start drawing wherever we want to
	[lastX, lastY] = [event.offsetX, event.offsetY]; 
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


