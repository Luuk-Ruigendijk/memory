var clickedCard = "";

var score = 0;

var moves = 0;

var wins = 0;

var clicked = 0;

//var amountOfCards = 1;

var firstHighlight = "";

var secondHighlight = "";

var imagePrefix = "images/";

var imageSuffix = ".png";

var cardSet = ["Harten", "Klaver", "Schoppen", "Ruiten"];

var typesOriginal = ["Aas", "Twee", "Drie", "Vier", "Vijf", "Zes", "Zeven", "Acht", "Negen", "Tien", "Koning", "Koningin", "Boer"];

var types = "";

var originalAmount = 0;

function collectData(){
	console.log("I've run "+wins+" times")
		function reqListener () {
			console.log(this.response);
			types = JSON.parse(this.response);
			console.dir(types);
			originalAmount = types.length;
			generateCards();
	 		//console.log(this.responseText);
	}

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://localhost/javascriptMemory/javascriptMemory/config.php");
	oReq.send();
}



collectData();
//var types = ["Aas", "Aas", "Twee", "Twee", "Drie", "Drie", "Vier", "Vier", "Vijf", "Vijf", "Zes", "Zes", "Zeven", "Zeven", "Acht", "Acht", "Negen", "Negen", "Tien", "Tien", "Koning", "Koning", "Koningin", "Koningin", "Boer", "Boer"];

var originalAmount = types.length;



function generateCards() {
	for (var i = 0; i < originalAmount; i++) {
		amountOfCards = Math.floor(Math.random() * types.length);
		var createCard = document.createElement("IMG");
		createCard.onclick = processOnClick;
		createCard.memoryCardNr = "card"+i;
		createCard.memoryCardType = cardSet[0]+types[amountOfCards];
  		createCard.setAttribute("src", imagePrefix+cardSet[0]+types[amountOfCards]+imageSuffix);
  		createCard.setAttribute("id", "card"+i);
  		createCard.setAttribute("class", "regular");
  		createCard.setAttribute("cardType", cardSet[0]+types[amountOfCards]);
  		//createCard.setAttribute("onclick", "checkDouble("cardSet[0]+types[i]");");
  		//createCard.setAttribute("onclick", "highlightCard(card"+i+");");
  		document.body.appendChild(createCard);
  		types.splice(amountOfCards, 1);
	}
}

/*function generateCards() {
	for (var i = 0; i < types.length; i++) {
		var createCard = document.createElement("IMG");
		createCard.onclick = processOnClick;
		createCard.memoryCardNr = "card"+i;
		createCard.memoryCardType = cardSet[0]+types[i];
  		createCard.setAttribute("src", imagePrefix+cardSet[0]+types[i]+imageSuffix);
  		createCard.setAttribute("id", "card"+i);
  		createCard.setAttribute("class", "regular");
  		createCard.setAttribute("cardType", cardSet[0]+types[i]);
  		//createCard.setAttribute("onclick", "checkDouble("cardSet[0]+types[i]");");
  		//createCard.setAttribute("onclick", "highlightCard(card"+i+");");
  		document.body.appendChild(createCard);
	}
}*/



function processOnClick(event){
	console.dir(event);
	var memoryCardNr = event.target.memoryCardNr;
	var memoryCardType = event.target.memoryCardType;
	var currentCardNr = document.getElementById(memoryCardNr);
	if (clicked == 2) {
		alert("wait for the cards to reset");
	}
	else {
		if (currentCardNr.classList.contains('highlight')) {
			alert("you can't click the same card twice")
		}
		else {
			highlightCard(memoryCardNr);
			checkDouble(memoryCardType, memoryCardNr);
			colorChange();
		}
	}
	
	
	
	
	
	//checkDouble("cardSet[0]+types[i]");
	//highlightCard();
}

function colorChange(){
	if (moves >= originalAmount*1.5) {
		document.getElementById("moves").setAttribute("class", "yellow")
	}
	if (moves >= originalAmount*2) {
		document.getElementById("moves").setAttribute("class", "red")
	}
	if (score >= originalAmount/4) {
		document.getElementById("score").setAttribute("class", "yellow")
	}
	if (score >= originalAmount/3) {
		document.getElementById("score").setAttribute("class", "green")
	}
	if (score == originalAmount/2) {
		alert("You've won!");
		if (moves <= score+2) {
			alert("This victory wasn't earned, cheater...")
		}
		wins++;
		document.getElementById("wins").innerHTML = wins;
		for (var i = 0; i < originalAmount; i++) {
			el=document.getElementById("card"+i);
			el.remove();
		}
		moves = 0;
		score = 0;
		clicked = 0;
		document.getElementById("moves").innerHTML = moves;
		document.getElementById("moves").setAttribute("class", "green")
		document.getElementById("score").setAttribute("class", "red")
		document.getElementById("score").innerHTML = score;
		collectData();
	}
}

function highlightCard(highlightedCard){
	if (clicked == 0) {
		//document.getElementById(highlightedCard).onclick = clickedTheSame;
		firstHighlight = highlightedCard;
		document.getElementById(highlightedCard).setAttribute("class", "highlight");
	}
	else {
		if (clicked == 1) {
			//document.getElementById(highlightedCard).onclick = clickedTheSame;
			secondHighlight = highlightedCard;
			document.getElementById(highlightedCard).setAttribute("class", "highlight");
		}
	}
}

function removeDifferentHighlights(){
	
	/*for (var revertCurrentCard = 0; revertCurrentCard < originalAmount.length; revertCurrentCard++) {
		console.log("card"+revertCurrentCard);
		console.log("yo");
		if (document.getElementById("card"+revertCurrentCard).getAttribute("highlight") == true) {
			document.getElementById(highlightedCard).setAttribute("class", "regular");
		}
	}*/

	document.getElementById(firstHighlight).setAttribute("class", "regular");
	document.getElementById(secondHighlight).setAttribute("class", "regular");
	clicked = 0;
	

}

function clickedTheSame(){
	alert("you can't click the same card twice!");
}

function removeSameHighlights(){
	document.getElementById(firstHighlight).setAttribute("class", "hide");
	document.getElementById(secondHighlight).setAttribute("class", "hide");
	clicked = 0;
}

function checkDouble(newestClick, newestNumber){
	if (clicked == 1) {

		if (clickedCard == newestClick) {
			//remove both cards
			score++;
			clicked++;
			moves++;
			document.getElementById("moves").innerHTML = moves;
			document.getElementById("score").innerHTML = score;
			if (score < originalAmount/2) {
				alert("Well done! You scored a point!");
			}
			
			//removeSameHighlightsTimeOut;
			//document.getElementById(firstHighlight).onclick = clickedTheSame;
			//document.getElementById(secondHighlight).onclick = clickedTheSame;
			setTimeout(removeSameHighlights, 1000);
		}
		else {
			clicked++;
			moves++;
			document.getElementById("moves").innerHTML = moves;
			//removeDifferentHighlightsTimeOut;
			document.getElementById(firstHighlight).onclick = processOnClick;
			document.getElementById(secondHighlight).onclick = processOnClick;
			setTimeout(removeDifferentHighlights, 1000);
		}
	}
	else {
		clicked++;
		clickedCard = newestClick;
	}
}