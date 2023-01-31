function upload(){
  document.getElementById('confirm').style.display="block";
}
function ifno(){
  
  document.getElementById('confirm').style.display="none";
  
}
function myFunction1() {
  

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


// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
    
  
}
function show_img(){
  document.getElementById('q-img').classList.toggle("q-imgshow");
var  txt = document.getElementById('toggle_btn');
  if (txt.innerHTML === "view Query image") {
    txt.innerHTML = "Close";
  } else {
    txt.innerHTML = "view Query image";
  }
}

function show_img2(){
  document.getElementById('q-img2').classList.toggle("q-imgshow2");
var  txt = document.getElementById('toggle_btn2');
  if (txt.innerHTML === "view Query image") {
    txt.innerHTML = "Close";
  } else {
    txt.innerHTML = "view Query image";
  }
}
// alert('All the Best  ❤️');