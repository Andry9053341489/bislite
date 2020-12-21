$(function () {


	$('.slider__inner').slick({
		arrows: false,
		dots: true,
	});

	$('.works__slider-inner').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev slick-arrow"><img src="/img/works-slider/works-slider-arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow"><img src="/img/works-slider/works-slider-arrow-right.svg" alt=""></button>',
	});

	$('.header__burger-btn').on('click', function(){
		$('.header__menu').slideToggle();
	});

});
