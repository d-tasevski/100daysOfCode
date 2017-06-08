
// Puritanic 06.06.2017 


const secondHand = document.querySelector('.clock__hand--sec');
const minutesHand = document.querySelector('.clock__hand--min');
const hoursHand = document.querySelector('.clock__hand--hour');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	// I'm adding here 90 to offset 90 degress Css property setup( transform: rotate(90deg);)
	// so that clock can work as it should
	const secondsDegrees = ((seconds / 60 ) * 360) + 90; 
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
	

	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360 ) + 90;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
	

}

setInterval(setDate, 1000)