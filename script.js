<script>

var sqr1
var sqr2
var sqr3
var sqr4
var sqr5
var sqr6
var sqr7
var sqr8
var sqr9
//Creates variables for each one of the squares on the board// 


var sqr1T = 0
var sqr2T = 0
var sqr3T = 0
var sqr4T = 0
var sqr5T = 0
var sqr6T = 0
var sqr7T = 0
var sqr8T = 0
var sqr9T = 0
//Creates variables to keep track of weither a move has already taken a square or not, default = 0, taken = 1//



var moveCount = 0
//Creates variable to act as incremental counter to keep track of number of moves//


var turn = 0
var mode = 1


function vari(){
sqr1 = document.tic.sqr1.value
sqr2 = document.tic.sqr2.value
sqr3 = document.tic.sqr3.value
sqr4 = document.tic.sqr4.value
sqr5 = document.tic.sqr5.value
sqr6 = document.tic.sqr6.value
sqr7 = document.tic.sqr7.value
sqr8 = document.tic.sqr8.value
sqr9 = document.tic.sqr9.value
}


function check()
//Main Player AI logic, checking to see if 3 Xs in a row will win game for player, and then resetting//
{
  if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ")
  {
    alert("You Win!")
    reset()
  } 
  else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ")
  {
    alert("You Win!")
    reset()
  } 
  else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else
  {
    winCheck()
    check2()
    drawCheck()  
  } 
}






















































</script>

