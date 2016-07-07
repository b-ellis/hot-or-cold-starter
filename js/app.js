// selects a random number between 1 and 100 //
var rN = Math.floor((Math.random() * 100) + 1);

$(document).ready(function(){
	
	//console.log(rN); 
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game upon .new click ---*/
  	function newGame(){
  		$(".new").click(function(){
  			
  		})
  	}
});


