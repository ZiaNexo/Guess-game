var difficulty = +prompt("Difficulty: \n1. Easy \n2. Medium \n3.Hard");
var secretNumber ;
var score;
var chances ;

if(difficulty === 1){
    secretNumber = Math.floor(Math.random * 10) + 1;
    chances = 3;
    score = 100;
}else if(difficulty === 2){
    secretNumber = Math.floor(Math.random * 50) + 1;
    chances = 3;
    score = 100;
}else if(difficulty === 3){
    secretNumber = Math.floor(Math.random * 100) + 1;
    chances = 3;
    score = 100;
}else{
    alert("Inalid difficulty");
}
var guess1 = +prompt("Enter a number");
if(guess1 === secretNumber){
    alert("You won the game" + "\n" + "Score:" + score);
    
}else{
    if(guess1 > secretNumber){
        alert("To High");
    }else(guess1 < secretNumber){
        alert("To low");
    }

    var guess2 = +prompt("Enter a number")
    if(guess2 === secretNumber){
         alert("You won the game" + "\n" + "Score:" + score-30);
    }else{
      if(guess1 > secretNumber){
        alert("To High");
    }else(guess3 < secretNumber){
        alert("To low");
    }  

    var guess3 = +prompt("Enter a number")
    if(guess3 === secretNumber){
        alert("You won the game");
    }else{
        if(guess3 > secretNumber){
            alert("To high");
        }else(guess3 < secretNumber){
            alert("To low");
        }
    }
    }
}