//javascript.js
let  playing = false;
//start from false cause we are not playing at start

 let score;


let  action;

 let   timeremaining;
   

 let correctAnswer; 
//if we click on the start/reset

let nam = prompt("what is your name","ayush");

let x =document.getElementById("name");
x.innerHTML="Hello!"+ " " +nam;
// name do mzze kro


//click krne pe ye sb functions implement hoga
document.getElementById("startreset").onclick =
function(){
 
 //if we are playing
 
 if(playing == true){
 
 location.reload(); //reload page
 
 }
 else{//if we are not playing
 
 //change mode to playing
 
 playing = true;
 
 //set score to 0
 
 score = 0;
 document.getElementById("scorevalue").innerHTML =
  score;
 
 //show countdown box 
 
 show("timeremaining");
 timeremaining = 81;
 
document.getElementById("timeremainingvalue").innerHTML =
timeremaining;
 
 //hide game over box
 
 hide("gameOver");
 
 //change button to reset
 document.getElementById("startreset").innerHTML =
"Reset Game";
 
 //start countdown
 
 startCountdown();
 
 //generate a new Q&A
 
 generateQA();
 }
 
}
//Clicking on an answer box
for(i=1; i<5; i++){
 document.getElementById("box"+i).onclick = function(){
 //check if we are playing 
 if(playing == true){//yes
 if(this.innerHTML == correctAnswer){
 //correct answer
 
 //increase score by 1
 score++;
 
document.getElementById("scorevalue").innerHTML = score;
 //hide wrong box and show correct box
 hide("wrong");
 show("correct");
 setTimeout(function(){
 hide("correct"); 
 }, 1000);
 
 //Generate new Q&A
 
 generateQA();

 //if u chose right option
 }
 
 else{
 //wrong answer
 hide("correct");
 show("wrong");
 setTimeout(function(){
 hide("wrong"); 
 }, 3000);
 //3sec me 3\wrong udao
 }
 }
} 
}
//if we click on answer box
 //if we are playing
 //correct?
 //yes
 //increase score
 //show correct box for 1sec
 //generate new Q&A
 //no
 //show try again box for 1sec
//functions
//start counter
function startCountdown(){
 action = setInterval(function(){
 timeremaining -= 1;
 //setinterval for set time
 
document.getElementById("timeremainingvalue").innerHTML =
timeremaining;
 if(timeremaining == 0){// game over
 stopCountdown();
 show("gameOver");
 if(score>0){
 document.getElementById("gameOver").innerHTML =
"<p>Game over!</p><p>Your score is " + score + ".</p>";
 }
 else if(score==0){
document.getElementById("gameOver").innerHTML="<p>Better luck Next time.</p>";
 }
 hide("timeremaining");
 hide("correct");
 hide("wrong");
 playing = false;
 
document.getElementById("startreset").innerHTML = "Start game";

 }

 }, 1000); 
}
//stop counter
function stopCountdown(){
 clearInterval(action); 
}

//hide an element
function hide(Id){
 document.getElementById(Id).style.display = "none"; 
 //to hide any element
}
//show an element
function show(Id){
 document.getElementById(Id).style.display = "block"; 
 //to show any element
}



//generate question and multiple answers
function generateQA(){

  var x = 1+ parseInt(1234*Math.random());
 var y = 1+ Math.round(1111*Math.random());
 //take random values

  correctAnswer = x+y;
 document.getElementById("question").innerHTML = x +
 "+" + y;

 var correctPosition = 1+ Math.round(3*Math.random());
 //correct position ka value bdlte jata hn

 //answer kis no of box me rhega

document.getElementById("box"+correctPosition).innerHTML =
correctAnswer; 
//fill one box with the correct answer
 
//  //fill other boxes with wrong answers
 
 var answers = [correctAnswer];
 //ek correct answer store kie 
 //3 wrong kie

 
  for(i=1; i<5; i++){
 if(i != correctPosition)
  {
  var wrongAnswer;
 do{
 wrongAnswer = (1+Math.round(3000*Math.random()))
 //a wrong answer
  }while(answers.indexOf(wrongAnswer)>-1)

  document.getElementById("box"+i).innerHTML = wrongAnswer;
  answers[i]=(wrongAnswer);
//storing wrong answers in answers array
 }
  }


}