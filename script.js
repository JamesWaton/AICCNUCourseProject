const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const flightSelect = document.getElementById('flight');
const ass2 = document.getElementById('ass2Display');
const lec6 = document.getElementById('lec6Display');
const studRes =  document.getElementById('studentOneScore');

var hidden = false;
// let ass2value = ass2.value;
// let lec6value = lec6.value;

updateTeacher();
function updateTeacher(){
 ass2.value = localStorage.getItem('ass2Display2')
 lec6.value = localStorage.getItem('lec6Display2')
 let ass2num = ass2.value
 if(ass2num==2){
  document.getElementById("ass2Submissions").style.visibility = 'visible';
  //get local storage of students score 
  console.log(localStorage.getItem('studentOneScore2'));
  studRes.innerHTML = "student one got a score of: " + localStorage.getItem('studentOneScore2') ;
 }else{
  document.getElementById("ass2Submissions").style.visibility = 'hidden';
 }


}

populateUI();
let ticketPrice = +flightSelect.value;

// Save selected flight index and price
function setflightData(flightIndex, flightPrice) {
  localStorage.setItem('Destination', flight);
  localStorage.setItem('selectedflightIndex', flightIndex);
  localStorage.setItem('selectedflightPrice', flightPrice);
  

}




// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedflightIndex = localStorage.getItem('selectedflightIndex');

  if (selectedflightIndex !== null) {
    flightSelect.selectedIndex = selectedflightIndex;
  }
}

// flight select event
flightSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setflightData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//lec 6 event listener
 document.getElementById('lec6Display').addEventListener("click", recommendAss2);
document.getElementById('ass2Display').addEventListener("click", showAss2Submissions);

function showAss2Submissions(){
  let newAss2Value = ass2.value;
  console.log(newAss2Value);
  if(newAss2Value==1){
    document.getElementById("ass2Submissions").style.visibility = 'hidden';
    document.getElementById("studentOneScore").style.visibility = 'hidden';
  }else{
     document.getElementById("ass2Submissions").style.visibility = 'visible';
}
  }
 

function recommendAss2(){
  console.log(lec6.value);
  if(lec6.value ==22 ){

     

  alert("Lec 6 has been upLoaded you should up load ass2");
  }

  
 
}





// const yesBtn = document.getElementById('ass1RadioShow');

// intial count and total
function teacherUpdate() {


  localStorage.setItem('ass2Display2',ass2.value);
  localStorage.setItem('lec6Display2',lec6.value);


// if(yesBtn.checked == true){
//   console.log("this is true")
// }


//   const radioButtons = document.querySelectorAll('input[name="radio2"]');
// // here changing checked button to checked 
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selectedSize = radioButton.value;
//     break;
//   }
// }




















  // if (ass2.target.value == 2){
  //   document.getElementById("")
  // }
  // console.log(ass2value); 

        // if(hidden) {
        //     document.getElementById('ass1Checked').style.visibility = 'hidden';
        // } else {
        //     document.getElementById('ass1Checked').style.visibility = 'visible';
        // }
        window.location.href="student.html";
    }

//    if(hidden) {
    
//     //  document.getElementById('btnLec1').style.visibility = 'hidden';
//     var checked = document.getElementById('ass1Checked');
//     checked.
//     if(checked.)
//       window.location.href="student.html";
//   // } else {
//   //     document.getElementById('btnLec1').style.visibility = 'visible';
//   // }
// }

