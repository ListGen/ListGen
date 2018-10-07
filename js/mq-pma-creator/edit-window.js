/* MQ PMA Creator - Main Window - Edit Window
* Author: bhuelga
*/

class EditWindow {

	/* Edit Window */
	constructor(updateCallback, completeAreaCallback) {
		this.updateCallback = updateCallback;
		this.completeAreaCallback = completeAreaCallback;
		this.breakpoints = {'current' : 2500, 'previous' : 2500};
		this._querySelectors();
		this._updateBreakpoints();
		this.update();
	}

	/* Query Selectors */
	_querySelectors() {
		this.outsidePage = $('#outside-page');
		this.insidePage = $('#inside-page');
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
			const tools = img.closest('.section-tools');
			const button = tools.children('.complete-btn');
			const name = ID_TO_NAME[tools.attr('id')];

			if (editSections[name]['status'] === 'Complete')
				this.sectionsComplete--;
			editSections[name]['status'] = 'Incomplete';
			editSections[name]['selection'] = img.attr('src');
			tools.css('background-image', 'url(' + img.attr('src') + ')');
			tools.removeClass('complete');
			button.show();

			// update everything if section was complete
			if (this.sectionsComplete + 1 === numSections) this.updateCallback('Editor', false);
			this.completeAreaCallback(false);
		});

		// clicking complete updates local data
		$('.complete-btn').click((e) => {
			const button = $(e.currentTarget);
			const tools = button.parent();
			const editTools = tools.children('.edit-tools');
			const name = ID_TO_NAME[tools.attr('id')];

			this.sectionsComplete++;
			editSections[name]['status'] = 'Complete';
			editSections[name]['confirmed-selection'] = editSections[name]['selection'];
			tools.addClass('complete');
			tools.removeClass('active');
			editTools.slideUp(300);
			button.hide();
			$('#edit-overlay').fadeOut(500);

			// update everything if section is now complete
			if (this.sectionsComplete === numSections) {
				setTimeout(() => {
					html2canvas($('#outside-page')[0]).then(canvas => {
						spreadCopies[0] = canvas.toDataURL('image/png');
					});
					html2canvas($('#inside-page')[0]).then(canvas => {
						spreadCopies[1] = canvas.toDataURL('image/png');
					});
				}, 350);
				this.updateCallback('Editor', true);
			}
		});

		$(window).resize(() => {
			this._updateBreakpoints();
		});
	}

	/* Populate Canvas
	 * ---------------
	 * Adds all graphics to a spread in the edit window.
	 *
	 * @param statics object-list : objects from mq-templates.js
	 * @param edits object-list : objects from mq-templates.js
	 * @param spread HTMLDiv : container of canvas
	 */
	_populateSpread(statics, edits, spread, scale) {
		// get context and clear canvas and spread
		spread.empty();

		// Fill all static sections
		for (let section of statics) {
			const type = section['type'];
			let src = (section['agent-specific']) ? personalInfo[section['name']] : section['src'];			
			for (const coordinate of section['coordinates']) {
				if (type === 'image') {
					let img = $(new Image());
					img.attr('src', src);
					img.css('position', 'absolute');
					img.css('top', coordinate[0] * scale);
					img.css('left', coordinate[1] * scale);
					img.css('height', section['size'][0] * scale);
					img.css('width', section['size'][1] * scale);
					spread.append(img);
				} else  if (type === 'text') {
					let div = $('<div>' + src + '</div>');
					div.css('position', 'absolute');
					div.css('top', coordinate[0] * scale);
					div.css('left', coordinate[1] * scale);
					div.css('font-family', section['font-family']);
					div.css('font-size', section['font-size'] * scale);
					div.css('font-weight', 'bold');
					div.css('color', section['font-color']);
					if (section['capitalize']) div.css('text-transform', 'uppercase');
					spread.append(div);
				}
			}
		}

		// Fill all editable sections
		for (let section of edits) {
			let div = $('<div id="' + NAME_TO_ID[section['name']] + '" class="section-tools"></div>');
			div.height(section['height'] * scale);
			div.width(section['width'] * scale);
			div.css('top', section['top'] * scale);
			div.css('left', section['left'] * scale);

			const completeButton = this._makeCompleteButton(section, scale);
			const editToolsImg = this._makeEditTools(section, spread, scale);
			div.append(completeButton);
			div.append(editToolsImg['editTools']);

			div.css('background-image', 'url(' + editToolsImg['selection'] + ')');
			editSections[section['name']]['selection'] = editToolsImg['selection'];

			const status = editSections[section['name']]['status'];
			if (status === 'Complete') { 
				this.sectionsComplete++;
				div.addClass('complete');
			}
			spread.append(div);
		}

		spread.append($('<div class="page-divider"></div>'));
	}

	/* Make Complete Button
	 * --------------------------------
	 * Adds the "Complete" button to the section tools with the according top and left coordinates.
	 *
	 * @param section object : section object from template
	 */
	_makeCompleteButton(section, scale) {
		let button = $('<button class="complete-btn">Mark As Complete</button>');
		button.css('top', -40);
		button.css('left', 0);
		return button;
	}

	/* Make Edit Tools
	 * --------------------------------
	 * Makes the tools consisting of choosing the content for the section
	 * and the complete button for each section.
	 *
	 * @param section object : section object from template
	 * @param canvas canvas : canvas where which page the current section is located
	 */
	_makeEditTools(section, spread, scale) {
		let editTools = $('<div class="edit-tools"></div>');
		editTools.css('top', section['edit-top'] * scale);
		editTools.css('left', section['edit-left'] * scale);

		// populate selections content
		editTools.append($('<h2>' + section['name'] + '</h2>'));
		let editToolsContent = $('<div class="edit-content"></div>');
		for (let choice of section['system-choices']) {
			let newImage = $('<img src="' + choice + '">');
			newImage.data('top', section['top']);
			newImage.data('left', section['left']);
			newImage.data('height', section['height']);
			newImage.data('width', section['width']);
			newImage.data('spread', spread);
			editToolsContent.append(newImage);
		}
		editTools.append(editToolsContent);

		const src = (editSections[section['name']]['selection'] === '') ? section['default-choice'] : editSections[section['name']]['selection'];
		if (editSections[section['name']]['selection'] === '')
			editSections[section['name']]['selection'] = src;
		
		return {'editTools' : editTools, 'selection' : src};
	}

	/* Sets the correct scaling */
	_updateBreakpoints() {
		const width = $(window).width();
		this.breakpoints['previous'] = this.breakpoints['current'];
		for (const bp of EDIT_BREAKPOINTS) {
			if (width <= bp) {
				this.breakpoints['current'] = bp;
			}
		}
		if (this.breakpoints['previous'] != this.breakpoints['current']) {
			console.log(this.breakpoints['current']);
			this.update();
		}
	}
	

	/*   PUBLIC   */

	/* Update - public
	 * ---------------
	 * Changes all sections to reflect a different area.
	 */
	update() {
		this.sectionsComplete = 0;

		// Separates template sections
		const outsideStaticSections = template['Outside']['static-sections'];
		const outsideEditSections = template['Outside']['edit-sections'];
		const insideStaticSections = template['Inside']['static-sections'];
		const insideEditSections = template['Inside']['edit-sections'];
		const scale = POS_RATIOS[this.breakpoints['current']];
		this._populateSpread(outsideStaticSections, outsideEditSections, this.outsidePage, scale);
		this._populateSpread(insideStaticSections, insideEditSections, this.insidePage, scale);
		this._addEventListeners();

		// set as complete
		if (this.sectionsComplete === numSections) {
			mlsAreas[currentArea]['editor-complete'] = true;
			$('#edit-banner').slideDown({
			  start: function () {
			    $(this).css({ display: "flex" });
			    }
		    });
		}

		// start with no active sections
		$('.section-tools').removeClass('active');
	}

	/* Click Tools - public
	 * ---------------
	 * Triggers a click on the tools for the given step.
	 *
	 * @param step string : name of step to trigger click
	 */
	clickTools(step) {
		$('#' + NAME_TO_ID[step]).trigger('click');
	}
}