/* MQ PMA Creator
 * Author: bhuelga
 */

const creatorType = 'mq';
var mlsAreas = agentData['mlsAreas'];
var template = TEMPLATES[creatorType];
var currentArea = agentData['defaultMLSArea'];
var sections = mlsAreas[currentArea]['sections'];
var homeowners = mlsAreas[currentArea]['homeowners'];
var currentStep = 'Editor';

class MQPmaCreator {

	/* MQ Pma Creator */
	constructor() {
		this._bindToCallbacks();
		this._initializeApp();
	}

	/* Bind To Callbacks - private */
	_bindToCallbacks() {
		this._switchArea = this._switchArea.bind(this);
		this._switchWindow = this._switchWindow.bind(this);		
	}

	/* Intialize App - private */
	_initializeApp() {	
		this.topBar = new TopBar(this._switchArea, this._switchWindow);
		this.mainWindow = new MainWindow();

		updateCurrentAreaText();
		updateCurrentStepText();
		this.mainWindow.setWindow('Editor');
	}

	/*   CALLBACK FUNCTIONS   */

	/* Switch Area
	 * ---------------
	 * Switches the main window and changes the side bar options.
	 *
	 * @param newArea string : name of the MLS area being switched to
	 */
	_switchArea(newArea) {
		currentArea = newArea;
		sections = mlsAreas[currentArea]['sections'];
		homeowners = mlsAreas[currentArea]['homeowners'];
		currentStep = 'Editor';

		updateCurrentAreaText();
		this.mainWindow.update();
		this.mainWindow.setWindow('Editor');
	}

	/* Switch Window
	 * ---------------
	 * Switches the main window to the specified step.
	 *
	 * @param step string : 'Editor', 'Mailing List' or 'Final Preview'
	 */
	_switchWindow(step) {
		currentStep = step;
		updateCurrentStepText();
		this.mainWindow.setWindow(step);
	}

}

// Starts App
$(document).ready(() => {const mqPmaCreator = new MQPmaCreator()});