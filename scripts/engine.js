const gameSetup  = () => {
    const pianoKeys =   document.querySelectorAll(".piano-keys .key");

    let audio = new Audio("./tunes/a.wav");

    const playSound = (key) =>  {
        //load audio to memory
        audio.src = `./tunes/${key}.wav`;
        audio.play();
        
    };
    pianoKeys.forEach((key) => {
        //data set is used to access values.
        console.log(key.dataset.key);
        key.addEventListener("click", () => {playSound(key.dataset.key)} );
    })
}
gameSetup();