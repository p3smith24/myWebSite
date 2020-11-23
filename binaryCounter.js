var number = 0;
var cycleOn = false;
var timeOut;

function startCycle() {

    cycleOn = true;
    document.getElementById("cycleButton").value = "Stop Counter";
    cycle();
}

function stopCycle() {
    cycleOn = false; 
    document.getElementById("cycleButton").value = "Start Counter";
}

function cycle() {
    if (cycleOn == true) {
        if (number == 15) {
            number = -1;
        }
        number += 1;
        document.getElementById("numberDisplay").value = number;
        convert();
        timeOut = setTimeout(cycle, 500);
    }

}

function add() {
    if (number < 15) {
        number += 1;
        document.getElementById("numberDisplay").value = number;
    }
    else if (number == 15) {
        number = 0;
        document.getElementById("numberDisplay").value = number;
    }
    convert();
}

function subtract() {
    if (number > 0) {
        number += -1;
        document.getElementById("numberDisplay").value = number;
    }
    else if (number == 0) {
        number = 15;
        document.getElementById("numberDisplay").value = number;
    }
    convert();
}

function convert() {
    if (number % 2 == 1) {
        document.getElementById("ones").src = "images/on.png";
    } else {
        document.getElementById("ones").src = "images/off.png";
    }

    if (number % 4 > 1) {
        document.getElementById("twos").src = "images/on.png";
    } else {
        document.getElementById("twos").src = "images/off.png";
    }

    if (number % 8 > 3) {
        document.getElementById("fours").src = "images/on.png";
    } else {
        document.getElementById("fours").src = "images/off.png";
    }

    if (number % 16 > 7) {
        document.getElementById("eights").src = "images/on.png";
    } else {
        document.getElementById("eights").src = "images/off.png";
    }

}