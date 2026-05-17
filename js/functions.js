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
				console.log(entry.target)
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

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini-modal__btn').removeClass('_active')
			$(this).addClass('_active')

			$('.mini-modal__modal').removeClass('_active')
			parent.find('.mini-modal__modal').addClass('_active')


			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ( !e.target.closest('.mini-modal') ) {
			$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}

		if ( !e.target.closest('.header-catalog') && !e.target.closest('.header-catalog__open') ) {
			$('.header-catalog__open').removeClass('_active')
			$('.header-catalog__block').removeClass('_show')
			$('.overlay-catalog').removeClass('_show')
		}
	})

	$('body').on('click', '[data-mini-close]', function(e) {
		e.preventDefault()

		$('.mini-modal__modal, .mini-modal__btn').removeClass('_active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})

	
	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs__button_js', function(e) {
		e.preventDefault()

		if( !$(this).hasClass('_active') ) {
			let parent = $(this).closest('.tabs-container')
			let activeTab = $(this).data('content')
			let activeTitle = $(this).data('content-title')
			let level = $(this).data('level')

			console.log(activeTitle)

			parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
			parent.find('.tab-content.' + level).removeClass('_active')

			if ( parent.hasClass('animated') ) {
				parent.removeClass('animated')

				setTimeout(function(){
					if ( !parent.hasClass('animated') ) {
						parent.addClass('animated')
					}
				},50)
			}

			$(this).addClass('_active')
			$(activeTab).addClass('_active')

			if( $(this).closest('.tabs__item').length ){
				parent.find('.tabs__item').removeClass('_active')
				$(this).closest('.tabs__item').addClass('_active')
			}

			if( activeTitle !== 'undefined' ){
				parent.find('.tabs__data').removeClass('_active')
				$(activeTitle).addClass('_active')
			}
		}
	})

	if( locationHash && $('.tabs-container').length ) {
		let activeTab = $('.tabs__button_js[data-content="'+ locationHash +'"]')
		let parent = activeTab.closest('.tabs-container')
		let level = activeTab.data('level')

		parent.find('.tabs:first').find('.tabs__button_js').removeClass('_active')
		parent.find('.tab-content.' + level).removeClass('_active')

		activeTab.addClass('_active')
		$(locationHash).addClass('_active')

		$('html, body').stop().animate({
			scrollTop: $(locationHash).offset().top - 120
		}, 1000)
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



	$('body').on('click', '.header-catalog__open', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
			$('.header-catalog__block').removeClass('_show')
			$('.overlay-catalog').removeClass('_show')
		} else {
			$(this).addClass('_active')
			$('.header-catalog__block').addClass('_show')
			$('.overlay-catalog').addClass('_show')
		}
	})

	$('body').on('click', '.header-submenu__sub-item a._sub', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')
		} else {
			$(this).addClass('_active')
		}
	})

	$('body').on('click', '.header-submenu__sub-more', function (e) {
		e.preventDefault()

		if ($(this).hasClass('_active')) {
			$(this).removeClass('_active')

			$(this).closest('.header-submenu__sub').find('._hide').removeClass('_show')
		} else {
			$(this).addClass('_active')

			$(this).closest('.header-submenu__sub').find('._hide').addClass('_show')
		}
	})
	

	// Наведение на пункты меню
	if ( $(window).width() > 1023 ) {
		$('body').on('mouseover', '.header-menu__item', function (e) {
			if (!$(this).hasClass('_active-pc')) {
				$(this).closest('.header-menu').find('.header-menu__item').removeClass('_active-pc')
	
				$(this).addClass('_active-pc')
			}
		})
	} else if ( $(window).width() < 1024 && $(window).width() > 767 ) {
		$('body').on('click', '.header-menu__link._sub', function (e) {
			e.preventDefault()
	
			if (!$(this).closest('.header-menu__item').hasClass('_active-pc')) {
				$(this).closest('.header-menu').find('.header-menu__item').removeClass('_active-pc')
	
				$(this).closest('.header-menu__item').addClass('_active-pc')
			}
		})
	}

	if ( $(window).width() < 768 ) {
		$('body').on('click', '.header-menu__link._sub', function (e) {
			e.preventDefault()

			let titleCatalog = $(this).find('.header-menu__link-name').text()
			$('.catalog-head__title').text(titleCatalog).data('title-second' , titleCatalog)

			$(this).next('.header-submenu').addClass('_show')

			$('.header__info, .catalog-head__back').addClass('_second')
		})

		$('body').on('click', '.header-submenu__link._sub', function (e) {
			e.preventDefault()

			let titleCatalog2 = $(this).find('.header-submenu__link-name').text()

			$('.catalog-head__title').text(titleCatalog2)

			$(this).next('.header-submenu__sub').addClass('_show')

			$('.header__info, .catalog-head__back').addClass('_third')
		})
	}

	$('body').on('click', '.open-catalog-mob', function (e) {
		e.preventDefault()

		$('.open-catalog-mob').addClass('_active')
		$('.header').addClass('_show')
		$('body').addClass('_menu-open')
	})

	$('body').on('click', '.catalog-head__close', function (e) {
		e.preventDefault()

		$('.open-catalog-mob').removeClass('_active')
		$('.header').removeClass('_show')
		$('body').removeClass('_menu-open')

		$('.header-submenu').removeClass('_show')
		$('.header__info, .catalog-head__back').removeClass('_second')

		$('.header-submenu__sub').removeClass('_show')
		$('.header__info, .catalog-head__back').removeClass('_third')

		let titleCatalog = $('.catalog-head__title').data('title')
		$('.catalog-head__title').text(titleCatalog)
	})

	$('body').on('click', '.catalog-head__back', function (e) {
		e.preventDefault()

		if($(this).hasClass('_third')) {
			let titleCatalog2 = $('.catalog-head__title').data('title-second')
			$('.catalog-head__title').text(titleCatalog2)

			$('.header-submenu__sub').removeClass('_show')
			$('.header__info, .catalog-head__back').removeClass('_third')
		} else if ($(this).hasClass('_second')) {
			let titleCatalog = $('.catalog-head__title').data('title')
			$('.catalog-head__title').text(titleCatalog)

			$('.header-submenu').removeClass('_show')
			$('.header__info, .catalog-head__back').removeClass('_second')
		} else {
			$('.open-catalog-mob').removeClass('_active')
			$('.header').removeClass('_show')
			$('body').removeClass('_menu-open')
		}
	})

	// commit

	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})

})


$(window).on('load', () => {
	
	// commit

    
})

$(window).on('resize', function() {
	
})

// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
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
