const kits = ["crash", "kick", "snare", "tom"]

const containerEl = document.querySelector(".container");



kits.forEach(kit => {
    const btnEL = document.createElement("button");
    btnEL.classList.add("btn");
    btnEL.innerText = kit;
    btnEL.style.backgroundImage = "url(images/" + kit + ".png)"
    containerEl.appendChild(btnEL);
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3"
    containerEl.appendChild(audioEl);
    btnEL.addEventListener("click", () => {
        audioEl.play();
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play()
            btnEL.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEL.style.transform = "scale(1)"
            }, 100)
        };
    })




})