
var btnOpen = document.getElementById("open_form");
var btnClose = document.getElementById("close_form");
var myModalForm = document.getElementById("modal_form");

function toggleClass() {
	myModalForm.classList.toggle("is-open");
}

btnOpen.addEventListener("click", toggleClass);
btnClose.addEventListener("click", toggleClass);

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	autoplay: {
		delay: 200,
	},
	spaceBetween: 24,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

