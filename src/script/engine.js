const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeslider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio(".src/Sounds/a.wav");

const playTune = (key) => 
{
    audio.src = `src/Sounds/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active")
    setTimeout(()=>{
        clickedkey.classList.remove("active");
    },150)
}


pianoKeys.forEach((key) =>
{
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);

});

document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key))
    {
        playTune(e.key);
    }
    
});

const shadowHideKeys = ()=>
{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeslider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", shadowHideKeys);