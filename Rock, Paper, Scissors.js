/* function RPS(){

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', 'UA-43136363-18', 'auto');
        ga('set', 'forceSSL', true);
        ga('set', 'anonymizeIp', true);
        ga('set', 'allowAdFeatures', false);
        ga('set', 'transport', 'beacon');
        ga('send', 'pageview');

userName = prompt("Welcome to Rock, Paper, Scissors. Please enter your name.");
ga('send', 'pageview', document.location.pathname+'game/nameEntered');
    
var gameStarted = false;
var userWins = 0;
var cpuWins = 0;

	while (gameStarted === false){
		startGame = prompt("Hi "+userName+". Try to beat the computer in Rock, Paper, Scissors. Three out of five games wins.\n\nWrite: 'Ready' to start."); 
		if (startGame != 'Ready'){
		alert('Write: Ready');
		}
			else {
				if (startGame === "Ready") {
				gameStarted = true;
				ga('send', 'event', 'game','ready','valid');
				ga('send', 'pageview', document.location.pathname+'game/gameStarted');
				alert("Your game has started!");
                console.log("%c Your game has started! ", "color: blue");
				}
			}
    }
    
    while (userWins<3 && cpuWins<3 && gameStarted === true){
    var userChoice = prompt("Do you choose Rock, Paper or Scissors?");
		if ((userChoice != "Rock") && (userChoice != "Paper") && (userChoice != "Scissors")){
			alert("Please enter 'Rock', 'Paper' or 'Scissors'! (MIND CAPITAL LETTERS)");
		}
			else { 
			var computerChoice = Math.random();
            if (computerChoice < 0.33333333333333333333) {
            computerChoice = "Rock";
            console.log("%c The computer starts processing quickly and tries to beat your " +userChoice+ " with "+computerChoice+".", "color: blue");
                if (userChoice === "Paper"){
                                userWins = userWins+1;
								ga('send', 'event', 'playerchoice','paper','win');
								ga('send', 'event', 'computerchoice','rock','loss');
                                alert("Paper wins.");
                                console.log("%c You won this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: 									green", "color: purple", "color: green");
                }
                else if (userChoice === "Scissors"){
                                cpuWins = cpuWins+1;
								ga('send', 'event', 'playerchoice','scissors','loss');
								ga('send', 'event', 'computerchoice','rock','win');
                                alert("Rock wins.");
                                console.log("%c You lost this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
                else {
                alert("It's a tie! Try again.");
				ga('send', 'event', 'playerchoice','rock','tie');
                console.log("%c It's a tie! The score remains:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
            } 
            else if (computerChoice <= 0.6666666666666666666667) {
            computerChoice = "Paper";
            console.log("%c The computer starts processing quickly and tries to beat your " +userChoice+ " with "+computerChoice+".", "color: blue");
                if (userChoice === "Scissors"){
                                userWins = userWins+1;
								ga('send', 'event', 'playerchoice','scissors','win');
								ga('send', 'event', 'computerchoice','paper','loss');
                                alert("Scissors wins.");
                                console.log("%c You won this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: 									green", "color: purple", "color: green");
                }
                else if (userChoice === "Rock"){
                                cpuWins = cpuWins+1;
								ga('send', 'event', 'playerchoice','rock','loss');
								ga('send', 'event', 'computerchoice','paper','win');
                                alert("Paper wins.");
                                console.log("%c You lost this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
                else {
                alert("It's a tie! Try again.");
				ga('send', 'event', 'playerchoice','paper','tie');
				ga('send', 'event', 'computerchoice','paper','tie');
                console.log("%c It's a tie! The score remains:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
            } 
            else {
            computerChoice = "Scissors";
            console.log("%c The computer starts processing quickly and tries to beat your " +userChoice+ " with "+computerChoice+".", "color: blue");
                if (userChoice === "Rock"){
                                userWins = userWins+1;
								ga('send', 'event', 'playerchoice','rock','win');
								ga('send', 'event', 'computerchoice','scissors','loss');
                                alert("Rock wins.");
                                console.log("%c You won this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: 									green", "color: purple", "color: green");
                }
                else if (userChoice === "Paper"){
                                cpuWins = cpuWins+1;
								ga('send', 'event', 'playerchoice','paper','loss');
								ga('send', 'event', 'computerchoice','scissors','win');
                                alert("Scissors wins.");
                                console.log("%c You lost this round. The score is:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
                else {
                alert("It's a tie! Try again.");
				ga('send', 'event', 'playerchoice','scissors','tie');
				ga('send', 'event', 'computerchoice','scissors','tie');
                console.log("%c It's a tie! The score remains:"+"%c User "+userWins+"%c -"+"%c CPU "+cpuWins+"%c.", "color: green", "color: purple", "color: green", "color: purple", "color: green");
                }
            }
			}	
    }
    
    while (userWins === 3){
    alert("CONGRATULATIONS "+userName+"! You beat the computer with a score of "+userWins+"-"+cpuWins+".");
    console.log("%c Congratulations "+userName+"! You beat the computer with a score of "+userWins+"-"+cpuWins+".", "color: blue");
	ga('send', 'event', 'game','finished','userwin');
    break;
    }
    while (cpuWins === 3){
    alert("Better luck next time "+userName+"... The computer has beaten you with a score of "+cpuWins+"-"+userWins+".");
    console.log("%c Better luck next time "+userName+"... The computer has beaten you with a score of "+cpuWins+"-"+userWins+".", "color: blue");
	ga('send', 'event', 'game','finished','computerwin');
    break;
    }
}
*/
