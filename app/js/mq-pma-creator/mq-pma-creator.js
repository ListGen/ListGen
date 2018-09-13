/* MQ PMA Creator
 * Author: bhuelga
 */

const creatorType = 'mq';

class MQPmaCreator {

	/* MQ Pma Creator
	 * ---------------
	 * Controls full creator app.
	 */
	constructor() {
		this._bindToCallbacks();
		this._initializeSections();
		this._initializeApp();
	}

	/* Bind To Callbacks - private
	 * ---------------
	 * Binds this to all callback functions.
	 */
	_bindToCallbacks() {
		this._switchArea = this._switchArea.bind(this);
		this._switchWindow = this._switchWindow.bind(this);		
	}

	/* Intialize Sections - private
	 * ---------------
	 * Creates new instances of sections of PMA creator.
	 */
	_initializeSections() {
		this.topBar = new TopBar(this._switchArea, this._switchWindow);
		this.mainWindow = new MainWindow(this._enterEditMode, this._markAs);
	}

	/* Intialize App - private
	 * ---------------
	 * Initializes local data.
	 */
	_initializeApp() {		
		this.localData = localData['mlsAreas'];
		this.template = templates[creatorType];

		this.currentArea = 'CARMEL HIGHLANDS';
		this._switchArea(this.currentArea);

		// populates edit window
		const outsideStaticSections = this.template['Outside']['static-sections'];
		const outsideEditSections = this.template['Outside']['edit-sections'];
		const insideStaticSections = this.template['Inside']['static-sections'];
		const insideEditSections = this.template['Inside']['edit-sections'];
		this.mainWindow.populateSections(outsideStaticSections, outsideEditSections, 
										 insideStaticSections, insideEditSections,
										 this.localData[this.currentArea]['sections']);
	}


	/*   CALLBACK FUNCTIONS   */

	/* Switch Area - private
	 * ---------------
	 * Switches the main window and changes the side bar options.
	 */
	_switchArea(newArea) {
		this.currentArea = newArea;
		this.topBar.setAreaTitle(newArea);
		// update pma
	}

	/* Switch Window - private
	 * ---------------
	 * Switches the main window and changes the side bar options.
	 */
	_switchWindow(step) {
		this.mainWindow.setWindow(step);
	}

}

$(document).ready(() => {const mqPmaCreator = new MQPmaCreator()});
