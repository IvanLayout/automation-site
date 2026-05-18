// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 390) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
}

$(() => {
	$('body').on('click', '.mob-menu-btn', function (e) {
		e.preventDefault()

		if ($('.header__top').hasClass('_show')) {
			$('.header__top').removeClass('_show')
			$('body').removeClass('_lock')
		} else {
			$('.header__top').addClass('_show')
			$('body').addClass('_lock')
		}
	})


	if ($('.header__cats').length) {
		new Swiper(".header__cats", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 'auto',
				}
			}
		})
	}
	// commit


	if ($('.services__slider').length) {
		new Swiper(".services__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		})
	}

	if ($('.advantages-main__slider').length) {
		new Swiper(".advantages-main__slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 1
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	}

	if ($('.certs__slider').length) {
		new Swiper(".certs__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			}
		})
	}

	if ($('.reviews__slider').length) {
		new Swiper(".reviews__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			}
		})
	}

	if ($('.brands__slider').length) {
		new Swiper(".brands__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'1024': {
					spaceBetween: 0,
					slidesPerView: 4
				},
				'1700': {
					spaceBetween: 0,
					slidesPerView: 5
				}
			}
		})
	}

	if ($('.cooperation').length) {
		historyThumbs = new Swiper('.cooperation-thumbs', {
			spaceBetween: 75,
			slidesPerView:'auto',
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			breakpoints: {
				'768': {
					spaceBetween: 60,
					slidesPerView:'auto',
				},
				'1024': {
					spaceBetween: 25,
					slidesPerView:'auto',
				},
				'1499': {
					spaceBetween: 25,
					slidesPerView:'auto',
				},
				'1700': {
					spaceBetween: 30,
					slidesPerView: 5,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})

		new Swiper('.cooperation__slider', {
			spaceBetween: 24,
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			thumbs: {
				swiper: historyThumbs
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.comp-projects__slider').length) {
		new Swiper(".comp-projects__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				el: ".slider-pagination",
				type: "fraction",
			},
		})
	}
});


$(window).on('load', () => {
	if ($('.areas-activity__wrap').length){
		paintSuitableSlider()
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 390) document.getElementsByTagName('meta')['viewport'].content = 'width=390, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}


	if ($('.areas-activity__wrap').length){
		paintSuitableSlider()
	}
});


function paintSuitableSlider(){
	if ( $(window).width() < 1024 && !$('.areas-activity__wrap').hasClass('swiper-initialized') ) {
		$('.areas-activity__wrap').addClass('swiper')
		$('.areas-activity__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('.areas-activity__item').addClass('swiper-slide')

		paintSuitableSwiperSlider = new Swiper('.areas-activity__wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 2,
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
		if ($('.areas-activity__wrap').length === 1 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			paintSuitableSwiperSlider.destroy(true, true)
		} else if ($('.areas-activity__wrap').length >= 2 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			paintSuitableSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.areas-activity__wrap').removeClass('swiper')
		$('.areas-activity__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('.areas-activity__item').removeClass('swiper-slide')
	}
}