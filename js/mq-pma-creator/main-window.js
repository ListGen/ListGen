/* MQ PMA Creator - Main Window
* Author: bhuelga
*/

class MainWindow {

	/* Main Window */
	constructor() {
		this._bindToCallbacks();
		this._querySelectors();
		this._initializeSections();
	}

	/* Bind To Callbacks */
	_bindToCallbacks() {
		this.updateFinalPreview = this.updateFinalPreview.bind(this);
		this.completedEditor = this.completedEditor.bind(this);
		this.completedMailing = this.completedMailing.bind(this);
	}

	/* Query Selectors */
	_querySelectors() {
		this.mainWindow = $('#main-window');
		this.mailingSubWindow = $('#mailing-window');
		this.editSubWindow = $('#edit-window');
		this.previewSubWindow = $('#preview-window');
	}

	/* Intialize Sections */
	_initializeSections() {
		this.editWindow = new EditWindow(this.updateFinalPreview, this.completedEditor);
		this.mailingWindow = new MailingWindow(this.completedMailing);
		this.previewWindow = new PreviewWindow(this.setWindow);
	}


	/*   CALLBACKS   */
	
	/* Update Final Preview */
	updateFinalPreview() {
		mlsAreas[currentArea]['editComplete'] = false;
		this.previewWindow.update();
		this.previewWindow.disable();
	}

	/* Completed Editor - public
	 * ---------------
	 * Marks editor as complete.
	 */
	completedEditor() {
		this.previewWindow.update();
		mlsAreas[currentArea]['editComplete'] = true;
		if (mlsAreas[currentArea]['mailingComplete'])
			this.previewWindow.enable();
	}

	/* Completed Editor - public
	 * ---------------
	 * Marks editor as complete.
	 */
	completedMailing() {
		mlsAreas[currentArea]['mailingComplete'] = true;
		if (mlsAreas[currentArea]['editComplete']) 
			this.previewWindow.enable();
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
		} else if (window === 'Mailing List') {
			showHide(this.mailingSubWindow, this.editSubWindow, this.previewSubWindow);
		} else {
			showHide(this.previewSubWindow, this.mailingSubWindow, this.editSubWindow);
			if ($('#complete-final-preview').hasClass('hidden')) this.mainWindow.height(WINDOW_HEIGHTS['Incomplete']);
		}

		function showHide(show, hide1, hide2) {
			const delay = 400;
			hide1.slideUp(delay);
			hide2.slideUp(delay);
			show.slideDown(delay);
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
}