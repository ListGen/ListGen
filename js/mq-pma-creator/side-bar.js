/* MQ PMA Creator - Side Bar
 * Author: bhuelga
 */

const delay = 500;

 class SideBar {

 	/* Side Bar
 	 * ---------------
 	 * Controls the side bar of the creator.
 	 */
 	constructor(colorSchemeCallback, fontStyleCallback) {
 		this.colorSchemeCallback = colorSchemeCallback;
 		this.fontStyleCallback = fontStyleCallback;

 		this._querySelectors();
 		this._addEventListeners();
 	}

 	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		// Container
		this.sideBar = $('#side-bar');

		// Step Options
		this.editSideOptions = $('#edit-side-options');
		this.colorSchemeContent = $('#color-scheme-content');
		this.fontStyleContent = $('#font-style-content');
		this.navigationContent = $('#navigation-content');

		this.mailingSideOptions = $('#mailing-side-options');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners.
	 */
	_addEventListeners() {
		// Controls accordions
		this.editSideOptions.on('click', '.accordion-header', function() {
    		$(this).toggleClass('active').next().slideToggle();
    		if ($(this).hasClass('active'))
    			$(this).children().last().html('expand_less');
    		else
    			$(this).children().last().html('expand_more');
 		});

		// Controls subaccordions
 		this.editSideOptions.on('click', '.accordion-subheader', function() {
    		$(this).toggleClass('active').next().slideToggle();
    		if ($(this).hasClass('active'))
    			$(this).children().last().html('close');
    		else
    			$(this).children().last().html('edit');
 		});

	}



	/*   PUBLIC   */

	/* Set Options - public
	 * ---------------
	 * Changes side bar options depending on which step the user is on.
	 */
	setOptions(step) {
		if (step === 0) {
			this.editSideOptions.show(delay);
			this.mailingSideOptions.hide(delay);
			this.sideBar.show(delay);
		} else if (step === 1) {
			this.mailingSideOptions.show(delay);
			this.editSideOptions.hide(delay);
			this.sideBar.show(delay);
		} else {
			this.sideBar.hide(delay);
		}
	}

	/* Initialize - public
	 * ---------------
	 * Populates the side bar with all system options.
	 */
	initialize() {
		this.populateColorSchemes();
		this.populateFontStyles();
	}

	/* Populate Color Schemes - public
	 * ---------------
	 * Populates the color schemes with system schemes.
	 */
	populateColorSchemes() {
		for (let scheme in COLOR_SCHEMES) {
			let colorScheme = COLOR_SCHEMES[scheme];
			let container = $('<div id="' + scheme + '" class="color-scheme-container"></div>');
			this.colorSchemeContent.append(container);
			container.append($('<i class="material-icons">fiber_manual_record</i>'));
			container.append($('<span>' + scheme + '</span>'));
			container.append($('<div class="primary" style="background-color: ' + colorScheme['primary'] + ';"></div>'));
			container.append($('<div class="secondary" style="background-color: ' + colorScheme['secondary'] + ';"></div>'));
			container.append($('<div class="tertiary" style="background-color: ' + colorScheme['tertiary'] + ';"></div>'));
			container.append($('<div class="quaternary" style="background-color: ' + colorScheme['quaternary'] + ';"></div>'));

			container.click((e) => {
				this.colorSchemeCallback(e.currentTarget.id);
			});
		}
	}

	/* Populate Font Styles - public
	 * ---------------
	 * Populates the font styles with system styles.
	 */
	populateFontStyles() {
		for (let font in FONT_STYLES) {
			let container = $('<div id="' + font + '" class="font-style-container"></div>');
			this.fontStyleContent.append(container);
			container.append($('<i class="material-icons">fiber_manual_record</i>'));
			container.append($('<span style="font-family:' + font + '">' + font + '</span>'));

			container.click((e) => {
				this.fontStyleCallback(e.currentTarget.id);
			});
		}
	}

	/* Populate Navigation - public
	 * ---------------
	 * Populates the navigation content with each half-page of the PMA.
	 */
	populateNavigation(canvases) {
		this.navigationContent.empty();
		for (let canvas of canvases) {
			let navPageLeft = $('<img class="navigation-page">');
			let navPageRight = $('<img class="navigation-page">');
			const leftSpread = crop(canvas, {x: 0, y: 0}, {x: canvas.width / 2, y: canvas.height})
			const rightSpread = crop(canvas, {x: canvas.width / 2, y: 0}, {x: canvas.width, y: canvas.height})
			navPageLeft.attr('src', leftSpread.toDataURL());
			navPageRight.attr('src', rightSpread.toDataURL());

			this.navigationContent.append(navPageLeft);
			this.navigationContent.append(navPageRight);
		}
	}

 }