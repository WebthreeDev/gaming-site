(function ($) {

	"use strict";

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop: true,
			margin: 40,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				768: {
					items: 3
				},
				800: {
					items: 4
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span class="icon flaticon-triangle"></span>', '<span class="icon flaticon-next"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	}

	//Fact Counter + Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function () {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}

	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}

})(window.jQuery);