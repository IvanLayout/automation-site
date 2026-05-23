// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 375) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
}

$(() => {
	$('body').on('click', '.mob-menu-btn', function (e) {
		e.preventDefault()

		$('.header__top').addClass('_show')
		$('.header__small-right').addClass('_show')
		$('body').addClass('_lock')
		$('.overlay').addClass('_show')
	})

	$('body').on('click', '.header__top-close', function (e) {
		e.preventDefault()

		$('.header__top').removeClass('_show')
		$('.header__small-right').removeClass('_show')
		$('body').removeClass('_lock')
		$('.overlay').removeClass('_show')
	})

	$('body').on('click', '.overlay', function (e) {
		e.preventDefault()

		$('.header__top').removeClass('_show')
		$('.header__small-right').removeClass('_show')
		$('body').removeClass('_lock')
		$('.overlay').removeClass('_show')
	})

	if ($('.inner-news__slider').length) {
		new Swiper(".inner-news__slider", {
			loop: false,
			spaceBetween: 15,
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
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					let posTop = $(swiper.el).find('.inner-news__img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
				},
				resize: function (swiper) {
					let posTop = $(swiper.el).find('.inner-news__img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
				}
			}
		})
	}

	if ($('.small-product__thumb').length) {
		$('.small-product__thumb').each(function() {
			const smallProductThumb = new Swiper(this, {
				loop: false,
				spaceBetween: 10,
				slidesPerView: 1,
				watchSlidesProgress: true,
				watchOverflow: true,
				preloadImages: false,
				nested: true,
				effect: 'fade',
				fadeEffect: {
					crossFade: true
				},
				lazy: {
					loadPrevNext: true,
					elementClass: 'lazyload',
					enabled: true,
					loadedClass: 'loaded',
					checkInView: true,
					loadOnTransitionStart: true 
				},
				pagination: {
					bulletActiveClass: 'slider-dot_active',
					bulletClass: 'slider-dot',
					clickableClass: 'slider-pagination-clickable',
					el: '.slider-pagination',
					clickable: true
				},
			})

			$(this).on('mouseenter', '.slider-pagination .slider-dot', function() {
				const index = $(this).index();
				smallProductThumb.slideTo(index);
			});
		});
	}

	if ($('.small-products__slider').length) {
		new Swiper(".small-products__slider", {
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
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 5
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 6
				}
			}
		})
	}

	if ($('.small-products__slider2').length) {
		new Swiper(".small-products__slider2", {
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
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		})
	}

	// $('.small-product__thumbs span').hover(function () {
	// 	let indexEl = $(this).data('index');
	// 	$(this).closest('.small-product__thumbs').find('span').removeClass('_active')
	// 	$(this).addClass('_active')
	// 	$(this).closest('.small-product').find('.small-product__img').removeClass('_show')
	// 	$(this).closest('.small-product').find(`.small-product__img:eq(${indexEl})`).addClass('_show')
	// })
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
					spaceBetween: 15,
					slidesPerView: 2
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
					spaceBetween: 20,
					slidesPerView: 2
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
			spaceBetween: 15,
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
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 15,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2
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
					spaceBetween: 15,
					slidesPerView: 1,
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
			spaceBetween: 0,
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
					spaceBetween: 0,
					slidesPerView: 'auto',
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
					spaceBetween: 48,
					slidesPerView: 5,
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
					slidesPerView:'auto',
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

	if ($('.info-slider').length) {
		new Swiper(".info-slider", {
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
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				el: ".slider-pagination",
				type: "fraction",
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.products__slider').length) {
		new Swiper(".products__slider", {
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
				'768': {
					spaceBetween: 48,
					slidesPerView: 5,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 5,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	// if ($('.product__thumb').length) {
	// 	$('.product__thumb').each(function() {
	// 		const productThumb = new Swiper(this, {
	// 			loop: false,
	// 			spaceBetween: 10,
	// 			slidesPerView: 1,
	// 			watchSlidesProgress: true,
	// 			watchOverflow: true,
	// 			preloadImages: false,
	// 			nested: true,
	// 			effect: 'fade',
	// 			fadeEffect: {
	// 				crossFade: true
	// 			},
	// 			lazy: {
	// 				loadPrevNext: true,
	// 				elementClass: 'lazyload',
	// 				enabled: true,
	// 				loadedClass: 'loaded',
	// 				checkInView: true,
	// 				loadOnTransitionStart: true 
	// 			},
	// 			pagination: {
	// 				bulletActiveClass: 'slider-dot_active',
	// 				bulletClass: 'slider-dot',
	// 				clickableClass: 'slider-pagination-clickable',
	// 				el: '.slider-pagination',
	// 				clickable: true
	// 			},
	// 		})

	// 		$(this).on('mouseenter', '.slider-pagination .slider-dot', function() {
	// 			const index = $(this).index();
	// 			productThumb.slideTo(index);
	// 		});
	// 	});
	// }


	if ($('.first-section').length) {
		mainThumbs = new Swiper('.main-thumbs', {
			spaceBetween: 0,
			slidesPerView: 3,
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			breakpoints: {
				'375': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 3,
				},
				'1024': {
					slidesPerView: 4,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-slide').removeClass('_active')
					
					setTimeout(function(){
						$(swiper.el).find('.swiper-slide-thumb-active').addClass('_active')
					},500)
				},
				
			},
		})

		mainSlider = new Swiper('.main-slider', {
			spaceBetween: 20,
			loop: false,
			speed: 1000,
			watchOverflow: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			thumbs: {
				swiper: mainThumbs,
				autoScrollOffset: 1
			},
			on: {
				realIndexChange: function (swiper) {
					$('.first-section').find('.main-thumbs .swiper-slide').removeClass('_active')
					
					setTimeout(function(){
						$('.first-section').find('.main-thumbs .swiper-slide-thumb-active').addClass('_active')
					}, 100)
				},
			}
		})

		$('.main-thumbs').on('mouseenter', '.main-thumbs__item', function() {
			const index = $(this).index();
			mainSlider.slideTo(index);
		});
	}


	// if ($('.qrcod-slider').length) {
	// 	new Swiper(".qrcod-slider", {
	// 		loop: false,
	// 		spaceBetween: 20,
	// 		slidesPerView: 1,
	// 		watchSlidesProgress: true,
	// 		watchOverflow: true,
	// 		preloadImages: false,
	// 		lazy: {
	// 			loadPrevNext: true,
	// 			elementClass: 'lazyload',
	// 			enabled: true,
	// 			loadedClass: 'loaded',
	// 			checkInView: true,
	// 			loadOnTransitionStart: true
	// 		},
	// 		pagination: {
	// 			bulletActiveClass: 'slider-dot_active',
	// 			bulletClass: 'slider-dot',
	// 			clickableClass: 'slider-pagination-clickable',
	// 			el: '.slider-pagination',
	// 			clickable: true
	// 		},
	// 		breakpoints: {
	// 			'320': {
	// 				spaceBetween: 0,
	// 				slidesPerView: 'auto',
	// 			},
	// 			'1024': {
	// 				spaceBetween: 20,
	// 				slidesPerView: 3
	// 			}
	// 		}
	// 	})
	// }

	// favorite
	$('body').on('click', '.product-favorite', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})


	// compare
	$('body').on('click', '.product-compare', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})
});


$(window).on('load', () => {
	if ($('.areas-activity__wrap').length){
		areasActivitySlider()
	}

	if ($('.main-news__wrap').length){
		mainNewsSlider()
	}

	if ($('.articles__wrap').length){
		articlesSlider()
	}

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

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}


	if ($('.areas-activity__wrap').length){
		areasActivitySlider()
	}

	if ($('.main-news__wrap').length){
		mainNewsSlider()
	}

	if ($('.articles__wrap').length){
		articlesSlider()
	}
});


