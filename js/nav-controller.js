/* Nav Controller
 * Author: bhuelga
 */

var signedIn = true;

const navBreakpoint = 800;
const delayMedium = 300;
const delayFast = 200;

/* Nav Controller
 * ----
 * Controls the top, bottom, and side navs.
 */

class NavController {
	constructor() {
		this._querySelectors();
		this._addEventListeners();
		this._initializeNavs();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all elements on nav menus that persist through all screens
	 */
	_querySelectors() {
		this.main = $('main');
		this.accountPic = $('.account-pic');
		this.signIn = $('.sign-in');

		this.topNavLinks = $('#top-nav-links-container');

		this.navMenuHeader = $('#nav-menu-header');
		this.navMenuHeaderIcon = $('#nav-menu-header a');
		this.navMenuHam = $('#nav-menu-hamburger');
		this.navMenu = $('#nav-menu');
		this.navMenuLinksSignedIn = $('.nav-menu-links.signed-in div');
		this.navMenuLinksSignedOut = $('.nav-menu-links.signed-out div');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners on all nav buttons and menus.
	 */
	_addEventListeners() {
		$(window).resize(() => {
			if (this.main.width() >= navBreakpoint && this.prevWidth < navBreakpoint)
				this.topNavLinks.show(delayMedium);
			else if (this.main.width() < navBreakpoint && this.prevWidth > navBreakpoint)
				this.topNavLinks.hide(delayMedium);
			this.prevWidth = this.main.width();
		});

		this.main.click(() => this._toggleNav(false));

		this.navMenuHam.click(() => {
			this.navMenuHam.toggleClass('is-active');
			this._toggleNav(this.navMenuHam.hasClass('is-active'));
		});
	}

	/* Toggle Nav - private
	 * ---------------
	 * Opens and closes the nav menu.
	 *
	 * @param open bool : true if opening nav, false if closing nav
	 */
	_toggleNav(open) {
		if (open) {
			const navSize = (this.main.width() >= navBreakpoint) ? '30%' : '80%';
			this.main.css('filter', 'brightness(.2)');
			$('body').css('overflow', 'hidden');
			this.navMenu.width(navSize);
			this.navMenuHeader.width(navSize);
			setTimeout(() => {
				this.navMenuHeaderIcon.show(delayFast);
				if (signedIn)
					staggerShowOrHide(this.navMenuLinksSignedIn);
				else
					staggerShowOrHide(this.navMenuLinksSignedOut);
			}, delayFast);
			this.topNavLinks.hide(delayFast);
		} else {
			this.main.css('filter', 'brightness(1)');
			$('body').css('overflow', 'initial');
			this.navMenu.width(0);
			this.navMenuHeader.width(0);
			this.navMenuHeaderIcon.hide(delayFast);
			if (signedIn)
				staggerShowOrHide(this.navMenuLinksSignedIn, false, true, 15, 75);
			else
				staggerShowOrHide(this.navMenuLinksSignedOut, false, true, 15, 75);
			this.navMenuHam.removeClass('is-active');
			if (this.main.width() >= navBreakpoint)
				this.topNavLinks.show(delayFast);
		}
	}

	/* Initialize App - private
	 * ---------------
	 * Initializes all local data for the website.
	 */
	_initializeNavs() {
		this.prevWidth = this.main.width();
		if (this.main.width() > navBreakpoint) this.topNavLinks.show();
	}

}

const navController = new NavController();