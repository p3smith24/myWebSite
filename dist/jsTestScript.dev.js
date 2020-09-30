"use strict";

var number = 10;
var restart = 0;
var listCount = 0;
var myList = ["Anne", "Bob", "Cathy", "Doug"];

function tester() {
  // var answer = confirm("JS Test 1");
  // var answer = prompt("What is your name?");
  // alert(answer);
  // alert("Welcome to my page " + answer + "!");

  /*
  if (number == 0 && restart == 0) 
  {
        alert("Blastoff!");
      restart = 1;
    }
  else if (number == 0 && restart == 1)
  {
        alert("Sending new rocket to launchpad...");
      restart = 0
      number = 10
    }
  else
  {
        alert(number);
      number = number - 1;
    }
  */
  if (listCount == 3) {
    alert(myList[listCount]);
    var listCount = 0;
  } else {
    alert(mylist[listCount]);
    listCount = listCount + 1;
  }
}