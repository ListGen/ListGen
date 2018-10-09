/* MQ PMA Creator - Main Window - Preview Window
* Author: bhuelga
*/

class PreviewWindow {

	/* Preview Window */
	constructor(backToEditCallback, setAreaCallback, completeAreaCallback) {
		this.backToEditCallback = backToEditCallback;
		this.completeAreaCallback = completeAreaCallback;
		this.setAreaCallback = setAreaCallback;

		this._querySelectors();
		this._addEventListeners();
		this.update();
	}

	/* Query Selectors */
	_querySelectors() {
		this.previewWindow = $('#preview-window');
		this.previewSpreads = $('.preview-spread');
		this.sectionImages = $('.preview-spread .preview-image');

		this.confirmButtons = $('.confirm');
		this.backToEditButtons = $('.back-to-edit');

		this.pricingSummaryBtn = $('#pricing-summary-btn');
		this.nextAreaBtn = $('#next-area-btn');
		this.toFinalAcceptBtn = $('#to-final-accept-btn');
	}

	/* Add Event Listeners */
	_addEventListeners() {
		// clicking image brings up larger preview
		this.sectionImages.click(function() {
			if ($(this).hasClass('highlight-list')) return;
			let src = $(this).css('background-image')
			src = src.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
			$('#preview-image').css('background-image', 'url(' + src + ')');
			$('#preview-image').fadeIn(500);
			$('#modal-overlay').fadeIn(500);
		});

		// confirm a section
		this.confirmButtons.click((e) => {
			const button = $(e.target);
			if (button.parent().parent().hasClass('confirmed')) return;
			button.parent().parent().addClass('confirmed');
			button.html('Confirmed!');
			const date = getDateAndTime();
			$(e.currentTarget).siblings('.time-confirmed').html('Last confirmed on ' + date);
			mlsAreas[currentArea]['final-preview'][button.siblings('h1').html()]['time-confirmed'] = date;

			this.numConfirmed++;
			// enables confirm modal button
			if (this.numConfirmed === NUM_SECTIONS[creatorType] + 2)  {
				this.pricingSummaryBtn.removeClass('disabled');
				this.completeAreaCallback(true);
				this._updatePricingSummary();
			}

			// scroll to next section
			$('html, body').animate({ scrollTop: $(e.currentTarget).next().offset().top }, 500);
		});

		// back to edit
		this.backToEditButtons.click((e) => { 
			const step = $(e.target).siblings('h1').html();
			const button = $(e.target);
			if (button.parent().parent().hasClass('confirmed'))
				this.numConfirmed--;
			button.parent().parent().removeClass('confirmed');
			button.siblings('.confirm').html('Confirm');
			$(e.currentTarget).siblings('.time-confirmed').html('');
			mlsAreas[currentArea]['final-preview'][button.siblings('h1').html()]['time-confirmed'] = '';
			this.pricingSummaryBtn.addClass('disabled');

			this.completeAreaCallback(false);
			this.backToEditCallback(step, step === 'Outside Page' || step === 'Inside Page');
		});

		// opens pricing summary modal
		this.pricingSummaryBtn.click(() => {
			$('#modal-overlay').fadeIn(500);
			$('#pricing-summary-modal').fadeIn(500);
		});

		// marks the current area as complete and 
		this.nextAreaBtn.click((e) => {
			const area = $(e.currentTarget).children('span').html();
			$('#modal-overlay').fadeOut(500);
			$('.modal, #preview-image').fadeOut(500);
			this.setAreaCallback(area);
		});

		this.toFinalAcceptBtn.click(() => {
			$('#pricing-summary-modal').fadeOut(500);
			$('#final-confirmation-modal').delay(500).fadeIn(500);
		});

		// clicking any close buttons on modals / preview images closes target and overlay
		$('.close-modal-btn, #modal-overlay, #preview-image').click(function() {
			$('#modal-overlay').fadeOut(500);
			$('.modal, #preview-image').fadeOut(500);
		});
	}

