/* MQ PMA Creator
 * Author: bhuelga
 */

var mlsAreas = agentData['mls-areas'];
var currentArea = agentData['default-mls-area'];
var editSections = mlsAreas[currentArea]['edit-sections'];
var homeowners = mlsAreas[currentArea]['homeowners'];
var currentStep = 'Editor';
var version = mlsAreas[currentArea]['page-version'];
var spreadCopies = ['',''];

const creatorType = 'mq-' + version;
const numSections = NUM_SECTIONS[creatorType];

const personalInfo = agentData['personal-info'];
const template = TEMPLATES[creatorType];



class MQPmaCreator {

	/* MQ Pma Creator */
	constructor() {
		this._bindToCallbacks();
		this._initializeApp();
	}

	/* Bind To Callbacks - private */
	_bindToCallbacks() {
		this._switchArea = this._switchArea.bind(this);
		this._setWindow = this._setWindow.bind(this);	
		this._completeArea = this._completeArea.bind(this);			
	}

	/* Intialize App - private */
	_initializeApp() {	
		this.topBar = new TopBar(this._switchArea, this._setWindow);
		this.mainWindow = new MainWindow(this._switchArea, this._setWindow, this._completeArea);

		updateCurrentAreaText();
		updateCurrentVersionText();
		this._setWindow(currentStep);
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
		currentStep = 'Editor';
		editSections = mlsAreas[currentArea]['edit-sections'];
		homeowners = mlsAreas[currentArea]['homeowners'];

		updateCurrentAreaText();
		updateCurrentVersionText();
		this.mainWindow.update();
		this._setWindow(currentStep);
		this.mainWindow.takeSnapshot(10);
	}

	/* Switch Window
	 * ---------------
	 * Switches the main window to the specified step.
	 *
	 * @param step string : 'Editor', 'Mailing List' or 'Final Preview'
	 */
	_setWindow(step) {
		// if (step === currentStep) return;
		currentStep = step;

		// updates top bar visuals
		updateCurrentStepText();
		$('.top-step').removeClass('selected');
		$('.top-step').each((e) => {
			if ($($('.top-step')[e]).html() === step) 
				$($('.top-step')[e]).addClass('selected');
		});

		this.mainWindow.setWindow(step);
		window.scrollTo(0, 0);
	}

	/* Complete Area
	 * ---------------
	 * Marks the current area as complete or incomplete and updates Top Bar.
	 *
	 * @param complete bool : true if complete, false if incomplete
	 */
	_completeArea(complete) {
		if (!complete) this.mainWindow.resetFinalPreview();
		mlsAreas[currentArea]['total-complete'] = complete;
		this.topBar.completeArea(complete);
	}

}

// Starts App
$(document).ready(() => {const mqPmaCreator = new MQPmaCreator()});