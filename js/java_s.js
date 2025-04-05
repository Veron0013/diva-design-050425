//console.log("java started");
//var btnOpen = document.getElementById("open_form");
//var btnClose = document.getElementById("close_form");
//var myModalForm = document.getElementById("modal_form");

//function toggleClass() {
//	myModalForm.classList.toggle("is-open");
//}

//btnOpen.addEventListener("click", toggleClass);
//btnClose.addEventListener("click", toggleClass);

// Now you can use Swiper
document.addEventListener('DOMContentLoaded', function () {
	console.log("java started");
	const swiper = new Swiper('.swiper', {

		slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 0,
			reverseDirection: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});

	const swiper2 = new Swiper('.swiper-2', {

		spaceBetween: 24,
		loop: true,
		speed: 2500,
		slidesPerView: 3,
		autoplay: {
			delay: 0,
			reverseDirection: true,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		loop: true,
	});

	const swiper3 = new Swiper('.swiper-3', {

		slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		speed: 3500,
		autoplay: {
			delay: 0,
			reverseDirection: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
});

