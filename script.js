var humanScore=0,computerScore=0;
function playRound(humanChoice, computerChoice) {
    // your code here!
    console.log(` Computer choice ${computerChoice}`)
    if(computerChoice===humanChoice){
        humanScore++;
        computerScore++;
    }
    else if(computerChoice===3 && humanChoice==1){
    humanScore++;
    }
    else if(computerChoice===1 && humanChoice==3){
    computerScore++;
    }
    else{
        if(computerChoice>humanChoice){
        computerScore++;
    }
    else{
        humanScore++;
    }
    }
    console.log(`User : ${humanScore}\nComputer :${computerScore}`)
  }
const getHumanChoice = ()=>{
    console.log("1->Stone \n2->Paper \n3->Scissors")
    const input=Number(prompt("Enter Choice :"))
    return input;
}
const computerChoice = () => {
    const template=[1,2,3];
    return template[Math.floor(Math.random(3))]
}
  
  alert("Open Console to Play")
  let rounds=5
  while(rounds!=0){
  inputFunction();
  rounds--
  }
  if(computerScore===humanScore){
    alert('Match Ties');
 }
 else{
    const max=(humanScore>computerScore)?"User":"Computer";
    console.log(`${max} Wins`)
 }
  
function inputFunction() {
    const humanSelection = getHumanChoice();
    const computerSelection = computerChoice();
    playRound(humanSelection, computerSelection);
}

