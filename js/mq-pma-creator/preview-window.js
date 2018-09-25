/* MQ PMA Creator - Main Window - Preview Window
* Author: bhuelga
*/

class PreviewWindow {

	/* Preview Window
	 * ---------------
	 * Controls the final preview window.
	 */
	constructor(backToEditCallback) {
		this.backToEditCallback = backToEditCallback;

		this._querySelectors();
		this._addEventListeners();
		this._initializeFinalPreview();
	}

	/* Query Selectors - private
	 * ---------------
	 * Selects all sections of PMA screen.
	 */
	_querySelectors() {
		this.previewWindow = $('#preview-window');
		this.previewSpreads = $('.preview-spread');
		this.sectionImages = $('.preview-spread .preview-image');

		this.confirmButtons = $('.preview-spread div button.confirm');
		this.backToEditButtons = $('.preview-spread div button.back-to-edit');
		this.openFinalModal = $('#open-final-modal');
		this.chargePerAreaContainer = $('#charge-per-area');
		this.totalCharge = $('#total-charge');
		this.finalAcceptBtn = $('#final-accept-btn');
		this.openThankYouModal = $('#thank-you-modal');
	}

	/* Add Event Listeners - private
	 * ---------------
	 * Sets event listeners.
	 */
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
			e.preventDefault();
			$(e.currentTarget).parent().parent().addClass('completed');
			$(e.currentTarget).siblings('h1').css('color', '#33C451');
			$(e.currentTarget).html('Confirmed!');
			$(e.currentTarget).siblings('.time-confirmed').html('Confirmed on ' + (new Date($.now())).toString());
			this.numConfirmed++;

			// enables confirm modal button
			if (this.numConfirmed === 9) 
				this.openFinalModal.removeClass('disabled');

			// scroll to next section
			$('html, body').animate({ scrollTop: $(e.currentTarget).next().offset().top }, 500);
		});

		// back to edit
		this.backToEditButtons.click((e) => { 
			if ($(e.currentTarget).parent().parent().hasClass('completed')) {
				$(e.currentTarget).parent().parent().removeClass('completed');
				this.numConfirmed--;
			}

			$(e.currentTarget).siblings('h1').css('color', 'white');
			$(e.currentTarget).siblings('.time-confirmed').html('');
			this.openModal.addClass('disabled');

			this.backToEditCallback(0);
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

	/* Initialize Preview Window - private
	 * ---------------
	 * Initializes the Preview Window with the defaults of the mid-quarter PMA.
	 */
	_initializeFinalPreview() {
		this.numConfirmed = 0;

		for (let area in mlsAreas) {
			const numMailings = mlsAreas[area]['numMailings'];
			const price = mlsAreas[area]['areaPrice'].toFixed(2);
			this.chargePerAreaContainer.append($('<h2>' + area + '</h2>'));
			this.chargePerAreaContainer.append($('<div><strong>' + numMailings + '</strong> mailings &times; $1.60/mailing = <strong>$' + price + '</strong></div>'));
		}

		this.totalCharge.append($('<h2>Total for all Mailings</h2>'));
		this.totalCharge.append($('<div><strong>' + localData['totalMailings'] + '</strong> total mailings &times; $1.60/mailing = <strong>$' + localData['totalPrice'].toFixed(2) + '</strong></div>'));

		this.update();
	}

	/*   PUBLIC   */


	update() {
		// previews the image from each step 
		this.sectionImages.each((e) => {
			let img = $(this.sectionImages[e])
			let nameID = $(img).parent().attr('id');
			const name = ID_TO_NAME[nameID.substr(0, nameID.length - 8)];

			img.css('background-image', 'url(' + sections[name]['selection'] + ')');
		});

	}

	enable() {
		$('#incomplete-preview-message').addClass('hidden');
		$('#complete-final-preview').removeClass('hidden');
		$('#top-step-preview').removeClass('tooltip');
		$('#top-step-preview span').first().removeClass('disabled');
		$('#top-step-preview .tooltiptext').addClass('hidden');
	}

	disable() {
		$('#incomplete-preview-message').removeClass('hidden');
		$('#complete-final-preview').addClass('hidden');
		$('#top-step-preview').addClass('tooltip');
		$('#top-step-preview span').first().addClass('disabled');
		$('#top-step-preview .tooltiptext').removeClass('hidden');
	}
}