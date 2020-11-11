// @import url("https://code.jquery.com/jquery-2.2.4.js")
// // $(document).ready(function() {
// // 	$("body").append()
// // })
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-Score");
var scoreBoard_div = document.querySelector(".score-board")
var result_p = document.querySelector(".result>p")
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice(){
	var choices = ['r','p','s'];
	var randNumber = Math.floor(Math.random() * 3 )
	return choices[randNumber]
}

// function convertToWord(letter){
// 	if (letter === "r") return "Rock";
// 	if (letter === "p") return "Paper";
// 	return "Scissors";
// }

function win(userChoice,computerChoice){
	console.log("win")
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	var smallUserWord =$("#user-label").css( "fontSize", "20px" );
	var smallUserWord =$("#computer-label").css( "fontSize", "20px" );
	result_p.innerHTML = name + " has won against the computer!";

}
function lose(userChoice,computerChoice){
	console.log("loses")
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	var smallUserWord = $("#user-label").css( "fontSize", "20px" );
	var smallUserWord = $("#computer-label").css( "fontSize", "20px" );
	result_p.innerHTML = name + " has lost against the computer!";
}
function draw(userChoice,computerChoice){
	console.log("draw")
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	var smallUserWord = $("#user-label").css( "fontSize", "20px" );
	var smallUserWord = $("#computer-label").css( "fontSize", "20px" );
	result_p.innerHTML = "DRAW! Maybe next time";

}

function game(userChoice){
	var computerChoice = getComputerChoice();
	console.log(userChoice + computerChoice)
	switch(userChoice + computerChoice) {
		case "rs":
		win(userChoice , computerChoice);
			break;
		case "pr":
		win(userChoice , computerChoice);
			break;
		case "sp":
		win(userChoice , computerChoice);
			break;
		case "sr":
		lose(userChoice , computerChoice);
			break;
		case "rp":
		lose(userChoice , computerChoice);
			break;
		case "ps":
		lose(userChoice , computerChoice);
			break;
		default:
			draw(userChoice , computerChoice);
	};
}

function main() {
	rock_div.addEventListener('click',function(){
		game("r")
	});
	paper_div.addEventListener('click',function(){
		game("p")
	});
	scissors_div.addEventListener('click',function(){
		game("s")
	});
}

main();


Splitting();