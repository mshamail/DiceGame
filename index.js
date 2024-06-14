// Declared variables for first dice and second dice images
var firstDice = document.querySelector(".img1");
var secondDice = document.querySelector(".img2");

// If a click is detected anywhere on the webpage, the dice image will change
document.addEventListener("click", rollWinner);

// Random Number Generator between 1-6
function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}

// Image changing function
function rollWinner(){
    //Generate random number
    var randomNumber1 = randomNumber();
    var randomNumber2 = randomNumber();
    //Change Image
    firstDice.src = "./images/dice" + randomNumber1 + ".png";
    secondDice.src = "./images/dice" + randomNumber2 + ".png";
    //Declares Winner
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!"
    } else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "Draw!"
    } else {
          document.querySelector("h1").textContent = "Player 2 Wins!"
    }
}