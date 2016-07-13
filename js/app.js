// selects a random number between 1 and 100 //

function getRandomNumber() {
		var rN = Math.floor((Math.random() * 100) + 1);
		console.log(rN);
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

	console.log(getRandomNumber);

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
  		rN = getRandomNumber();
  		guessedNumbers = [];
  		$('#count').text(0);
  		$('#feedback').text('Make your Guess!');
  		$('#guessList').empty();
  	});

  	$('.button').on("click", function(event){

  		event.preventDefault();

  	/*--- User's Guess---*/
	  	var userGuess = $('#userGuess').val();

	  	/*--- Check for valid answer---*/
  		if(userGuess % 1 !== 0 || userGuess === ''){
				document.getElementById("feedback").innerHTML = "Please input a Number";
  			return;
  		}

  		if(userGuess < 0 || userGuess > 101){
				document.getElementById("feedback").innerHTML = "Please input a number between 1 and 100";
  			return;
  		}

			if (existsInArray(guessedNumbers, userGuess)) {
				document.getElementById("feedback").innerHTML = "Number has already been guessed";
				return;
			}

			/*--- Guess Count---*/
  		$('#count').html(function(i, val){
  		return +val+1
  		});

	  	$('#guessList').append('<li>'+ userGuess +'</li>');
			guessedNumbers.push(userGuess);

	  	/*--- Feedback ---*/
  		if (userGuess == rN) {
				document.getElementById("feedback").innerHTML = "You Won!";
			}
			else {
			 	if(userGuess <= rN + 10 && userGuess >= rN - 10) {
					document.getElementById("feedback").innerHTML = "Hot";
				} else {
					if(userGuess <= rN + 15 && userGuess >= rN - 15) {
						document.getElementById("feedback").innerHTML = "Kinda Hot";
					}
					else {
						if(userGuess <= rN + 20 && userGuess >= rN - 20) {
							document.getElementById("feedback").innerHTML = "Cold";
						}
						else {
								if(userGuess <= rN + 30 && userGuess >= rN -30) {
										document.getElementById("feedback").innerHTML = "Ice Cold";
								}
								else {
									document.getElementById("feedback").innerHTML = "Way too far !";
								}
						}
					}
				}
			}
  	});
});
