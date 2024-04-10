let button1 = document.getElementById('p1Btn')
let button2 = document.getElementById('p2Btn')
let  randomNumber1 = Math.floor(Math.random()*6) + 1 ;
let randomNumber2 = Math.floor(Math.random()*6) + 1 ; 
randomNumber1 = Number(randomNumber1);
randomNumber2 = Number(randomNumber2);
let displayRandomNumber1 = document.getElementById('randomNumber1')
let displayRandomNumber2 = document.getElementById('randomNumber2')
let winner = document.getElementById('displayWinner')
let dice1 = document.getElementById('firstDice');
let dice2 = document.getElementById('secondDice');

button1.addEventListener('click', function(){
    displayRandomNumber1.innerHTML=randomNumber1;

    if (displayRandomNumber2.innerHTML==0){
        winner.innerHTML= "It's player two's turn!";
    } 
    else if(displayRandomNumber2.innerHTML > displayRandomNumber1.innerHTML){
        winner.innerHTML="Player two wins";
    } else{
        winner.innerHTML="It's a tie";
    }
});
button2.addEventListener('click', function(){
    displayRandomNumber2.innerHTML=randomNumber2;

    if(displayRandomNumber1.innerHTML > displayRandomNumber2.innerHTML){
        winner.innerHTML="player 1 wins!";

    } 
    else if (displayRandomNumber1.innerHTML == 0){
        winner.innerHTML="its player one's turn";
    }
    else if(displayRandomNumber2.innerHTML > displayRandomNumber1.innerHTML){
        winner.innerHTML="player two wins";
    }
    else {
        winner.innerHTML="It's a tie";
    }
})