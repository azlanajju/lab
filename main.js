function upload(){
  document.getElementById('confirm').style.display="block";
}
function ifno(){
  
  document.getElementById('confirm').style.display="none";
  
}
function myFunction1() {
  
 document.getElementById("copied").innerHTML = "Copied!";

  var copyText = document.getElementById("myInput");
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);
}

function myFunction2() {
  
 document.getElementById("copied1").innerHTML = "Copied!";

  var copyText = document.getElementById("myInput1");
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);
}

function myFunction3() {
  
 document.getElementById("copied2").innerHTML = "Copied!";

  var copyText = document.getElementById("myInput2");
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);
}
function myFunction4() {
  
  document.getElementById("copied3").innerHTML = "Copied!";
 
   var copyText = document.getElementById("myInput3");
   copyText.select(); 
   navigator.clipboard.writeText(copyText.value);
 }
 function myFunction5() {
  
  document.getElementById("copied4").innerHTML = "Copied!";
 
   var copyText = document.getElementById("myInput4");
   copyText.select(); 
   navigator.clipboard.writeText(copyText.value);
 }