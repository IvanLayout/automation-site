$(() => {
	// Observer API
	const boxes = document.querySelectorAll('.lazyload, .production-process__flex')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.classList.add('loaded')

				entry.target.src = entry.target.getAttribute('data-src')
			}

			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-srcset') && !entry.target.classList.contains('loaded')) {
				entry.target.srcset = entry.target.getAttribute('data-srcset')

				entry.target.classList.add('loaded')
			}

			if (entry.intersectionRatio > 0 && entry.target.classList.contains('production-process__flex') && !entry.target.classList.contains('act')) {
				tabsTimer()

				entry.target.classList.add('act')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
	

	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')

	// Выбор файла
	$('.file-selection input[type=file]').change(function(){
		var val = $(this).val()

		var parent = $(this).parents('.file-selection')

		parent.find('.file-selection__path span').text(val)
		parent.find('.file-selection__path').addClass('_active')

		if(parent.find('.file-selection__path span').text() == '') {
			let namePath = parent.find('.file-selection__path').data('name')
			parent.find('.file-selection__path span').text(namePath)
			parent.find('.file-selection__path').removeClass('_active')
		}
	})


	// Мини всплывающие окна
	$('.mini-modal__btn').click(function (e) {
		e.preventDefault()

		const parent = $(this).closest('.mini-modal')

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.mini-modal__modal').removeClass('_active')
			$('.mini-over').removeClass('_show')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini-modal__btn').removeClass('_active')
			$(this).addClass('_active')

			$('.mini-modal__modal').removeClass('_active')
			parent.find('.mini-modal__modal').addClass('_active')

			if( $(this).hasClass('mini-modal__btn_over') ) {
				$('.mini-over').addClass('_show')
			}

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.mini-modal') ) {
			$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')
			$('.mini-over').removeClass('_show')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}

		if ( !e.target.closest('.header-catalog') && !e.target.closest('.header-catalog__open') && !e.target.closest('.fix-btns') ) {
			$('.header-catalog__open').removeClass('_active')
			if($('.header-catalog__block').hasClass('_show')){
				$('.overlay').removeClass('_show')
				$('body').removeClass('_lock')
			}
			$('.header-catalog__block').removeClass('_show')
			if($('.header-catalog').hasClass('_show')){
				$('body').removeClass('_lock')
			}
			$('.header-catalog').removeClass('_show')
			$('.overlay-catalog').removeClass('_show')
		}
	})

	$('body').on('click', '[data-mini-close]', function(e) {
		e.preventDefault()

		$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')
		$('.mini-over').removeClass('_show')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})

	$('body').on('click', '.adres-over, [data-adres-close]', function(e) {
		e.preventDefault()

		$('.adres-mini').removeClass('_show')
		$('.adres-over').removeClass('_show')
	})

	// Плавная прокрутка к якорю
	$('.scroll-btn').click(function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')

		let offsetTop = 10;

		if ( $(window).width() > 767 ){
			offsetTop = 75
		}

		if ( $('.product-fixed').length && $(window).width() > 767 ){
			offsetTop = $('.product-fixed').innerHeight() + 10
		}

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - offsetTop }, 1000)
	})

	
	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button_js', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let level = $(this).data('level')

			parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			$(this).addClass('_active')
			$(activeTab).addClass('_active')
			$(`.tab-content[data-id='${activeTab}']`).addClass('_active')
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button_js[data-content="'+ locationHash +'"]')
		if (activeTab.length) {
			setTimeout(function(){
				let parent = activeTab.closest('.tabs-container')
				let level = activeTab.data('level')

				parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
				parent.find('.tab-content.' + level).removeClass('_active')

				activeTab.addClass('_active')
				$(locationHash).addClass('_active')

				$(`.tab-content[data-id='${locationHash}']`).addClass('_active')

				$('html, body').stop().animate({
					scrollTop: $(locationHash).offset().top - 120
				}, 1000)
			}, 200)
		}
	}


	// Fancybox
	const myCloseBtn = '<button data-fancybox-close class="f-button is-close-button" title="Close"><svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L16 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/><path d="M16 1L1 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/></svg></button>';

	const commonOptions = {
		autoFocus: false,
		dragToClose: false,
		placeFocusBack: false,
		
		
		Html: {
			
			tpl: myCloseBtn
		},
		
		
		Toolbar: {
			display: {
				right: ["close"],
			},
			items: {
				close: {
					tpl: myCloseBtn
				}
			}
		}
	};

	// Открытие модалок
	$(document).on('click', '.modal-btn', function (e) {
		e.preventDefault();

		Fancybox.close();
	
		const target = $(this).attr('data-content');
		const isBig = $(this).attr('data-modal-big') !== undefined;

		setTimeout(() => {
			Fancybox.show([{
				src: target,
				type: 'inline'
			}], {
				...commonOptions,
				on: {
					reveal: () => {
						if (isBig) $('body').addClass('_big-modal');
					},
					destroy: () => {
						$('body').removeClass('_big-modal');
						$('.modal video').each(function () { this.pause(); });
					}
				}
			});
		}, 10);
	});

	// 2. Закритие через кнопку .modal-close
	$('body').on('click', '.modal-close', function (e) {
		e.preventDefault();
		Fancybox.close();
	});

	// Для картинок
	Fancybox.bind('.fancy-img', {
		...commonOptions,
		Carousel: {
			Thumbs: false,
		},
	});

	// Кастомный select
	$('select').niceSelect()



	$('body').on('click', '.header-catalog__open', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.header-catalog__block').removeClass('_show')
			$('.overlay').removeClass('_show')
		} else {
			$(this).addClass('_active')
			$('.header-catalog__block').addClass('_show')
			$('.overlay').addClass('_show')
		}
	})

	$('body').on('click', '.header-submenu__link._sub', function (e) {
		e.preventDefault()

		if ($(this).closest('.header-submenu__item').hasClass('_active')) {
			$(this).closest('.header-submenu__item').removeClass('_active')
		} else {
			$(this).closest('.header-submenu__item').addClass('_active')
		}
	})


	if ( $(window).width() < 1024 ) {
		$('body').on('click', '.header__list-link._sub', function (e) {
			e.preventDefault()

			if ( $(this).closest('.header__list-item').hasClass('_show') ) {
				$(this).closest('.header__list-item').removeClass('_show')
			} else {
				$(this).closest('.header__list-item').addClass('_show')
			}
		})
	}
	

	// Наведение на пункты меню
	if ( $(window).width() > 1023 ) {
		$('body').on('mouseover', '.header-menu__item', function (e) {
			if (!$(this).hasClass('_active-pc')) {
				$(this).closest('.header-menu').find('.header-menu__item').removeClass('_active-pc')
	
				$(this).addClass('_active-pc')
			}
		})
	}

	if ( $(window).width() < 1024 ) {
		$('body').on('click', '.header-menu__link._sub', function (e) {
			e.preventDefault()

			let titleCatalog = $(this).find('.header-menu__link-name').text()
			$('.catalog-head__title').text(titleCatalog).data('title-second' , titleCatalog)

			$(this).next('.header-submenu').addClass('_show')

			$('.header-catalog, .catalog-head__back').addClass('_second')
		})
	}

	$('body').on('click', '.open-catalog-mob', function (e) {
		e.preventDefault()

		$('.open-catalog-mob').addClass('_active')
		$('.header-catalog').addClass('_show')
		$('.overlay-catalog').addClass('_show')
		$('body').addClass('_lock')
	})

	$('body').on('click', '.catalog-head__close', function (e) {
		e.preventDefault()

		$('.open-catalog-mob').removeClass('_active')
		$('.header-catalog').removeClass('_show')
		$('.overlay-catalog').removeClass('_show')
		$('body').removeClass('_lock')

		$('.header-submenu').removeClass('_show')
		$('.header-catalog, .catalog-head__back').removeClass('_second')

		let titleCatalog = $('.catalog-head__title').data('title')
		$('.catalog-head__title').text(titleCatalog)
	})

	$('body').on('click', '.catalog-head__back', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_second')) {
			let titleCatalog = $('.catalog-head__title').data('title')
			$('.catalog-head__title').text(titleCatalog)

			$('.header-submenu').removeClass('_show')
			$('.header-catalog, .catalog-head__back').removeClass('_second')
		} else {
			$('.open-catalog-mob').removeClass('_active')
			$('.header-catalog').removeClass('_show')
			$('.overlay-catalog').removeClass('_show')
			$('body').removeClass('_lock')
		}
	})

	$('body').on('focus', '#header__search-input', function(e) {
		e.preventDefault()

		$('.header__info-wrap').addClass('_show')

		$('body').addClass('_lock')
	})

	$('body').on('click', '.header__search-close', function(e) {
		e.preventDefault()

		$('.header__info-wrap').removeClass('_show')

		$('body').removeClass('_lock')
	})

	// commit
	$('body').on('click', '.filter-open', function (e) {
		e.preventDefault()

		$('.filter-big').addClass('_show')

		$('body').addClass('_filter-open')
	})

	$('body').on('click', '.filter-big__overlay, .filter-close', function (e) {
		e.preventDefault()

		$('.filter-big').removeClass('_show')

		$('body').removeClass('_filter-open')
	})


	$('.filter__item-clear').click(function(e) {
		e.preventDefault()

		const $filterItem = $(this).closest('.filter__item');

		$filterItem.find('input[type="checkbox"], input[type="radio"]').prop('checked', false);

		$filterItem.find('._clear').removeClass('_clear')
	})

	$('.filter__data').each(function(){
		if ($(this).find('input[type="checkbox"]:checked, input[type="radio"]:checked').length > 0) {
			$(this).addClass('_clear');
		} else {
			$(this).removeClass('_clear');
		}
	})

	$('.checkbox__label, .checkbox-btn__label').click(function(){
		if ($(this).closest('.filter__data').find('input[type="checkbox"]:checked').length > 0) {
			$(this).closest('.filter__data').addClass('_clear');
		} else {
			$(this).closest('.filter__data').removeClass('_clear');
		}
	})

	$('.radio__label').click(function(){
		if ($(this).closest('.filter__data').find('input[type="radio"]:checked').length > 0) {
			$(this).closest('.filter__data').addClass('_clear');
		} else {
			$(this).closest('.filter__data').removeClass('_clear');
		}
	})

	$('.filter__item-more').click(function(e) {
		e.preventDefault()

		if ( $(this).hasClass('_active') ) {
			$(this).removeClass('_active')

			$(this).closest('.filter__data').removeClass('_all')
		} else {
			$(this).addClass('_active')

			$(this).closest('.filter__data').addClass('_all')
		}
	})

	$('.filter__data').each(function(){
		if ( $(this).find('.checkbox').length > 4 ) {
			$(this).find('.filter__item-more').addClass('_show')
		}
	})

	// Ваш выбор

	$('body').on('click', '.filter-use__link', function (e) {
		e.preventDefault()

		$(this).closest('.filter-use__item').remove()
	})

	$('body').on('click', '.filter-use__clear', function (e) {
		e.preventDefault()

		$(this).closest('.filter-use').remove()
	})
	

	$('.filter input:not(.filter__search-input)').change(function() {
		const $input = $(this);
		let heigh = $input.height()
		let inputOffsetTop = 0;
		if ( $input.attr('type') === 'checkbox' || $input.attr('type') === 'radio' ) {
			inputOffsetTop = $input.closest('label').offset().top;

			heigh = $input.closest('label').height()
		} else {
			inputOffsetTop = $input.offset().top;
		}
		
		const containerOffsetTop = $input.closest('.filter').offset().top;

		const relativeOffset = inputOffsetTop - containerOffsetTop;

		if( !$('.filter-filter').hasClass('_show') ){
			$('.filter-filter').addClass('_show')
		}

		$('.filter-filter').css('top', relativeOffset + heigh/2)
	})

	// Добавление/Удаление (корзина)
	$('body').on('click', '.cart-js', function (e) {
		e.preventDefault()
	
		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})

	// Показать ответ
	$('body').on('click', '.reviews-inner__btn', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$(this).closest('.reviews-inner__bottom').find('._hide').removeClass('_show')
		} else {
			$(this).addClass('_active')
			$(this).closest('.reviews-inner__bottom').find('._hide').addClass('_show')
		}
	})

	// Аккордион простой моб
	$('body').on('click', '.tabs-accord__open', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.tabs-accord__item')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.tabs-accord__data').slideUp(300)
		} else {
			parent.addClass('_active')
			parent.find('.tabs-accord__data').slideDown(300)
		}
	})
	

	// Аккордион
	$('body').on('click', '.accordion__open', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accordion__item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accordion__data').slideUp(300)
		} else {
			accordion.find('.accordion__item').removeClass('_active')
			accordion.find('.accordion__data').slideUp(300)

			parent.addClass('_active')
			parent.find('.accordion__data').slideDown(300)
		}
	})

	// Аккордион простой
	$('body').on('click', '.accord__open', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.accord__item')

		if( parent.hasClass('_active') ) {
			parent.removeClass('_active')
			parent.find('.accord__data').slideUp(300)
		} else {
			parent.addClass('_active')
			parent.find('.accord__data').slideDown(300)
		}
	})

	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})

	$('[inputmode="numeric"]').inputmask('numeric', {
		showMaskOnHover: false
	})


	$('body').on('click', '.main-tags__open', function(e) {
		e.preventDefault()
		
		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$(this).closest('.main-tags_blog').removeClass('_all')
			$(this).closest('.main-tags_blog').find('.main-tags__item').removeClass('_show')
		} else {
			$(this).addClass('_active')
			$(this).closest('.main-tags_blog').addClass('_all')
			$(this).closest('.main-tags_blog').find('.main-tags__item').addClass('_show')
		}
	})

	// Показать все теги
	$('body').on('click', '.search-tags__open', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.search-tags').find('._hide').removeClass('_show')
		} else {
			$(this).addClass('_active')

			$(this).closest('.search-tags').find('._hide').addClass('_show')
		}
	})

	// Показать все теги
	$('body').on('click', '.often-search__open', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.often-search__items').find('.often-search__item._hide').removeClass('_show')
		} else {
			$(this).addClass('_active')

			$(this).closest('.often-search__items').find('.often-search__item._hide').addClass('_show')
		}
	})


	$('body').on('click', '.inner-news__open-all', function(e) {
		e.preventDefault()
	
		let btn = $(this)
		let parent = btn.closest('.inner-news__top')
		let content = parent.find('.inner-news__data')
	
		btn.toggleClass('_active')
	
		content.slideToggle(300)
	})

	$('body').on('click', '.info-delete__close', function(e) {
		e.preventDefault()
	
		$(this).closest('.info-delete').remove()
	})

	$('body').on('click', '.promo-wrap__open', function(e) {
		e.preventDefault()
	
		$(this).closest('.promo-wrap').addClass('_active')
	})

	$('.checkbox__label_all').on('click', function () {

        let isChecked = $(this).find('input[type="checkbox"]').prop('checked');

        $('.cart-table input[type="checkbox"]').prop('checked', isChecked);
    });

    $('.cart-table .checkbox__label').on('click', function () {

        let allChecked =
            $('.cart-table input[type="checkbox"]').length ===
            $('.cart-table input[type="checkbox"]:checked').length;

        $('.checkbox__label_all input[type="checkbox"]').prop('checked', allChecked);
    });


	$('body').on('click', '.pade-checkout__less', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.pade-checkout__sector').find('.pade-checkout__block').slideDown()
		} else {
			$(this).addClass('_active')

			$(this).closest('.pade-checkout__sector').find('.pade-checkout__block').slideUp()
		}
	})

	$('.radio-big__label_buyer').on('click', function () {
		let thisEl = $(this);
		let $radio = $(this).find('input[type="radio"]');

		setTimeout(() => {
			if ($radio.is(':checked')) {
				let targetForm = $(thisEl).data('form')

				$(thisEl).closest('.pade-checkout__sector').find('.pade-checkout__buyer').removeClass('_show')

				$(targetForm).addClass('_show')
			}
		}, 0)
	});

	$('.radio-big__label_delivery').on('click', function () {
		let thisEl = $(this);
		let $radio = $(this).find('input[type="radio"]');

		setTimeout(() => {
			if ($radio.is(':checked')) {
				let targetForm = $(thisEl).data('delivery')

				$(thisEl).closest('.pade-checkout__sector').find('.delivery-info__box').removeClass('_show')

				$(targetForm).addClass('_show')
			}
		}, 0)
	});

	$('#cities-search').on('input', function () {
		let value = $(this).val().trim()

		if (value.length > 0) {
			$(this).closest('.modal-search__field').addClass('_active')
		} else {
			$(this).closest('.modal-search__field').removeClass('_active')
		}
	});

	$('.modal-search__close').on('click', function () {
		$('#cities-search').val('')
		$(this).closest('.modal-search__field').removeClass('_active')
	});

	$('#city-input').on('input', function () {
		let value = $(this).val().trim()

		if (value.length > 0) {
			$(this).closest('.select-city__wrap').addClass('_active')
		} else {
			$(this).closest('.select-city__wrap').removeClass('_active')
		}
	});

	$('.select-city__close').on('click', function () {
		$('#city-input').val('')
		$(this).closest('.select-city__wrap').removeClass('_active')
	});

	$('.select-city__list-item').on('click', function () {
		let city = $(this).text().trim()

		$('#city-input').val(city)
		$(this).closest('.select-city__wrap').removeClass('_active')
		$(this).closest('.select-city').addClass('_hide')
		$(this).closest('.pade-checkout__sector').find('.delivery-info').addClass('_show')
		$(this).closest('.pade-checkout__sector').find('.delivery-info__title').text(city)
	});

	$('body').on('click', '.text-spoller__more', function(e) {
		e.preventDefault()
	
		$(this).closest('.text-spoller').addClass('_active')
	})

	if ($('.contacts-gallery__grid').length){
		updateGalleryCount();
	}

	$('body').on('click', '.contacts-gallery__count', function(e) {
		e.preventDefault()

		$(this).closest('.contacts-gallery__grid').addClass('_all')
	
		$(this).addClass('_hide')
	})

	if ($('.gallery__grid').length){
		updateGalleryCount2();
	}

	$('body').on('click', '.gallery__count', function(e) {
		e.preventDefault()

		$(this).closest('.gallery__grid').addClass('_all')
	
		$(this).addClass('_hide')
	})


	$(document).on('click', '.copy-js', function () {
		const text = $(this).data('textCopy');

		navigator.clipboard.writeText(text)
			.then(function () {
				console.log('Скопировано');
			})
			.catch(function (err) {
				console.error('Ошибка копирования:', err);
			});
	});
})


