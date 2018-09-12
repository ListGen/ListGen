/* MQ PMA Creator - Top Bar
 * Author: bhuelga
 */

class TopBar {

	/* Top Bar
	 * ---------------
	 * Controls the top bar of the creator.
	 */
	constructor(areaCallback, windowCallback) {
		// Save callbacks
		this.areaCallback = areaCallback;
		this.windowCallback = windowCallback;
		
		this._querySelectors();
		this._addEventListeners();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		// Area Dropdown
		this.topAreaDropdown = $('#top-areas .top-dropdown span');
		this.topAreaContent = $('#top-areas .top-dropdown-content');
		this.topAreaName = $('#top-areas .top-dropdown span');

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
		this._addAreaEventListeners();
		this._addStepEventListeners();
	}

	/* Add Area Event Listeners - private
	 * ---------------
	 * Sets event listeners to area dropdown.
	 */
	_addAreaEventListeners() {
		// Closes dropdown on outside click
		$(document).click(() => {
		    $('.top-dropdown-content').addClass('hidden');
		});

		// Opens Area Dropdown
		this.topAreaDropdown.click((e) => {
			e.stopPropagation();
			$('.top-dropdown-content').toggleClass('hidden');
		});

		// Switches Area Name and calls callback
		this.topAreaContent.click((e) => {
			const newArea = $(e.target).html();
			this.topAreaDropdown.html(newArea);
			this.areaCallback(newArea);
		});
	}

	/* Add Step Event Listeners - private
	 * ---------------
	 * Sets event listeners to step breadcrumb.
	 */
	_addStepEventListeners() {
		changeStep = changeStep.bind(this);

		// changes to editor, mailing list, or final preview
		this.topStepEditor.click(() => changeStep(0));
		this.topStepMailing.click(() => changeStep(2));
		this.topStepPreview.click(() => changeStep(4));

		function changeStep(stepNum) {
			const numChildren = this.topSteps.children().length;
			for (let i = 0; i < numChildren; i++) {
				if (i <= stepNum)
					$(this.topSteps.children().get(i)).addClass('selected');
				else
					$(this.topSteps.children().get(i)).removeClass('selected');
			}
			this.windowCallback(stepNum / 2);
		}
	}



	/*   PUBLIC    */

	/* Set Area Title - public
	 * ---------------
	 * Displays the name of the area being worked on.
	 */
	setAreaTitle(newArea) {
		this.topAreaDropdown.html(newArea);
	} 

}