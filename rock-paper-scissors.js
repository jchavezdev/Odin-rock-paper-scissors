/*rock-paper-scissors*/
let rockButton = document.getElementById('btn-rock');
let paperButton = document.getElementById('btn-paper');
let scissorsButton = document.getElementById('btn-scissors');
let resultsDiv = document.getElementById('div-results');
let content = document.createElement('div');
let playerScore = 0;
let computerScore = 0;
let matchCounter = 0;

  rockButton.addEventListener("click", () => {
    handleClick('rock')
 });
      
  paperButton.addEventListener("click", () => {
    handleClick('paper')
  });

  scissorsButton.addEventListener("click", () => {
    handleClick('scissors')
  });

  function getComputerChoice(){
    const max = 4;
    const min = 1;
    const options = ['rock', 'paper', 'scissors'];

    /*Gets a random number between 4 and 1*/
    var randomNum = Math.floor(Math.random() * (max - min)) + min;

    var computerChoice = options[randomNum-1];

    return computerChoice;
}

  function handleClick(playerSelection) {

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  function playRound(playerSelection, computerSelection) {
    
    const options = ['rock', 'paper', 'scissors'];
    
    const posibleResults = [ 
             /*rows are player choices and columns are compuer choices*/

              /* rock   paper   scissor */
 /*rock */    [ 'tie', 'lose', 'win' ], 
 /*paper */   [ 'win', 'tie', 'lose' ], 
 /*scissor */ [ 'lose', 'win', 'tie'] 
    ];

    /*
    First we get the index number of player choice and
    the index of computer choice.
    Then the index is stored in a new variable
    */
    var position1 = options.indexOf(playerSelection);
    var position2 = options.indexOf(computerSelection);
    
    /*The indexes stored are used to get the result of the round 
    rows are player choices and columns are compuer choices*/
    var playRoundResult = posibleResults[position1][position2];

    /*DOM*/
    if(playRoundResult=='win'){ 
    playerScore++;
    content.textContent='Player wins this match. Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore;
    resultsDiv.appendChild(content);
    matchCounter++;
    final();
    }
    else if(playRoundResult=='lose'){
      computerScore++;
      content.textContent ='Computer wins this match. Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore;;
      resultsDiv.appendChild(content);
      matchCounter++;
      final();
    }
    else{
      content.textContent='It\'s a tie! Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore;
      resultsDiv.appendChild(content);
      matchCounter++;
      final();
    }
   
  }

function final(){
        /*After 5 match, game ends */
        if(matchCounter==5){
          if(playerScore > computerScore){
            content.textContent='Player is the winner. Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore + ' Click any button for a new game';
            resultsDiv.appendChild(content);
            matchCounter = 0;
            playerScore = 0;
            computerScore = 0;
          }
          else if(playerScore < computerScore){
            content.textContent='Computer is the winner. Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore + ' Click any button for a new game';
            resultsDiv.appendChild(content);
            matchCounter = 0;
            playerScore = 0;
            computerScore = 0;
          }
          else{
            content.textContent='This game is a tie! Player Score: ' + playerScore +' '  +'Compter Score: ' + computerScore + ' Click any button for a new game';
            resultsDiv.appendChild(content);
            matchCounter = 0;
            playerScore = 0;
            computerScore = 0;
          }
        }
  }
