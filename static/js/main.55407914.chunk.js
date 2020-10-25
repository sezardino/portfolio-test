<<<<<<< HEAD
(this.webpackJsonpportf = this.webpackJsonpportf || []).push([
	[0],
	{
		22: function (e, t, a) {
			e.exports = a(32);
		},
		31: function (e, t, a) {},
		32: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(0),
				i = a.n(n),
				o = a(13),
				s = a.n(o),
				c = a(7),
				r = a(14),
				m = a(2),
				l = a(9),
				p = {HOME: '/', ABOUT: '/about', SKILLS: '/skills', WORKS: '/works', CONTACT: '/contact'},
				u = {EN: 'EN', PL: 'PL', RU: 'RU'},
				g = ['understand', 'junior', 'regular', 'advanced', 'master'],
				d = {
					skills: [
						{name: 'HTML', level: '4'},
						{name: 'CSS', level: '4'},
						{name: 'JavaScript', level: '4'},
						{name: 'React', level: '4'},
						{name: 'Redux', level: '3'},
						{name: 'MobX', level: '2'},
						{name: 'Git', level: '4'},
						{name: 'BEM', level: '4'},
						{name: 'Less/SASS', level: '4'},
						{name: 'Webpack', level: '3'},
						{name: 'Unit tests', level: '3'},
						{name: 'WordPress', level: '2'},
						{name: 'English', level: '3'},
						{name: 'Polish', level: '5'},
						{name: 'Russian', level: '5'},
					],
					works: [
						{
							name: 'Art',
							mockup: './assets/img/works/art_mockup.png',
							desktop: './assets/img/works/art_desktop.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
							ghPages: 'https://sezardino.github.io/Art/',
							github: 'https://github.com/sezardino/Art',
							description: '',
						},
						{
							name: 'Barber',
							mockup: './assets/img/works/barber_mockup.png',
							desktop: './assets/img/works/barber_desktop.png',
							mobile: './assets/img/works/barber_mobile.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
							ghPages: 'https://sezardino.github.io/Barber/',
							github: 'https://github.com/sezardino/Barber',
							description: '',
						},
						{
							name: 'Bookmark-React',
							mockup: './assets/img/works/bookmark_mockup.png',
							desktop: './assets/img/works/bookmark_desktop.png',
							mobile: './assets/img/works/bookmark_mobile.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Redux', 'React-Router-Dom'],
							ghPages: 'https://sezardino.github.io/Bookmark/',
							github: 'https://github.com/sezardino/Bookmark',
							description: '',
						},
						{
							name: 'Bookmark-JS',
							mockup: './assets/img/works/bookmark_mockup.png',
							desktop: './assets/img/works/bookmark_desktop.png',
							mobile: './assets/img/works/bookmark_mobile.png',
							technologies: ['HTML', 'SCSS', 'Gulp', 'JavaScript'],
							ghPages: 'https://sezardino.github.io/Bookmark-js/',
							github: 'https://github.com/sezardino/Bookmark-js',
							description: '',
						},
						{
							name: 'Cake',
							mockup: './assets/img/works/cake_mockup.png',
							desktop: './assets/img/works/cake_desktop.png',
							technologies: ['HTML', 'CSS', 'Gulp', 'Slick Slider', 'Yandex Maps'],
							ghPages: 'https://sezardino.github.io/PSD-Templates/Cake/',
							github: 'https://github.com/sezardino/PSD-Templates/tree/master/Cake',
							description: '',
						},
						{
							name: 'Delivery food',
							mockup: './assets/img/works/delivery_mockup.png',
							desktop: './assets/img/works/delivery_desktop.png',
							mobile: './assets/img/works/delivery_mobile.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'Webpack', 'Animate CSS', 'wow-js'],
							ghPages: 'https://sezardino.github.io/Delivery/',
							github: 'https://github.com/sezardino/Delivery',
							description: '',
						},
						{
							name: 'Digital',
							mockup: './assets/img/works/digital_mockup.png',
							desktop: './assets/img/works/digital_desktop.png',
							mobile: './assets/img/works/digital_mobile.png',
							technologies: ['HTML', 'SCSS', 'Gulp'],
							ghPages: 'https://sezardino.github.io/PSD-Templates/Digital/',
							github: 'https://github.com/sezardino/PSD-Templates/tree/master/Digital',
							description: '',
						},
						{
							name: 'Filmed',
							mockup: './assets/img/works/filmed_mockup.png',
							desktop: './assets/img/works/filmed_desktop.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Redux', 'React-Router-DOM'],
							ghPages: 'https://sezardino.github.io/FilmEd/',
							github: 'https://github.com/sezardino/FilmEd',
							description: "if you won't to see click logo ",
						},
						{
							name: 'Finance',
							mockup: './assets/img/works/finance.png',
							technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'React'],
							ghPages: 'https://sezardino.github.io/Finance-app/',
							github: 'https://github.com/sezardino/Finance-app',
							description: '',
						},
						{
							name: 'food',
							mockup: './assets/img/works/food_mockup.png',
							desktop: './assets/img/works/food_desktop.png',
							technologies: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
							ghPages: 'https://sezardino.github.io/Food/',
							github: 'https://github.com/sezardino/Food',
							description: '',
						},
						{
							name: 'Interior',
							mockup: './assets/img/works/interior_mockup.png',
							desktop: './assets/img/works/interior_desktop.png',
							technologies: ['HTML', 'SCSS', 'Gulp'],
							ghPages: 'https://sezardino.github.io/PSD-Templates/Interior/',
							github: 'https://github.com/sezardino/PSD-Templates/tree/master/Interior',
							description: '',
						},
						{
							name: 'Keksogram',
							mockup: './assets/img/works/keksogram_mockup.png',
							desktop: './assets/img/works/keksogram_desktop.png',
							mobile: './assets/img/works/keksogram_mobile.png',
							technologies: ['HTML', 'CSS', 'JavaScript'],
							ghPages: 'https://sezardino.github.io/Keksogram/',
							github: 'https://github.com/sezardino/Keksogram',
							description: '',
						},
						{
							name: 'Landscape',
							mockup: './assets/img/works/landscape_mockup.png',
							desktop: './assets/img/works/landscape_desktop.png',
							mobile: './assets/img/works/landscape_mobile.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
							ghPages: 'https://sezardino.github.io/Landscape/',
							github: 'https://github.com/sezardino/Landscape',
							description: '',
						},
						{
							name: 'Netcliks',
							mockup: './assets/img/works/netcliks_mockup.png',
							desktop: './assets/img/works/netcliks_desktop.png',
							mobile: './assets/img/works/netcliks_mobile.png',
							technologies: ['HTML', 'CSS', 'JavaScript'],
							ghPages: 'https://sezardino.github.io/Netclicks/',
							github: 'https://github.com/sezardino/Netclicks',
							description: '',
						},
						{
							name: 'Photography',
							mockup: './assets/img/works/photography_mockup.png',
							desktop: './assets/img/works/photography_desktop.png',
							mobile: './assets/img/works/photography_mobile.png',
							technologies: ['HTML', 'SCSS', 'Gulp'],
							ghPages: 'https://sezardino.github.io/PSD-Templates/Fotography/',
							github: 'https://github.com/sezardino/PSD-Templates/tree/master/Fotography',
							description: '',
						},
						{
							name: 'Space',
							mockup: './assets/img/works/space_mockup.png',
							desktop: './assets/img/works/space_desktop.png',
							mobile: './assets/img/works/space_mobile.png',
							technologies: ['HTML', 'SCSS', 'JavaScript', 'Relax js', 'VidBG'],
							ghPages: 'https://sezardino.github.io/PSD-Templates/SpaceY/',
							github: 'https://github.com/sezardino/PSD-Templates/tree/master/SpaceY',
							description: '',
						},
						{
							name: 'Star Wars DataBase',
							mockup: './assets/img/works/star-wars.png',
							technologies: ['React', 'React-Router-DOM'],
							ghPages: 'https://sezardino.github.io/StarWard-DB/',
							github: 'https://github.com/sezardino/StarWard-DB',
							description: '',
						},
						{
							name: 'ToDo',
							mockup: './assets/img/works/todo.png',
							technologies: ['React'],
							ghPages: 'https://sezardino.github.io/ToDo-app/',
							github: 'https://github.com/sezardino/ToDo-app',
							description: '',
						},
						{
							name: 'Windows',
							mockup: './assets/img/works/windows_mockup.png',
							desktop: './assets/img/works/windows_desktop.png',
							mobile: './assets/img/works/windows_mobile.png',
							technologies: ['HTML', 'CSS', 'JavaScript'],
							ghPages: 'https://sezardino.github.io/Windows/',
							github: 'https://github.com/sezardino/Windows',
							description: '',
						},
					],
					EN: {
						PAGES: [
							{name: 'Home', path: p.HOME},
							{name: 'About', path: p.ABOUT},
							{name: 'Skills', path: p.SKILLS},
							{name: 'Works', path: p.WORKS},
							{name: 'Contact', path: p.CONTACT},
						],
						HERO: {name: 'EDWARD', surname: 'ARECHWA', quality: 'junior front-end developer'},
						ABOUT: {
							title: [
								['a', 'b', 'o', 'u', 't'],
								['m', 'e'],
							],
							text:
								'Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.',
							textEnd:
								'Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach.',
						},
						WORKS: {
							title: [
								['P', 'o', 'r', 't', 'f'],
								['o', 'l', 'i', 'o'],
							],
						},
						POPUP: {
							GHPagesLink: 'View',
							gitHubLink: 'View on GitHub',
							technologiesTitle: 'Using Technologies',
						},
						CONTACT: {title: ['C', 'o', 'n', 't', 'a', 'c', 't']},
						SKILLS: {
							title: [
								['m', 'y'],
								['S', 'K', 'i', 'L', 'l', 'S'],
							],
						},
					},
					PL: {
						PAGES: [
							{name: 'Strona g\u0142\xf3wna', path: p.HOME},
							{name: 'O mnie', path: p.ABOUT},
							{name: 'Umiej\u0119tno\u015bci', path: p.SKILLS},
							{name: 'Portfolio', path: p.WORKS},
							{name: 'Kontakt', path: p.CONTACT},
						],
						HERO: {name: 'EDWARD', surname: 'ARECHWA', quality: 'junior front-end developer'},
						ABOUT: {
							title: [['o'], ['m', 'n', 'i', 'e']],
							text:
								'Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.',
							textEnd:
								'Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach.',
						},
						SKILLS: {
							title: [
								['u', 'm', 'i', 'e'],
								['j', '\u0119', 't', 'n'],
								['o', '\u015b', 'c', 'i'],
							],
						},
						WORKS: {
							title: [
								['P', 'o', 'r', 't', 'f'],
								['o', 'l', 'i', 'o'],
							],
						},
						POPUP: {
							GHPagesLink: 'View',
							gitHubLink: 'View on GitHub',
							technologiesTitle: 'Zastosowane technologie',
						},
						CONTACT: {title: ['K', 'o', 'n', 't', 'a', 'k', 't']},
					},
					RU: {
						PAGES: [
							{name: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', path: p.HOME},
							{name: '\u041e\u0431\u043e \u043c\u043d\u0435', path: p.ABOUT},
							{name: '\u041d\u0430\u0432\u044b\u043a\u0438', path: p.SKILLS},
							{name: '\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e', path: p.WORKS},
							{name: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442', path: p.CONTACT},
						],
						HERO: {
							name: '\u042d\u0434\u0432\u0430\u0440\u0434',
							surname: '\u041e\u0440\u0435\u0445\u0432\u0430',
							quality: 'junior front-end developer',
						},
						ABOUT: {
							title: [
								['\u043e', '\u0431', '\u043e'],
								['\u043c', '\u043d', '\u0435'],
							],
							text:
								'Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.',
							textEnd:
								'Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach.',
						},
						SKILLS: {
							title: [
								['\u043c', '\u043e', '\u0438'],
								['\u043d', '\u0430', '\u0432', '\u044b', '\u043a', '\u0438'],
							],
						},
						WORKS: {
							title: [
								['\u041f', '\u043e', '\u0440', '\u0442', '\u0444'],
								['\u043e', '\u043b', '\u0438', '\u043e'],
							],
						},
						POPUP: {
							GHPagesLink: '\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c',
							gitHubLink:
								'\u041f\u043e\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 GitHub',
							technologiesTitle:
								'\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438',
						},
						CONTACT: {
							title: [
								'\u041a',
								'\u043e',
								'\u043d',
								'\u0442',
								'\u0430',
								'\u043a',
								'\u0442',
								'\u044b',
							],
						},
					},
				},
				_ = function (e, t) {
					var a = Object.values(p);
					if (-1 === e) {
						var n = a.findIndex(function (e) {
							return e === t;
						});
						return a[(n = n - 1 < 0 ? a.length - 1 : n - 1)];
					}
					var i = a.findIndex(function (e) {
						return e === t;
					});
					return a[(i = i + 1 > a.length - 1 ? 0 : i + 1)];
				},
				h = {
					event: !1,
					startX: 0,
					dist: 0,
					shiftX: 0,
					startTime: 0,
					time: 0,
					minDist: 60,
					maxDist: 400,
					maxTime: 700,
					minTime: 150,
				},
				k = function (e, t) {
					if (
						((h.startX = Math.floor(e.changedTouches[0].clientX)),
						(h.startTime = new Date().getTime()),
						!h.event)
					) {
						h.event = !0;
						var a = function (e) {
							var a = new Date().getTime();
							(h.time = a - h.startTime),
								(h.shiftX = Math.floor(e.changedTouches[0].clientX) - h.startX),
								(h.dist = Math.abs(h.shiftX)),
								h.dist < h.minDist ||
									h.dist > h.maxDist ||
									h.time < h.minTime ||
									h.time > h.maxTime ||
									((h.dist > h.minDist ||
										h.dist < h.maxDist ||
										h.time > h.minTime ||
										h.time < h.maxTime) &&
										(h.shiftX < 0 && t(1), h.shiftX > 0 && t(-1)));
						};
						document.addEventListener('touchend', function (e) {
							a(e);
						}),
							document.removeEventListener('touchend', function (e) {
								a(e);
							});
					}
				},
				b = a(8),
				v = a(1),
				w = new (function e() {
					var t = this;
					Object(b.a)(this, e),
						(this.activeLanguage = u.EN),
						(this.languageBar = !1),
						(this.handler = function (e) {
							t.languageBar
								? t.languageBar && ((t.activeLanguage = e), (t.languageBar = !1))
								: (t.languageBar = !0);
						}),
						Object(v.m)(this, {activeLanguage: v.n, languageBar: v.n, handler: v.f});
				})(),
				f = new (function e() {
					var t = this;
					Object(b.a)(this, e),
						(this.activePage = p.HOME),
						(this.animation = 'open'),
						(this.nextPage = p.ABOUT),
						(this.prevPage = p.CONTACT),
						(this.setPage = function (e) {
							(t.activePage = e),
								(t.nextPage = _(1, t.activePage)),
								(t.prevPage = _(-1, t.activePage));
						}),
						(this.switching = function (e) {
							(t.activePage = 1 === e ? _(1, t.activePage) : -1 === e ? _(-1, t.activePage) : e),
								(t.nextPage = _(1, t.activePage)),
								(t.prevPage = _(-1, t.activePage)),
								(t.animation = 'open');
						}),
						(this.changePage = function (e) {
							(t.animation = 'close'),
								setTimeout(function () {
									return t.switching(e);
								}, 1500);
						}),
						Object(v.m)(this, {
							activePage: v.n,
							animation: v.n,
							nextPage: v.n,
							prevPage: v.n,
							changePage: v.f,
							setPage: v.f,
							switching: v.f,
						});
				})(),
				E = new (function e() {
					var t = this;
					Object(b.a)(this, e),
						(this.desktopMockup = !0),
						(this.mobileMockup = !1),
						(this.desktopHandler = function () {
							(t.mobileMockup = !1), (t.desktopMockup = !0);
						}),
						(this.mobileHandler = function () {
							(t.mobileMockup = !0), (t.desktopMockup = !1);
						}),
						Object(v.m)(this, {
							mobileMockup: v.n,
							desktopMockup: v.n,
							desktopHandler: v.f,
							mobileHandler: v.f,
						});
				})(),
				S = new (function e() {
					var t = this;
					Object(b.a)(this, e),
						(this.menuOpen = !1),
						(this.toggleMenu = function () {
							t.menuOpen = !t.menuOpen;
						}),
						Object(v.m)(this, {menuOpen: v.n, toggleMenu: v.f});
				})(),
				N = Object(l.a)(function (e) {
					var t = e.data,
						a = e.activePage,
						n = f.changePage;
					return i.a.createElement(
						'footer',
						{className: 'footer container'},
						i.a.createElement(
							'button',
							{
								className: 'button button-arrow button-arrow--prev footer__prev',
								onClick: function () {
									return n(-1);
								},
							},
							i.a.createElement('span', {className: 'hidden'}, 'Prev page')
						),
						i.a.createElement(
							'nav',
							{className: 'nav nav--footer footer__nav'},
							t.map(function (e, t) {
								var n = a === e.path ? 'nav__link--active' : '';
								return i.a.createElement('p', {key: e + t, className: 'nav__link '.concat(n)});
							})
						),
						i.a.createElement(
							'button',
							{
								className: 'button button-arrow button-arrow--next footer__next',
								onClick: function () {
									return n(1);
								},
							},
							i.a.createElement('span', {className: 'hidden'}, 'Next page')
						)
					);
				}),
				z = Object(l.a)(function (e) {
					var t = e.data,
						a = e.activePage,
						n = w.languageBar,
						o = w.activeLanguage,
						s = w.handler,
						r = f.changePage,
						m = S.menuOpen,
						l = S.toggleMenu;
					return i.a.createElement(
						'header',
						{className: 'header container'},
						i.a.createElement('button', {
							className: 'button button--hamburger header__button',
							onClick: l,
						}),
						i.a.createElement(
							c.b,
							{to: p.HOME, className: 'logo'},
							i.a.createElement('img', {src: './assets/img/logo.svg', alt: 'logo'})
						),
						i.a.createElement(
							'div',
							{className: 'menu header__menu '.concat(m && 'menu--active')},
							i.a.createElement('button', {
								className: 'button button--close menu__button',
								onClick: l,
							}),
							i.a.createElement(
								'nav',
								{className: 'nav nav--header menu__nav header__nav'},
								t.map(function (e, t) {
									var n = a === e.path ? 'nav__link--active' : '';
									return i.a.createElement(
										'button',
										{
											className: 'nav__link '.concat(n),
											key: e.name + t,
											onClick: function () {
												return (t = e.path), r(t), void l();
												var t;
											},
										},
										e.name
									);
								})
							),
							i.a.createElement(
								'ul',
								{
									className: 'languages '.concat(
										n && 'languages--active',
										' menu__languages header__languages'
									),
								},
								Object.values(u).map(function (e, t) {
									var a = e === o ? 'languages__button--active' : '';
									return i.a.createElement(
										'li',
										{className: 'languages__item', key: e + t},
										i.a.createElement(
											'button',
											{
												className: 'languages__button '.concat(a),
												onClick: function () {
													return s(e);
												},
											},
											e
										)
									);
								})
							)
						)
					);
				}),
				y = function (e) {
					var t = e.animation,
						a =
							'open' === t
								? 'animate__fadeInBottomLeft'
								: 'close' === t
								? 'animate__fadeOutBottomLeft'
								: '',
						n =
							'open' === t
								? 'animate__fadeInBottomRight'
								: 'close' === t
								? 'animate__fadeOutBottomRight'
								: '';
					return i.a.createElement(
						'section',
						{className: 'hero container'},
						i.a.createElement(
							'p',
							{className: 'hero__img animate__animated '.concat(n)},
							i.a.createElement(
								'picture',
								null,
								i.a.createElement('source', {
									media: '(min-width: 768px)',
									srcSet: './assets/img/hero_desktop.png',
								}),
								i.a.createElement('img', {src: './assets/img/hero.png', alt: ''})
							)
						),
						i.a.createElement(
							'div',
							{className: 'hero__wrapper'},
							i.a.createElement(
								'h2',
								{className: 'title title--hero hero__title'},
								i.a.createElement(
									'span',
									{className: 'title title--name animate__animated animate__delay-12 '.concat(a)},
									'Edward'
								),
								i.a.createElement(
									'span',
									{
										className: 'title title--surname animate__animated animate__delay-13 '.concat(
											a
										),
									},
									'Arechwa'
								)
							),
							i.a.createElement(
								'p',
								{
									className: 'text text--hero hero__text animate__animated animate__delay-14 '.concat(
										a
									),
								},
								'junior front-end developer'
							)
						)
					);
				},
				P = function (e) {
					var t = e.animation,
						a = 'open' === t ? 'animate__rollIn' : 'close' === t ? 'animate__rollOut' : '',
						n = e.data,
						o = n.title,
						s = n.text,
						c = n.textEnd;
					return i.a.createElement(
						'section',
						{className: 'about container'},
						i.a.createElement(
							'h2',
							{className: 'title title--main title--about about__title'},
							o.map(function (e, t) {
								return i.a.createElement(
									'span',
									{
										key: e + t,
										className: 'row animate__animated '.concat(a, ' animate__delay-').concat(t),
									},
									' ',
									e.map(function (e, t) {
										return i.a.createElement(
											'span',
											{className: 'title__letter title__letter--scale', key: e + t},
											e
										);
									})
								);
							})
						),
						i.a.createElement(
							'div',
							{className: 'about__wrapper'},
							i.a.createElement(
								'p',
								{
									className: 'text text--about about__text animate__animated '.concat(
										a,
										' animate__delay-2'
									),
								},
								s
							),
							i.a.createElement('br', null),
							i.a.createElement(
								'p',
								{
									className: 'text text--about about__text animate__animated '.concat(
										a,
										' animate__delay-2'
									),
								},
								c
							)
						)
					);
				},
				O = function (e) {
					var t = e.animation,
						a = 'open' === t ? 'animate__jackInTheBox' : 'close' === t ? 'animate__zoomOut' : '',
						n = 'open' === t ? 'animate__zoomIn' : 'close' === t ? 'animate__zoomOut' : '',
						o = e.data.title;
					return i.a.createElement(
						'section',
						{className: 'contact container'},
						i.a.createElement(
							'div',
							{className: 'contact__wrapper'},
							i.a.createElement(
								'h2',
								{
									className: 'title title--contact title--main contact__title animate__animated '.concat(
										a
									),
								},
								o
							),
							i.a.createElement(
								'ul',
								{className: 'info contact__info'},
								i.a.createElement(
									'li',
									{className: 'info__item animate__animated animate__delay-16 '.concat(n)},
									i.a.createElement('span', {className: 'info__def'}, 'tel:'),
									i.a.createElement('span', {className: 'info__data'}, '+48 576 048 669')
								),
								i.a.createElement(
									'li',
									{className: 'info__item animate__animated animate__delay-17 '.concat(n)},
									i.a.createElement('span', {className: 'info__def'}, 'e-mail:'),
									i.a.createElement('span', {className: 'info__data'}, 'e.arechwa@gmail.com')
								)
							)
						),
						i.a.createElement(
							'ul',
							{className: 'social contact__social'},
							i.a.createElement(
								'li',
								{className: 'social__item animate__animated animate__delay-13 '.concat(n)},
								i.a.createElement(
									'a',
									{
										href: 'https://github.com/sezardino',
										target: 'blank',
										className: 'social__link',
									},
									'git'
								)
							),
							i.a.createElement(
								'li',
								{className: 'social__item animate__animated animate__delay-14 '.concat(n)},
								i.a.createElement(
									'a',
									{
										href: 'https://www.facebook.com/edvard.arekhva/',
										target: 'blank',
										className: 'social__link',
									},
									'f'
								)
							),
							i.a.createElement(
								'li',
								{className: 'social__item animate__animated animate__delay-15 '.concat(n)},
								i.a.createElement(
									'a',
									{href: 'https://vk.com/sezardino', target: 'blank', className: 'social__link'},
									'vk'
								)
							)
						)
					);
				},
				T = a(11),
				L = function (e) {
					var t = Object(n.useState)(0),
						a = Object(T.a)(t, 2),
						i = a[0],
						o = a[1];
					return [
						i,
						function () {
							var t = e.current,
								a = Math.floor((100 * t.scrollTop) / (t.scrollHeight - t.clientHeight));
							o(a);
						},
					];
				},
				C = Object(l.a)(function (e) {
					var t,
						a = i.a.createRef(),
						n = L(a),
						o = Object(T.a)(n, 2),
						s = o[0],
						c = o[1],
						r = E.mobileMockup,
						l = E.desktopMockup,
						p = E.mobileHandler,
						u = E.desktopHandler,
						g = e.data,
						d = g.technologiesTitle,
						_ = g.GHPagesLink,
						h = g.gitHubLink,
						k = g.work,
						b = k.name,
						v = k.mockup,
						w = k.mobile,
						f = k.desktop,
						S = k.ghPages,
						N = k.github,
						z = k.technologies,
						y = Object(m.f)();
					w || f ? (r ? (t = w) : l && (t = f)) : (t = v);
					var P = l ? 'view__mockup--desktop' : 'view__mockup--mobile';
					return i.a.createElement(
						'section',
						{className: 'popup'},
						i.a.createElement(
							'div',
							{className: ' popup__wrapper'},
							i.a.createElement('button', {
								className: 'button button-close button-close--dark popup__button',
								onClick: function () {
									y.goBack(), u();
								},
							}),
							i.a.createElement(
								'h2',
								{className: 'title title--main title--popup popup__title'},
								b
							),
							i.a.createElement(
								'div',
								{className: 'view popup__view'},
								i.a.createElement(
									'div',
									{className: 'view__mockup-wrapper'},
									i.a.createElement(
										'div',
										{className: 'view__mockup '.concat(P)},
										i.a.createElement(
											'p',
											{className: 'view__img', ref: a, onScroll: c},
											i.a.createElement('img', {src: t, alt: b})
										)
									),
									i.a.createElement(
										'div',
										{className: 'scroll scroll--black view__scroll'},
										i.a.createElement(
											'div',
											{className: 'scroll__track'},
											i.a.createElement('div', {
												className: 'scroll__bar',
												style: {
													top: ''.concat(s, '%'),
													transform: 'translate(-50%,-'.concat(s, '%)'),
												},
											})
										)
									)
								),
								i.a.createElement(
									'div',
									{className: 'view__buttons'},
									i.a.createElement(
										'button',
										{
											className: 'button button-view view__button '.concat(
												l && 'button-view--active'
											),
											onClick: u,
										},
										i.a.createElement(
											'div',
											{className: 'button__image'},
											i.a.createElement('img', {
												src: './assets/img/icons/desktop.png',
												alt: 'desktop icon',
											})
										),
										i.a.createElement('span', {className: 'button-view__text'}, 'Desktop')
									),
									w &&
										i.a.createElement(
											'button',
											{
												className: 'button button-view view__button '.concat(
													r && 'button-view--active'
												),
												onClick: p,
											},
											i.a.createElement(
												'div',
												{className: 'button__image'},
												i.a.createElement('img', {
													src: './assets/img/icons/mobile.png',
													alt: 'mobile icon',
												})
											),
											i.a.createElement('span', {className: 'button-view__text'}, 'Mobile')
										)
								)
							),
							i.a.createElement(
								'div',
								{className: 'description popup__description'},
								i.a.createElement(
									'h2',
									{className: 'title title--main title--popup description__title'},
									b
								),
								i.a.createElement(
									'div',
									{className: 'description__buttons'},
									i.a.createElement(
										'a',
										{
											href: N,
											target: 'blank',
											className: 'button button--popup description__button',
										},
										h
									),
									i.a.createElement(
										'a',
										{
											href: S,
											target: 'blank',
											className: 'button button--popup description__button',
										},
										_
									)
								),
								i.a.createElement(
									'div',
									{className: 'technologies description__technologies'},
									i.a.createElement(
										'h3',
										{className: 'title title--technologies technologies__title'},
										d
									),
									i.a.createElement(
										'ul',
										{className: 'technologies__list'},
										z.map(function (e, t) {
											return i.a.createElement(
												'li',
												{className: 'technologies__item', key: e + t},
												e
											);
										})
									)
								)
							)
						)
					);
				}),
				j = function (e) {
					var t = e.animation,
						a = i.a.createRef(),
						n = L(a),
						o = Object(T.a)(n, 2),
						s = o[0],
						r = o[1],
						m =
							'open' === t
								? 'animate__rotateInDownRight'
								: 'close' === t
								? 'animate__rotateOutDownRight'
								: '',
						l = 'open' === t ? 'animate__flipInX' : '',
						p = 'close' === t ? 'animate__flipOutX' : '',
						u =
							'open' === t
								? 'animate__fadeIn animate__delay-5'
								: 'close' === t
								? 'animate__fadeOut animate__delay-13'
								: '',
						g = e.data,
						d = g.title,
						_ = g.works;
					return i.a.createElement(
						'section',
						{className: 'portfolio container'},
						i.a.createElement(
							'h2',
							{className: 'title title--main title--portfolio portfolio__title'},
							d.map(function (e, t) {
								return i.a.createElement(
									'span',
									{
										className: 'row animate__animated '.concat(m, ' animate__delay-1').concat(t),
										key: e + t,
									},
									e.map(function (e, t) {
										return i.a.createElement(
											'span',
											{className: 'title__letter title__letter--scale', key: e + t},
											e
										);
									})
								);
							})
						),
						i.a.createElement(
							'div',
							{className: 'portfolio__wrapper '},
							i.a.createElement(
								'ul',
								{
									className: 'portfolio__list animate__animated '.concat(p, ' animate__delay-1'),
									ref: a,
									onScroll: r,
								},
								_.map(function (e, t) {
									var a = e.name,
										n = e.mockup;
									return i.a.createElement(
										'li',
										{
											className: 'portfolio__item animate__animated '
												.concat(l, ' animate__delay-1')
												.concat(t + 4),
											key: e + t,
										},
										i.a.createElement(
											c.b,
											{to: '/works/'.concat(t)},
											i.a.createElement('img', {src: n, alt: a})
										)
									);
								})
							),
							i.a.createElement(
								'div',
								{className: 'scroll scroll--white portfolio__scroll animate__animated '.concat(u)},
								i.a.createElement(
									'div',
									{className: 'scroll__track'},
									i.a.createElement('div', {
										className: 'scroll__bar',
										style: {top: ''.concat(s, '%'), transform: 'translate(-50%,-'.concat(s, '%)')},
									})
								)
							)
						)
					);
				},
				H = function (e) {
					var t = e.data,
						a = t.title,
						n = t.skills,
						o = e.animation,
						s =
							'open' === o ? 'animate__fadeInRight' : 'close' === o ? 'animate__fadeOutRight' : '',
						c = 'open' === o ? 'animate__fadeInLeft' : 'close' === o ? 'animate__fadeOutLeft' : '';
					return i.a.createElement(
						'section',
						{className: 'skills container'},
						i.a.createElement(
							'h2',
							{className: 'title title--main title--skills skills__title'},
							a.map(function (e, t) {
								return i.a.createElement(
									'span',
									{
										className: 'row animate__animated '.concat(s, ' animate__delay-').concat(t),
										key: e + t,
									},
									' ',
									e.map(function (e, t) {
										return i.a.createElement(
											'span',
											{className: 'title__letter title__letter--scale', key: e + t},
											e
										);
									})
								);
							})
						),
						i.a.createElement(
							'ul',
							{className: 'skills-list skills__skills-list'},
							n.map(function (e, t) {
								var a = e.name,
									n = e.level,
									o = t % 2 === 0 ? '' : 'animate__delay-1';
								return i.a.createElement(
									'li',
									{
										className: 'skills-list__item animate__animated '.concat(c, ' ').concat(o),
										key: a + n + t,
									},
									i.a.createElement('p', {className: 'skills-list__skill'}, a),
									i.a.createElement(
										'ul',
										{
											className: 'dots skills-list__dots animate__animated '
												.concat(c, ' ')
												.concat('animate__delay-2'),
										},
										g.map(function (e, t) {
											var a = t < n ? 'dots__item--active' : '';
											return i.a.createElement(
												'li',
												{className: 'dots__item '.concat(a), key: e + t},
												i.a.createElement('p', {className: 'hidden'}, 'item')
											);
										})
									)
								);
							})
						)
					);
				},
				M = Object(l.a)(function () {
					var e = Object(m.f)(),
						t = w.activeLanguage,
						a = d.skills,
						o = d.works,
						s = d[t],
						c = s.PAGES,
						l = s.HERO,
						u = s.ABOUT,
						g = s.WORKS,
						_ = s.CONTACT,
						h = s.SKILLS,
						b = s.POPUP,
						v = f.activePage,
						E = f.animation,
						S = f.changePage,
						T = f.setPage,
						L = i.a.createRef();
					return (
						Object(n.useEffect)(function () {
							T(e.location.pathname);
						}, []),
						Object(n.useEffect)(
							function () {
								e.push(v);
							},
							[v]
						),
						Object(n.useEffect)(function () {
							return (
								document.addEventListener('touchstart', function (e) {
									return k(e, S);
								}),
								function () {
									document.addEventListener('touchstart', function (e) {
										return k(e, S);
									});
								}
							);
						}, []),
						i.a.createElement(
							i.a.Fragment,
							null,
							i.a.createElement(z, {data: c, activePage: v, history: e}),
							i.a.createElement(
								'main',
								{ref: L},
								i.a.createElement(
									'h1',
									{className: 'hidden'},
									' Edward Arechwa Junior Front - end Developer '
								),
								' ',
								i.a.createElement(
									m.c,
									null,
									i.a.createElement(m.a, {
										path: '/',
										exact: !0,
										render: function () {
											return i.a.createElement(y, {animation: E, data: l});
										},
									}),
									i.a.createElement(m.a, {
										path: '/about',
										render: function () {
											return i.a.createElement(P, {animation: E, data: u});
										},
									}),
									i.a.createElement(m.a, {
										path: p.SKILLS,
										render: function () {
											return i.a.createElement(H, {
												animation: E,
												data: Object(r.a)({skills: a}, h),
											});
										},
									}),
									i.a.createElement(m.a, {
										path: p.WORKS,
										exact: !0,
										render: function () {
											return i.a.createElement(j, {animation: E, data: Object(r.a)({works: o}, g)});
										},
									}),
									i.a.createElement(m.a, {
										path: p.CONTACT,
										render: function () {
											return i.a.createElement(O, {animation: E, data: _});
										},
									}),
									i.a.createElement(m.a, {
										path: '/works/:id',
										render: function (e) {
											var t = e.match.params.id;
											return i.a.createElement(C, {data: Object(r.a)({work: o[t]}, b)});
										},
									})
								)
							),
							i.a.createElement(N, {data: c, activePage: v})
						)
					);
				});
			Object(v.g)({enforceActions: 'observed'}),
				s.a.render(
					i.a.createElement(c.a, null, i.a.createElement(M, null)),
					document.querySelector('#app')
				);
			a(31);
		},
	},
	[[22, 1, 2]],
]);
=======
(this.webpackJsonpportf=this.webpackJsonpportf||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),s=a.n(o),c=a(7),r=a(14),m=a(2),l=a(9),p={HOME:"/",ABOUT:"/about",SKILLS:"/skills",WORKS:"/works",CONTACT:"/contact"},u={EN:"EN",PL:"PL",RU:"RU"},g=["understand","junior","regular","advanced","master"],d={skills:[{name:"HTML",level:"4"},{name:"CSS",level:"4"},{name:"JavaScript",level:"4"},{name:"React",level:"4"},{name:"Redux",level:"3"},{name:"MobX",level:"2"},{name:"Git",level:"4"},{name:"BEM",level:"4"},{name:"Less/SASS",level:"4"},{name:"Webpack",level:"3"},{name:"Unit tests",level:"3"},{name:"WordPress",level:"2"},{name:"English",level:"3"},{name:"Polish",level:"5"},{name:"Russian",level:"5"}],works:[{name:"Art",mockup:"/assets/img/works/art_mockup.png",desktop:"/assets/img/works/art_desktop.png",technologies:["HTML","SCSS","JavaScript","Gulp"],ghPages:"https://sezardino.github.io/Art/",github:"https://github.com/sezardino/Art",description:""},{name:"Barber",mockup:"/assets/img/works/barber_mockup.png",desktop:"/assets/img/works/barber_desktop.png",mobile:"/assets/img/works/barber_mobile.png",technologies:["HTML","SCSS","JavaScript","Gulp"],ghPages:"https://sezardino.github.io/Barber/",github:"https://github.com/sezardino/Barber",description:""},{name:"Bookmark-React",mockup:"/assets/img/works/bookmark_mockup.png",desktop:"/assets/img/works/bookmark_desktop.png",mobile:"/assets/img/works/bookmark_mobile.png",technologies:["HTML","SCSS","JavaScript","React","Redux","React-Router-Dom"],ghPages:"https://sezardino.github.io/Bookmark/",github:"https://github.com/sezardino/Bookmark",description:""},{name:"Bookmark-JS",mockup:"/assets/img/works/bookmark_mockup.png",desktop:"/assets/img/works/bookmark_desktop.png",mobile:"/assets/img/works/bookmark_mobile.png",technologies:["HTML","SCSS","Gulp","JavaScript"],ghPages:"https://sezardino.github.io/Bookmark-js/",github:"https://github.com/sezardino/Bookmark-js",description:""},{name:"Cake",mockup:"/assets/img/works/cake_mockup.png",desktop:"/assets/img/works/cake_desktop.png",technologies:["HTML","CSS","Gulp","Slick Slider","Yandex Maps"],ghPages:"https://sezardino.github.io/PSD-Templates/Cake/",github:"https://github.com/sezardino/PSD-Templates/tree/master/Cake",description:""},{name:"Delivery food",mockup:"/assets/img/works/delivery_mockup.png",desktop:"/assets/img/works/delivery_desktop.png",mobile:"/assets/img/works/delivery_mobile.png",technologies:["HTML","SCSS","JavaScript","Webpack","Animate CSS","wow-js"],ghPages:"https://sezardino.github.io/Delivery/",github:"https://github.com/sezardino/Delivery",description:""},{name:"Digital",mockup:"/assets/img/works/digital_mockup.png",desktop:"/assets/img/works/digital_desktop.png",mobile:"/assets/img/works/digital_mobile.png",technologies:["HTML","SCSS","Gulp"],ghPages:"https://sezardino.github.io/PSD-Templates/Digital/",github:"https://github.com/sezardino/PSD-Templates/tree/master/Digital",description:""},{name:"Filmed",mockup:"/assets/img/works/filmed_mockup.png",desktop:"/assets/img/works/filmed_desktop.png",technologies:["HTML","SCSS","JavaScript","React","Redux","React-Router-DOM"],ghPages:"https://sezardino.github.io/FilmEd/",github:"https://github.com/sezardino/FilmEd",description:"if you won't to see click  "},{name:"Finance",mockup:"/assets/img/works/finance.png",technologies:["HTML","CSS","JavaScript","LocalStorage","React"],ghPages:"https://sezardino.github.io/Finance-app/",github:"https://github.com/sezardino/Finance-app",description:""},{name:"food",mockup:"/assets/img/works/food_mockup.png",desktop:"/assets/img/works/food_desktop.png",technologies:["HTML","CSS","JavaScript","Gulp"],ghPages:"https://sezardino.github.io/Food/",github:"https://github.com/sezardino/Food",description:""},{name:"Interior",mockup:"/assets/img/works/interior_mockup.png",desktop:"/assets/img/works/interior_desktop.png",technologies:["HTML","SCSS","Gulp"],ghPages:"https://sezardino.github.io/PSD-Templates/Interior/",github:"https://github.com/sezardino/PSD-Templates/tree/master/Interior",description:""},{name:"Keksogram",mockup:"/assets/img/works/keksogram_mockup.png",desktop:"/assets/img/works/keksogram_desktop.png",mobile:"/assets/img/works/keksogram_mobile.png",technologies:["HTML","CSS","JavaScript"],ghPages:"https://sezardino.github.io/Keksogram/",github:"https://github.com/sezardino/Keksogram",description:""},{name:"Landscape",mockup:"/assets/img/works/landscape_mockup.png",desktop:"/assets/img/works/landscape_desktop.png",mobile:"/assets/img/works/landscape_mobile.png",technologies:["HTML","SCSS","JavaScript","Gulp"],ghPages:"https://sezardino.github.io/Landscape/",github:"https://github.com/sezardino/Landscape",description:""},{name:"Netcliks",mockup:"/assets/img/works/netcliks_mockup.png",desktop:"/assets/img/works/netcliks_desktop.png",mobile:"/assets/img/works/netcliks_mobile.png",technologies:["HTML","CSS","JavaScript"],ghPages:"https://sezardino.github.io/Netclicks/",github:"https://github.com/sezardino/Netclicks",description:""},{name:"Photography",mockup:"/assets/img/works/photography_mockup.png",desktop:"/assets/img/works/photography_desktop.png",mobile:"/assets/img/works/photography_mobile.png",technologies:["HTML","SCSS","Gulp"],ghPages:"https://sezardino.github.io/PSD-Templates/Fotography/",github:"https://github.com/sezardino/PSD-Templates/tree/master/Fotography",description:""},{name:"Space",mockup:"/assets/img/works/space_mockup.png",desktop:"/assets/img/works/space_desktop.png",mobile:"/assets/img/works/space_mobile.png",technologies:["HTML","SCSS","JavaScript","Relax js","VidBG"],ghPages:"https://sezardino.github.io/PSD-Templates/SpaceY/",github:"https://github.com/sezardino/PSD-Templates/tree/master/SpaceY",description:""},{name:"Star Wars DataBase",mockup:"/assets/img/works/star-wars.png",technologies:["React","React-Router-DOM"],ghPages:"https://sezardino.github.io/StarWard-DB/",github:"https://github.com/sezardino/StarWard-DB",description:""},{name:"ToDo",mockup:"/assets/img/works/todo.png",technologies:["React"],ghPages:"https://sezardino.github.io/ToDo-app/",github:"https://github.com/sezardino/ToDo-app",description:""},{name:"Windows",mockup:"/assets/img/works/windows_mockup.png",desktop:"/assets/img/works/windows_desktop.png",mobile:"/assets/img/works/windows_mobile.png",technologies:["HTML","CSS","JavaScript"],ghPages:"https://sezardino.github.io/Windows/",github:"https://github.com/sezardino/Windows",description:""}],EN:{PAGES:[{name:"Home",path:p.HOME},{name:"About",path:p.ABOUT},{name:"Skills",path:p.SKILLS},{name:"Works",path:p.WORKS},{name:"Contact",path:p.CONTACT}],HERO:{name:"EDWARD",surname:"ARECHWA",quality:"junior front-end developer"},ABOUT:{title:[["a","b","o","u","t"],["m","e"]],text:"Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.",textEnd:"Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach."},WORKS:{title:[["P","o","r","t","f"],["o","l","i","o"]]},POPUP:{GHPagesLink:"View",gitHubLink:"View on GitHub",technologiesTitle:"Using Technologies"},CONTACT:{title:["C","o","n","t","a","c","t"]},SKILLS:{title:[["m","y"],["S","K","i","L","l","S"]]}},PL:{PAGES:[{name:"Strona g\u0142\xf3wna",path:p.HOME},{name:"O mnie",path:p.ABOUT},{name:"Umiej\u0119tno\u015bci",path:p.SKILLS},{name:"Portfolio",path:p.WORKS},{name:"Kontakt",path:p.CONTACT}],HERO:{name:"EDWARD",surname:"ARECHWA",quality:"junior front-end developer"},ABOUT:{title:[["o"],["m","n","i","e"]],text:"Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.",textEnd:"Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach."},SKILLS:{title:[["u","m","i","e"],["j","\u0119","t","n"],["o","\u015b","c","i"]]},WORKS:{title:[["P","o","r","t","f"],["o","l","i","o"]]},POPUP:{GHPagesLink:"View",gitHubLink:"View on GitHub",technologiesTitle:"Zastosowane technologie"},CONTACT:{title:["K","o","n","t","a","k","t"]}},RU:{PAGES:[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:p.HOME},{name:"\u041e\u0431\u043e \u043c\u043d\u0435",path:p.ABOUT},{name:"\u041d\u0430\u0432\u044b\u043a\u0438",path:p.SKILLS},{name:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e",path:p.WORKS},{name:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442",path:p.CONTACT}],HERO:{name:"\u042d\u0434\u0432\u0430\u0440\u0434",surname:"\u041e\u0440\u0435\u0445\u0432\u0430",quality:"junior front-end developer"},ABOUT:{title:[["\u043e","\u0431","\u043e"],["\u043c","\u043d","\u0435"]],text:"Jestem pocz\u0105tkuj\u0105cym front-end developerem. Tworz\u0119 strony internetowe z wykorzystaniem nowoczesnych technologii webowych, dostosowanych do wsp\xf3\u0142czesnych standard\xf3w.",textEnd:"Zawsze jestem na bie\u017c\u0105co z aktualnymi trendami w webdesignie, a powierzone mi zadania realizuj\u0119 dok\u0142adnie i terminowo, dbaj\u0105c przy tym o poprawno\u015b\u0107 dzia\u0142ania tworzonych przeze mnie stron na wszystkich urz\u0105dzeniach."},SKILLS:{title:[["\u043c","\u043e","\u0438"],["\u043d","\u0430","\u0432","\u044b","\u043a","\u0438"]]},WORKS:{title:[["\u041f","\u043e","\u0440","\u0442","\u0444"],["\u043e","\u043b","\u0438","\u043e"]]},POPUP:{GHPagesLink:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",gitHubLink:"\u041f\u043e\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 GitHub",technologiesTitle:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"},CONTACT:{title:["\u041a","\u043e","\u043d","\u0442","\u0430","\u043a","\u0442","\u044b"]}}},_=function(e,t){var a=Object.values(p);if(-1===e){var n=a.findIndex((function(e){return e===t}));return a[n=n-1<0?a.length-1:n-1]}var i=a.findIndex((function(e){return e===t}));return a[i=i+1>a.length-1?0:i+1]},h={event:!1,startX:0,dist:0,shiftX:0,startTime:0,time:0,minDist:60,maxDist:400,maxTime:700,minTime:150},k=function(e,t){if(h.startX=Math.floor(e.changedTouches[0].clientX),h.startTime=(new Date).getTime(),!h.event){h.event=!0;var a=function(e){var a=(new Date).getTime();h.time=a-h.startTime,h.shiftX=Math.floor(e.changedTouches[0].clientX)-h.startX,h.dist=Math.abs(h.shiftX),h.dist<h.minDist||h.dist>h.maxDist||h.time<h.minTime||h.time>h.maxTime||(h.dist>h.minDist||h.dist<h.maxDist||h.time>h.minTime||h.time<h.maxTime)&&(h.shiftX<0&&t(1),h.shiftX>0&&t(-1))};document.addEventListener("touchend",(function(e){a(e)})),document.removeEventListener("touchend",(function(e){a(e)}))}},b=a(8),v=a(1),w=new function e(){var t=this;Object(b.a)(this,e),this.activeLanguage=u.EN,this.languageBar=!1,this.handler=function(e){t.languageBar?t.languageBar&&(t.activeLanguage=e,t.languageBar=!1):t.languageBar=!0},Object(v.m)(this,{activeLanguage:v.n,languageBar:v.n,handler:v.f})},f=new function e(){var t=this;Object(b.a)(this,e),this.activePage=p.HOME,this.animation="open",this.nextPage=p.ABOUT,this.prevPage=p.CONTACT,this.setPage=function(e){t.activePage=e,t.nextPage=_(1,t.activePage),t.prevPage=_(-1,t.activePage)},this.switching=function(e){t.activePage=1===e?_(1,t.activePage):-1===e?_(-1,t.activePage):e,t.nextPage=_(1,t.activePage),t.prevPage=_(-1,t.activePage),t.animation="open"},this.changePage=function(e){t.animation="close",setTimeout((function(){return t.switching(e)}),1500)},Object(v.m)(this,{activePage:v.n,animation:v.n,nextPage:v.n,prevPage:v.n,changePage:v.f,setPage:v.f,switching:v.f})},E=new function e(){var t=this;Object(b.a)(this,e),this.desktopMockup=!0,this.mobileMockup=!1,this.desktopHandler=function(){t.mobileMockup=!1,t.desktopMockup=!0},this.mobileHandler=function(){t.mobileMockup=!0,t.desktopMockup=!1},Object(v.m)(this,{mobileMockup:v.n,desktopMockup:v.n,desktopHandler:v.f,mobileHandler:v.f})},S=new function e(){var t=this;Object(b.a)(this,e),this.menuOpen=!1,this.toggleMenu=function(){t.menuOpen=!t.menuOpen},Object(v.m)(this,{menuOpen:v.n,toggleMenu:v.f})},N=Object(l.a)((function(e){var t=e.data,a=e.activePage,n=f.changePage;return i.a.createElement("footer",{className:"footer container"},i.a.createElement("button",{className:"button button-arrow button-arrow--prev footer__prev",onClick:function(){return n(-1)}},i.a.createElement("span",{className:"hidden"},"Prev page")),i.a.createElement("nav",{className:"nav nav--footer footer__nav"},t.map((function(e,t){var n=a===e.path?"nav__link--active":"";return i.a.createElement("p",{key:e+t,className:"nav__link ".concat(n)})}))),i.a.createElement("button",{className:"button button-arrow button-arrow--next footer__next",onClick:function(){return n(1)}},i.a.createElement("span",{className:"hidden"},"Next page")))})),z=Object(l.a)((function(e){var t=e.data,a=e.activePage,n=w.languageBar,o=w.activeLanguage,s=w.handler,r=f.changePage,m=S.menuOpen,l=S.toggleMenu;return i.a.createElement("header",{className:"header container"},i.a.createElement("button",{className:"button button--hamburger header__button",onClick:l}),i.a.createElement(c.b,{to:p.HOME,className:"logo"},i.a.createElement("img",{src:"./assets/img/logo.svg",alt:"logo"})),i.a.createElement("div",{className:"menu header__menu ".concat(m&&"menu--active")},i.a.createElement("button",{className:"button button--close menu__button",onClick:l}),i.a.createElement("nav",{className:"nav nav--header menu__nav header__nav"},t.map((function(e,t){var n=a===e.path?"nav__link--active":"";return i.a.createElement("button",{className:"nav__link ".concat(n),key:e.name+t,onClick:function(){return t=e.path,r(t),void l();var t}},e.name)}))),i.a.createElement("ul",{className:"languages ".concat(n&&"languages--active"," menu__languages header__languages")},Object.values(u).map((function(e,t){var a=e===o?"languages__button--active":"";return i.a.createElement("li",{className:"languages__item",key:e+t},i.a.createElement("button",{className:"languages__button ".concat(a),onClick:function(){return s(e)}},e))})))))})),y=function(e){var t=e.animation,a="open"===t?"animate__fadeInBottomLeft":"close"===t?"animate__fadeOutBottomLeft":"",n="open"===t?"animate__fadeInBottomRight":"close"===t?"animate__fadeOutBottomRight":"";return i.a.createElement("section",{className:"hero container"},i.a.createElement("p",{className:"hero__img animate__animated ".concat(n)},i.a.createElement("picture",null,i.a.createElement("source",{media:"(min-width: 768px)",srcSet:"assets/img/hero_desktop.png"}),i.a.createElement("img",{src:"assets/img/hero.png",alt:""}))),i.a.createElement("div",{className:"hero__wrapper"},i.a.createElement("h2",{className:"title title--hero hero__title"},i.a.createElement("span",{className:"title title--name animate__animated animate__delay-12 ".concat(a)},"Edward"),i.a.createElement("span",{className:"title title--surname animate__animated animate__delay-13 ".concat(a)},"Arechwa")),i.a.createElement("p",{className:"text text--hero hero__text animate__animated animate__delay-14 ".concat(a)},"junior front-end developer")))},P=function(e){var t=e.animation,a="open"===t?"animate__rollIn":"close"===t?"animate__rollOut":"",n=e.data,o=n.title,s=n.text,c=n.textEnd;return i.a.createElement("section",{className:"about container"},i.a.createElement("h2",{className:"title title--main title--about about__title"},o.map((function(e,t){return i.a.createElement("span",{key:e+t,className:"row animate__animated ".concat(a," animate__delay-").concat(t)}," ",e.map((function(e,t){return i.a.createElement("span",{className:"title__letter title__letter--scale",key:e+t},e)})))}))),i.a.createElement("div",{className:"about__wrapper"},i.a.createElement("p",{className:"text text--about about__text animate__animated ".concat(a," animate__delay-2")},s),i.a.createElement("br",null),i.a.createElement("p",{className:"text text--about about__text animate__animated ".concat(a," animate__delay-2")},c)))},O=function(e){var t=e.animation,a="open"===t?"animate__jackInTheBox":"close"===t?"animate__zoomOut":"",n="open"===t?"animate__zoomIn":"close"===t?"animate__zoomOut":"",o=e.data.title;return i.a.createElement("section",{className:"contact container"},i.a.createElement("div",{className:"contact__wrapper"},i.a.createElement("h2",{className:"title title--contact title--main contact__title animate__animated ".concat(a)},o),i.a.createElement("ul",{className:"info contact__info"},i.a.createElement("li",{className:"info__item animate__animated animate__delay-16 ".concat(n)},i.a.createElement("span",{className:"info__def"},"tel:"),i.a.createElement("span",{className:"info__data"},"+48 576 048 669")),i.a.createElement("li",{className:"info__item animate__animated animate__delay-17 ".concat(n)},i.a.createElement("span",{className:"info__def"},"e-mail:"),i.a.createElement("span",{className:"info__data"},"e.arechwa@gmail.com")))),i.a.createElement("ul",{className:"social contact__social"},i.a.createElement("li",{className:"social__item animate__animated animate__delay-13 ".concat(n)},i.a.createElement("a",{href:"https://github.com/sezardino",target:"blank",className:"social__link"},"git")),i.a.createElement("li",{className:"social__item animate__animated animate__delay-14 ".concat(n)},i.a.createElement("a",{href:"https://www.facebook.com/edvard.arekhva/",target:"blank",className:"social__link"},"f")),i.a.createElement("li",{className:"social__item animate__animated animate__delay-15 ".concat(n)},i.a.createElement("a",{href:"https://vk.com/sezardino",target:"blank",className:"social__link"},"vk"))))},T=a(11),L=function(e){var t=Object(n.useState)(0),a=Object(T.a)(t,2),i=a[0],o=a[1];return[i,function(){var t=e.current,a=Math.floor(100*t.scrollTop/(t.scrollHeight-t.clientHeight));o(a)}]},C=Object(l.a)((function(e){var t,a=i.a.createRef(),n=L(a),o=Object(T.a)(n,2),s=o[0],c=o[1],r=E.mobileMockup,l=E.desktopMockup,p=E.mobileHandler,u=E.desktopHandler,g=e.data,d=g.technologiesTitle,_=g.GHPagesLink,h=g.gitHubLink,k=g.work,b=k.name,v=k.mockup,w=k.mobile,f=k.desktop,S=k.ghPages,N=k.github,z=k.technologies,y=Object(m.f)();w||f?r?t=w:l&&(t=f):t=v;var P=l?"view__mockup--desktop":"view__mockup--mobile";return i.a.createElement("section",{className:"popup"},i.a.createElement("div",{className:" popup__wrapper"},i.a.createElement("button",{className:"button button-close button-close--dark popup__button",onClick:function(){y.goBack(),u()}}),i.a.createElement("h2",{className:"title title--main title--popup popup__title"},b),i.a.createElement("div",{className:"view popup__view"},i.a.createElement("div",{className:"view__mockup-wrapper"},i.a.createElement("div",{className:"view__mockup ".concat(P)},i.a.createElement("p",{className:"view__img",ref:a,onScroll:c},i.a.createElement("img",{src:t,alt:b}))),i.a.createElement("div",{className:"scroll scroll--black view__scroll"},i.a.createElement("div",{className:"scroll__track"},i.a.createElement("div",{className:"scroll__bar",style:{top:"".concat(s,"%"),transform:"translate(-50%,-".concat(s,"%)")}})))),i.a.createElement("div",{className:"view__buttons"},i.a.createElement("button",{className:"button button-view view__button ".concat(l&&"button-view--active"),onClick:u},i.a.createElement("div",{className:"button__image"},i.a.createElement("img",{src:"/assets/img/icons/desktop.png",alt:"desktop icon"})),i.a.createElement("span",{className:"button-view__text"},"Desktop")),w&&i.a.createElement("button",{className:"button button-view view__button ".concat(r&&"button-view--active"),onClick:p},i.a.createElement("div",{className:"button__image"},i.a.createElement("img",{src:"/assets/img/icons/mobile.png",alt:"mobile icon"})),i.a.createElement("span",{className:"button-view__text"},"Mobile")))),i.a.createElement("div",{className:"description popup__description"},i.a.createElement("h2",{className:"title title--main title--popup description__title"},b),i.a.createElement("div",{className:"description__buttons"},i.a.createElement("a",{href:N,target:"blank",className:"button button--popup description__button"},h),i.a.createElement("a",{href:S,target:"blank",className:"button button--popup description__button"},_)),i.a.createElement("div",{className:"technologies description__technologies"},i.a.createElement("h3",{className:"title title--technologies technologies__title"},d),i.a.createElement("ul",{className:"technologies__list"},z.map((function(e,t){return i.a.createElement("li",{className:"technologies__item",key:e+t},e)})))))))})),j=function(e){var t=e.animation,a=i.a.createRef(),n=L(a),o=Object(T.a)(n,2),s=o[0],r=o[1],m="open"===t?"animate__rotateInDownRight":"close"===t?"animate__rotateOutDownRight":"",l="open"===t?"animate__flipInX":"",p="close"===t?"animate__flipOutX":"",u="open"===t?"animate__fadeIn animate__delay-5":"close"===t?"animate__fadeOut animate__delay-13":"",g=e.data,d=g.title,_=g.works;return i.a.createElement("section",{className:"portfolio container"},i.a.createElement("h2",{className:"title title--main title--portfolio portfolio__title"},d.map((function(e,t){return i.a.createElement("span",{className:"row animate__animated ".concat(m," animate__delay-1").concat(t),key:e+t},e.map((function(e,t){return i.a.createElement("span",{className:"title__letter title__letter--scale",key:e+t},e)})))}))),i.a.createElement("div",{className:"portfolio__wrapper "},i.a.createElement("ul",{className:"portfolio__list animate__animated ".concat(p," animate__delay-1"),ref:a,onScroll:r},_.map((function(e,t){var a=e.name,n=e.mockup;return i.a.createElement("li",{className:"portfolio__item animate__animated ".concat(l," animate__delay-1").concat(t+4),key:e+t},i.a.createElement(c.b,{to:"/works/".concat(t)},i.a.createElement("img",{src:n,alt:a})))}))),i.a.createElement("div",{className:"scroll scroll--white portfolio__scroll animate__animated ".concat(u)},i.a.createElement("div",{className:"scroll__track"},i.a.createElement("div",{className:"scroll__bar",style:{top:"".concat(s,"%"),transform:"translate(-50%,-".concat(s,"%)")}})))))},H=function(e){var t=e.data,a=t.title,n=t.skills,o=e.animation,s="open"===o?"animate__fadeInRight":"close"===o?"animate__fadeOutRight":"",c="open"===o?"animate__fadeInLeft":"close"===o?"animate__fadeOutLeft":"";return i.a.createElement("section",{className:"skills container"},i.a.createElement("h2",{className:"title title--main title--skills skills__title"},a.map((function(e,t){return i.a.createElement("span",{className:"row animate__animated ".concat(s," animate__delay-").concat(t),key:e+t}," ",e.map((function(e,t){return i.a.createElement("span",{className:"title__letter title__letter--scale",key:e+t},e)})))}))),i.a.createElement("ul",{className:"skills-list skills__skills-list"},n.map((function(e,t){var a=e.name,n=e.level,o=t%2===0?"":"animate__delay-1";return i.a.createElement("li",{className:"skills-list__item animate__animated ".concat(c," ").concat(o),key:a+n+t},i.a.createElement("p",{className:"skills-list__skill"},a),i.a.createElement("ul",{className:"dots skills-list__dots animate__animated ".concat(c," ").concat("animate__delay-2")},g.map((function(e,t){var a=t<n?"dots__item--active":"";return i.a.createElement("li",{className:"dots__item ".concat(a),key:e+t},i.a.createElement("p",{className:"hidden"},"item"))}))))}))))},M=Object(l.a)((function(){var e=Object(m.f)(),t=w.activeLanguage,a=d.skills,o=d.works,s=d[t],c=s.PAGES,l=s.HERO,u=s.ABOUT,g=s.WORKS,_=s.CONTACT,h=s.SKILLS,b=s.POPUP,v=f.activePage,E=f.animation,S=f.changePage,T=f.setPage,L=i.a.createRef();return Object(n.useEffect)((function(){T(e.location.pathname)}),[]),Object(n.useEffect)((function(){e.push(v)}),[v]),Object(n.useEffect)((function(){return document.addEventListener("touchstart",(function(e){return k(e,S)})),function(){document.addEventListener("touchstart",(function(e){return k(e,S)}))}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(z,{data:c,activePage:v,history:e}),i.a.createElement("main",{ref:L},i.a.createElement("h1",{className:"hidden"}," Edward Arechwa Junior Front - end Developer ")," ",i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/",exact:!0,render:function(){return i.a.createElement(y,{animation:E,data:l})}}),i.a.createElement(m.a,{path:"/about",render:function(){return i.a.createElement(P,{animation:E,data:u})}}),i.a.createElement(m.a,{path:p.SKILLS,render:function(){return i.a.createElement(H,{animation:E,data:Object(r.a)({skills:a},h)})}}),i.a.createElement(m.a,{path:p.WORKS,exact:!0,render:function(){return i.a.createElement(j,{animation:E,data:Object(r.a)({works:o},g)})}}),i.a.createElement(m.a,{path:p.CONTACT,render:function(){return i.a.createElement(O,{animation:E,data:_})}}),i.a.createElement(m.a,{path:"/works/:id",render:function(e){var t=e.match.params.id;return i.a.createElement(C,{data:Object(r.a)({work:o[t]},b)})}}))),i.a.createElement(N,{data:c,activePage:v}))}));Object(v.g)({enforceActions:"observed"}),s.a.render(i.a.createElement(c.a,null,i.a.createElement(M,null)),document.querySelector("#app"));a(31)}},[[22,1,2]]]);
>>>>>>> c1be66bc8d1dc71d2611d502a59f0d03a99fc05f
//# sourceMappingURL=main.55407914.chunk.js.map
