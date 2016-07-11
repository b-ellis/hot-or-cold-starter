// selects a random number between 1 and 100 //

function getRandomNumber() {
		var rN = Math.floor((Math.random() * 100) + 1);
		return rN;
}

function existsInArray(array, element) {
	for (var i = 0 ; i < array.length ; i++) {
		if (array[i] === element) {
			return true;
		}
	}
	return false;
}

$(document).ready(function(){

	console.log(rN);

	var rN = getRandomNumber();
	var guessedNumbers = [];

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game upon .new click ---*/
  	$(".new").click(function(){
  		location.reload();
  		//console.log('it works');
			// clear all game logic and anything in the html relevant to the current game.
  	});

  	$('.button').on("click", function(event){

  		event.preventDefault();
  	/*--- Guess Count---*/
  		$('#count').html(function(i, val){
  		return +val+1
  		});

  	/*--- User's Guess---*/
	  	var userGuess = $('#userGuess').val();

	  	/*--- Check for valid answer---*/
  		if(userGuess % 1 !== 0 || userGuess === ''){
  			alert("Please input a Number");
				// do something in the feedback HTML element.
  			return;
  		}

  		if(userGuess < 0 || userGuess > 101){
  			alert("please input a Number between 1 and 100");
				// same as above
  			return;
  		}
  		//if number already guesed alert user
			if (existsInArray(guessedNumbers, userGuess)) {
				// alert the user somehow
				return;
			}

	  	$('#guessList').append('<li>'+ userGuess +'</li>');
			guessedNumbers.push(userGuess);

	  	/*--- Feedback ---*/
  		if(userGuess == rN)
  			document.getElementById("feedback").innerHTML = "You Won!";
			else if(userGuess <= rN + 10 && userGuess >= rN - 10)
				document.getElementById("feedback").innerHTML = "Hot";
			// continue logic


	  			//else if(userGuess <= rN + 15 && userGuess >= rN - 15);
	  				//document.getElementById("feedback").innerHTML = "Kinda Hot";


	  			//else if(userGuess <= rN + 20 && userGuess >= rN - 20);
	  				//document.getElementById("feedback").innerHTML = "cold";
  	});
});
