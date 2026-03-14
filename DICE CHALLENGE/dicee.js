var randomNumber1=Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
//alert(randomNumber1);
var diceImage= "images/dice" + randomNumber1 + ".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src", diceImage);
//right image now
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var diceImage2 = "images/dice" + randomNumber2 + ".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src", diceImage2);
//determining a winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}