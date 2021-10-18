// Getting the modal
var modal = document.getElementById("myModal");

// Button retrieved that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal on click
btn.onclick = function() {
  modal.style.display = "block";
}

// Span to close the modal and return to original screen
span.onclick = function() {
  modal.style.display = "none";
}

// Close by clicking outside of the modal (similar to span close command)
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}