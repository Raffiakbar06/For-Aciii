// script.js
document.getElementById('love-btn').addEventListener('click', function() {
    const loveMessage = document.getElementById('love-message');
    loveMessage.classList.toggle('hidden');
});

// Play background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.2; // Set volume to a soft background level
