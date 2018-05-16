var button = document.querySelector(".map-button");
var form = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form-close")
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.add("feedback-form-show");
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("feedback-form-show");
});
