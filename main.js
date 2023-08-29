function copyProgram(programId, copiedId) {
  const copyText = document.getElementById(programId).querySelector('code');
  const copiedElement = document.getElementById(copiedId);

  navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
      copiedElement.textContent = "Copied!";
      setTimeout(() => {
        copiedElement.textContent = "";
      }, 5000);
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      alert('Copying failed. Please try again or copy manually.');
    });
}


function copyProgramTextarea(program, button) {
  console.log("copied");
  var copyText = document.getElementById(program);
  copyText.select(); 
  navigator.clipboard.writeText(copyText.value);

  var copiedElement = document.getElementById(button);
  copiedElement.innerHTML = "Copied!";

  setTimeout(function() {
    if (copiedElement.innerHTML === "Copied!") {
      copiedElement.innerHTML = "";
    }
  }, 5000); 
}

function switchProgram(current_pgm) {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";
          document.getElementById(current_pgm).style.display="flex";

  }
}

function closeProgram() {
  var containers = document.getElementsByClassName('textarea_container');
  for (var i = 0; i < containers.length; i++) {
      var container = containers[i];

          container.style.display = "none";

  }
}


function openNav() {
  var navWidth = document.getElementById('pgmList');

  if (navWidth.style.width === "60vw") {
    navWidth.style.width = "0";
  } else {
    navWidth.style.width = "60vw";
  }
}

