var number = 10;
var restart = 0;
var listCount = 0;
var myList = [ "Anne", "Bob", "Cathy", "Doug" ];
function names()
{


    if (listCount == 3)
    {

        alert(myList[listCount]);
        listCount = 0;

    }
    else
    { 

        alert(myList[listCount]);
        listCount = listCount + 1;

    }
}

function rocket() {

    if (number === 0 && restart == 0) 
    {

        alert("Blastoff!");
        restart = 1;

    }
    else if (number === 0 && restart == 1)
    {

        alert("Sending new rocket to launchpad...");
        restart = 0;
        number = 10;

    }
    else
    {

        alert(number);
        number = number - 1;

    }
}

function welcome() {
    
    var answer = prompt("What is your name?");
    
    var confirm = confirm("Your name is " + answer + ", correct?");
    
    if (confirm == true) {
    alert("Welcome to my page " + answer + "!");
    }
    
    else {
    }
    
}
