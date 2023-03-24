// Get the audio element
const audio = document.createElement('audio');
audio.src = 'img/music.mp3';

// Get the play button element
const playBtn = document.getElementById('playBtn');
// Add event listener to the play button
playBtn.addEventListener('click', function() {
	// If the audio is paused, play it
	if (audio.paused) {
		audio.play();
		playBtn.innerHTML = '<i class="fas fa-pause"></i>';
	// If the audio is playing, pause it
	} else {
		audio.pause();
		playBtn.innerHTML = '<i class="fas fa-play"></i>';
	}
});

// Get the seekbar element
const seekbar = document.getElementById('seekbar');

// Add event listener to the seekbar
seekbar.addEventListener('input', function() {
	// Calculate the new time of the audio
	const newTime = audio.duration * (seekbar.value / 100);
	audio.currentTime = newTime;
});

// Add event listener to the audio element
audio.addEventListener('timeupdate', function() {
	// Update the current time label
	const currentTime = document.getElementById('current-time');
	const currentMinutes = Math.floor(audio.currentTime / 60);
	const currentSeconds = Math.floor(audio.currentTime % 60);
	currentTime.innerHTML = currentMinutes + ':' + (currentSeconds < 10 ? '0' : '') + currentSeconds;

	// Update the progress bar
	const progress = document.getElementById('progress');
	const progressWidth = audio.currentTime / audio.duration * 100;
	progress.style.width = progressWidth + '%';
});

// add settings js here
const settingsBtn = document.getElementById('settingsBtn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const settingsClose = document.getElementById('settings-close');

// Event listeners
settingsBtn.addEventListener('click', () => settings.classList.add('show'));
settingsClose.addEventListener('click', () => settings.classList.remove('show'));

// duration doesent match the audio
// Update progress bar as audio plays
audio.addEventListener('timeupdate', function() {
    const progress = document.getElementById('progress');
    progress.style.width = (audio.currentTime / audio.duration) * 100 + '%';
});
