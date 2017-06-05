//  Javascript , Puritanic -- 5.6.17




function playSound(event) {
    // selecting audio tags with data-key elements on them. ${} is ES6 variable
    // that looks for audio element with asocciated keyCode(data-key={keyCode})
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // Select .key class with coresponding data-key which will be evaluated via ${}
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // this will stop function from running	if there is no audio with associated data key number
    // else play provided sound
    audio.currentTime = 0; // rewind to the start if key pressed while playing
    audio.play()
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // listening for the transition end event
window.addEventListener('keydown', playSound); // playing sounds and activating transform on keydown
