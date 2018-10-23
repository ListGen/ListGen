/* MQ PMA Creator - Main Window - Edit Window
* Author: bhuelga
*/

var first = true;

class EditWindow {

	/* Edit Window */
	constructor(updateCallback, completeAreaCallback) {
		this.updateCallback = updateCallback;
		this.completeAreaCallback = completeAreaCallback;
		this.breakpoints = {'current' : 2500, 'previous' : 2500};
		this._querySelectors();
		this._updateBreakpoints(true);
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
			mlsAreas[currentArea]['final-preview'][name]['time-confirmed'] = '';
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
			const id = tools.attr('id');
			const name = ID_TO_NAME[id];
			if (name === 'City Highlights' || name === 'Area Highlights' || name === 'Listings And Sales') {
				if (this.numSelected[id] != SELECTION_LIMITS[id]) {
					if (name === 'Listings And Sales')
						makeSplashMessage(SPLASH['las-confirm'], 2000);
					else 
						makeSplashMessage(SPLASH['highlights-confirm'], 2000);
					return;
				}
			} 

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
				this.takeSnapshot(350);
				this.updateCallback('Editor', true);
				$('html, body').animate({ scrollTop: 0 }, 500);			
			}
		});

		$('.highlight-choice').click((e) => {
			this._updateSelectionSection(e, true);
		});

		$('.las-choice').click((e) => {
			this._updateSelectionSection(e, false);
		});

		// upload image
		$('.upload').click((e) => {
			console.log('Upload image');
		});

		// potentially chooses new quantized breakpoint for scale factor
		$(window).resize(() => {
			this._updateBreakpoints(false);
		});
	}

	// Updates highlight/L&S section with new selections
	_updateSelectionSection(e, highlight) {
		if (!first) { first = true;	return; } // fix... super hacky (prevents event firing twice on one click)
		const sectionType = (highlight) ? '.highlight-sentence' : '.las-address';
		const choice = $(e.currentTarget);
		const checked = !choice.children('input').is(':checked');
		const target = choice.find(sectionType).html();
		const tools = choice.parents('.section-tools');
		const button = tools.children('.complete-btn');
		const id = tools.attr('id');
		const name = ID_TO_NAME[id];
		let selections = (highlight) ? tools.find('li') : tools.children('.las-container');

		if (this.numSelected[id] <= 1 && !checked)  {
			choice.children('input').prop('checked', checked);
			if (highlight)
				makeSplashMessage(SPLASH['highlights-confirm'], 1000);
			else
				makeSplashMessage(SPLASH['las-confirm'], 1000);
			first = false;
			return;
		}

		mlsAreas[currentArea]['final-preview'][name]['time-confirmed'] = '';
		for (let selection of selections) {
			const attempt = (highlight) ? $(selection) : $(selection).find('.las-address');
			if (attempt.html() === target) {
				if (checked) {
					$(selection).addClass('active');
					this.numSelected[id]++;
					editSections[name]['selection'].push(target);
				} else {
					$(selection).removeClass('active');
					this.numSelected[id]--;
					const index = editSections[name]['selection'].indexOf(target);
					if (index !== -1) editSections[name]['selection'].splice(index, 1);
				}
				break;
			}
		}


		for (let selection of choice.siblings())
			$(selection).removeClass('disabled');

		if (this.numSelected[id] >= SELECTION_LIMITS[id]) {
			for (let selection of choice.siblings()) {
				if (!$(selection).children('input').is(':checked')) {
					$(selection).addClass('disabled');
				}
			}
		}
		
		if (!highlight) {
			$('.las-list > .las-container').height(LAS_SIZES[this.numSelected[id]]);
			if (this.numSelected[id] <= 6) {
				$('.las-list > .las-container .las-description').css('display', 'initial');
			} else  {
				$('.las-list > .las-container .las-description').css('display', 'none');
			}
		}

		first = false;

		if (editSections[name]['status'] === 'Complete')
			this.sectionsComplete--;
		editSections[name]['status'] = 'Incomplete';
		tools.removeClass('complete');
		button.show();

		// update everything if section was complete
		if (this.sectionsComplete + 1 === numSections) this.updateCallback('Editor', false);
		this.completeAreaCallback(false);
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
				let newSection = null;
				if (type === 'image') {
					newSection = $(new Image());
					newSection.attr('src', src);
					newSection.css('height', section['size'][0] * scale);
					newSection.css('width', section['size'][1] * scale);
				} else  if (type === 'text') {
					newSection = $('<div>' + src + '</div>');
					newSection.css('font-family', section['font-family']);
					newSection.css('font-size', section['font-size'] * scale);
					newSection.css('font-weight', 'bold');
					newSection.css('color', section['font-color']);
					if (section['capitalize']) newSection.css('text-transform', 'uppercase');
				}
				newSection.css('position', 'absolute');
				newSection.css('top', coordinate[0] * scale);
				newSection.css('left', coordinate[1] * scale);
				spread.append(newSection);
			}
		}

		// Fill all editable sections
		for (let section of edits) {
			const sectionID = NAME_TO_ID[section['name']]
			let div = $('<div id="' + sectionID + '" class="section-tools"></div>');
			div.height(section['height'] * scale);
			div.width(section['width'] * scale);
			div.css('top', section['top'] * scale);
			div.css('left', section['left'] * scale);

			// add complete button and edit tools
			const completeButton = this._makeCompleteButton(section, scale);
			const editReturn = this._makeEditTools(section, spread, scale);
			div.append(completeButton);
			div.append(editReturn['editTools']);

			// populate edit section
			if (editReturn['highlight-list']) {
				this._populateHighlightList(div, section, editReturn, scale);
			} else if (editReturn['las-list']) {
				this._populateLASList(div, section, editReturn, scale);
			} else {
				div.css('background-image', 'url(' + editSections[section['name']]['selection'] + ')');
			}

			if ((editReturn['highlight-list'] || editReturn['las-list'])
				&& this.numSelected[sectionID] < SELECTION_LIMITS[sectionID]) {
				div.find('label').removeClass('disabled');
			}

			const status = editSections[section['name']]['status'];
			if (status === 'Complete') { 
				this.sectionsComplete++;
				div.addClass('complete');
			}

			spread.append(div);
		}
	}

	// populates the list of selection options for highlight list sections
	_populateHighlightList(div, section, scale) {
		div.addClass('highlight-list');
		div.append($('<ul></ul>'));
		div.children('ul').css('margin-top', 5 * scale + 'px');						// scaling
		div.children('ul').css('padding-left', 20 * scale + 'px');					// scaling
		for (const sentence of section['system-choices']) {
			let choice = $('<li>' + sentence + '</li>');
			choice.css('font-size', 1.1 * scale + 'rem');							// scaling
			choice.css('line-height', 1.5 * scale + 'rem');							// scaling
			choice.css('margin-bottom', 5 * scale + 'px');							// scaling
			if (editSections[section['name']]['selection'].includes(sentence)) {
				choice.addClass('active');
				this.numSelected[div.attr('id')]++;
			}
			div.children('ul').append(choice);
		}
	}

	// populates the list of selection options for L&S section
	_populateLASList(div, section, scale) {
		div.addClass('las-list');
		for (const ls of mlsAreas[currentArea]['listings-and-sales']) {
			let choice = makeLASContainer(ls);
			choice.find('.las-status').css('color', LAS_COLORS[ls['type']]);
			if (editSections[section['name']]['selection'].includes(ls['address'])) {
				choice.addClass('active');
				this.numSelected[div.attr('id')]++;
			}
			div.append(choice);
		}
		$('.las-list > .las-container').height(LAS_SIZES[this.numSelected[div.attr('id')]]);
	}

	/* Make Complete Button
	 * --------------------
	 * Adds the "Complete" button to the section tools with the according top and left coordinates.
	 *
	 * @param section object : section object from template
	 * @param scale float : quantized scale of window
	 */
	_makeCompleteButton(section, scale) {
		let button = $('<button class="complete-btn">Mark As Complete</button>');
		button.height(section['tools-data']['complete-btn-height']);
		button.width(section['tools-data']['complete-btn-width']);
		button.css('bottom', section['tools-data']['complete-btn-bottom']);
		button.css('left', section['tools-data']['complete-btn-left']);
		return button;
	}

	/* Make Edit Tools
	 * --------------------------------
	 * Makes the tools for choosing the content for the section
	 *
	 * @param section object : section object from template
	 * @param spread object : which spread the current section is on
	 * @param scale float : quantized scale of window
	 */
	_makeEditTools(section, spread, scale) {
		let editTools = $('<div class="edit-tools"></div>');
		editTools.height(section['tools-data']['edit-height']);
		editTools.width(section['tools-data']['edit-width']);
		editTools.css('top', section['tools-data']['edit-top']);
		editTools.css('left', section['tools-data']['edit-left']);
		const iList = section['type'] === 'image',
			  hList = section['type'] === 'highlight-list',
			  lasList = section['type'] === 'las-list';

		// populate selections content
		editTools.append($('<h2>' + section['name'] + '</h2>'));
		let editToolsContent = $('<div class="edit-content"></div>');
		// if (section['uploadable']) { 
		// 	editToolsContent.append($('<button class="upload">Upload</button>'));
		// 	editToolsContent.children('.upload').css('font-size', 2 * scale + 'rem');	// scaling
		// }

		let tempSelections = [];	// for list sections
		const choices = (lasList) ? mlsAreas[currentArea]['listings-and-sales'] : section['system-choices'];
		for (let choice of choices) {
			let newChoice = null;
			if (iList) {
				newChoice = $('<img src="' + choice + '">');
				newChoice.data('top', section['top']);
				newChoice.data('left', section['left']);
				newChoice.data('height', section['height']);
				newChoice.data('width', section['width']);
				newChoice.data('spread', spread);
			} else if (hList) {
				newChoice = $('<label class="highlight-choice">\
									<input class="list-check" type="checkbox"/>\
									<span class="checkmark"><i class="material-icons">check</i></span>\
									<span class="highlight-sentence">' + choice + '</span>\
								</label>');
				decideSelections(choice, newChoice, section, editSections, tempSelections, scale, true);
			} else if (lasList) {
				newChoice = $('<label class="las-choice">\
									<input class="list-check" type="checkbox"/>\
									<span class="checkmark"><i class="material-icons">check</i></span>\
								</label>');
				newChoice.append(makeLASContainer(choice));
				newChoice.find('.las-status').css('color', LAS_COLORS[choice['type']]);
				decideSelections(choice['address'], newChoice, section, editSections, tempSelections, scale, false);
			}
			editToolsContent.append(newChoice);
		}

		editTools.append(editToolsContent);

		// update selection if blank
		if ((hList || lasList) && editSections[section['name']]['selection'].length === 0)
			editSections[section['name']]['selection'] = tempSelections;
		else if (editSections[section['name']]['selection'] === '')
			editSections[section['name']]['selection'] = section['default-choice'];
		
		return {'editTools' : editTools, 'highlight-list' : hList, 'las-list' : lasList};

		// helper function for list sections
		function decideSelections(choice, newChoice, section, editSections, tempSelections, scale, highlight) {
			newChoice.children('.checkmark').height(40 * scale);									// scaling
			newChoice.children('.checkmark').width(40 * scale);										// scaling
			newChoice.find('i').css('font-size', 2 * scale + 'rem');								// scaling
			const sectionsEmpty = editSections[section['name']]['selection'].length === 0;
			const listToCheck = (sectionsEmpty) ? section['default-choice'] : editSections[section['name']]['selection'];
			const condition = (sectionsEmpty && !highlight) ? tempSelections.length < SELECTION_LIMITS['listings-and-sales'] : listToCheck.includes(choice);
			if (condition) {
				tempSelections.push(choice);
				newChoice.children('input').prop('checked', true);
			} else {
				newChoice.addClass('disabled');
			}
			newChoice.children('.las-container').addClass('active');
		}
	}

	/* Sets the correct scaling */
	_updateBreakpoints(start) {
		const width = $(window).width();
		this.breakpoints['previous'] = this.breakpoints['current'];
		for (const bp of EDIT_BREAKPOINTS) {
			if (width <= bp) {
				this.breakpoints['current'] = bp;
			}
		}
		if (this.breakpoints['previous'] != this.breakpoints['current']) {
			if (!start) this.update();
		}
	}
	

	/*   PUBLIC   */

	/* Update - public
	 * ---------------
	 * Changes all sections to reflect a different area.
	 */
	update() {
		this.sectionsComplete = 0;
		this.numSelected = {'city-highlights' : 0, 'area-highlights' : 0, 'listings-and-sales' : 0};

		// Separates template sections
		const outsideStaticSections = template['Outside']['static-sections'];
		const outsideEditSections = template['Outside']['edit-sections'];
		const insideStaticSections = template['Inside']['static-sections'];
		const insideEditSections = template['Inside']['edit-sections'];
		const scale = POS_RATIOS[this.breakpoints['current']];
		this._populateSpread(outsideStaticSections, outsideEditSections, this.outsidePage, scale);
		this._populateSpread(insideStaticSections, insideEditSections, this.insidePage, scale);
		this._addEventListeners();

		// check for complete
		if (this.sectionsComplete === numSections) {
			mlsAreas[currentArea]['editor-complete'] = true;
			$('#edit-banner').slideDown({
				start: function () { $(this).css({ display: "flex" }); }
		    });
		}

		// start with no active sections
		$('.section-tools').removeClass('active');
	}

	/* Click Tools - public
	 * ---------------
	 * Triggers a click on the tools of the given step.
	 *
	 * @param step string : name of step to trigger click
	 */
	clickTools(step) {
		$('#' + NAME_TO_ID[step]).trigger('click');
	}

	/* Take Snapshot - public
	 * ---------------
	 * Takes a snapshot of the PMA (to be used in the final preview).
	 * Timeout is to allow all animations to end before capturing shot.
	 */
	takeSnapshot(delay) {
		setTimeout(() => {
			html2canvas($('#outside-page')[0]).then(canvas => {
				spreadCopies[0] = canvas.toDataURL('image/png');
			});
			html2canvas($('#inside-page')[0]).then(canvas => {
				spreadCopies[1] = canvas.toDataURL('image/png');
			});
		}, delay);
	}
}