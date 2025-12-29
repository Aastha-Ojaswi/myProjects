let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win:0,
    lose:0,
    tie:0,
        
  };

  score.displayScore = function(){
    return `Scores : win = ${score.win}, lose = ${score.lose}, tie = ${score.tie}`;
  };

  displayResult();
}

function generateComputerChoice(){
  let randomNumber = Math.random()*3;
  if(randomNumber>=0 && randomNumber<1){
    return "Rock"
  }
  else if(randomNumber>=1 && randomNumber<2){
    return "Paper"
  }
  else if(randomNumber>=2 && randomNumber<3){
    return "Scissors"
  }
}

function getResult(userMove, computerMove) {
  if(userMove=='Rock'){
    if(computerMove=='Rock'){
      score.tie++;
      return "It's a tie"
    }
    else if(computerMove=='Paper'){
      score.win++;
      return "Win"
    }
    else if(computerMove=='Scissors'){
      score.lose++;
      return "Lose"
    }
  }

  else if(userMove=='Paper'){
    if(computerMove=='Rock'){
      score.win++;
      return "Win"
    }
    else if(computerMove=='Paper'){
      score.tie++;
      return "It's a tie"
    }
    else if(computerMove=='Scissors'){
      score.lose++;
      return "Lose"
    }
  }

  else if(userMove=='Scissors'){
    if(computerMove=='Rock'){
      score.lose++;
      return "Lose"
    }
    else if(computerMove=='Paper'){
      score.win++;
      return "Win"
    }
    else if(computerMove=='Scissors'){
      score.tie++;
      return "It's a tie"
    }
  }
}

function displayResult(userMove, computerMove, result){
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user-move').innerText = userMove !== undefined ? `User Move :  ${userMove}` : ``;
  document.querySelector('#computer-move').innerText = computerMove !== undefined ? `Computer Move :  ${computerMove}` : ``;
  document.querySelector('#result').innerText = result !== undefined ? `Result : ${result}` : ``;
  document.querySelector('#score').innerText = score.displayScore();
}