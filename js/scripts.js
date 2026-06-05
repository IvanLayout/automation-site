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
					spaceBetween: 20,
					slidesPerView: 2,
				},
			}
		})
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
				'320': {
					spaceBetween: 0,
					slidesPerView: 1,
				},
				'480': {
					spaceBetween: 0,
					slidesPerView: 2,
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