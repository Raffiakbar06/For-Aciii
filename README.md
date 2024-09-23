[Uploading asri.html…]()<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Romantic Message for Asri Amalia</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Pemutar Musik Latar -->
    <audio id="background-music" autoplay loop>
        <source src="your-music-file.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

    <div class="container">
        <h1>Untuk Asri Amalia</h1>
        <p id="main-text">
            Kamu adalah anugerah terindah dalam hidupku. <br> Setiap momen bersamamu membuatku semakin jatuh cinta. <br> 
            Denganmu, hidup terasa lengkap. Aku mencintaimu selamanya. 💖
        </p>
        <button id="love-btn">Klik untuk kejutan romantis 💖</button>
        
        <!-- Pesan cinta yang muncul -->
        <p id="love-message" class="hidden">Selamanya bersamamu adalah impian terindahku. Aku akan mencintaimu selalu, Asri Amalia. 💕</p>

        <!-- Bunga animasi -->
        <div class="flower-container">
            <div class="flower flower1"></div>
            <div class="flower flower2"></div>
            <div class="flower flower3"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

// script.js
document.getElementById('love-btn').addEventListener('click', function() {
    const loveMessage = document.getElementById('love-message');
    loveMessage.classList.toggle('hidden');
});

// Play background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.2; // Set volume to a soft background level

/* styles.css */
body {
    margin: 0;
    padding: 0;
    background-color: #fff0f5;
    font-family: 'Georgia', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    animation: backgroundFade 10s ease-in-out infinite;
}

@keyframes backgroundFade {
    0% { background-color: #fff0f5; }
    50% { background-color: #fce4ec; }
    100% { background-color: #fff0f5; }
}

.container {
    background-color: #fce4ec;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    max-width: 700px;
    transition: all 1.5s ease-in-out;
}

h1 {
    font-size: 3em;
    color: #ad1457;
    animation: fadeInText 3s ease-in-out;
}

p {
    font-size: 1.5em;
    color: #880e4f;
    line-height: 1.6;
    animation: fadeInText 4s ease-in-out;
}

.hidden {
    display: none;
    font-size: 1.8em;
    color: #e91e63;
}

button {
    background-color: #ff80ab;
    border: none;
    padding: 15px 30px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    margin-top: 40px;
    animation: pulseButton 2s infinite;
    transition: transform 0.5s ease-in-out;
}

button:hover {
    transform: scale(1.2);
}

/* Animasi FadeIn */
@keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/* Animasi Tombol Denyut */
@keyframes pulseButton {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* Bunga Animasi */
.flower-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.flower {
    width: 60px;
    height: 60px;
    background-image: url('https://cdn-icons-png.flaticon.com/512/2958/2958789.png');
    background-size: cover;
    position: absolute;
    animation: float 7s ease-in-out infinite;
}

.flower1 {
    top: 20%;
    left: 10%;
    animation-duration: 10s;
}

.flower2 {
    top: 50%;
    left: 50%;
    animation-duration: 8s;
}

.flower3 {
    top: 70%;
    right: 20%;
    animation-duration: 12s;
}

@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
    100% { transform: translateY(0); }
}

