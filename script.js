const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");
const ratoAudio = document.getElementById("ratoAudio");

openBtn.addEventListener("click", function() {
    popup.classList.remove("hidden"); 
    ratoAudio.play(); // Toca o som
});

closeBtn.addEventListener("click", function() {
    popup.classList.add("hidden"); 
    ratoAudio.pause(); // Para o som
    ratoAudio.currentTime = 0; // Reseta o áudio
});
