let boxBtn = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game");
let resetBtn = document.querySelector("#reset");

let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn0){
      box.innerText = "O";
      box.classList.add("O");
      turn0 = false;
    }
    else{
      box.innerText = "X";
      box.classList.add("X");
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

function checkWinner(){
  let isWinner = false;

  for(let patterns of winPatterns){
    let posVal1 = boxBtn[patterns[0]].innerText;
    let posVal2 = boxBtn[patterns[1]].innerText;
    let posVal3 = boxBtn[patterns[2]].innerText;

    if(posVal1!="" && posVal2!="" && posVal3!=""){
      if(posVal1===posVal2 && posVal2===posVal3){
        displayWinner(posVal1);
        isWinner = true;
        return;
      }
    }
  }
  let allFilled = true;
  boxBtn.forEach((box) => {
    if(box.innerText === ""){
      allFilled = false;
    }
  });

  if(allFilled && !isWinner){
    msg.innerText = `It's a tie !`;
    msgContainer.classList.remove("hide");
  }
}

function disabledBoxes(){
  for(let box of boxBtn){
    box.disabled = true;
  }
}

function enableBoxes(){
  for(let box of boxBtn){
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("X", "O");
  }
}

function displayWinner(winner){
  msg.innerText = `Winner is ${winner}, Congratulations!`;
  msgContainer.classList.remove("hide");
  disabledBoxes()
}

function resetGame(){
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);