updateStudent();

function updateStudent(){
    console.log("Hello world!"); 
const student1Score = document.getElementById('studentOneScore');    
const ass2vis = localStorage.getItem('ass2Display2');
const lec6vis = localStorage.getItem('lec6Display2');
const fp = localStorage.getItem('selectedflightPrice');

console.log(ass2vis); 
console.log(lec6vis); 
console.log(fp); 

if(ass2vis==1){
    console.log("hiding assingment ");
    // document.getElementById("ass2Btn").style.visibility = 'hidden';
    document.getElementById("ass2DispQ1").style.visibility = 'hidden';
    document.getElementById("ass2DispQ2").style.visibility = 'hidden';
    document.getElementById("ass2DispQ3").style.visibility = 'hidden';
    document.getElementById("ass2DispQ4").style.visibility = 'hidden';
    document.getElementById("q1").style.visibility = 'hidden';
    document.getElementById("q2").style.visibility = 'hidden';
    document.getElementById("q3").style.visibility = 'hidden';
    document.getElementById("q4").style.visibility = 'hidden';
    document.getElementById("ass2Disp").style.visibility = 'hidden';
 }//else{
        
//     // student1Score.value = localStorage.getItem('studentOneScore2')
// }
if(lec6vis==11){
    document.getElementById("lec6Btn").style.visibility = 'hidden'; 
}
};

var a=document.getElementById("q1");
var b=document.getElementById("q2");
var c=document.getElementById("q3");
var d=document.getElementById("q4");
var overallScore =0;
console.log(overallScore);

function submitAss2(){
    //question 1
    document.getElementById('ass2Disp').style.visibility = 'hidden';
    if((a.value==2))
{
     document.getElementById('q1Ans').innerHTML= 'correct';
    overallScore= overallScore+1;
    console.log("q1");
    console.log(overallScore + " q1");
  


}
else
{
document.getElementById('q1Ans').innerHTML= 'wrong';

}
    //question 2
    if((b.value==4))
{
    overallScore= overallScore+1;
document.getElementById('q2Ans').innerHTML= 'correct';
console.log("q2");
console.log(overallScore + " q1");
}
else
{
document.getElementById('q2Ans').innerHTML= 'wrong';

}
    //question 3
    if((c.value==6))
{
    overallScore= overallScore+1;
document.getElementById('q3Ans').innerHTML= 'correct';
console.log("q3");
console.log(overallScore + " q1");
}
else
{
document.getElementById('q3Ans').innerHTML= 'wrong';

}
    //question 4
    if((d.value==8))
{
    overallScore= overallScore+1;
document.getElementById('q4Ans').innerHTML= 'correct';
console.log("q4");
console.log(overallScore + " q1");
}
else
{
document.getElementById('q4Ans').innerHTML= 'wrong';
console.log(overallScore + " q4 wrong");
}

let intPercent = "";
if (overallScore == 0){
    intPercent = "0%";
}
if (overallScore == 1){
    intPercent = "25%";
} 
if (overallScore == 2){
    intPercent = "50%";

} 
if (overallScore === 3){
    intPercent = "75%";
}
if (overallScore == 4){
    intPercent = "100%";
}
document.getElementById('score').innerHTML= "You got " + overallScore + " correct giving you " + intPercent;
 let storeScore = overallScore;
 localStorage.setItem('studentOneScore2',"");
localStorage.setItem('studentOneScore2',intPercent);
console.log(localStorage.getItem('studentOneScore2'));

localStorage.setItem('ass2Score',storeScore);
overallScore = 0;


 

}