$(window).on('load', () => {
	
	// commit

    if ( $('.header__info').length ) {
		if( $(window).scrollTop() > $('.header__info').offset().top > 0 ) {
			$('.header__info-wrap').addClass('_fix')
		} else {
			$('.header__info-wrap').removeClass('_fix')
		}
	}

	if ( $('.inner-news__wrap').length ) {
		if( $(window).scrollTop() == $('.inner-news__wrap').offset().top ) {
			$('.inner-news__wrap').addClass('_fix')
		} else {
			$('.inner-news__wrap').removeClass('_fix')
		}
	}

	if ( $('.compare-fixed').length ) {
		if( $(window).scrollTop() > $('.compare-feature').offset().top ) {
			$('.compare-fixed').addClass('_fix')
		} else {
			$('.compare-fixed').removeClass('_fix')
		}
	}

	if ( $('.product-fixed').length ) {
		if( $(window).scrollTop() > $('.product-info__total').offset().top + $('.product-info__total').innerHeight() ) {
			$('.product-fixed').addClass('_fix')
		} else {
			$('.product-fixed').removeClass('_fix')
		}
	}

	if ( $('.informations__top').length ) {
		if( $(window).scrollTop() == $('.informations__top').offset().top + $('.product-fixed').innerHeight() ) {
			$('.informations__top').addClass('_fix')
		} else {
			let Pos = $('.product-fixed').innerHeight()
			$('.informations__top').css('top', Pos)
			$('.informations__top').removeClass('_fix')
		}
	}

	$(window).on('scroll', () => {
		if ( $('.header__info').length ) {
			if( $(window).scrollTop() > $('.header__info').offset().top > 0 ) {
				$('.header__info-wrap').addClass('_fix')
			} else {
				$('.header__info-wrap').removeClass('_fix')
			}
		}

		if ( $('.inner-news__wrap').length ) {
			if( $(window).scrollTop() == $('.inner-news__wrap').offset().top ) {
				$('.inner-news__wrap').addClass('_fix')
			} else {
				$('.inner-news__wrap').removeClass('_fix')
			}
		}

		if ( $('.compare-fixed').length ) {
			if( $(window).scrollTop() > $('.compare-feature').offset().top ) {
				$('.compare-fixed').addClass('_fix')
			} else {
				$('.compare-fixed').removeClass('_fix')
			}
		}

		if ( $('.product-fixed').length ) {
			if( $(window).scrollTop() > $('.product-info__total').offset().top + $('.product-info__total').innerHeight() ) {
				$('.product-fixed').addClass('_fix')
			} else {
				$('.product-fixed').removeClass('_fix')
			}
		}

		if ( $('.informations__top').length ) {
			if ( $(window).scrollTop() >= $('.informations').offset().top + $('.informations').innerHeight() - $('.product-fixed').innerHeight() - $('.informations__top').innerHeight()){
				$('.informations__top').addClass('_hide')
			} else if( $(window).scrollTop() > $('.informations').offset().top - $('.product-fixed').innerHeight()) {
				$('.informations__top').addClass('_fix')
				$('.informations__top').removeClass('_hide')
				let Pos = $('.product-fixed').innerHeight()
				$('.informations__top').css('top', Pos)
			} else {
				$('.informations__top').removeClass('_fix')
				$('.informations__top').removeClass('_hide')
			}
		}
	})

	if ($('.main-tags_blog').length){
		hideExtraTags()
	}

	if ($('.text-spoller').length){
		checkSpollers();
	}

	if ($('.adres-mini').length){
		$('.adres-mini').addClass('_show')
		$('.adres-over').addClass('_show')
	}
})

