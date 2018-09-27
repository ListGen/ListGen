/* MQ PMA Creator - Main Window - Edit Window
* Author: bhuelga
*/

class EditWindow {

	/* Edit Window */
	constructor(updateCallback, completeCallback) {
		this.updateCallback = updateCallback;
		this.completeCallback = completeCallback;
		this._querySelectors();
		this._initialize();
	}

	/* Query Selectors */
	_querySelectors() {
		this.outsidePage = $('#outside-page');
		this.outsideCanvas = $('#outside-canvas');
		this.insidePage = $('#inside-page');
		this.insideCanvas = $('#inside-canvas');
	}

	/* Add Event Listeners */
	_addEventListeners() {
		// Closes dropdown on outside click
		$('#edit-overlay').click(function() {
			$('.edit-tools').slideUp(300);
			$('.complete-btn').hide();
			$('.section-tools').removeClass('active');
			$(this).fadeOut(500);
		});

		// toggles edit / complete button
		$('.section-tools').click(function(e) {
			// don't close when clicking children
			if (!$(e.target).hasClass('section-tools')) return;

			// only one open at a time
			$('.edit-tools').not($(this).children()).slideUp(300);
			$('.complete-btn').not($(this).children()).hide();
			$('.section-tools').removeClass('active');
			$(this).addClass('active');
			$('#edit-overlay').fadeIn(500);

			const editTools = $(this).children('.edit-tools'),
				  completeBtn = $(this).children('.complete-btn');
			$(editTools).slideDown(300);
			if (!$(this).hasClass('complete')) completeBtn.show();
		});

		// draw image onto canvas when clicked
		$('.edit-content img').click((e) => {
			const img = $(e.target);
			const parent = img.closest('.section-tools');
			const button = parent.children('.complete-btn');
			const name = ID_TO_NAME[parent.attr('id')];

			const imgData = drawImageOnCanvas(img);

			if (sections[name]['status'] === 'Complete')
				mlsAreas[currentArea]['sectionsComplete']--;
			sections[name]['status'] = 'Incomplete';
			sections[name]['selection'] = imgData.src;
			parent.removeClass('complete');
			button.show();
			console.log(mlsAreas[currentArea]['sectionsComplete']);
		});

		// clicking complete updates local data
		$('.complete-btn').click((e) => {
			const button = $(e.currentTarget);
			const parent = button.parent();
			const editTools = parent.children('.edit-tools');
			const name = ID_TO_NAME[parent.attr('id')];

			mlsAreas[currentArea]['sectionsComplete']++;
			sections[name]['status'] = 'Complete';
			sections[name]['confirmed-selection'] = sections[name]['selection'];
			parent.addClass('complete');
			editTools.slideUp(300);
			button.hide();
			$('#edit-overlay').fadeOut(500);

			if (mlsAreas[currentArea]['sectionsComplete'] === 9) this.completeCallback();
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
		this._populateCanvas(outsideStaticSections, outsideEditSections, this.outsidePage, this.outsideCanvas[0]);
		this._populateCanvas(insideStaticSections, insideEditSections, this.insidePage, this.insideCanvas[0]);
		this._addEventListeners();
	}

	/* Populate Canvas
	 * ---------------
	 * Adds all graphics to a spread in the edit window.
	 *
	 * @param statics object-list : objects from mq-templates.js
	 * @param edits object-list : objects from mq-templates.js
	 * @param spread HTMLDiv : container of canvas
	 * @param canvas HTMLCanvas : canvas to draw on
	 */
	_populateCanvas(statics, edits, spread, canvas) {
		// get context and clear canvas
		const context = canvas.getContext('2d');
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "white";
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
			let div = $('<div id="' + NAME_TO_ID[section['name']] + '" class="section-tools"></div>');
			div.height(section['height']);
			div.width(section['width']);
			div.css('top', (section['top'] / canvas.height * 100) + '%');
			div.css('left', (section['left'] / canvas.width * 100) + '%');

			div.append(this._makeCompleteButton(section['complete-btn-top'], section['complete-btn-left']));
			div.append(this._makeeditTools(section['name'],
											 section['top'], section['left'],
											 section['height'], section['width'],
											 section['edit-top'], section['edit-left'],
											 section['default-choice'], section['system-choices'],
											 canvas, context));
			spread.append(div);
		}
	}

	/* Make Complete Button
	 * --------------------------------
	 * Adds the "Complete" button to the section tools with the according top and left coordinates.
	 */
	_makeCompleteButton(top, left) {
		let button = $('<button class="complete-btn">Mark As Complete</button>');
		button.css('top', top);
		button.css('left', left);
		return button;
	}

	/* Make Edit Tools
	 * --------------------------------
	 * Makes the tools consisting of choosing the content for the section
	 * and the complete button for each section.
	 */
	_makeeditTools(name, top, left, height, width, editTop, editLeft, 
		 			 defaultChoice, systemChoices, canvas, context) {
		let editTools = $('<div class="edit-tools"></div>');
		editTools.css('top', editTop);
		editTools.css('left', editLeft);

		editTools.append($('<h2>' + name + '</h2>'));
		let editToolsContent = $('<div class="edit-content"></div>');
		for (let choice of systemChoices) {
			let newImage = $('<img src="' + choice + '">');
			newImage.data('top', top);
			newImage.data('left', left);
			newImage.data('height', height);
			newImage.data('width', width);
			newImage.data('canvas', canvas);
			editToolsContent.append(newImage);
		}
		editTools.append(editToolsContent);

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
		
		return editTools;
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