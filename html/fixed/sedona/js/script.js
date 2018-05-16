var button = document.querySelector(".hotel-search-button");
var modal = document.querySelector(".modal");
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-close");
});
