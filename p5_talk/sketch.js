var myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = false; //was getting detection errors with this turned on
myRec.onEnd = restart;
var songs = [];
var songNames = ['1.wav', '2.wav', '3.wav', '4.wav', '5.wav', '6.wav', '7.wav', '8.wav', '9.wav', '10.wav'];
var songCount = songNames.length;
var currentSong = 0;
var song;

function restart() { // the dirty hack
    myRec.start();
}

function preload() {
    soundFormats('wav');
    for (let i = 0; i < songNames.length; i++) {
        songs.push(loadSound('audioFiles/' + songNames[i]));
    }
}

function setup() {
    frameRate(1);
    createCanvas(600, 600);
    background(255, 255, 255);
    fill(0, 0, 0, 255);
    myRec.start();
}

function draw() {}

function parseResult() {
    var mostrecentword = myRec.resultString.split(' ').pop();
    if (currentSong !== 0) {
        if (mostrecentword.indexOf("") !== -1) {
            songs[currentSong].playMode('untilDone');
            songs[currentSong].play();
            background(0, 255, 0);
            currentSong++;
            if (currentSong >= songs.length) {
                noLoop();
            }
        } else if (mostrecentword.indexOf("what") !== -1) {
            songs[currentSong - 1].play();
        }
        console.log(mostrecentword);
        console.log(currentSong);
    } 
}