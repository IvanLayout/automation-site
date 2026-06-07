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

	if ($('.stocks__slider').length) {
		new Swiper(".stocks__slider", {
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
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4
				},
			},
			on: {
				init: function (swiper) {
					let posTop = $(swiper.el).find('.stocks__item-img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
				},
				resize: function (swiper) {
					let posTop = $(swiper.el).find('.stocks__item-img').height()

					$(swiper.el).find('.slider-button-prev, .slider-button-next').css('top', posTop/2)
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

	//Ползунки
	if ( $("#price_range").length ) {
		$priceRange = $("#price_range").ionRangeSlider({
			type     : 'double',
			min      : 0,
			max      : 123000,
			from     : 11,
			to       : 123000,
			step     : 1,
			onChange : function (data) {
				$('.price_range input.ot').val( data.from.toLocaleString('ru-RU') )
				$('.price_range input.do').val( data.to.toLocaleString('ru-RU') )
			}
		}).data("ionRangeSlider")

		$('.price_range .range__input').keyup(function() {
			$priceRange.update({
				from : $('.price_range input.ot').val().replace(/\s/g,''),
				to : $('.price_range input.do').val().replace(/\s/g,'')
			})
		})
	}

	if ( $("#price_range2").length ) {
		$priceRange = $("#price_range2").ionRangeSlider({
			type     : 'double',
			min      : 0,
			max      : 123000,
			from     : 11,
			to       : 123000,
			step     : 1,
			onChange : function (data) {
				$('.price_range2 input.ot').val( data.from.toLocaleString('ru-RU') )
				$('.price_range2 input.do').val( data.to.toLocaleString('ru-RU') )
			}
		}).data("ionRangeSlider")

		$('.price_range2 .range__input').keyup(function() {
			$priceRange.update({
				from : $('.price_range2 input.ot').val().replace(/\s/g,''),
				to : $('.price_range2 input.do').val().replace(/\s/g,'')
			})
		})
	}

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

	if ($('.review-products__slider').length) {
		new Swiper(".review-products__slider", {
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
				'768': {
					spaceBetween: 10,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			}
		})
	}

	if ($('.cats-page__slider').length) {
		new Swiper(".cats-page__slider", {
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
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.cats-page__name').height('auto')

					setHeight( $(swiper.el).find('.cats-page__name') )
				},
				resize: function (swiper) {
					$(swiper.el).find('.cats-page__name').height('auto')

					setHeight( $(swiper.el).find('.cats-page__name') )
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

	if ($('.product__thumb').length) {
		$('.product__thumb').each(function() {
			const productThumb = new Swiper(this, {
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
				productThumb.slideTo(index);
			});
		});
	}

	if ($('.products__slider').length) {
		new Swiper(".products__slider", {
			loop: false,
			spaceBetween: 12,
			slidesPerView: 2,
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
				'480': {
					spaceBetween: 12,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 12,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1200': {
					spaceBetween: 20,
					slidesPerView: 5,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

					$(swiper.el).find('.product').removeClass('_loaded')
					setTimeout(() => {
						setHeight( $(swiper.el).find('.product') )
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__box') )
						setHeight( $(swiper.el).find('.product__desc-items') )
						setHeight( $(swiper.el).find('.product__prices') )
					}, 100)

					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_loaded')
					}, 150)
				},
				resize: function (swiper) {
					$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

					setHeight( $(swiper.el).find('.product') )
					setHeight( $(swiper.el).find('.product__name') )
					setHeight( $(swiper.el).find('.product__box') )
					setHeight( $(swiper.el).find('.product__desc-items') )
					setHeight( $(swiper.el).find('.product__prices') )

					$(swiper.el).find('.product').removeClass('_loaded')
					setTimeout(() => {
						$(swiper.el).find('.product').addClass('_loaded')
					}, 100)
				}
			}
		})
	}

	if ($('.team__slider').length) {
		new Swiper(".team__slider", {
			loop: false,
			spaceBetween: 10,
			slidesPerView: 2,
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
				'480': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 4,
				},
				'1200': {
					spaceBetween: 20,
					slidesPerView: 5,
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 6,
				},
			},
		})
	}

	if ($('.vacancies__slider').length) {
		new Swiper(".vacancies__slider", {
			loop: false,
			spaceBetween: 0,
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
					spaceBetween: 0,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 0,
					slidesPerView: 2,
				},
				'768': {
					spaceBetween: 0,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 0,
					slidesPerView: 3,
				},
				'1200': {
					spaceBetween: 0,
					slidesPerView: 4,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}

	if ($('.produce-own__slider').length) {
		new Swiper(".produce-own__slider", {
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
					spaceBetween: 10,
					slidesPerView: 1,
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 2,
				}
			}
		})
	}

	if ($('.benefit-client__slider').length) {
		benefitClient = new Swiper(".benefit-client__slider", {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
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
			on: {
				realIndexChange: function (swiper) {
					$('.benefit-client__item').removeClass('_active')

					$(`.benefit-client__item[data-slide-index="${swiper.realIndex}"]`).addClass('_active')
				},
			}
		})

		$('body').on('click', '.benefit-client__item', function (e) {
			const index = $(this).data('slide-index');
			benefitClient.slideTo(index);
		});
	}

	if ($('.compare-products').length) {
		productsCompareFix = new Swiper('.compare-fixed__products-slider', {
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
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1320': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1500': {
					spaceBetween: 16,
					slidesPerView: 4
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.compare-product__name, .compare-product__bot').height('auto')

						setHeight( $(swiper.el).find('.compare-product__name') )
						setHeight( $(swiper.el).find('.compare-product__bot') )
					}
				},
				resize: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.compare-product__name, .compare-product__bot').height('auto')

						setHeight( $(swiper.el).find('.compare-product__name') )
						setHeight( $(swiper.el).find('.compare-product__bot') )
					}
				}
			}
		})

		productsCompare = new Swiper('.compare-products__slider', {
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
			breakpoints: {
				'320': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1320': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1500': {
					spaceBetween: 16,
					slidesPerView: 4
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setTimeout(() => {
							setHeight( $(swiper.el).find('.product') )
							setHeight( $(swiper.el).find('.product__name') )
							setHeight( $(swiper.el).find('.product__box') )
							setHeight( $(swiper.el).find('.product__desc-items') )
							setHeight( $(swiper.el).find('.product__prices') )
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 150)
					}
				},
				resize: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setHeight( $(swiper.el).find('.product') )
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__box') )
						setHeight( $(swiper.el).find('.product__desc-items') )
						setHeight( $(swiper.el).find('.product__prices') )
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
					}
				}
			}
		})

		productsCompare2 = new Swiper('.compare-products__slider2', {
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
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setTimeout(() => {
							setHeight( $(swiper.el).find('.product') )
							setHeight( $(swiper.el).find('.product__name') )
							setHeight( $(swiper.el).find('.product__box') )
							setHeight( $(swiper.el).find('.product__desc-items') )
							setHeight( $(swiper.el).find('.product__prices') )
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 150)

						let lengthSlide = $(swiper.el).find('.swiper-slide.product').length

						$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)

						$(swiper.el).find('.slider-number__all').text(lengthSlide)
					}
				},
				resize: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setHeight( $(swiper.el).find('.product') )
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__box') )
						setHeight( $(swiper.el).find('.product__desc-items') )
						setHeight( $(swiper.el).find('.product__prices') )
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
					}
				},
				slideChange: function (swiper){
					$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)
				}
			}
		})
		productsCompare3 = new Swiper('.compare-products__slider3', {
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
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on: {
				init: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setTimeout(() => {
							setHeight( $(swiper.el).find('.product') )
							setHeight( $(swiper.el).find('.product__name') )
							setHeight( $(swiper.el).find('.product__box') )
							setHeight( $(swiper.el).find('.product__desc-items') )
							setHeight( $(swiper.el).find('.product__prices') )
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 150)

						let lengthSlide = $(swiper.el).find('.swiper-slide.product').length

						$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)

						$(swiper.el).find('.slider-number__all').text(lengthSlide)
					}
				},
				resize: function (swiper) {
					if ($(swiper.el).length) {
						$(swiper.el).find('.product, .product__name, .product__box, .product__desc-items, .product__prices').height('auto')

						$(swiper.el).find('.product').removeClass('_loaded')
						setHeight( $(swiper.el).find('.product') )
						setHeight( $(swiper.el).find('.product__name') )
						setHeight( $(swiper.el).find('.product__box') )
						setHeight( $(swiper.el).find('.product__desc-items') )
						setHeight( $(swiper.el).find('.product__prices') )
						setTimeout(() => {
							$(swiper.el).find('.product').addClass('_loaded')
						}, 100)
					}
				},
				slideChange: function (swiper){
					$(swiper.el).find('.slider-number__active').text(swiper.realIndex + 1)
				}
			}
		})

		compareFeatureSlider = new Swiper('.compare-section__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 'auto',
			preloadImages: false,
			nested: true,
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
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1024': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1320': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1500': {
					spaceBetween: 16,
					slidesPerView: 4
				},
				'1700': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: compareHeight,
				resize: compareHeight
			}
		})

		compareFeatureSlider2 = new Swiper('.compare-section__slider2', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 1,
			preloadImages: false,
			nested: true,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			on: {
				init: compareHeight,
				resize: compareHeight
			}
		})

		compareFeatureSlider3 = new Swiper('.compare-section__slider3', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 16,
			slidesPerView: 1,
			preloadImages: false,
			nested: true,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			on: {
				init: compareHeight,
				resize: compareHeight
			}
		})

		productsCompare.controller.control = [compareFeatureSlider, productsCompareFix];
		compareFeatureSlider.controller.control = productsCompare;
		productsCompareFix.controller.control = productsCompare;

		productsCompare2.controller.control = compareFeatureSlider2;
		compareFeatureSlider2.controller.control = productsCompare2;
		productsCompare3.controller.control = compareFeatureSlider3;
		compareFeatureSlider3.controller.control = productsCompare3;

		$('body').on('click', '.product-compare-delete', function (e) {
			e.preventDefault()

			const productSlide = $(this).closest('.product')
			const index = productSlide.index()

			if (typeof productsCompare !== 'undefined') {
				productsCompare.removeSlide(index)
			}

			if (typeof compareFeatureSlider !== 'undefined') {
				compareFeatureSlider.removeSlide(index)
			}

			if (typeof productsCompareFix !== 'undefined') {
				productsCompareFix.removeSlide(index)
			}

			productsCompare && productsCompare.update()
			compareFeatureSlider && compareFeatureSlider.update()
			productsCompareFix && productsCompareFix.update()
		})

		$('body').on('click', '.compare-product__delete', function (e) {
			e.preventDefault()

			const productSlide = $(this).closest('.compare-product')
			const index = productSlide.index()

			if (typeof productsCompare !== 'undefined') {
				productsCompare.removeSlide(index)
			}

			if (typeof compareFeatureSlider !== 'undefined') {
				compareFeatureSlider.removeSlide(index)
			}

			if (typeof productsCompareFix !== 'undefined') {
				productsCompareFix.removeSlide(index)
			}

			productsCompare && productsCompare.update()
			compareFeatureSlider && compareFeatureSlider.update()
			productsCompareFix && productsCompareFix.update()
		})

		$('body').on('click', '.compare-feature__open', function (e) {
			e.preventDefault()

			const $sector = $(this).closest('.compare-feature__sector')
			const index = $sector.parent().children('.compare-feature__sector').index($sector)

			$sector.toggleClass('_active')

			$('.compare-section__slide').each(function () {
				$(this).find('> .compare-feature__sector').eq(index).toggleClass('_active')
			})
		})
	}


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

	if ($('.tabs-inner__slider').length) {
		new Swiper(".tabs-inner__slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			freeMode: true,
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
					spaceBetween: 20,
					slidesPerView: 'auto',
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 'auto',
				},
				'1024': {
					spaceBetween: 40,
					slidesPerView: 'auto',
				},
				'1024': {
					spaceBetween: 25,
					slidesPerView: 'auto',
				},
				'1500': {
					spaceBetween: 40,
					slidesPerView: 'auto',
				}
			}
		})
	}

	if ($('.product-info').length) {
		galleryThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 5,
			slidesPerView: 'auto',
			direction: 'horizontal',
			loop: false,
			speed: 500,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'1024': {
					spaceBetween: 8,
					slidesPerView: 3,
				}
			}
		})

		new Swiper('.product-images__slider', {
			spaceBetween: 10,
			loop: false,
			speed: 1000,
			watchOverflow: true,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			thumbs: {
				swiper: galleryThumbs
			}
		})
	}

	if ($('.reviews-inner__slider').length) {
		new Swiper('.reviews-inner__slider', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 10,
			slidesPerView: 'auto',
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				},
			}
		})
	}

	if ($('.service-sect__slider').length) {
		new Swiper(".service-sect__slider", {
			loop: false,
			spaceBetween: 0,
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
				'375': {
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				'768': {
					spaceBetween: 10,
					slidesPerView: 3,
				},
				'1024': {
					spaceBetween: 20,
					slidesPerView: 3,
				}
			}
		})
	}

	// Звездочки отзыва
	if ($('.rating-js').length){
		$('input.wow').rating()
	}

	if ( $('#dropzone-photo').length ) {
		$('#dropzone-photo').dropzone({
			url: "/file/post",
			addRemoveLinks: true,
			dictRemoveFile: '<svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.12526 18.3753C5.64401 18.3753 5.23276 18.2038 4.88976 17.8616C4.7241 17.7016 4.59299 17.5094 4.5045 17.2967C4.41601 17.0841 4.37203 16.8556 4.37526 16.6253V5.25026C4.25965 5.25312 4.14467 5.23231 4.03739 5.18913C3.9301 5.14595 3.83278 5.08129 3.75138 4.99914C3.66923 4.91774 3.60458 4.82042 3.56139 4.71314C3.51821 4.60585 3.49741 4.49088 3.50026 4.37526C3.49741 4.25965 3.51821 4.14468 3.56139 4.03739C3.60458 3.93011 3.66923 3.83278 3.75138 3.75139C3.83278 3.66924 3.9301 3.60458 4.03739 3.5614C4.14467 3.51821 4.25965 3.49741 4.37526 3.50026H7.87526C7.87526 3.25264 7.95926 3.04439 8.12726 2.87639C8.20846 2.79422 8.30562 2.72955 8.41277 2.68636C8.51992 2.64317 8.63477 2.62238 8.75026 2.62526H12.2503C12.3659 2.62241 12.4808 2.64321 12.5881 2.6864C12.6954 2.72958 12.7927 2.79424 12.8741 2.87639C12.9563 2.95778 13.0209 3.05511 13.0641 3.16239C13.1073 3.26968 13.1281 3.38465 13.1253 3.50026H16.6253C16.7407 3.49753 16.8555 3.51839 16.9627 3.56157C17.0698 3.60475 17.167 3.66934 17.2483 3.75139C17.4163 3.91939 17.5003 4.12764 17.5003 4.37526C17.5031 4.49095 17.4822 4.606 17.4389 4.7133C17.3955 4.8206 17.3307 4.91788 17.2483 4.99914C17.1671 5.08131 17.0699 5.14598 16.9627 5.18917C16.8556 5.23236 16.7407 5.25315 16.6253 5.25026V16.6253C16.6284 16.8555 16.5845 17.0839 16.4962 17.2965C16.4079 17.5091 16.277 17.7015 16.1116 17.8616C15.9515 18.0271 15.7592 18.158 15.5466 18.2464C15.3339 18.3347 15.1055 18.3786 14.8753 18.3753H6.12526ZM6.12526 5.25026V16.6253H14.8753V5.25026H6.12526ZM7.87526 14.0003C7.87526 14.2479 7.95926 14.4553 8.12726 14.6233C8.20832 14.7057 8.30544 14.7706 8.41261 14.8139C8.51977 14.8573 8.6347 14.8781 8.75026 14.8753C8.86595 14.8781 8.98099 14.8572 9.08829 14.8139C9.19559 14.7705 9.29287 14.7057 9.37413 14.6233C9.4563 14.5421 9.52098 14.4449 9.56417 14.3378C9.60736 14.2306 9.62815 14.1158 9.62526 14.0003V7.87526C9.62811 7.75965 9.60731 7.64468 9.56412 7.53739C9.52094 7.43011 9.45629 7.33278 9.37413 7.25139C9.29274 7.16924 9.19541 7.10458 9.08813 7.0614C8.98085 7.01822 8.86587 6.99741 8.75026 7.00026C8.63477 6.99738 8.51992 7.01817 8.41277 7.06136C8.30562 7.10455 8.20846 7.16922 8.12726 7.25139C8.04486 7.33265 7.97999 7.42993 7.93665 7.53723C7.89331 7.64453 7.87242 7.75958 7.87526 7.87526V14.0003ZM11.3753 14.0003C11.3753 14.2479 11.4593 14.4553 11.6273 14.6233C11.7083 14.7057 11.8054 14.7706 11.9126 14.8139C12.0198 14.8573 12.1347 14.8781 12.2503 14.8753C12.3659 14.8781 12.481 14.8572 12.5883 14.8139C12.6956 14.7705 12.7929 14.7057 12.8741 14.6233C12.9563 14.5421 13.021 14.4449 13.0642 14.3378C13.1074 14.2306 13.1281 14.1158 13.1253 14.0003V7.87526C13.1281 7.75965 13.1073 7.64468 13.0641 7.53739C13.0209 7.43011 12.9563 7.33278 12.8741 7.25139C12.7927 7.16924 12.6954 7.10458 12.5881 7.0614C12.4808 7.01822 12.3659 6.99741 12.2503 7.00026C12.1348 6.99738 12.0199 7.01817 11.9128 7.06136C11.8056 7.10455 11.7085 7.16922 11.6273 7.25139C11.5449 7.33265 11.48 7.42993 11.4367 7.53723C11.3933 7.64453 11.3724 7.75958 11.3753 7.87526V14.0003Z"/></svg>',
		});
	}

	$('body').on('submit', '.form-ajax', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})

	// bell
	$('body').on('click', '.product-bell', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})


	// favorite
	$('body').on('click', '.product-favorite', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})

	$('body').on('click', '.product-favorite-delete', function (e) {
		e.preventDefault()

		const $grid = $(this).closest('.products__grid')

		$(this).closest('.product').remove()

		$grid.each(function () {
			console.log('asd')

			productsHeight(
				$(this),
				parseInt($(this).css('--products_count'))
			)
		})

		$grid.find('.product').removeClass('_loaded')

		setTimeout(() => {
			$grid.find('.product').addClass('_loaded')
		}, 100)
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

	if ($('.qrcod-wrap').length){
		qrcodSlider()
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


	if( $('.products__grid').length ){
		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})

		$('.products__grid').find('.product').removeClass('_loaded')
		setTimeout(() => {
			$('.products__grid').find('.product').addClass('_loaded')
		}, 100)
	}


	//
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')

		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let minimum = parseFloat(input.data('minimum'))
		let step = parseFloat(input.data('step'))

		if (inputVal > minimum) {
			input.val(inputVal - step)

			parent.find('.amount__btn_plus').prop("disabled", false)
		}

		if (inputVal-1 == minimum) {
			$(this).prop("disabled", true)
		}
	})

	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')

		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let maximum = parseFloat(input.data('maximum'))
		let step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}

		if (inputVal+1 == maximum) {
			$(this).prop("disabled", true)
		}
	})

	$('.amount__input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})
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

	if ($('.qrcod-wrap').length){
		qrcodSlider()
	}

	if( $('.products__grid').length ){
		$('.products__grid').each(function() {
			productsHeight($(this), parseInt($(this).css('--products_count')))
		})

		$('.products__grid').find('.product').removeClass('_loaded')
		setTimeout(() => {
			$('.products__grid').find('.product').addClass('_loaded')
		}, 100)
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

function qrcodSlider(){
	if ( $(window).width() < 768 && !$('.qrcod-wrap').hasClass('swiper-initialized') ) {
		$('.qrcod-wrap').addClass('swiper')
		$('.qrcod-wrap__items').addClass('swiper-wrapper').removeClass('_flex')
		$('.qrcod-wrap__item').addClass('swiper-slide')

		qrcodSwiperSlider = new Swiper('.qrcod-wrap', {
			loop: false,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 15,
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
	} else if ($(window).width() > 767 && $('.qrcod-wrap').hasClass('swiper-initialized')) {
		if ($('.qrcod-wrap').length === 1 && $('.qrcod-wrap').hasClass('swiper-initialized')) {
			qrcodSwiperSlider.destroy(true, true)
		} else if ($('.qrcod-wrap').length >= 2 && $('.qrcod-wrap').hasClass('swiper-initialized')) {
			qrcodSwiperSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.qrcod-wrap').removeClass('swiper')
		$('.qrcod-wrap__items').removeClass('swiper-wrapper').addClass('_flex')
		$('.qrcod-wrap__item').removeClass('swiper-slide')
	}
}


function productsHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.product')

	products.height('auto')
	products.find('.product__name').height('auto')
	products.find('.product__box').height('auto')
	products.find('.product__block').height('auto')
	products.find('.product__desc-items').height('auto')
	products.find('.product__prices').height('auto')

	for (let i = 0; i < products.length; i++) {
		setHeight(products.slice(start, finish))
		setHeight(products.slice(start, finish).find('.product__name'))
		setHeight(products.slice(start, finish).find('.product__box'))
		setHeight(products.slice(start, finish).find('.product__block'))
		setHeight(products.slice(start, finish).find('.product__desc-items'))
		setHeight(products.slice(start, finish).find('.product__prices'))

		start  = start + step
		finish = finish + step
	}
}

// Выравнивание в сравнении
function compareHeight() {
	$('.compare-feature__item').height('auto')
	$('.compare-feature__title').height('auto')

	let productFeatures = $('.compare-feature__items'),
	productFeaturesTitle = $('.compare-feature__sector'),
	featuresSizes = new Object()
	featuresSizes2 = new Object()

	productFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (featuresSizes[$(this).index()]) {
				if ($(this).outerHeight() > featuresSizes[$(this).index()]) {
					featuresSizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				featuresSizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	productFeaturesTitle.each(function () {
		$(this).find('.compare-feature__title').each(function () {
			if (featuresSizes2[$(this).index()]) {
				if ($(this).outerHeight() > featuresSizes2[$(this).index()]) {
					featuresSizes2[$(this).index()] = $(this).outerHeight()
				}
			} else {
				featuresSizes2[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	$.each(featuresSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('> *:eq(' + key + ')').innerHeight(data)
		})
	})

	$.each(featuresSizes2, (key, data) => {
		productFeaturesTitle.each(function () {
			$(this).find('.compare-feature__title:eq(' + key + ')').innerHeight(data)
		})
	})
}