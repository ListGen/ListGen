/* MQ PMA Creator - Main Window
* Author: bhuelga
*/

class MainWindow {

	/* Main Window
	 * ---------------
	 * The main window that controls editing, mailing list, and preview.
	 */
	constructor() {
		this._querySelectors();
		this._initializeSections();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		this.mainWindow = $('#main-window');
		this.mailingSubWindow = $('#mailing-window');

		// Edit Window
		this.editWindow = $('#edit-window');
		this.outsidePage = $('#outside-page');
		this.outsideCanvas = $('#outside-canvas');
		this.insidePage = $('#inside-page');
		this.insideCanvas = $('#inside-canvas');

		this.previewWindow = $('#preview-window');
	}

	/* Intialize Sections - private
	 * ---------------
	 * Creates new instances of sections of PMA creator.
	 */
	_initializeSections() {
		this.mailingWindow = new MailingWindow();
	}

	/* Make Complete Button - private
	 * --------------------------------
	 * Adds the "Complete" button to the section overlay with the according top and left coordinates.
	 */
	_makeCompleteButton(top, left) {
		let toggleOverlay = $(switchHTML);
		toggleOverlay.css('top', top);
		toggleOverlay.css('left', left);
		return toggleOverlay;
	}

	/* Make Edit Overlay - private
	 * --------------------------------
	 * Makes the overlay consisting of choosing the content for the section
	 * and the complete button for each section.
	 */
	_makeEditOverlay(name, top, left, height, width, content, status, 
					 editTop, editLeft, canvas, complete) {
		let editOverlay = $('<div class="edit-overlay"></div>');
		editOverlay.css('top', editTop);
		editOverlay.css('left', editLeft);

		editOverlay.append($('<h2>' + name + '</h2>'));
		let editOverlayContent = $('<div class="overlay-content"></div>');
		for (let choice of content) {
			let newImage = $('<img src="' + choice + '">');
			newImage.data('top', top);
			newImage.data('left', left);
			newImage.data('height', height);
			newImage.data('width', width);
			newImage.data('canvas', canvas);
			editOverlayContent.append(newImage);
		}
		editOverlay.append(complete);
		editOverlay.append(editOverlayContent);

		return editOverlay;
	}

	/*   PUBLIC   */

	/* Get Spreads - public
	 * ---------------
	 * Returns all editable canvases.
	 */
	getCanvases() {
		return [this.outsideCanvas[0], this.insideCanvas[0]];
	}

	/* Set Window - public
	 * ---------------
	 * Sets the display window to be the edit, mailing, or preview window.
	 */
	setWindow(window) {
		if (window === 0) {
			showHide(this.editWindow, this.mailingSubWindow, this.previewWindow);
			this.mainWindow.height(2100);
		} else if (window === 1) {
			showHide(this.mailingSubWindow, this.editWindow, this.previewWindow);
			this.mainWindow.height(1000);
		} else {
			showHide(this.previewWindow, this.mailingSubWindow, this.editWindow);
		}

		function showHide(show, hide1, hide2) {
			hide1.fadeOut(300);
			hide2.fadeOut(300);
			show.delay(300).fadeIn(300);
		}
	}

	/* Add Sections - public
	 * ---------------
	 * Adds all graphics to a spread in the edit window.
	 */
	populateSections(outsideStatic, outsideEdit, insideStatic, insideEdit, sections) {
		// Reset canvas
		helper = helper.bind(this);
		helper(this.outsidePage, this.outsideCanvas[0], outsideStatic, outsideEdit, sections);
		helper(this.insidePage, this.insideCanvas[0], insideStatic, insideEdit, sections);
		$('.overlay-content img').click(function(e) {
			const img = $(e.target);
			const context = img.data('canvas').getContext('2d');
			let imgData = new Image();
			imgData.onload = () => {
				context.drawImage(imgData, img.data('left'), img.data('top'), 
								  img.data('width'), img.data('height'));
			};
			imgData.src = img.attr('src');
			
		});

		function helper(spread, canvas, statics, edits, sections) {
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
				let div = $('<div id="' + NAME_TO_ID[section['name']] + '" class="overlay"></div>');
				div.height(section['height']);
				div.width(section['width']);
				const topPercentage = (section['top'] / canvas.height * 100) + '%';
				div.css('top', topPercentage);
				const leftPercentage = (section['left'] / canvas.width * 100) + '%';
				div.css('left', leftPercentage);
				const complete = this._makeCompleteButton(section['toggle-top'], section['toggle-left']);
				div.append(this._makeEditOverlay(section['name'],
												 section['top'], section['left'],
												 section['height'], section['width'],
												 sections[section['name']]['system-choices'],
												 sections[section['name']]['status'], 
												 section['edit-top'], section['edit-left'],
												 canvas, complete));
				spread.append(div);
			}
		}
	}
}