var partsOfSpeech = ["name", "animal1", "animal2", "animal3", "place", "noun", "adjective1", "adjective2", "object1", "object2", "ptverb"];
var answer = "";
var story = [", th", ", is going on quite the journey. First, ", " went on a ", " voyage to ", ". They journeyed through ", " for 3 days straight! ", " heroically survived that ", " infested land, and continued their trek. They found a boat and started to sail into the Sea of ", ". On the huge waves of the sea, ", " encountered a ", " and ", " ", " ! ", " heroically fought off this ", " and continued sailing the sea. Once the next landmass had been reached, ", " knew they were in the correct spot. ", " followed the trail of ", ", and ended up right where they knew the treasure would be. They started to dig and found the treasure had been ", "! ", " must hunt down the ", " that did this. To be continued..."];
var count = 0;
var userAnswer = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
//var userAnswer = ["name", "animal1", "name", "adjective1", "place", "place", "name", "object1", "noun", "name", "size", "adjective2", "animal2", "name", "animal2", "name", "name", "object2", "ptverb", "name", "animal3"];
var userInputs = ["inputName", "inputAnimal1", "inputName", "inputAdjective1", "inputPlace", "inputPlace", "inputName", "inputObject1", "inputNoun", "inputName", "inputSize", "inputAdjective2", "inputAnimal2", "inputName", "inputAnimal2", "inputName", "inputName", "inputObject2", "inputPtverb", "inputName", "inputAnimal3"];

function prompt()
{
	// if this is the start, display the textbox and hide the story. 
	// then display the first element of partsOfSpeech in the textbox. 

}


function getWords() {

	alert(userInputs.length);
	var i;

	alert("hello");
	for (i = 0; i<21; i++)
	{
		userAnswer[i] = document.getElementById(userInputs[i]).value;
		alert(i);
	}

	//previous code to do the above for loop that had the same issue

	/*userAnswer[0] = document.getElementById("inputName").value;
	userAnswer[1] = document.getElementById("inputAnimal1").value;
	userAnswer[2] = document.getElementById("inputName").value;
	userAnswer[3] = document.getElementById("inputAdjective1").value;
	userAnswer[4] = document.getElementById("inputPlace").value;
	userAnswer[5] = document.getElementById("inputPlace").value;
	userAnswer[6] = document.getElementById("inputName").value;
	userAnswer[7] = document.getElementById("inputObject1").value;
	userAnswer[8] = document.getElementById("inputNoun").value;
	userAnswer[9] = document.getElementById("inputName").value;
	userAnswer[10] = document.getElementById("inputSize").value;
	userAnswer[11] = document.getElementById("inputAdjective2").value;
	userAnswer[12] = document.getElementById("inputAnimal2").value;
	userAnswer[13] = document.getElementById("inputName").value;
	alert("hello");
	userAnswer[14] = document.getElementById("inputAnimal2").value;
	userAnswer[15] = document.getElementById("inputName").value;
	userAnswer[16] = document.getElementById("inputName").value;
	userAnswer[17] = document.getElementById("inputObject2").value;
	userAnswer[18] = document.getElementById("inputPtverb").value;
	userAnswer[19] = document.getElementById("inputName").value;
	userAnswer[20] = document.getElementById("inputAnimal3").value;
	alert("2");*/

	//stops at 9 and doesent do the code below, which without the for loop, it does work.

	alert(userAnswer);

	document.getElementById("questionsP").style.visibility = "hidden";
	document.getElementById("questionsP").style.display = "none";
	document.getElementById("answersP").style.visibility = "visible";
	document.getElementById("answersP").style.display = "initial";
	displayStory();
	
}

function reset()
{
	//userAnswer = ["name", "animal1", "name", "adjective1", "place", "place", "name", "object1", "noun", "name", "size", "adjective2", "animal2", "name", "animal2", "name", "name", "object2", "ptverb", "name", "animal3"];
	userAnswer = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

	document.getElementById("inputName").value = "";
	document.getElementById("inputAnimal1").value = "";
	document.getElementById("inputAnimal2").value = "";
	document.getElementById("inputAnimal3").value = "";
	document.getElementById("inputPlace").value = "";
	document.getElementById("inputNoun").value = "";
	document.getElementById("inputAdjective1").value = "";
	document.getElementById("inputAdjective2").value = "";
	document.getElementById("inputObject1").value = "";
	document.getElementById("inputObject2").value = "";
	document.getElementById("inputPtverb").value = "";

	document.getElementById("questionsP").style.visibility = "visible";
	document.getElementById("questionsP").style.display = "initial";
	document.getElementById("answersP").style.visibility = "hidden";
	document.getElementById("answersP").style.display = "none";
}

function displayStory()
{
	answer = "";
	var i;
	
	// loop to stitch elements of story with elements of answers. 
	
	for (i = 0; i< userAnswers.length; i++)
	{
		answer = answer + userAnswer[i];
		answer = answer + story[i];
	}
	// if there's one more element in story than answers, then add the last element of answers

	// Make the story div visible, and the userEnter div hidden.		
	document.getElementById("questionsP").style.visibility = "hidden";
	document.getElementById("questionsP").style.display = "none";
	document.getElementById("answersP").style.visibility = "visible";
	document.getElementById("answersP").style.display = "initial";
	// return the variable answer.
	document.getElementById("madLibs").innerHTML = answer;
}