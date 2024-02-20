getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection) => {
  const roundResultContainer = document.querySelector("#resultsContainer");
  const computersPickDiv = document.querySelector("#computerSelection");
  roundResultContainer.innerHTML = "";
  computersPickDiv.innerHTML = "";

  const computerSelection = getComputerChoice()
  console.log(computerSelection);

  const computersPick = document.createElement('h1');
  const roundResult = document.createElement('h1');
  computersPick.innerText = computerSelection
  computersPickDiv.appendChild(computersPick);

  if (playerSelection === computerSelection) {
    // Draw
    console.log('Draw');
    roundResult.innerText = 'Draw';
    roundResultContainer.append(roundResult);
  } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection == 'rock') {
    roundResult.innerText = 'Computer Wins';
    roundResultContainer.append(roundResult);
  } else {
    roundResult.innerText = 'Player Wins';
    roundResultContainer.append(roundResult);
  }
}

const rockButton = document.querySelector("#rockBtn")
const paperButton = document.querySelector("#paperBtn")
const scissorsButton = document.querySelector("#scissorsBtn")

rockButton.addEventListener('click', () => playRound('rock'))
paperButton.addEventListener('click', () => playRound('paper'))
scissorsButton.addEventListener('click', () => playRound('scissors'))