/* MQ PMA Creator
 * Author: bhuelga
 */

var mlsAreas = agentData['mls-areas'];
var currentArea = agentData['default-mls-area'];
var currentCity = mlsAreas[currentArea]['city'];
var editSections = mlsAreas[currentArea]['edit-sections'];
var homeowners = mlsAreas[currentArea]['homeowners'];
var currentVersion = mlsAreas[currentArea]['page-version'];
var cityMarket = mlsAreas[currentArea]['city-market'];
var areaMarket = mlsAreas[currentArea]['area-market'];
var currentStep = 'Editor';
var spreadSnapshots = ['',''];

const creatorType = 'mq-' + currentVersion;
const numSections = NUM_SECTIONS[creatorType];
const currentPeriod = 'October 1st, 2018';
const personalInfo = agentData['personal-info'];
const template = TEMPLATES[creatorType];



class MQPmaCreator {

	/* MQ Pma Creator */
	constructor() {
		this._bindToCallbacks();
		this._initializeApp();
		makeSplashMessage(SPLASH['start'], 5000);
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

		this._setWindow(currentStep);
		updateTextAreas();
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
		currentCity = mlsAreas[currentArea]['city'];
		currentVersion = mlsAreas[currentArea]['page-version'];
		cityMarket = mlsAreas[currentArea]['city-market'];
		areaMarket = mlsAreas[currentArea]['area-market'];
		editSections = mlsAreas[currentArea]['edit-sections'];
		homeowners = mlsAreas[currentArea]['homeowners'];

		updateTextAreas();
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
		updateTextAreas();
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
		if (complete) makeSplashMessage(SPLASH['area-complete']);
		mlsAreas[currentArea]['total-complete'] = complete;
		this.topBar.completeArea(complete);
	}

}

// Starts App
$(document).ready(() => {const mqPmaCreator = new MQPmaCreator()});