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
	const swiper = new Swiper('.swiper', {

		slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		speed: 5000,
		autoplay: {
			delay: 500,
			reverseDirection: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});

	const swiper2 = new Swiper('.swiper-1', {

		slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		speed: 4000,
		autoplay: {
			delay: 400,
			reverseDirection: true,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		loop: true,
	});

	const swiper3 = new Swiper('.swiper-2', {

		slidesPerView: 3,
		spaceBetween: 24,
		loop: true,
		speed: 7500,
		autoplay: {
			delay: 350,
			reverseDirection: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
	});
});

