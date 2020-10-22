var rand;
outcomes = ["Yes - Definitely.","Most Likely.","It is Decidedly So.","You May Rely on It.","Cannot Predict Now.","Concentrate and Ask Again.","Ask Again Later.","Better not tell you now.","Don't Count on It.","My Sources Say No."];
//goodOutcome = new Audio("sounds/goodOutcome.mp3");
//badOutcome = new Audio("sounds/badOutcome.mp3");


function eightBall()
{
    answer = document.getElementById("answer");
    goodAudio = document.getElementById("goodOutcome");
    badAudio = document.getElementById("badOutcome");

    rand = Math.random();
    rand = 10 * rand;
    rand = Math.floor(rand);
    rand = rand;

    document.getElementById("answer").value = outcomes[rand] + " " + rand;

    if (rand == 0) {
        goodAudio.play();
    }
    if (rand == 9) {
        badAudio.play();
    }

    
    


}
