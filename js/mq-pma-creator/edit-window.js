/* MQ PMA Creator - Main Window - Edit Window
* Author: bhuelga
*/

class EditWindow {

	/* Edit Window
	 * ---------------
	 * Controls the mailing list.
	 */
	constructor(updateFinalPreviewCallback, completedCallback) {
		this.updateFinalPreviewCallback = updateFinalPreviewCallback;
		this.completedCallback = completedCallback;
		this._querySelectors();
		this._initialize();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		this.editWindow = $('#edit-window');
		this.outsidePage = $('#outside-page');
		this.outsideCanvas = $('#outside-canvas');
		this.insidePage = $('#inside-page');
		this.insideCanvas = $('#inside-canvas');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners.
	 */
	_addEventListeners() {
		// opens up edit / complete button
		$('.section-overlay').click(function() {
			$('.edit-overlay, .complete-btn').not($(this).children()).hide();
			$(this).children().each(function() {
				$(this).toggle()}
			);
		});

		// draw image onto canvas when clicked
		$('.overlay-content img').click((e) => {
			const img = $(e.target);
			const context = img.data('canvas').getContext('2d');
			let imgData = new Image();
			imgData.onload = () => {
				context.drawImage(imgData, img.data('left'), img.data('top'), 
								  img.data('width'), img.data('height'));
			};
			imgData.src = img.attr('src');
			const name = ID_TO_NAME[$(e.target).parent().parent().parent().attr('id')];
			sections[name]['selection'] = imgData.src;
			$(e.currentTarget).parent().removeClass('complete');
			$(e.currentTarget).parent().parent().parent().css('outline-color', STATUS_COLORS['Incomplete']);
			this.updateFinalPreviewCallback();
		});

		// clicking complete updates local data, updates final preview
		$('.complete-btn').click((e) => {
			const name = ID_TO_NAME[$(e.currentTarget).parent().attr('id')];
			mlsAreas[currentArea]['sectionsComplete']++;
			mlsAreas[currentArea]['sections'][name]['status'] = 'Complete';
			if (mlsAreas[currentArea]['sectionsComplete'] === 9)
				this.completedCallback();
			$(e.currentTarget).parent().addClass('complete');
			$(e.currentTarget).parent().css('outline-color' , STATUS_COLORS['Complete']);
		});

	}

	/* Initialize Edit Window - private
	 * ---------------
	 * Initializes the Edit Window with the Mid-Quarter PMA Template.
	 */
	_initialize() {
		// Separates template sections
		const outsideStaticSections = template['Outside']['static-sections'];
		const outsideEditSections = template['Outside']['edit-sections'];
		const insideStaticSections = template['Inside']['static-sections'];
		const insideEditSections = template['Inside']['edit-sections'];
		this._populateSections(outsideStaticSections, outsideEditSections, this.outsidePage, this.outsideCanvas[0]);
		this._populateSections(insideStaticSections, insideEditSections, this.insidePage, this.insideCanvas[0]);
		this._addEventListeners();
	}

	/* Make Complete Button - private
	 * --------------------------------
	 * Adds the "Complete" button to the section overlay with the according top and left coordinates.
	 */
	_makeCompleteButton(top, left) {
		let button = $('<button class="complete-btn">Mark As Complete</button>');
		button.css('top', top);
		button.css('left', left);
		return button;
	}

	/* Make Edit Overlay - private
	 * --------------------------------
	 * Makes the overlay consisting of choosing the content for the section
	 * and the complete button for each section.
	 */
	_makeEditOverlay(name, top, left, height, width, editTop, editLeft, 
		 			 defaultChoice, systemChoices, canvas, context) {
		let editOverlay = $('<div class="edit-overlay"></div>');
		editOverlay.css('top', editTop);
		editOverlay.css('left', editLeft);

		editOverlay.append($('<h2>' + name + '</h2>'));
		let editOverlayContent = $('<div class="overlay-content"></div>');
		for (let choice of systemChoices) {
			let newImage = $('<img src="' + choice + '">');
			newImage.data('top', top);
			newImage.data('left', left);
			newImage.data('height', height);
			newImage.data('width', width);
			newImage.data('canvas', canvas);
			editOverlayContent.append(newImage);
		}
		editOverlay.append(editOverlayContent);

		let img = new Image();
		img.onload = () => {
			context.drawImage(img, left, top, width, height);
		};

		if (sections[name]['selection'] === '') {
			img.src = defaultChoice;
			sections[name]['selection'] = img.src;
		} else {
			img.src = sections[name]['selection'];
		}
		
		return editOverlay;
	}

	/* Add Sections - public
	 * ---------------
	 * Adds all graphics to a spread in the edit window.
	 */
	_populateSections(statics, edits, spread, canvas) {
		// get context and clear canvas
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#FFFFFF";
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Fill all static sections
		for (let section of statics) {
			if (section['type'] === 'image') {
				let img = new Image();
				img.onload = () => {
					context.drawImage(img, section['coordinates'][1], section['coordinates'][0],
									  section['size'][1], section['size'][0]);
				};
				img.src = section['src'];
			} else if (section['type'] === 'text') {
				context.font = 'bold ' + section['font-size'] + 'px Ubuntu';
				context.fillStyle = section['font-color'];
				context.fillText(section['text'], section['coordinates'][1], section['coordinates'][0]);
			}
		}

		// Fill all editable sections
		for (let section of edits) {
			let div = $('<div id="' + NAME_TO_ID[section['name']] + '" class="section-overlay"></div>');
			div.height(section['height']);
			div.width(section['width']);
			div.css('top', (section['top'] / canvas.height * 100) + '%');
			div.css('left', (section['left'] / canvas.width * 100) + '%');

			div.append(this._makeCompleteButton(section['complete-btn-top'], section['complete-btn-left']));
			div.append(this._makeEditOverlay(section['name'],
											 section['top'], section['left'],
											 section['height'], section['width'],
											 section['edit-top'], section['edit-left'],
											 section['default-choice'], section['system-choices'],
											 canvas, context));
			spread.append(div);
		}
	}

	/*   PUBLIC   */

	/* Update - public
	 * ---------------
	 * Changes all sections to reflect a different area.
	 */
	update() {
		this._initialize();
	}

}