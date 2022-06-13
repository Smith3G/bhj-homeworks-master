
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = modalMain.getElementsByClassName('modal__close');
const modalSuccessClose = modalSuccess.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');

console.log(showSuccess);
console.log(modalClose);
console.log(modalSuccessClose);

modalMain.classList.add("modal_active");
showSuccess[0].addEventListener("click", function() { modalSuccess.classList.add("modal_active"); modalMain.classList.remove("modal_active"); } );
modalClose[0].addEventListener("click", function() { modalMain.classList.remove("modal_active"); } );
modalSuccessClose[0].addEventListener("click", function() { modalSuccess.classList.remove("modal_active"); } )

