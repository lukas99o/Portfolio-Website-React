const nintendoMusicMap = {
    "donkey kong": { music: "audio/donkey kong.mp3", background: "images/donkey kong.jpg" },
    "mario": { music: "audio/mario.mp3", background: "images/mario.jpg" },
};

let originalBackground = '';
let currentAudio = null;

function playMusicAndChangeBackground(input) {
    const characterInfo = nintendoMusicMap[input.toLowerCase()];
    if (characterInfo) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        if (!originalBackground) {
            originalBackground = document.body.style.backgroundImage;
        }

        const audio = new Audio(characterInfo.music);
        audio.play();

        document.body.style.backgroundImage = `url('${characterInfo.background}')`;

        audio.addEventListener('ended', () => {
            document.body.style.backgroundImage = originalBackground;
        });
        
        currentAudio = audio;
    }
}

const characterInput = document.getElementById('characterInput');
characterInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const inputValue = characterInput.value.trim();

        if (inputValue) {
            playMusicAndChangeBackground(inputValue);
            characterInput.value = '';
        }
    }
});
