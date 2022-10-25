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
