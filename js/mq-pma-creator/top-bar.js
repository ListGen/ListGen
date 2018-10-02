/* MQ PMA Creator - Top Bar
 * Author: bhuelga
 */

class TopBar {

	/* Top Bar */
	constructor(areaCallback, windowCallback) {
		this.areaCallback = areaCallback;
		this.windowCallback = windowCallback;
		
		this._querySelectors();
		this._initialize();
		this._addEventListeners();
	}

	/* Query Selectors */
	_querySelectors() {
		this.areaDropdown = $('#top-areas .top-dropdown');
		this.areaDropdownContent = $('#top-areas .top-dropdown-content');
		this.stepsContainer = $('#top-steps');
		this.steps = $('.top-step');
	}

	/* Add Event Listeners */
	_addEventListeners() {		
		// Opens area dropdown
		this.areaDropdown.click((e) => {
			this.areaDropdownContent.slideToggle(300);
			e.stopPropagation();
		});

		// Closes dropdown on outside click
		$('html').click(() => {
			this.areaDropdownContent.slideUp(300);
		});

		// Switches area
		this.areaChoices.click((e) => {
			const newArea = $(e.currentTarget).children('.area-container').html();
			this.areaCallback(newArea);
		});

		// Switches step
		this.steps.click((e) => {
			this.windowCallback($(e.currentTarget).html());
		});
	}

	/* Initialize */
	_initialize() {
		for (let area in mlsAreas) {			
			let div = $('<div><span class="area-container">' + area + '</span></div>');
			let statusContainer = $('<span class="status-container"></span>');
			if (mlsAreas[area]['totalComplete']) {
				statusContainer.html('COMPLETE');
				div.addClass('complete');
			} else {
				statusContainer.html('INCOMPLETE');
			}
			div.append(statusContainer);
			this.areaDropdownContent.append(div);
		}

		this.areaChoices = $('#top-areas .top-dropdown-content div');
	}


	/*   PUBLIC   */

	/* Complete Area
	 * ---------------
	 * Marks the current area as complete. 
	 */
	completeArea() {
		this.areaChoices.each((e) => {
			const choice = $(this.areaChoices[e]);
			if (choice.children('.area-container').html() === currentArea) {
				choice.children('.status-container').html('COMPLETE');
				choice.addClass('complete');
			}
		});
	}

}