	/* Update Pricing Summary 
	 * -----------------------
	 * Updates the price boxes in the pricing summary modal.
	 */
	_updatePricingSummary() {
		$('#pricing-summary').empty();
		$('.pricing-summary-total').empty();

		for (const area in mlsAreas) {
			const numMailings = mlsAreas[area]['unblocked-mailings'];
			const price = PRICE_PER_MAILING[mlsAreas[area]['page-version']];
			const complete = mlsAreas[area]['total-complete'];
			const current = (area === currentArea);
			$('#pricing-summary').append(createPricingBox(area, numMailings, price, complete, current));
		}

		$('.pricing-summary-total').append(createPricingBox(TOTAL_TITLE, agentData['total-mailings'], agentData['total-price'], true, false));

		const nextArea = $('#pricing-summary .pricing-box').not('.complete').first().children('.title').html();
		if (typeof nextArea === 'undefined') {
			$('#next-area-btn').hide();
			$('#to-final-accept-btn').show();
		} else {
			$('#next-area-btn span').html(nextArea);
			$('#next-area-btn').show();
			$('#to-final-accept-btn').hide();
		}

		$('#pricing-summary .pricing-box').not('.complete').click((e) => {
			const area = $(e.currentTarget).children('.title').html();
			$('#modal-overlay').fadeOut(500);
			$('.modal, #preview-image').fadeOut(500);
			this.setAreaCallback(area);
		});
	}

	/*   PUBLIC   */

	/* Update */
	update() {
		this.numConfirmed = 0;

		// previews the image from each step 
		this.sectionImages.each((e) => {
			let img = $(this.sectionImages[e])
			let nameID = $(img).parent().attr('id');
			const name = ID_TO_NAME[nameID.substr(0, nameID.length - 8)];
			if (name === 'Outside Page') {
				img.css('background-image', 'url(' + spreadCopies[0] + ')');
			} else if (name === 'Inside Page') {
				img.css('background-image', 'url(' + spreadCopies[1] + ')');
			} else if (name === 'City Highlights' || name === 'Area Highlights') {
				img.empty();
				img.append($('<ul></ul>'));
				for (const sentence of editSections[name]['confirmed-selection']) {
					img.children('ul').append($('<li>' + sentence + '</li>'));
				}
			} else {
				img.css('background-image', 'url(' + editSections[name]['confirmed-selection'] + ')');
			}
		});

		// update each of statuses
		this.previewSpreads.each((e) => {
			let spread = $(this.previewSpreads[e]);
			const id = spread.attr('id');
			const name = ID_TO_NAME[id.substr(0, id.length - 8)];
			const timeConfirmed = mlsAreas[currentArea]['final-preview'][name]['time-confirmed'];
			if (timeConfirmed === '') {
				spread.removeClass('confirmed');
				spread.children('.preview-section-options').children('.time-confirmed').html('');
				spread.children('.preview-section-options').children('.confirm').html('Confirm');
			} else {
				spread.addClass('confirmed');
				spread.children('.preview-section-options').children('.time-confirmed').html('Last confirmed on ' + timeConfirmed);
				spread.children('.preview-section-options').children('.confirm').html('Confirmed!');
				this.numConfirmed++;
			}
		});

		// enables or disables top link
		if (mlsAreas[currentArea]['editor-complete'] && mlsAreas[currentArea]['mailing-complete'])
			this.enable();
		else
			this.disable();

		this._updatePricingSummary();
		if (this.numConfirmed !== NUM_SECTIONS[creatorType] + 2)
			this.pricingSummaryBtn.addClass('disabled');
	}

	/* Enables Final Preview */
	enable() {
		$('#incomplete-preview-message').addClass('hidden');
		$('#complete-final-preview').removeClass('hidden');
		$('#top-step-preview').removeClass('tooltip');
		$('#top-step-preview').removeClass('disabled');
		$('#top-step-preview').siblings('.tooltiptext').addClass('hidden');
	}

	/* Disables Final Preview */
	disable() {
		$('#incomplete-preview-message').removeClass('hidden');
		$('#complete-final-preview').addClass('hidden');
		$('#top-step-preview').addClass('tooltip');
		$('#top-step-preview').addClass('disabled');
		$('#top-step-preview').siblings('.tooltiptext').removeClass('hidden');
	}

	/* Resets the status of the previews of the full PMA pages */
	resetPages() {
		mlsAreas[currentArea]['final-preview']['Outside Page']['time-confirmed'] = '';
		mlsAreas[currentArea]['final-preview']['Inside Page']['time-confirmed'] = '';
		this.update();
	}

}