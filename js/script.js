const modal_map      = document.querySelector(".map");  
const modal_feedback = document.querySelector(".modal"); 

const link_map       = document.querySelector(".address__map");
const link_feedback  = document.querySelector(".address__link");
const service_item   = document.querySelectorAll(".services__item");
const service_link   = document.querySelector(".services__link");
const service        = document.querySelector(".services__info");
const input_name     = modal_feedback.querySelector(".modal__input");

const close_map      = modal_map.querySelector(".modal-close");
const close_feedback = modal_feedback.querySelector(".modal-close");


link_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
});
link_feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.classList.add("modal-show");
    input_name.focus();
});

close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
});
close_feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_feedback.classList.remove("modal-show");
});