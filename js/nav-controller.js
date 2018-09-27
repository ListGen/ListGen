/* Nav Controller
 * Author: bhuelga
 */

var signedIn = true;

const navBreakpoint = 876;
const delayMedium = 300;
const delayFast = 200;

class NavController {

	/* Nav Controller */
	constructor() {
		this._querySelectors();
		this._addEventListeners();
		this._initialize();
	}

	/* Query Selectors */
	_querySelectors() {
		this.main = $('main');

		this.navMenuHeader = $('#nav-menu-header');
		this.navMenuHam = $('#nav-menu-hamburger');
		this.navMenu = $('#nav-menu');

		this.topNavLinks = $('#tnl-container');
		this.navMenuLinksSignedIn = $('.nav-menu-links.signed-in div');
		this.navMenuLinksSignedOut = $('.nav-menu-links.signed-out div');
	}

	/* Add Event Listeners */
	_addEventListeners() {
		// hide some top bar links when resizing
		$(window).resize(() => {
			if (this.main.width() >= navBreakpoint && this.prevWidth < navBreakpoint)
				this.topNavLinks.show(delayMedium);
			else if (this.main.width() < navBreakpoint && this.prevWidth > navBreakpoint)
				this.topNavLinks.hide(delayMedium);

			if (this.navMenu.width()) {
				const navSize = (this.main.width() >= navBreakpoint) ? '30%' : '80%';
				this.navMenu.width(navSize);
				this.navMenuHeader.width(navSize);
			}
			
			this.prevWidth = this.main.width();
		});

		// clicking hamburger toggles nav
		this.navMenuHam.click(() => {
			this.navMenuHam.toggleClass('is-active');					// .is-active specific to hamburger.scss
			this._toggleNav(this.navMenuHam.hasClass('is-active'));
		});

		// closes nav menu
		$('#nav-overlay').click(() => {
			this._toggleNav(false);
		});
	}

	/* Toggle Nav */
	_toggleNav(open) {
		if (open) {
			const navSize = (this.main.width() >= navBreakpoint) ? '30%' : '80%';
			$('#nav-overlay').fadeIn(500);
			$('body').css('overflow', 'hidden');
			this.navMenu.width(navSize);
			this.navMenuHeader.width(navSize);
			this.topNavLinks.hide(delayFast);

			if (signedIn) 
				this.navMenuLinksSignedIn.slideDown();
			else 
				this.navMenuLinksSignedOut.slideDown();

		} else {
			$('#nav-overlay').fadeOut(500);
			$('body').css('overflow', 'initial');
			this.navMenu.width(0);
			this.navMenuHeader.width(0);

			if (signedIn) 
				this.navMenuLinksSignedIn.slideUp();
			else 
				this.navMenuLinksSignedOut.slideUp(500);

			this.navMenuHam.removeClass('is-active');
			if (this.main.width() >= navBreakpoint)
				this.topNavLinks.show(delayFast);
		}
	}

	/* Initialize */
	_initialize() {
		this.prevWidth = this.main.width();
		if (this.main.width() > navBreakpoint) this.topNavLinks.show();
	}

}

const navController = new NavController();