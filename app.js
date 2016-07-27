/****************************************************
*                Comparison Operators               *
****************************************************/
var x = 5;
document.getElementById("assign5").innerHTML = (x==8);

/****************************************************
*                 Logical Operators                 *
****************************************************/
var x = 6;
var y = 3;

document.getElementById("logical").innerHTML =
(x < 10 && y > 1) + "<br>" +
(x < 10 && y < 1);

/****************************************************
*                 Ternary Operators                 *
****************************************************/
function ternaryFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "Too young" : "Old enough";
  document.getElementById("ternary").innerHTML = voteable + " to vote.";
}

function ageFunction() {
  var age, voteable;
  age = Number(document.getElementById("age1").value);
  if (isNaN(age)) {
      voteable = "Error in input";
  } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("ternary1").innerHTML = voteable;
}

/****************************************************
*             JavaScript Bitwise Operators          *
****************************************************/
function bitFunction() {
  document.getElementById("bit").innerHTML = 5 & 1;
}
