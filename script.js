//Initializing the random variables
//for player 1
let firstRandomNum1 = Math.floor(Math.random() * 6) +1;
let firstDiceImage1 = 'dice' + firstRandomNum1 + '.png';
let firstRandomNum2 = Math.floor(Math.random() * 6) +1;
let firstDiceImage2 = 'dice' + firstRandomNum2 + '.png';

//for player 2
let secondRandomNum1 = Math.floor(Math.random() * 6) +1;
let secondDiceImage1 = 'dice' + secondRandomNum1 + '.png';
let secondRandomNum2 = Math.floor(Math.random() * 6) +1;
let secondDiceImage2 = 'dice' + secondRandomNum2 + '.png';

//Diplaying number 00 in the beginning in both players display
document.querySelectorAll('img')[0].setAttribute('src','img.png');
document.querySelectorAll('img')[1].setAttribute('src','img.png');
document.querySelectorAll('img')[2].setAttribute('src','img.png');
document.querySelectorAll('img')[3].setAttribute('src','img.png');

//set initial score to 0
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Initializing button varialbles
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


let sum0 = 0;
let sum1 = 0;

function player1(){
    firstRandomNum1 = Math.floor(Math.random() * 6) +1;
    firstRandomNum2 = Math.floor(Math.random() * 6) +1;

    firstDiceImage1 = 'dice' + firstRandomNum1 + '.png';
    firstDiceImage2 = 'dice' + firstRandomNum2 + '.png';

    document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage1);
    document.querySelectorAll('img')[1].setAttribute('src',firstDiceImage2);

}

function player2(){
    secondRandomNum1 = Math.floor(Math.random() * 6) +1;
    secondRandomNum2 = Math.floor(Math.random() * 6) +1;

    secondDiceImage1 = 'dice' + secondRandomNum1 + '.png';
    secondDiceImage2 = 'dice' + secondRandomNum2 + '.png';

    document.querySelectorAll('img')[2].setAttribute('src',secondDiceImage1);
    document.querySelectorAll('img')[3].setAttribute('src',secondDiceImage2);

}



//When player1 press button 1
btn1.addEventListener("click", function(){

    player1();
    

   if(firstRandomNum1 != firstRandomNum2 ){
        //Disable button 1 and change the opacitiy
        document.getElementById("btn1").disabled = true;
        btn1.style.backgroundColor = "#7c61dc";
        //Enable button 2 and change to the original color
        document.getElementById("btn2").disabled = false;
        btn2.style.backgroundColor = "#532be2";

        sum0 = sum0 + firstRandomNum1 + firstRandomNum2; 
        document.getElementById('current-0').textContent = sum0;

    }else if((firstRandomNum1 == firstRandomNum2) && (firstRandomNum1 != 1) && (firstRandomNum2 != 1)){
        
        sum0 = sum0 + firstRandomNum1 + firstRandomNum2; 
        document.getElementById('current-0').textContent = sum0;

        //If player 1 get two equal values at first try
        document.getElementById("btn2").disabled = true;
        btn2.style.backgroundColor = "#7c61dc";


    }else if((firstRandomNum1 == 1) && (firstRandomNum2 == 1)){
        
        sum0 = 0;
        document.getElementById('current-0').textContent = sum0;

        document.getElementById("btn1").disabled = true;
        btn1.style.backgroundColor = "#7c61dc";
        
        document.getElementById("btn2").disabled = false;
        btn2.style.backgroundColor = "#532be2";
    }

    if(sum0 == 100 || sum0> 100){
        document.querySelector('h1').innerHTML = 'The Winner is Player 1!';
        
        document.getElementById("btn1").disabled = true;
        btn1.style.backgroundColor = "#7c61dc";
        
        document.getElementById("btn2").disabled = true;
        btn2.style.backgroundColor = "#7c61dc";


    }



})


//When player2 press button 2
btn2.addEventListener("click", function(){
    
    player2();
    
   if(secondRandomNum1 != secondRandomNum2 ){
        //Disable button 2 and change the opacitiy
        document.getElementById("btn2").disabled = true;
        btn2.style.backgroundColor = "#7c61dc";
        //Enable button 1 and change to the original color
        document.getElementById("btn1").disabled = false;
        btn1.style.backgroundColor = "#532be2";

        sum1 = sum1 + secondRandomNum1 + secondRandomNum2; 
        document.getElementById('current-1').textContent = sum1;

    }else if((secondRandomNum1 == secondRandomNum2) && (secondRandomNum1 != 1) && (secondRandomNum2 != 1) ){
      
        //If player 2 get two equal values at first try
        document.getElementById("btn1").disabled = true;
        btn1.style.backgroundColor = "#7c61dc";

        sum1 = sum1 + secondRandomNum1 + secondRandomNum2; 
        document.getElementById('current-1').textContent = sum1;

    }else if((secondRandomNum1 == 1) && (secondRandomNum2 == 1)){
        
        sum1 = 0;
        document.getElementById('current-1').textContent = sum1;
        document.getElementById("btn2").disabled = true;
        btn2.style.backgroundColor = "#7c61dc";
        document.getElementById("btn1").disabled = false;
        btn1.style.backgroundColor = "#532be2";
    }

    if(sum1 == 100 || sum1> 100){
        document.querySelector('h1').innerHTML = 'The Winner is Player 2!';
        document.getElementById("btn1").disabled = true;
        btn1.style.backgroundColor = "#7c61dc";
        document.getElementById("btn2").disabled = true;
        btn2.style.backgroundColor = "#7c61dc";


    }


    
    })
