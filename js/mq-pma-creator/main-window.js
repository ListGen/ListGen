/* MQ PMA Creator - Main Window
* Author: bhuelga
*/

const editorHeight = 'auto',
	  mailingHeight = 1000,
	  previewHeight = 5000,
	  previewHeightIncomplete = 1000;

class MainWindow {

	/* Main Window
	 * ---------------
	 * The main window that controls editing, mailing list, and preview.
	 */
	constructor() {
		this._bindToCallbacks();
		this._querySelectors();
		this._initializeSections();
	}

	/* Bind To Callbacks - private
	 * ---------------
	 * Binds this to all callback functions.
	 */
	_bindToCallbacks() {
		this.setWindow = this.setWindow.bind(this);	
		this.updateFinalPreview = this.updateFinalPreview.bind(this);
		this.completedEditor = this.completedEditor.bind(this);
		this.completedMailing = this.completedMailing.bind(this);
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		this.mainWindow = $('#main-window');
		this.mailingSubWindow = $('#mailing-window');
		this.editSubWindow = $('#edit-window');
		this.previewSubWindow = $('#preview-window');
	}

	/* Intialize Sections - private
	 * ---------------
	 * Creates new instances of sections of PMA creator.
	 */
	_initializeSections() {
		this.editWindow = new EditWindow(this.updateFinalPreview, this.completedEditor);
		this.mailingWindow = new MailingWindow(this.completedMailing);
		this.previewWindow = new PreviewWindow(this.setWindow);
	}

	/*   PUBLIC   */

	/* Set Window - public
	 * ---------------
	 * Sets the display window to be the edit, mailing, or preview window.
	 */
	setWindow(window) {
		if (window === 0) {
			showHide(this.editSubWindow, this.mailingSubWindow, this.previewSubWindow);
			this.mainWindow.height(editorHeight);
		} else if (window === 1) {
			showHide(this.mailingSubWindow, this.editSubWindow, this.previewSubWindow);
			this.mainWindow.height(mailingHeight);
		} else {
			showHide(this.previewSubWindow, this.mailingSubWindow, this.editSubWindow);
			if ($('#complete-final-preview').hasClass('hidden'))
				this.mainWindow.height(previewHeightIncomplete);
			else
				this.mainWindow.height(previewHeight);
		}

		function showHide(show, hide1, hide2) {
			hide1.slideUp(300);
			hide2.slideUp(300);
			show.delay(300).slideDown(300);
		}
	}

	/* Update Area - public
	 * ---------------
	 * Updates the edit window to reflect the current PMA of that area, the mailing list
	 * to reflect the list of that area, and the final preview.
	 */
	updateArea() {
		this.editWindow.update();
		this.mailingWindow.update();
		this.previewWindow.update();
	}

	/* Update Final Preview - public
	 * ---------------
	 * Updates final preview sections to reflect update edit window.
	 */
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
}