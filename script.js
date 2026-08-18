const openButton =
  document.getElementById("openInvitation");

const envelope =
  document.querySelector(".envelope");


openButton.addEventListener("click", function () {

  envelope.classList.add("open");

});