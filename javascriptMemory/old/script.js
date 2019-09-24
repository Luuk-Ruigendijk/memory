const imageFiles = ["images/HartenAas.png", 
								"images/HartenTwee.png", 
								"images/HartenDrie.png", 
								"images/HartenVier.png", 
								"images/HartenVijf.png", 
								"images/HartenZes.png", 
								"images/HartenZeven.png", 
								"images/HartenAcht.png", 
								"images/HartenNegen.png", 
								"images/HartenTien.png", 
								"images/HartenKoningin.png", 
								"images/HartenKoning.png", 
								"images/HartenBoer.png"
							]
var clicked = 0;
var choice = "";
var score = 0;


function cardClick(chosenCard){
	if (clicked == 0) {
		choice = chosenCard;
		clicked = 1;
		console.log("yo");
	} else {
		if (choice == chosenCard) {
			score++;
			clicked = 0;
			document.getElementsByClassName(chosenCard)[0].style.visibility='hidden'; 
			document.getElementsByClassName(chosenCard)[1].style.visibility='hidden'; 
			choice = "";
			document.getElementById("score").innerHTML = score;
//set innerHTML of the two cards to "hidden/invisible" to make them unclickable, invisible yet still taking up space.
		}
		else {
			clicked = 0;
			choice = "";
		}
	}
}
var images = imageFiles.slice()
var imagesDouble = imageFiles.slice()

// var images = ["404", "images/HartenAas.png", "images/HartenTwee.png", "images/HartenDrie.png", "images/HartenVier.png", "images/HartenVijf.png", "images/HartenZes.png", "images/HartenZeven.png", "images/HartenAcht.png", "images/HartenNegen.png", "images/HartenTien.png", "images/HartenKoningin.png", "images/HartenKoning.png", "images/HartenBoer.png"]
// var imagesDouble = ["404", "images/HartenAas.png", "images/HartenTwee.png", "images/HartenDrie.png", "images/HartenVier.png", "images/HartenVijf.png", "images/HartenZes.png", "images/HartenZeven.png", "images/HartenAcht.png", "images/HartenNegen.png", "images/HartenTien.png", "images/HartenKoningin.png", "images/HartenKoning.png", "images/HartenBoer.png"]

var randomNumber = 0;

function pickImage(){
	if (images.length > 0) {
		randomNumber = Math.floor(Math.random() * images.length);
		var createImage = document.createElement("IMG");
  		createImage.setAttribute("src", images[randomNumber]);
  		document.body.appendChild(createImage);
  		images.splice(randomNumber, 1);
  		pickImageDouble();
	}
	
}

function pickImageDouble(){
	if (imagesDouble.length > 0) {
		randomNumber = Math.floor(Math.random() * imagesDouble.length);
		var createImage = document.createElement("IMG");
  		createImage.setAttribute("src", imagesDouble[randomNumber]);
  		document.body.appendChild(createImage);
  		imagesDouble.splice(randomNumber, 1);
  		pickImage();
	}
}

pickImage();






/* old html code
<div><p>score:</p><div id="score">0</div></div>
	<div class="playArea">
		<div class="row">
			<div class="Ace"><img onclick="cardClick('Ace')" src="images/HartenAas.png"></div>
			<div class="Ten"><img onclick="cardClick('Ten')" src="images/HartenTien.png"></div>
			<div class="Two"><img onclick="cardClick('Two')" src="images/HartenTwee.png"></div>
			<div class="Two"><img onclick="cardClick('Two')" src="images/HartenTwee.png"></div>
			<div class="Three"><img onclick="cardClick('Three')" src="images/HartenDrie.png"></div>
		</div>
		<div class="row">
			<div class="Three"><img onclick="cardClick('Three')" src="images/HartenDrie.png"></div>
			<div class="Four"><img onclick="cardClick('Four')" src="images/HartenVier.png"></div>
			<div class="Four"><img onclick="cardClick('Four')" src="images/HartenVier.png"></div>
			<div class="Five"><img onclick="cardClick('Five')" src="images/HartenVijf.png"></div>
			<div class="Five"><img onclick="cardClick('Five')" src="images/HartenVijf.png"></div>
		</div>
		<div class="row">
			<div class="Six"><img onclick="cardClick('Six')" src="images/HartenZes.png"></div>
			<div class="Six"><img onclick="cardClick('Six')" src="images/HartenZes.png"></div>
			<div class="Seven"><img onclick="cardClick('Seven')" src="images/HartenZeven.png"></div>
			<div class="Seven"><img onclick="cardClick('Seven')" src="images/HartenZeven.png"></div>
			<div class="Eight"><img onclick="cardClick('Eight')" src="images/HartenAcht.png"></div>
		</div>
		<div class="row">
			<div class="Eight"><img onclick="cardClick('Eight')" src="images/HartenAcht.png"></div>
			<div class="Nine"><img onclick="cardClick('Nine')" src="images/HartenNegen.png"></div>
			<div class="Nine"><img onclick="cardClick('Nine')" src="images/HartenNegen.png"></div>
			<div class="Ten"><img onclick="cardClick('Ten')" src="images/HartenTien.png"></div>
			<div class="Ace"><img onclick="cardClick('Ace')" src="images/HartenAas.png"></div>
		</div>
		<div class="row">
			<div class="Jack"><img onclick="cardClick('Jack')" src="images/HartenBoer.png"></div>
			<div class="Jack"><img onclick="cardClick('Jack')" src="images/HartenBoer.png"></div>
			<div class="King"><img onclick="cardClick('King')" src="images/HartenKoning.png"></div>
			<div class="King"><img onclick="cardClick('King')" src="images/HartenKoning.png"></div>
		</div>
		
	</div>
*/