
var btnOpen = document.getElementById("open_form");
var btnClose = document.getElementById("close_form");
var myModalForm = document.getElementById("modal_form");

function toggleClass() {
	myModalForm.classList.toggle("is-open");
}

btnOpen.addEventListener("click", toggleClass);
btnClose.addEventListener("click", toggleClass);