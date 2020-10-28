var number = 10;
var restart = 0;
var listCount = 0;
var myList = ["Anne", "Bob", "Cathy", "Doug"];
var picNumber = 0;
var pictureSwitcherSlides = ["images/slide1.png", "images/slide2.png", "images/slide3.png", "images/slide4.png", "images/slide5.png"]
var audioSlide1 = new Audio("sounds/slide1.mp3");
var audioSlide2 = new Audio("sounds/slide2.mp3");
var audioSlide3 = new Audio("sounds/slide3.mp3");
var audioSlide4 = new Audio("sounds/slide4.mp3");
var audioSlide5 = new Audio("sounds/slide5.mp3");


function welcome() {

    var answer = prompt("What is your name?");

    alert("Welcome to my page " + answer + "!");

}

function names() {


    if (listCount == 3) {

        alert(myList[listCount]);
        listCount = 0;

    } else {

        alert(myList[listCount]);
        listCount = listCount + 1;

    }
}

function rocket() {

    if (number === 0 && restart == 0) {

        alert("Blastoff!");
        restart = 1;

    } else if (number === 0 && restart == 1) {

        alert("Sending new rocket to launchpad...");
        restart = 0;
        number = 10;

    } else {

        alert(number);
        number = number - 1;

    }
}


function pictureSwitcher() {

    element = document.getElementById("pictureSlideshow");

    if (picNumber == 5) {

        picNumber = 0;
        element.src = pictureSwitcherSlides[picNumber];

    } else {

        element.src = pictureSwitcherSlides[picNumber];

    }


    switch (picNumber) {

        case 0:
            audioSlide5.pause();
            audioSlide5.currentTime = 0;
            audioSlide1.play();
            break;

        case 1:
            audioSlide1.pause();
            audioSlide1.currentTime = 0;
            audioSlide2.play();
            break;

        case 2:
            audioSlide2.pause();
            audioSlide2.currentTime = 0;
            audioSlide3.play();
            break;

        case 3:
            audioSlide3.pause();
            audioSlide3.currentTime = 0;
            audioSlide4.play();
            break;

        case 4:
            audioSlide4.pause();
            audioSlide4.currentTime = 0;
            audioSlide5.play();
            break;

    }

    picNumber = picNumber + 1

}