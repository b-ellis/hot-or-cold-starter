// selects a random number between 1 and 100 //
var rN = Math.floor((Math.random() * 100) + 1);

$(document).ready(function(){
	
	console.log(rN); 
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
  		console.log('it works');
  	});
  	
  	$('.button').on("click", function(event){
  		event.preventDefault();
  	/*--- User's Guess---*/
  	var userGuess = $('#userGuess').val();
  	$('#userGuess').val('');
  	/*--- Check for valid answer---*/
  		if(userGuess % 1 !== 0){
  			alert("Please input a Number");
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert("please input a Number between 1 and 100");
  			return true;
  		}
  	$('#guessList').append('<li>'+ userGuess +'</li>');
  	});
});


