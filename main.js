function copyText(elementId, copiedElementId) {
  var copyText = document.getElementById(elementId);
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);
  
  var copiedElement = document.getElementById(copiedElementId);
  copiedElement.innerHTML = "Copied!";
}





alert('Under Maintenance');