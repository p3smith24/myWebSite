var rand;
outcomes = ["Yes - Definitely.", "Most Likely.", "It is Decidedly So.", "You May Rely on It.", "Cannot Predict Now.", "Concentrate and Ask Again.", "Ask Again Later.", "Better not tell you now.", "Don't Count on It.", "My Sources Say No."];
//goodOutcome = new Audio("sounds/goodOutcome.mp3");
//badOutcome = new Audio("sounds/badOutcome.mp3");


function eightBall() {
    answer = document.getElementById("answer");
    question = document.getElementById("question");
    goodAudio = document.getElementById("goodOutcome");
    badAudio = document.getElementById("badOutcome");

    rand = Math.random();
    rand = 10 * rand;
    rand = Math.floor(rand);
    rand = rand;

    if (question.value.length == 0) {
        answer.value = "Please enter a question.";
    } else {
        answer.value = outcomes[rand];
        if (rand == 0) {
            goodAudio.play();
        }
        if (rand == 9) {
            badAudio.play();
        }
    }
}

function reset() {
    question.value = "";
}