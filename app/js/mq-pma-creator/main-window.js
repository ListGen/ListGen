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
		this._addEventListeners();
		this._initializeMailingList();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		this.mainWindow = $('#main-window');

		// Edit Window
		this.editWindow = $('#edit-window');
		this.outsidePage = $('#outside-page');
		this.outsideCanvas = $('#outside-canvas');
		this.insidePage = $('#inside-page');
		this.insideCanvas = $('#inside-canvas');

		// Mailing Window
		this.mailingWindow = $('#mailing-window');
		this.tableHeaderIcons = $('th');
		this.blockLinks = $('.block-link');
		this.clearSearch = $('#clear-search');

		this.previewWindow = $('#preview-window');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners.
	 */
	_addEventListeners() {
		// changes the arrow on the headers when desc / asc 
		this.tableHeaderIcons.click(function(e) {
			const arrow = $($($(this).children()[0]).children()[1]);
			arrow.toggleClass('asc');
			$('th').each(function() {
				const arrow = $($($(this).children()[0]).children()[1]);
				arrow.html('arrow_drop_down');
			});
			if (arrow.hasClass('asc')) 
				arrow.html('arrow_drop_up');
			else
				arrow.html('arrow_drop_down');
		});

		// quick search for blocked mailings
		this.blockLinks.click((e) => { 
			this.blockLinks.each(function() { $(this).removeClass('active') });
			const type = $($(e.currentTarget).children()[1]).html();
			if (type === 'Total') {
				this.mailingList.search(); 
				this.mailingList.filter(function(item) {
					return item.values().blocked !== '';
				});
			} else {
				this.mailingList.search(type, ['blocked']); 
			}

			$(e.currentTarget).addClass('active');
		});

		// displays full mailing list
		this.clearSearch.click(() => { 
			this.mailingList.search(); 
			this.mailingList.filter();
			this.blockLinks.each(function() { $(this).removeClass('active') });
		});
	}

	/* Initialize Mailing List - private
	 * ---------------
	 * Sets event listeners.
	 */
	_initializeMailingList() {
		this.mailingList = new List('homeowners', mailingListOptions, localData['homeowners']);
		this.totalMail = 0;
		this.numBlocked = {
			'Blocked by Agent' : 0,
			'Blocked by Homeowner' : 0,
			'Active Listing' : 0,
			'Pending Listing' : 0,
			'Real Estate Agent' : 0,
			'Returned Mail' : 0,
			'Total' : 0
		}

		$('.blocked').each((index) => {
			this.totalMail++;
			let currentCheckbox = $($('.blocked')[index]);
			if (currentCheckbox.html() !== '') {
				currentCheckbox.prev().prev().attr('checked', 'checked');
				this.numBlocked[currentCheckbox.html()]++;
				this.numBlocked['Total']++;
			}
			if (currentCheckbox.html() === 'Active Listing' || currentCheckbox.html() === 'Pending Listing') {
				const row = currentCheckbox.parent().parent().parent();
				row.addClass('disabled');
				// addTooltip(row, 'Cannot Unblock an Active or Pending Listing.');
			}
		});

		this._updateBlockedCounts();

		this.blockChecks = $('input:checkbox');
		this.blockChecks.change((e) => {
			const checkbox = $(e.target);
			if (checkbox.is(':checked')) {
				console.log("Select Reason");
			} else {
				const type = checkbox.next().next().html();
				this.numBlocked[type]--;
				this._updateBlockedCounts();
			}
		});
	}

	_updateBlockedCounts() {
		this.blockLinks.each((index) => {
			let currCount = $($(this.blockLinks[index]).children()[0]);
			let currType = $($(this.blockLinks[index]).children()[1]).html();
			currCount.html(this.numBlocked[currType]);
		});
	}

	_makeCompleteButton(top, left) {
		let toggleOverlay = $(switchHTML);
		toggleOverlay.css('top', top);
		toggleOverlay.css('left', left);
		return toggleOverlay;
	}

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
			showHide(this.editWindow, this.mailingWindow, this.previewWindow);
			this.mainWindow.height(2100);
		} else if (window === 1) {
			showHide(this.mailingWindow, this.editWindow, this.previewWindow);
			this.mainWindow.height(1000);
		} else {
			showHide(this.previewWindow, this.mailingWindow, this.editWindow);
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