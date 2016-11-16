//Array for possible psychic choices
		var psyChoices = ["a,", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		//Variables for tracking Wins, Losses, Guesses Remaining, Guesses so far

		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var userGuessed = "";
		var psyPick;

		
		//Create a function to Reset certain variables

		function startGame(){
			guessesLeft = 9;
			userGuessed = "";
			//Set the psyPick variable equal to a random choice from the psyChoices array
			psyPick = psyChoices[Math.floor(Math.random() * psyChoices.length)];
			console.log(psyPick);
		}

		startGame();

	
		//When a user presses a key it will run the following function
		document.onkeyup = function(event) {

			console.log(event.which)

			if ((event.which >= 65) && (event.which <= 90)) {

			//Create var for recording guesses by the user
			var key = event.key;
				userGuessed = userGuessed + key;
				document.querySelector("#game").innerHTML = userGuessed;

			//Determine when a key is pressed, make it lowercase, and set it to the userGuess variable
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			
			//Set the Win/Lose Conditions and Set guesses left
			if (userGuess === psyPick) {
				wins++;
				alert("you won!");
				startGame();
			}else if (userGuess != psyPick) {
				guessesLeft--;
			}
			if (guessesLeft === 0) {
				losses++;
				alert("you lost!");
				startGame();
			}
		}


		//Create HTML to be injected
		var html = "<h1> The Psychic Game</h1>" +
		"<p> Guess what letter I'm thinking of:" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + userGuessed + "</p>";

		//Inject html
		document.querySelector("#game").innerHTML = html;
}