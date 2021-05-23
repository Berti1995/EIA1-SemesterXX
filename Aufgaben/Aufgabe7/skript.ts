
var loop: number = setInterval(function () {}, 1000);
var randomButton: number = setInterval(function () {}, 500);
var stopBtn: HTMLElement = document.querySelector(".stop");
var playBtn: HTMLElement = document.querySelector(".playbutton");
var indexZahler: number = 0;


var alle: any = [
new Audio("assets/A.mp3"), 
new Audio("assets/A.mp3"), 
new Audio("assets/C.mp3"), 
new Audio("assets/F.mp3"), 
new Audio("assets/hihat.mp3"), 
new Audio("assets/kick.mp3"), 
new Audio("assets/laugh-1.mp3"), 
new Audio("assets/laugh-2.mp3"), 
new Audio("assets/snare.mp3"),
];


function playMp3(sound: HTMLAudioElement): void {

    sound.play();
}
window.addEventListener('load', function () {

document.querySelector(".button1").addEventListener("click", function (): void { playMp3(alle[0]) });
document.querySelector(".button2").addEventListener("click", function (): void { playMp3(alle[1]) });
document.querySelector(".button3").addEventListener("click", function (): void { playMp3(alle[2]) });
document.querySelector(".button4").addEventListener("click", function (): void { playMp3(alle[3]) });
document.querySelector(".button5").addEventListener("click", function (): void { playMp3(alle[4]) });
document.querySelector(".button6").addEventListener("click", function (): void { playMp3(alle[5]) });
document.querySelector(".button7").addEventListener("click", function (): void { playMp3(alle[8]) });
document.querySelector(".button8").addEventListener("click", function (): void { playMp3(alle[6]) });
document.querySelector(".button9").addEventListener("click", function (): void { playMp3(alle[7]) });
});

 // playbutton//
 document.querySelector(".playbutton").addEventListener("click", function (): void { playbeat()});

 function playbeat(): void {
     loop = setInterval(function (): void {
    setTimeout(function (): void { playMp3(alle[5]);}, 500)
    setTimeout(function (): void { playMp3(alle[4]);}, 750)
    setTimeout(function (): void { playMp3(alle[8]);}, 1000)
 }, 1000);
}

//random beat//
document.querySelector(".random").addEventListener("click", function () {random(); });

function random(): void {
    randomButton = setInterval(function(): void {
    playMp3(alle[Math.floor(Math.random() * 9)]);
    console.log (randomButton);
},                             500);
}

//delete button//
document.querySelector(".delete").addEventListener("click", function () {deleteRemix(); });

function deleteRemix(): void {
    clearInterval(randomButton);
    clearInterval(loop);
}

//play/stop funktion//


playBtn.addEventListener("click", function (): void {
    changeClasses(this, stopBtn);
});

stopBtn.addEventListener("click", function (): void {
    changeClasses(this, playBtn);
    clearInterval(loop);
    indexZahler = 0;
});


function changeClasses(firsHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
    firsHTMLElement.classList.add("isHidden");
    secondHTMLElement.classList.remove("isHidden");


}