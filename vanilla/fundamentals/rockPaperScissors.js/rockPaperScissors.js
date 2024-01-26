getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection, computerSelection) => {
  playerSelection.toLowerCase();
  console.log(computerSelection);

  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection == 'rock') {
    return 'You lose!'
  } else {
    return 'You win!'
  }
}

console.log(playRound('rock', getComputerChoice()));
console.log(playRound('rock', getComputerChoice()));
console.log(playRound('rock', getComputerChoice()));
console.log(playRound('rock', getComputerChoice()));