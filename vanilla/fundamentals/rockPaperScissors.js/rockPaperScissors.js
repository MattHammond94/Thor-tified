getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection, computerSelection) => {
  playerSelection.toLowerCase();
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    // return "Draw";
    const playerSelection = prompt();
    return playRound(playerSelection, getComputerChoice());
  } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection == 'rock') {
    return 'You lose!'
  } else {
    return 'You win!'
  }
}

// console.log(playRound('rock', getComputerChoice()));
// console.log(playRound('rock', getComputerChoice()));
// console.log(playRound('rock', getComputerChoice()));
// console.log(playRound('rock', getComputerChoice()));

const game = () => {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    // Would need to sanitize user inputs here -> will likely force the input being passed as first arg via a button for each possible choice.
    playRound(prompt(), getComputerChoice()) === 'You win!' ? playerScore += 1 : computerScore += 1
  }

  return playerScore > computerScore ? `You win! with a score of ${playerScore}` : `The computer wins! with a score of ${computerScore}`
}

console.log(game());