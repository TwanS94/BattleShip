function runGame(){
	var shipLocation;
	function Random() {
		return Math.floor(Math.random() * 6);}
	shipLocation = Random();
	var loc1 = shipLocation;
	var loc2 = loc1+1;
	var loc3 = loc2+1;
	var guess;
	var hits =0;
	var guesses = 0; 
	var misses = 0;
	var isSunk = false;
	var gameStarted = false;
	var startGame = "I am ready!";
	var firstShot = false;
	var gameOver = false;
	var guessedPositions = [];
	var startedGames = 0;
	var finishedGames = 0; // reports the total amount of games played
	var winTotal = 0; // reports if the user has won the game
	var lossTotal = 0; // reports if the user has loss the game
	

	function alreadyGuessed(guess) {
	   for(var i=0; i<guessedPositions.length;i++) {
		  if (guessedPositions[i] == guess) {
			  return true;
		  }
	   }
	   return false;
	}

	userName = prompt("Hi, what is your name?");

	while (gameStarted === false){
		startGame = prompt("Hi "+userName+". A dangerous enemy battleship is coming our way! You can destroy it by hitting three shots. Enter a number between 0 and 7 to shoot. If you miss three shots the enemies will reach our ship and destroy us.\n\nWrite: 'I am ready!' to start the battle."); 
		if (startGame != 'I am ready!'){
		alert('Write: I am ready!');
		}
			else {
				if (startGame === "I am ready!") {
				gameStarted = true;
				alert("Your game has started!");
				startedGames = startedGames+1;
				console.log(startedGames);
				}
			}
	}
			   
	while (firstShot === false){
		guess = prompt("Ready, aim, fire! (enter a # from 0-7)");
		if (guess<0 || guess >7){
			alert("Please enter a valid cell #!");
		}
			else { 
			firstShot = true;
			guessedPositions.push(guess);
			guesses = guesses+1;
				if (guess >-1 && guess <8){
				alert("You started firing at the enemy! Be quick since we have been spotted!");
						if (guess == loc1 || guess == loc2 || guess == loc3){
						alert ("Hit!");
						hits = hits+1;
						alert ("You need "+(3-hits)+" more hits to kill the enemy battleship.");
						}
						else {
						alert("Miss! Please aim more accurately "+userName+"."); 
						misses = misses+1;
						}
				}
			}
	}
				
	while (isSunk === false && firstShot === true && gameOver === false){
			guess = prompt("Ready, aim, fire! (enter a # from 0-7)");
			if (guess<0 || guess > 7){
			alert("Please enter a valid cell #!");
			}
			else if (alreadyGuessed(guess)) { 
			alert("I want to remind you that you already shot at number " + guess + ". We do not have unlimited cannonballs!");
			}
				else { 
				guesses = guesses+1;
				guessedPositions.push(guess);
				alert("Boom! There goes another shot!");
					if (guess == loc1 || guess == loc2 || guess == loc3){
					alert ("Hit!");
					hits = hits+1;
					alert ("You need "+(3-hits)+" more hits to kill the enemy battleship.");
						if (hits == 3){
						isSunk = true;
						}
					}
							else {
							misses = misses+1;
							alert("Miss! Please aim more accurately "+userName+".");
								if (misses == 3){
								gameOver = true;
								}
							}
				}
	}
		
	while (gameOver === true){
		alert("The enemies have reached our ship and destroyed us! Game over.");
		alert("Thank you for playing "+userName+".");
			lossTotal = lossTotal+1;
			finishedGames = finishedGames+1;
			console.log(finishedGames);
			console.log(guesses);
			console.log(lossTotal);
	break;}

	while (isSunk === true){
			alert("The enemy battleship has been destroyed!");
				winTotal = winTotal+1;
				finishedGames = finishedGames+1;
				console.log(finishedGames);
				console.log(guesses);
				console.log(winTotal);
			var stats = "You destroyed the enemy battleship in " +guesses+" guesses,"+" which means your shooting accuracy was "+((3/guesses)*100)+"%.";
			alert(stats);
			alert("Thank you for playing "+userName+".");
	break;}
}