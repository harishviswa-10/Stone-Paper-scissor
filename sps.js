let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber=Math.floor(Math.random()*2);
	return choices[randomNumber];
}
function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissor";
}
function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
result_div.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You WIN`;
}
function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${convertToWord(userChoice)} beaten by ${convertToWord(computerChoice)}. You LOSE`;
}
function draw(){
	result_div.innerHTML="Its a DRAW";
}
function game(userChoice){
	const computerChoice=getComputerChoice();
	switch(userChoice + computerChoice){
	    case "rs":
		case "pr":
		case "sp":
		   win(userChoice,computerChoice);
		   break;
		case "rp":
		case "sr":
		case "ps":
		   lose(userChoice,computerChoice);
		   break;
		case "rr":
		case "pp":
		case "ss":
		   draw();
		   break;
	}
}

function main(){
rock_div.addEventListener('click',function(){
	game("r");
})
paper_div.addEventListener('click',function(){
	game("p");
})
scissor_div.addEventListener('click',function(){
	game("s");
})
}
main();