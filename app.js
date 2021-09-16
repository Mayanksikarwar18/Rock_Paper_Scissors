let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");


function getComputerChoice(){
    const choices = ['R','P','S'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number]; 
}

function convertToWord(letter){
    if(letter == "R")return "ROCK";
    if(letter == "P") return "PAPER";
    return "SCISSORS";
}

function win(userChoise , computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML =  userScore;
    computerScore_span.innerHTML =computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallcompWord}. YOU WIN!!✌️ "`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}



function lose(userChoise, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoise);
    computerScore++;
    userScore_span.innerHTML =  userScore;
    computerScore_span.innerHTML =computerScore;
    
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallcompWord}. YOU LOST..🤯 "`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}
function draw(userChoise, computerChoice){
  
    const smallUserWord = "user".fontsize(3).sub();
    const smallcompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoise);
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallcompWord}. It's a DRAW..🙄 "`
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 1000);
}

function game(userChoice){
    const computerChoice  = getComputerChoice();
    switch(userChoice + computerChoice){
        case "RS":
        case "PR":
        case "SP":
            win(userChoice ,computerChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(userChoice, computerChoice);
            break;
        case "RR": 
        case "PP": 
        case "SS":
            draw(userChoice, computerChoice);
            break;


    }
}





function main(){

rock_div.addEventListener('click', () => game("R"));


paper_div.addEventListener('click', () => game("P"));

scissors_div.addEventListener('click', () => game("S"));
}

main();
