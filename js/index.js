console.log("hey")

document.addEventListener('DOMContentLoaded', function() {
  	
  	//makeing my objects
	var playerOneDiv = document.createElement("div");		//prevusly one
	var thePaddingForPlayerOne = 4;							//preveusly oneA
	var playerTwoDiv = document.createElement("div");		//preveusly two
	var thePaddingForPlayerTwo = 4;							//preveusly twoL

	playerOneDiv.setAttribute("id", "one");
	playerTwoDiv.setAttribute("id", "two");

	//sget divs on page
	document.getElementById("inBody").appendChild(playerOneDiv);
	document.getElementById("inBody").appendChild(playerTwoDiv);
	
	//giveing them text 
	playerOneDiv.innerHTML = "playerOne";
	playerTwoDiv.innerHTML = "playerTwo";


	//listing for keypress
	window.addEventListener('keypress', function (e){
		console.log(e);
		if (e.keyCode == 97){
			console.log("you did the a thing");

			let tempVarforPlayerOneInput = thePaddingForPlayerOne.toString() + "%";
			playerOneDiv.style.marginLeft = tempVarforPlayerOneInput;

			thePaddingForPlayerOne = thePaddingForPlayerOne + 1;

			//logs because I needed the info to know wtf was hapaning
			console.log( "thePaddingForPlayerOne " + thePaddingForPlayerOne);
			console.log( "tempVarforPlayerOneInput " + tempVarforPlayerOneInput );

		}
		if(e.keyCode == 108){
			console.log("you did the l thing");

			let tempVarforPlayerTwoInput = thePaddingForPlayerTwo.toString() + "%";
			playerTwoDiv.style.marginLeft = tempVarforPlayerTwoInput;

			thePaddingForPlayerTwo = thePaddingForPlayerTwo + 1;

			//logs because I needed the info to know wtf was hapaning
			console.log( "thePaddingForPlayerTwo " + thePaddingForPlayerTwo);
			console.log( "tempVarforPlayerTwoInput " + tempVarforPlayerTwoInput );
		}

		isTheGameOver();
	});

	/* a = 97 |||| l =108 */
	

	console.log(playerOneDiv);
	console.log(playerTwoDiv);


	function isTheGameOver(){
		console.log( "you are running is isTheGameOver" );

		if( thePaddingForPlayerOne >= 75 ){
			console.log( "thePaddingForPlayerOne hit 75" );
			document.getElementById("inBody").innerHTML = "Player One WINS!!!";
		}

		if( thePaddingForPlayerTwo >= 75 ){
			console.log( "thePaddingForPlayerTwo hit 75" );
			document.getElementById("inBody").innerHTML = "Player Two WINS!!!";
		}

	};

});
