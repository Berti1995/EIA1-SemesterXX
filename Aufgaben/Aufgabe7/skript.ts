//7.1//
window.addEventListener('load', function () {

let alle: HTMLAudioElement[] = [new Audio("assets/A.mp3"), new Audio("assets/A.mp3"), new Audio("assets/C.mp3"), new Audio("assets/F.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/kick.mp3"), new Audio("assets/laugh-1.mp3"), new Audio("assets/laugh-2.mp3"), new Audio("assets/snare.mp3"),];

function playMp3(sound: HTMLAudioElement) {

    sound.play();
}

document.querySelector(".button1").addEventListener("click", function () { playMp3(alle[0]) });
document.querySelector(".button2").addEventListener("click", function () { playMp3(alle[1]) });
document.querySelector(".button3").addEventListener("click", function () { playMp3(alle[2]) });
document.querySelector(".button4").addEventListener("click", function () { playMp3(alle[3]) });
document.querySelector(".button5").addEventListener("click", function () { playMp3(alle[4]) });
document.querySelector(".button6").addEventListener("click", function () { playMp3(alle[5]) });
document.querySelector(".button7").addEventListener("click", function () { playMp3(alle[8]) });
document.querySelector(".button8").addEventListener("click", function () { playMp3(alle[6]) });
document.querySelector(".button9").addEventListener("click", function () { playMp3(alle[7]) });

//7.2//

 document.querySelector(".playbutton").addEventListener("click", function () { playbeat() });

 function playbeat() {

    setTimeout(function () {
        playMp3(alle[5]);
    }, 500)

    setTimeout(function () {
        playMp3(alle[4]);
    }, 750)

    setTimeout(function () {
        playMp3(alle[8]);
    }, 1000)

    setTimeout(function () {
        playMp3(alle[5]);
    }, 1250)

    setTimeout(function () {
        playMp3(alle[4]);
    }, 1500)

    setTimeout(function () {
        playMp3(alle[8]);
    }, 2000)

    setTimeout(function () {
        playMp3(alle[7]);
    }, 2250)

}
});

