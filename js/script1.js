const buy_button = document.querySelectorAll(".drill__card-buy-button");
const cart_form  = document.querySelector(".cart");
const close_cart = document.querySelector(".modal-close");


close_cart.addEventListener("click", function(evt) {
    evt.preventDefault();
    cart_form.classList.remove("cart-show");
});

function addToCart() {
    cart_form.classList.add("cart-show");
}

var slider = document.getElementById("slider");
    var max_price = document.getElementById("max-price");
    var progress_bar = document.getElementById("progress-bar");


    max_price.innerHTML = slider.value;
    slider.oninput = function() {
      max_price.innerHTML = this.value;
      progress_bar.style.width = (this.value / 550) + "%";
    }