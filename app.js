let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".resetBtn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let newGameBtn= document.querySelector("#newGame");
let msgWelcome=  document.querySelector("#msgWelcome");

let turnO= true;

let winPatterns= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

boxes.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if(turnO == true){
      box.innerText= "O"
    turnO= false;
    }else{
      box.innerText= "X";
      turnO= true;
    }
    box.disabled= true;
    checKWinner();
  });
});

const resetGame= ()=>{
  turnO= true;
  enableBtn();
  msgContainer.classList.add("hide");
}
const checKWinner= ()=>{
  for(let pattern of winPatterns){

    let posVal1= boxes[pattern[0]].innerText;
    let posVal2= boxes[pattern[1]].innerText;
    let posVal3= boxes[pattern[2]].innerText;
    if(posVal1 !="" && posVal2!="" && posVal3!=""){
      if(posVal1 === posVal2 && posVal2===posVal3){
        // console.log(posVal1,posVal2,posVal3);
        showWinner(posVal1);
      }
    }
  } 
};
 //for stopping overLooping of button we use disabled()
const disabledBtn=()=>{
  for(box of boxes){
    box.disabled= true;
  }
}
// for enableing boxes button 
const enableBtn= ()=>{
    for(box of boxes){
      box.disabled= false;
      box.innerText= "";
    }
}

const showWinner=(winner)=>{
  msg.innerText= `Congratulation winner is Player: ${winner}`;
  alert("winner");
  msgContainer.classList.remove("hide");
  msgWelcome.innerText="Thanks for playing";
  disabledBtn();
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


















// msg.classList.remove("hide");
  // msg.innerText= `Congartulation winner is ${winner}`;
  // console.log(msgContainer)
  // for(box of boxes){
  //   box.disabled= true;
  // }










// function resetGame(){
//   turnO=true;
//   for(box of boxes){
//     box.innerText="";
//     box.disabled=false;
//   }
// };

// resetBtn.addEventListener("click",()=>{
//   resetGame();
// });

// function newGameBtn(){
//   msgContainer.classList.add("hide");
//   for(box of boxes){
//     box.innerText="";
//     box.disabled=false;
//   }
// }
// newGame.addEventListener("click", ()=>{
//   newGameBtn();
// })