var typeGamePossibleStatements = ["The quick brown fox jumped over the lazy dog", "A fool and his money are soon parted", "Between a Rock and a Hard Place", "Curiosity Killed The Cat", "Time flies when you're having fun", "We'll cross that bridge when we come to it", "Do unto others as you would have them do unto you", "An ounce of prevention is worth a pound of cure", "It is a poor workman who blames his tools", "Those who live in glass houses shouldn't throw stones"];
var buttonNames = ["Ball", "Cart", "Balloon", "Oink", "Zip", "Zap", "Ogre", "Call", "Ocean"];
var buttonID = ["button0", "button1", "button2", "button3", "button4", "button5", "button6", "button7", "button8"];

var typeGameScore = 0;
var reactionGameScore = 0;
var clickBoxGameScore = 0;

var reactionFlag = false;
var reactionReady = false;
var readyToClick;

var startReactionTime;
var stopReactionTime;
var timeInMilliseconds;

function startController() {
    var typeRepetitionsStart = 2;
    var typeMillisecondsPerCharacterStart = 175;
    var typeWaitBeforeStartStart = 2000;
    var reactionRepetitionsStart = 2;
    var reactionWaitBeforeStartStart = 2500;
    var clickBoxRepetitionsStart = 2;
    var clickTimeToClickStart = 2500;
    var clickWaitBeforeStartStart = 1500;


    mainController(typeRepetitionsStart, typeMillisecondsPerCharacterStart, typeWaitBeforeStartStart, reactionRepetitionsStart, reactionWaitBeforeStartStart, clickBoxRepetitionsStart, clickTimeToClickStart, clickWaitBeforeStartStart);

}

async function mainController(typeRepetitions, typeMillisecondsPerCharacter, typeWaitBeforeStart, reactionRepetitions, reactionWaitBeforeStart, clickBoxRepetitions, timeToClick, clickBoxWaitBeforeStart) {

    document.getElementById("start").style.display = "none";

    document.getElementById("typingGame").style.display = "block";

    for (i = 0; i<typeRepetitions; i++) {

        await typingGameRun(typeMillisecondsPerCharacter, typeWaitBeforeStart);

    }

    document.getElementById("typingGame").style.display = "none";

    document.getElementById("reactionGame").style.display = "block";

    for (i = 0; i<reactionRepetitions; i++) {

        await reactionGameRun(reactionWaitBeforeStart);

    }

    document.body.style.backgroundColor = "white";

    document.getElementById("reactionGame").style.display = "none"; 

    document.getElementById("clickBoxGame").style.display = "block";

    for (i = 0; i<2; i++) {

        await clickBox(1500, 1500, false, true, 7);

    }

    document.getElementById("clickBoxGame").style.display = "none";

    document.getElementById("end").style.display = "block";

    endScreenHighScore(); 




}

function typingGameRun(millisecondsPerCharacter, waitBeforeStart) {

    return new Promise(function (resolve, reject) { 
        setTimeout(function () { 
            var textToTypeBox = document.getElementById("textToType");
            var typingBox = document.getElementById("typingArea");
            var rand = Math.floor(Math.random() * 10);
            
            typingBox.readOnly = false;

            typingBox.focus();
            typingBox.select();
            
            textToTypeBox.readOnly = false;
            textToTypeBox.value = typeGamePossibleStatements[rand];
            textToTypeBox.readOnly = true;

            setTimeout(function () { 
                
                if (textToTypeBox.value == typingBox.value) {
                    typeGameScore = typeGameScore + 2000;
                    typingBox.value = "";
                    typingBox.readOnly = true;
                    textToTypeBox.readOnly = false;
                    textToTypeBox.value = "Correct!";
                    textToTypeBox.readOnly = true;
                } else {
                    typingBox.value = "";
                    typingBox.readOnly = true;
                    textToTypeBox.readOnly = false;
                    textToTypeBox.value = "Wrong!";
                    textToTypeBox.readOnly = true;
                }

                setTimeout(function () {
                    resolve();
                }, 1500)

            }, millisecondsPerCharacter * typeGamePossibleStatements[rand].length)


        }, waitBeforeStart); 
    }) 
}

async function reactionButtonPress() {
    if (reactionReady == true) {
        reactionFlag = true;
        reactionReady = false;
        
        endReactionTime = new Date();
        timeInMilliseconds = endReactionTime - startReactionTime;

        document.getElementById("reactionReturn").readonly = false;
        document.getElementById("reactionReturn").value = "You reacted in " + timeInMilliseconds + " milliseconds!";
        reactionGameScore = 2000 - timeInMilliseconds;
        document.getElementById("reactionReturn").readonly = true;
        
    }

}

