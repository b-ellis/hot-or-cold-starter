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
  		location.reload();
  		//console.log('it works');
  	});
  	
  	$('.button').on("click", function(event){
  		event.preventDefault();
  	/*--- Guess Count---*/
  		$('#count').html(function(i, val){
  		return +val+1

  	});
  	/*--- User's Guess---*/
  	var userGuess = $('#userGuess').val();
  	$('#userGuess').val('');
  	/*--- Check for valid answer---*/
  		if(userGuess % 1 !== 0 || userGuess === ''){
  			alert("Please input a Number");
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert("please input a Number between 1 and 100");
  			return true;
  		}
  		//if number already guesed alert user
  	$('#guessList').append('<li>'+ userGuess +'</li>');
  	
  	/*--- Feedback ---*/
  		if(userGuess == rN)
  			document.getElementById("feedback").innerHTML = "You Won!";
  	
  			else if(userGuess <= rN + 10 && userGuess >= rN - 10)
  				document.getElementById("feedback").innerHTML = "Hot";
  			

  			//else if(userGuess <= rN + 15 && userGuess >= rN - 15);
  				//document.getElementById("feedback").innerHTML = "Kinda Hot";
  			

  			//else if(userGuess <= rN + 20 && userGuess >= rN - 20);
  				//document.getElementById("feedback").innerHTML = "cold";
  	
  			
  	});
});


