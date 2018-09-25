/* MQ PMA Creator
 * Author: bhuelga
 */

const creatorType = 'mq';
var mlsAreas = localData['mlsAreas'];
var template = TEMPLATES[creatorType];
var currentArea = localData['defaultMLSArea'];
var sections = mlsAreas[currentArea]['sections'];
var homeowners = mlsAreas[currentArea]['homeowners'];
var currentStep = 'Editor';

class MQPmaCreator {

	/* MQ Pma Creator
	 * ---------------
	 * Controls full creator app.
	 */
	constructor() {
		this._bindToCallbacks();
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

	/* Intialize App - private
	 * ---------------
	 * Initializes local data.
	 */
	_initializeApp() {		
		updateCurrentAreaText();
		updateCurrentStepText();

		// Initialize Owned Objects
		this.topBar = new TopBar(this._switchArea, this._switchWindow);
		this.mainWindow = new MainWindow();

		this.mainWindow.setWindow(0);
	}

	/*   CALLBACK FUNCTIONS   */

	/* Switch Area - private
	 * ---------------
	 * Switches the main window and changes the side bar options.
	 */
	_switchArea(newArea) {
		currentArea = newArea;
		sections = mlsAreas[currentArea]['sections'];
		homeowners = mlsAreas[currentArea]['homeowners'];
		currentStep = 'Editor';

		updateCurrentAreaText();
		this.mainWindow.updateArea();
		this.mainWindow.setWindow(0);
	}

	/* Switch Window - private
	 * ---------------
	 * Switches the main window and changes the side bar options.
	 *
	 * @param step int : 
	 */
	_switchWindow(step) {
		currentStep = NUMBER_TO_STEP_NAME[step];
		updateCurrentStepText();
		this.mainWindow.setWindow(step);
	}

}

// Starts App
$(document).ready(() => {const mqPmaCreator = new MQPmaCreator()});