async function reactionGameRun(waitBeforeStart) {
    
    

    return new Promise(function (resolve, reject) { 

        document.body.style.backgroundColor = "white";
        
        setTimeout(function () { 
            var randReaction = Math.floor((Math.random() * 10) * 100) + 600;

            reactionReady = false;
            reactionFlag = false;

            document.getElementById("reactionReturn").readonly = false;
            document.getElementById("reactionReturn").value = "";
            document.getElementById("reactionReturn").readonly = true;

            document.body.style.backgroundColor = "red";
            document.getElementById("reactionButton").value = "Ready";

            setTimeout(function () {
                reactionReady = true;
                document.body.style.backgroundColor = "green";
                startReactionTime = new Date();
    
                setTimeout(function () {
    
                    if (reactionReady == false && reactionFlag == false) {
                        document.getElementById("reactionReturn").readonly = false;
                        document.getElementById("reactionReturn").value = "You missed the reaction!";
                        document.getElementById("reactionReturn").readonly = true;
        
                    }
                    if (reactionReady == true) {
                        document.getElementById("reactionReturn").readonly = false;
                        document.getElementById("reactionReturn").value = "Error";
                        document.getElementById("reactionReturn").readonly = true;
                    }

                    setTimeout(function () {
                        resolve();
                    }, 2000);
        
                }, 2000); 
                

    
            }, randReaction);

        }, waitBeforeStart); 

    }) 

}

async function clickBox(timeToClick, waitBeforeStart, isRandom, isWordPreset, presetButtonID) {

    return new Promise(function (resolve, reject) {

    readyToClick = false;
    buttonNames = ["Ball", "Cart", "Balloon", "Oink", "Zip", "Zap", "Ogre", "Call", "Cab"];
    var randomButton;
    var selectedWord;

    document.getElementById("buttonToClick").value = "";
    document.getElementById("response").value = "";


    setTimeout(function () {
        
        if (isRandom == true) {
            for(var i = 0; i < buttonID.length; i++){ 

                randomButton = Math.floor((Math.random() * (buttonID.length - i)));
            
                document.getElementById(buttonID[i]).value = buttonNames[randomButton];
        
            }
        }
        else if (isRandom == false) {
            for(var i = 0; i < buttonID.length; i++){ 
            
                document.getElementById(buttonID[i]).value = buttonNames[i];
        
            }
        }
        else {
            document.getElementById("response").value = "isRandom Parameter Error";
            resolve();
        }

// =====================================

        if (isWordPreset == true) {
            document.getElementById("buttonToClick").value = document.getElementById(buttonID[presetButtonID]).value;
        }
        else if (isWordPreset == false) {
            selectedWord = Math.floor((Math.random() * 9));

            document.getElementById("buttonToClick").value = document.getElementById(buttonID[selectedWord]).value;
        }
        else {
            document.getElementById("response").value = "isWordPreset Parameter Error";
        }

// =====================================

        readyToClick = true;

        setTimeout(function () {

            if (readyToClick == true) {
                document.getElementById("response").value = "Did you even press a button?";
            }
            else if (readyToClick == false) {
                document.getElementById("response").value = "You pressed the right button!";
                clickBoxGameScore = clickBoxGameScore + 1250; 
            }

            setTimeout(function () {
                resolve();
            }, 1500)

        }, timeToClick);

    }, waitBeforeStart);
    
    }) 

}

function endScreenHighScore() {

    var totalScore = typeGameScore + reactionGameScore + clickBoxGameScore;

    document.getElementById("endBox").value = "You got " + totalScore + "points";

}

function endScreenRestart() {

    location.reload();

}

function pressButton0() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button0").value) {
            readyToClick = false;
        }

    }

}

function pressButton1() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button1").value) {
            readyToClick = false;
        }

    }

}

function pressButton2() {
    
    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button2").value) {
            readyToClick = false;
        }

    }

}

function pressButton3() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button3").value) {
            readyToClick = false;
        }

    }

}

function pressButton4() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button4").value) {
            readyToClick = false;
        }

    }

}

function pressButton5() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button5").value) {
            readyToClick = false;
        }

    }

}


function pressButton6() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button6").value) {
            readyToClick = false;
        }

    }

}

function pressButton7() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button7").value) {
            readyToClick = false;
        }

    }

}

function pressButton8() {

    if (readyToClick == true) {

        if (document.getElementById("buttonToClick").value == document.getElementById("button8").value) {
            readyToClick = false;
        }

    }

}
