console.log("hey")

document.addEventListener('DOMContentLoaded', function() {
  	
  	//makeing my objects
	var one = document.createElement("div");
	var oneA = 4;
	var two = document.createElement("div");
	var twoL = 4;

	one.setAttribute("id", "one");
	two.setAttribute("id", "two");

	//sget divs on page
	document.getElementById("inBody").appendChild(one);
	document.getElementById("inBody").appendChild(two);
	
	//giveing them text 
	one.innerHTML = "a";
	two.innerHTML = "l";


	//listing for keypress
	window.addEventListener('keypress', function (e){
		console.log(e);
		if (e.keyCode == 97){
			console.log("you did the a thing");

			let a = oneA.toString() + "%";
			one.style.marginLeft = a;

			oneA = oneA + 1;

			//logs because I needed the info to know wtf was hapaning
			console.log( "oneA " + oneA);
			console.log( "a " + a );

		}
		if(e.keyCode == 108){
			console.log("you did the l thing");

			let l = twoL.toString() + "%";
			two.style.marginLeft = l;

			twoL = twoL + 1;

			//logs because I needed the info to know wtf was hapaning
			console.log( "twoL " + twoL);
			console.log( "l " + l );
		}

		isTheGameOver();
	});

	/* a = 97 |||| l =108 */
	

	console.log(one);
	console.log(two);


	function isTheGameOver(){
		console.log( "you are running is isTheGameOver" );

		if( oneA >= 75 ){
			console.log( "oneA hit 75" );
			document.getElementById("inBody").innerHTML = "A WINS!!!";
		}

		if( twoL >= 75 ){
			console.log( "twoL hit 75" );
			document.getElementById("inBody").innerHTML = "L WINS!!!";
		}

	};

});
