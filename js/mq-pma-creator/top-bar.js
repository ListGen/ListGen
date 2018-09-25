/* MQ PMA Creator - Top Bar
 * Author: bhuelga
 */

class TopBar {

	/* Top Bar
	 * ---------------
	 * Controls the top bar of the creator.
	 */
	constructor(areaCallback, windowCallback) {
		this.areaCallback = areaCallback;
		this.windowCallback = windowCallback;
		
		this._querySelectors();
		this._initialize();
		this._addEventListeners();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		// Area Dropdown
		this.topAreaDropdown = $('#top-areas .top-dropdown');
		this.topAreaContent = $('#top-areas .top-dropdown-content');

		// Steps
		this.topSteps = $('#top-steps');
		this.topStepEditor = $('#top-step-editor');
		this.topStepMailing = $('#top-step-mailing');
		this.topStepPreview = $('#top-step-preview');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners.
	 */
	_addEventListeners() {		
		// Opens Area Dropdown
		this.topAreaDropdown.click((e) => {
			this.topAreaContent.slideToggle(300);
			e.stopPropagation();
		});

		// Closes dropdown on outside click
		$('html').click(() => {
			this.topAreaContent.slideUp(300);
		});

		// Switches Area Name and calls callback
		this.topAreaChoices.click((e) => {
			const newArea = $(e.currentTarget).children('.area-container').html();
			this.areaCallback(newArea);
		});

		// changes to editor, mailing list, or final preview
		this.topStepEditor.click((e) => {
			$('.top-step').removeClass('selected');
			$(e.currentTarget).addClass('selected');
			this.windowCallback(0);
		});
		this.topStepMailing.click((e) => {
			$('.top-step').removeClass('selected');
			$(e.currentTarget).addClass('selected');
			this.windowCallback(1);
		});
		this.topStepPreview.click((e) => {
			$('.top-step').removeClass('selected');
			$(e.currentTarget).addClass('selected');
			this.windowCallback(2);
		});
	}

	/* Initialize Dropdown - private
	 * ---------------
	 * Initializes dropdown with all agent-owned areas and the status of their steps.
	 */
	_initialize() {
		for (let area in mlsAreas) {
			const completeList = [mlsAreas[area]['editComplete'], mlsAreas[area]['mailingComplete'], mlsAreas[area]['previewComplete']];
			let div = $('<div><span class="area-container">' + area + '</span></div>');
			let statusContainer = $('<span class="status-container"></span>');
			if (!mlsAreas[currentArea]['totalComplete']) {
				statusContainer.html('INCOMPLETE');
				div.css('background', STATUS_COLORS['Incomplete']);
			} else {
				statusContainer.html('COMPLETE');
				div.css('background', STATUS_COLORS['Complete']);
			}
			div.append(statusContainer);
			this.topAreaContent.append(div);
		}

		this.topAreaChoices = $('#top-areas .top-dropdown-content div');
	}

	/*   PUBLIC   */

	/* Complete Area - private
	 * ---------------
	 * Marks the current area as complete.
	 */
	completeArea() {
		console.log('Mark Area as Completed.');
	}


}