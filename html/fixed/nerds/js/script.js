var button = document.querySelector(".contacts-button");
var modal = document.querySelector(".modal");
var close = document.querySelector(".button-close")
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
