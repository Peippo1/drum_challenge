for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}
// Detecting button press

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    makeSound(event.key);
    animation(event.key);
});
// Detecting keyboard press

function makeSound(key) {
console.log(key)
    switch (key) {
        case "w":
            let boom = new Audio("./sounds/boom.wav");
            boom.play();
            break;
        case "a":
            let clap = new Audio("./sounds/clap.wav");
            clap.play();
            break;
        case "s":
            let hihat = new Audio("./sounds/hihat.wav");
            hihat.play();
            break;
        case "d":
            let kick = new Audio("./sounds/kick.wav");
            kick.play();
            break;
        case "z":
            let openhat = new Audio("./sounds/openhat.wav");
            openhat.play();
            break;
        case "j":
            let ride = new Audio("./sounds/ride.wav");
            ride.play();
            break;
        case "k":
            let snare = new Audio("./sounds/snare.wav");
            snare.play();
            break;
        case "l":
            let tink = new Audio("./sounds/tink.wav");
            tink.play();
            break;
        case "m":
            let tom = new Audio("./sounds/tom.wav");
            tom.play();
            break;
        case "e":
            let Eastenders = new Audio("./sounds/Eastenders.mp3");
            Eastenders.play();
            console.log(Eastenders);
            break;
        default:
            console.log(drumInnerHTML);
    }

}


// Adding Button Animation
function animation(currentKey) {

    let activeButton = document.querySelector(".drum");
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

} 