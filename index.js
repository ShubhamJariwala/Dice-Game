function playgame(){
var randomNumber1= Math.floor((Math.random()*6)+1);
var image1path= "images/dice"+randomNumber1+".png";
var randomNumber2= Math.floor((Math.random()*6)+1);
var image2path= "images/dice"+randomNumber2+".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", image1path);

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", image2path);

var text="Competition between Player 1 and Player 2";

if(randomNumber1>randomNumber2){
document.getElementById("winner").innerHTML="Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.getElementById("winner").innerHTML="Player 2 wins";
}
else{
    console.log("Equal");
    document.getElementById("winner").innerHTML="Tie"
}
}