function areasActivitySlider(){
	if ( $(window).width() < 1024 && !$('.areas-activity__wrap').hasClass('swiper-initialized') ) {
		$('.areas-activity__wrap').addClass('swiper')
		$('.areas-activity__grid').addClass('swiper-wrapper').removeClass('_flex')
		$('.areas-activity__item').addClass('swiper-slide')

		areasActivitySwiperSlider = new Swiper('.areas-activity__wrap', {
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
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 15,
					slidesPerView: 2,
				}
			},
		})
	} else if ($(window).width() > 1023 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
		if ($('.areas-activity__wrap').length === 1 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			areasActivitySwiperSlider.destroy(true, true)
		} else if ($('.areas-activity__wrap').length >= 2 && $('.areas-activity__wrap').hasClass('swiper-initialized')) {
			areasActivitySwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.areas-activity__wrap').removeClass('swiper')
		$('.areas-activity__grid').removeClass('swiper-wrapper').addClass('_flex')
		$('.areas-activity__item').removeClass('swiper-slide')
	}
}

function mainNewsSlider(){
	if ( $(window).width() < 768 && !$('.main-news__wrap').hasClass('swiper-initialized') ) {
		$('.main-news__wrap').addClass('swiper')
		$('.main-news__items').addClass('swiper-wrapper').removeClass('_box-items')
		$('.main-news__item').addClass('swiper-slide')

		mainNewsSwiperSlider = new Swiper('.main-news__wrap', {
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
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	} else if ($(window).width() > 767 && $('.main-news__wrap').hasClass('swiper-initialized')) {
		if ($('.main-news__wrap').length === 1 && $('.main-news__wrap').hasClass('swiper-initialized')) {
			mainNewsSwiperSlider.destroy(true, true)
		} else if ($('.main-news__wrap').length >= 2 && $('.main-news__wrap').hasClass('swiper-initialized')) {
			mainNewsSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.main-news__wrap').removeClass('swiper')
		$('.main-news__items').removeClass('swiper-wrapper').addClass('_box-items')
		$('.main-news__item').removeClass('swiper-slide')
	}
}

function articlesSlider(){
	if ( $(window).width() < 768 && !$('.articles__wrap').hasClass('swiper-initialized') ) {
		$('.articles__wrap').addClass('swiper')
		$('.articles__grid').addClass('swiper-wrapper').removeClass('_grid-box')
		$('.articles__item').addClass('swiper-slide')

		articlesSwiperSlider = new Swiper('.articles__wrap', {
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
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	} else if ($(window).width() > 767 && $('.articles__wrap').hasClass('swiper-initialized')) {
		if ($('.articles__wrap').length === 1 && $('.articles__wrap').hasClass('swiper-initialized')) {
			articlesSwiperSlider.destroy(true, true)
		} else if ($('.articles__wrap').length >= 2 && $('.articles__wrap').hasClass('swiper-initialized')) {
			articlesSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.articles__wrap').removeClass('swiper')
		$('.articles__grid').removeClass('swiper-wrapper').addClass('_grid-box')
		$('.articles__item').removeClass('swiper-slide')
	}
}