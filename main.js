function copyText(elementId, copiedElementId) {
  var copyText = document.getElementById(elementId);
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);
  
  var copiedElement = document.getElementById(copiedElementId);
  copiedElement.innerHTML = "Copied!";
}



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
    
  
}



