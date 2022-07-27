let firstRandomNum1 = Math.floor(Math.random() * 6) +1;
let firstDiceImage1 = 'dice' + firstRandomNum1 + '.png';

let firstRandomNum2 = Math.floor(Math.random() * 6) +1;
let firstDiceImage2 = 'dice' + firstRandomNum2 + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage1);
document.querySelectorAll('img')[1].setAttribute('src',firstDiceImage2);

let secondRandomNum1 = Math.floor(Math.random() * 6) +1;
let secondDiceImage1 = 'dice' + secondRandomNum1 + '.png';

let secondRandomNum2 = Math.floor(Math.random() * 6) +1;
let secondDiceImage2 = 'dice' + secondRandomNum2 + '.png';
document.querySelectorAll('img')[2].setAttribute('src',secondDiceImage1);
document.querySelectorAll('img')[3].setAttribute('src',secondDiceImage2);

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    
firstRandomNum1 = Math.floor(Math.random() * 6) +1;
firstDiceImage1 = 'dice' + firstRandomNum1 + '.png';    
firstRandomNum2 = Math.floor(Math.random() * 6) +1;
firstDiceImage2 = 'dice' + firstRandomNum2 + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage1);
document.querySelectorAll('img')[1].setAttribute('src',firstDiceImage2);

})

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){
    
    secondRandomNum1 = Math.floor(Math.random() * 6) +1;
    secondDiceImage1 = 'dice' + secondRandomNum1 + '.png';    
    secondRandomNum2 = Math.floor(Math.random() * 6) +1;
    secondDiceImage2 = 'dice' + secondRandomNum2 + '.png';
    document.querySelectorAll('img')[2].setAttribute('src',secondDiceImage1);
    document.querySelectorAll('img')[3].setAttribute('src',secondDiceImage2);
    
    })



const num1 = firstRandomNum1 + firstRandomNum2;
const num2 = secondRandomNum1 + secondRandomNum2;


/*if (num1>num2){
    document.querySelector('h1').innerHTML = 'The Winner is User 1';
}else if(num1<num2){
    document.querySelector('h1').innerHTML = 'The Winner is User 2';
}else{
    document.querySelector('h1').innerHTML = "It's a draw!";
}*/

