/* MQ PMA Creator - Main Window - Preview Window
* Author: bhuelga
*/

class PreviewWindow {

	/* Preview Window */
	constructor(backToEditCallback) {
		this.backToEditCallback = backToEditCallback;

		this._querySelectors();
		this._addEventListeners();
		this._initializeFinalPreview();
	}

	/* Query Selectors */
	_querySelectors() {
		this.previewWindow = $('#preview-window');
		this.previewSpreads = $('.preview-spread');
		this.sectionImages = $('.preview-spread .preview-image');

		this.confirmButtons = $('.confirm');
		this.backToEditButtons = $('.back-to-edit');

		this.openFinalModal = $('#open-final-modal');

		this.chargePerAreaContainer = $('#charge-per-area');
		this.totalCharge = $('#total-charge');
		this.finalAcceptBtn = $('#final-accept-btn');
		this.openThankYouModal = $('#thank-you-modal');
	}

	/* Add Event Listeners */
	_addEventListeners() {
		// clicking image brings up larger preview
		this.sectionImages.click(function() {
			let src = $(this).css('background-image')
			src = src.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')
			$('#preview-image .pi').attr('src', src);
			$('#preview-image .pi').height(this.height);
			$('#preview-image .pi').width(this.width);
			$('#preview-image').fadeIn(500);
			$('#modal-overlay').fadeIn(500);
		});

		// confirm a section
		this.confirmButtons.click((e) => {
			const button = $(e.target);
			button.parent().parent().addClass('confirmed');
			button.html('Confirmed!');
			const date = getDateAndTime();
			$(e.currentTarget).siblings('.time-confirmed').html('Last confirmed on ' + date);
			mlsAreas[currentArea]['final-preview'][button.siblings('h1').html()]['time-confirmed'] = date;

			this.numConfirmed++;
			// enables confirm modal button
			if (this.numConfirmed === 9) 
				this.openFinalModal.removeClass('disabled');

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

			this.backToEditCallback(step);
		});

		// opens final preview modal
		this.openFinalModal.click(() => {
			$('#modal-overlay').fadeIn(500);
			$('#final-preview-modal').fadeIn(500);
		});

		// shows thank you modal
		this.finalAcceptBtn.click(() => {
			$('#final-preview-modal').fadeOut(500);
			$('#thank-you-modal').delay(500).fadeIn(500);
		});

		// clicking any close buttons on modals / preview images closes target and overlay
		$('.close-modal-btn').click(function() {
			$('#modal-overlay').fadeOut(500);
			$('.modal, #preview-image').fadeOut(500);
		});

		// clicking overlay closes open modal/image and overlay
		$('#modal-overlay, #preview-image').click(function() {
			$('.modal, #preview-image').fadeOut(500);
			$('#modal-overlay').fadeOut(500);
		});
	}

	/* Initialize Preview Window
	 * ---------------
	 * Initializes the Preview Window with the defaults of the mid-quarter PMA.
	 */
	_initializeFinalPreview() {
		for (let area in mlsAreas) {
			const numMailings = mlsAreas[area]['num-mailings'];
			const price = mlsAreas[area]['area-price'].toFixed(2);
			this.chargePerAreaContainer.append($('<h2>' + area + '</h2>'));
			this.chargePerAreaContainer.append($('<div><strong>' + numMailings + '</strong> mailings &times; $1.60/mailing = <strong>$' + price + '</strong></div>'));
		}

		this.totalCharge.append($('<h2>Total for all Mailings</h2>'));
		this.totalCharge.append($('<div><strong>' + agentData['total-mailings'] + '</strong> total mailings &times; $1.60/mailing = <strong>$' + agentData['total-price'].toFixed(2) + '</strong></div>'));

		this.update();
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

			img.css('background-image', 'url(' + editSections[name]['confirmed-selection'] + ')');
		});

		// update each of the preview spreads with the status
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

		// enables or disables
		if (mlsAreas[currentArea]['editor-complete'] && mlsAreas[currentArea]['mailing-complete'])
			this.enable();
		else
			this.disable();
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

}