/* MQ PMA Creator - Main Window
* Author: bhuelga
*/

class MainWindow {

	/* Main Window */
	constructor(setAreaCallback, setWindowCallback, completeAreaCallback) {
		this.setAreaCallback = setAreaCallback;
		this.setWindowCallback = setWindowCallback;
		this.completeAreaCallback = completeAreaCallback;
		this._bindToCallbacks();
		this._querySelectors();
		this._addEventListeners();
		this._initialize();
	}

	/* Bind To Callbacks */
	_bindToCallbacks() {
		this._updateStep = this._updateStep.bind(this);
		this._backToEdit = this._backToEdit.bind(this);
		this.setWindow = this.setWindow.bind(this);
	}

	/* Query Selectors */
	_querySelectors() {
		this.mainWindow = $('#main-window');
		this.editSubWindow = $('#edit-window');
		this.mailingSubWindow = $('#mailing-window');
		this.previewSubWindow = $('#preview-window');
		this.editBanner = $('#edit-banner');
		this.mailingBanner = $('#mailing-banner');
	}

	/* Add Event Listeners */
	_addEventListeners() {
		// clicking in the complete banner will switch the window
		$('.complete-banner').click((e) => {
			const complete = ($(e.currentTarget).attr('id') === 'edit-banner') ? mlsAreas[currentArea]['mailing-complete'] : mlsAreas[currentArea]['editor-complete'];
			const message = (complete) ? '.complete-message' : '.incomplete-message';
			const step = $(e.currentTarget).children(message).children('.step-link').html();
			this.setWindowCallback(step);
		});
	}

	/* Intialize Sections */
	_initialize() {
		this.editWindow = new EditWindow(this._updateStep, this.completeAreaCallback);
		this.mailingWindow = new MailingWindow(this._updateStep, this.completeAreaCallback);
		this.previewWindow = new PreviewWindow(this._backToEdit, this.setAreaCallback, this.completeAreaCallback);
	}


	/*   CALLBACKS   */

	/* Update Step
	 * ---------------
	 * Updates all other steps with current status of the step.
	 *
	 * @param complete bool : true if complete, false if not
	 */
	_updateStep(step, complete) {
		if (!complete) this.previewWindow.disable();

		if (step === 'Editor')
			helper('editor-complete', 'mailing-complete', this.editBanner, this.previewWindow, complete);
		else if (step === 'Mailing List')
			helper('mailing-complete', 'editor-complete', this.mailingBanner, this.previewWindow, complete);


		function helper(stepComplete, other, banner, previewWindow, complete) {
			mlsAreas[currentArea][stepComplete] = complete;

			if (complete) {
				banner.slideDown({
				    start: function () {
				        $(this).css({ display: "flex" });
				    }
			    });
			} else {
				banner.slideUp();
			}
			
			if (mlsAreas[currentArea][other]) {
				if (complete) previewWindow.enable();
				banner.children('.incomplete-message').hide();
				banner.children('.complete-message').show();
			} else {
				banner.children('.incomplete-message').show();
				banner.children('.complete-message').hide();
			}
		}
	}

	/* Back To Edit
	 * ---------------
	 * Sends the window back to the Editor and triggers a click on the corresponding step.
	 *
	 * @param step string : name of the step agent is going back to edit
	 * @param full bool : true if a specific step should be opened
	 */
	_backToEdit(step, full) {
		this.setWindowCallback('Editor');
		if (!full) this.editWindow.clickTools(step);
	}

	/*   PUBLIC   */

	/* Set Window
	 * ---------------
	 * Sets the display window to be the edit, mailing, or preview window.
	 *
	 * @param window string : 'Editor', 'Mailing List', or 'Final Preview'
	 */
	setWindow(window) {
		this.mainWindow.height(WINDOW_HEIGHTS[window]);
		if (window === 'Editor') {
			showHide(this.editSubWindow, this.mailingSubWindow, this.previewSubWindow);
			bannerHelper('editor-complete', 'mailing-complete', this.editBanner, this.mailingBanner);

		} else if (window === 'Mailing List') {
			showHide(this.mailingSubWindow, this.editSubWindow, this.previewSubWindow);
			bannerHelper('mailing-complete', 'editor-complete', this.mailingBanner, this.editBanner);
			
		} else {
			this.previewWindow.update();
			showHide(this.previewSubWindow, this.mailingSubWindow, this.editSubWindow);
			if ($('#complete-final-preview').hasClass('hidden')) this.mainWindow.height(WINDOW_HEIGHTS['Incomplete']);
			this.editBanner.hide();
			this.mailingBanner.hide();
		}

		function showHide(show, hide1, hide2) {
			hide1.hide();
			hide2.hide();
			show.show();
		}

		function bannerHelper(stepComplete, otherComplete, stepBanner, otherBanner) {
			otherBanner.hide();
			if (!mlsAreas[currentArea][stepComplete])  {
				stepBanner.hide();
			} else {
				stepBanner.show();
				if (mlsAreas[currentArea][otherComplete]) {
					stepBanner.children('.incomplete-message').hide();
					stepBanner.children('.complete-message').show();
				} else {
					stepBanner.children('.incomplete-message').show();
					stepBanner.children('.complete-message').hide();
				}
			}
		}
	}


	/* Update Area
	 * ---------------
	 * Updates the edit window to reflect the current PMA of that area, the mailing list
	 * to reflect the list of that area, and the final preview.
	 */
	update() {
		this.editWindow.update();
		this.mailingWindow.update();
		this.previewWindow.update();
	}

	resetFinalPreview() {
		this.previewWindow.resetPages();
	}

	takeSnapshot() {
		this.editWindow.takeSnapshot();
	}

}