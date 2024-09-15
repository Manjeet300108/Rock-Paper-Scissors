const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = gencompChoice();
  

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    }else{
        userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice)
  }
};

const gencompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose !  ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31";
}