

function fn_instructions() {
  //Getting elements modal elements
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("btn_Instruction");
  let span = document.getElementsByClassName("close")[0];
  let menu = document.getElementsByClassName("main_menu")[0];
  let write = document.getElementById("modal_additions");
  let name = document.getElementById('enter_name').value;


  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
    menu.style.display = "none";
    let player = name;
    write.innerHTML = `<p>Welcome ${player} to the binary game!</p>`;
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    menu.style.display = "flex";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      menu.style.display = "flex";

    }
  }
}