$(window).on('resize', function() {	
	if ($('.main-tags_blog').length){
		hideExtraTags()
	}

	if ($('.text-spoller').length){
		checkSpollers();
	}

	if ($('.contacts-gallery__grid').length){
		updateGalleryCount();
	}

	if ($('.gallery__grid').length){
		updateGalleryCount2();
	}
})

// Вспомогательные функции
const widthScroll = () => {
	const div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'
	div.style.position = 'absolute'
	div.style.scrollbarWidth = 'thin' // Firefox

	document.body.appendChild(div)

	const scrollWidth = div.offsetWidth - div.clientWidth

	document.body.removeChild(div)

	return scrollWidth
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

const is_touch_device = () => !!('ontouchstart' in window)


function hideExtraTags() {
    const $container = $('.main-tags_blog');
    const $items = $container.find('.main-tags__item');
    const $openBtn = $('.main-tags__open');

    if (!$container.hasClass('_active')) {
        $items.removeClass('_hide');
        $openBtn.show(); // Спочатку показуємо, щоб виміряти її позицію

        if ($items.length === 0) return;

        const firstItemTop = $items.first().offset().top;
        
        // 1. Приховуємо всі, що явно нижче першого рядка
        $items.each(function() {
            if ($(this).offset().top > firstItemTop) {
                $(this).addClass('_hide');
            }
        });

        // 2. "Підтягуємо" кнопку: якщо вона все ще нижче, 
        // ховаємо попередні теги по черзі
        let visibleItems = $items.not('._hide');
        let counter = visibleItems.length - 1;

        while ($openBtn.offset().top > firstItemTop && counter >= 0) {
            $(visibleItems[counter]).addClass('_hide');
            counter--;
        }

        // 3. Якщо нічого не приховано — кнопка не потрібна
        if ($items.filter('._hide').length === 0) {
            $openBtn.hide();
        } else {
            $openBtn.show();
        }
    }
}

function checkSpollers() {
	$('.text-spoller:not(._active)').each(function () {
		const $wrap = $(this).find('.text-spoller__wrap');
		const $textBlock = $(this).find('.text-block');
		const $moreBtn = $(this).find('.text-spoller__more');

		const wrapHeight = $wrap.height();
		const textHeight = $textBlock[0].scrollHeight;

		if (textHeight > wrapHeight) {
			$moreBtn.addClass('_show');
		} else {
			$moreBtn.removeClass('_show');
		}
	});
}

function updateGalleryCount() {
	$('.contacts-gallery__grid').each(function () {
		const $grid = $(this);
		

		const hiddenCount = $grid
			.find('.contacts-gallery__img:hidden')
			.length;

		if (hiddenCount > 0) {
			$grid.find('.contacts-gallery__count b').text(hiddenCount);
		} else {
			$grid.find('.contacts-gallery__count').addClass('_hide')
		}
	});
}

function updateGalleryCount2() {
	$('.gallery__grid').each(function () {
		const $grid = $(this);
		

		const hiddenCount = $grid
			.find('.gallery__img:hidden')
			.length;

		if (hiddenCount > 0) {
			$grid.find('.gallery__count b').text(hiddenCount);
		} else {
			$grid.find('.gallery__count').addClass('_hide')
		}
	});
}