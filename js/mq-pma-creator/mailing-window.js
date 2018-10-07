/* MQ PMA Creator - Main Window - Mailing Window
* Author: bhuelga
*/

class MailingWindow {

	/* Mailing Window */
	constructor(completedCallback, completeAreaCallback) {
		this.completedCallback = completedCallback;
		this.completeAreaCallback = completeAreaCallback;
		this.mailingList = new List('homeowners', mailingListOptions);
		this._querySelectors();
		this._addEventListeners();
		this._initialize();
	}

	/* Query Selectors */
	_querySelectors() {
		this.tableHeaderIcons = $('th');
		this.blockLinks = $('.block-link');
		this.clearSearch = $('#clear-search');
		this.approveList = $('#approve-list');
		this.areaPrices = $('#area-prices');
	}

	/* Add Event Listeners */
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
			const reason = $($(e.currentTarget).children()[1]).html();
			if (reason === 'Total Blocked') {
				this.mailingList.search(); 
				this.mailingList.filter(function(item) {
					return item.values().blocked !== '';
				});
			} else {
				this.mailingList.search(reason, ['blocked']); 
			}

			$(e.currentTarget).addClass('active');
		});

		// displays full mailing list
		this.clearSearch.click(() => { 
			this.mailingList.search(); 
			this.mailingList.filter();
			this.blockLinks.each(function() { $(this).removeClass('active') });
		});

		// approves the mailing list
		this.approveList.click(() => {
			updatePricingBox($('.pricing-box.current'), this.unblockedMailings, this.pricePerMailing, true);
			agentData['total-mailings'] += this.unblockedMailings;
			agentData['total-price'] += this.unblockedMailings * this.pricePerMailing;
			updatePricingBox($('.pricing-box.total'), agentData['total-mailings'], agentData['total-price'], true);
			this.completedCallback("Mailing List", true);
			this.approveList.hide();
		});

		// chooses the reason for blocking an address
		$('.reason').click((e) => {
			this._changeMailingList($(e.target), true);
		});

		// close and uncheck the checkbox
		$('#mailing-overlay').click(() => {
			this.currentCheckbox.prop('checked', false);
			$('#choose-reason').slideUp(200);
			$('#mailing-overlay').fadeOut(200);
		});
	}

	/* Initialize */
	_initialize() {
		this.mailingList.clear();
		this.mailingList.add(homeowners);
		this.areaPrices.empty();

		this.numBlocked = {
			'Agent-Blocked' : 0,
			'Homeowner-Blocked' : 0,
			'Active Listing' : 0,
			'Pending Listing' : 0,
			'Real Estate Agent' : 0,
			'Returned Mail' : 0,
			'Total Blocked' : 0
		};

		// counts all blocked addresses 
		this._countBlockedAddresses();
		// updates the counts on the left side bar
		this._updateBlockedCounts();
		// adds event listener to all checkboxes and edit buttons
		this._setOnChange();

		this.unblockedMailings = homeowners.length - this.numBlocked['Total Blocked'];
		mlsAreas[currentArea]['unblocked-mailings'] = this.unblockedMailings;
		this.pricePerMailing = PRICE_PER_MAILING[version];

		// updates the pricing list
		this._initializePricingBar();

		if (!mlsAreas[currentArea]['mailing-complete']) this.approveList.show();
	}

	/* Set On Change - private
	 * --------------------------------
	 * Sets the on change event listener to all checkboxes.
	 * Sets the row as blocked and prompts the user to pick a reason, or unblocks the address.
	 */
	_setOnChange() {
		this.blockChecks = $('.block-check');
		this.blockChecks.change((e) => {
			const checkbox = $(e.target);
			this.currentCheckbox = checkbox;
			if (checkbox.is(':checked')) {
				const position = checkbox.offset();
				$('#choose-reason').css('top', position.top - 50);
				$('#choose-reason').css('left', position.left + 40);
				$('#choose-reason').slideDown(200);
				$('#mailing-overlay').fadeIn(200);
			} else {
				this._changeMailingList(checkbox.next().next(), false);
			}
		});

		$('.edit-btn').click(() => {
			$('#edit-modal').fadeIn(300);
			$('#modal-overlay').fadeIn(300);
		});
	}

	/* Count Blocked Addresses - private
	 * --------------------------------
	 * Counts the blocked addresses of the list to initialize the member variable.
	 */
	_countBlockedAddresses() {
		$('.blocked').each((index) => {
			let currentCheckbox = $($('.blocked')[index]);
			if (currentCheckbox.html() !== '') {
				currentCheckbox.prev().prev().prop('checked', true);
				this.numBlocked[currentCheckbox.html()]++;
				this.numBlocked['Total Blocked']++;
			}

			if (currentCheckbox.html() === 'Active Listing' || currentCheckbox.html() === 'Pending Listing') {
				const row = currentCheckbox.parent().parent().parent();
				row.addClass('disabled');
			}
		});
	}

	/* Update Blocked Counts
	 * --------------------------------
	 * Updates the counts in the sidebar to reflect the number of checked rows of that block type.
	 */
	_updateBlockedCounts() {
		this.blockLinks.each((index) => {
			const currCount = $($(this.blockLinks[index]).children()[0]);
			const currReason = $($(this.blockLinks[index]).children()[1]).html();
			currCount.html(this.numBlocked[currReason]);
		});
	}

	/* Initialize Pricing Bar
	 * ----------------------
	 * Adds all area prices .
	 */
	_initializePricingBar() {
		this.areaPrices.append(createPricingBox(currentArea, this.unblockedMailings, this.pricePerMailing, mlsAreas[currentArea]['mailing-complete'], true));
		for (const area in mlsAreas) {
			if (area === currentArea) continue;
			const unblockedMailings = mlsAreas[area]['unblocked-mailings'];
			const price = PRICE_PER_MAILING[mlsAreas[area]['page-version']];
			const complete = mlsAreas[area]['mailing-complete'];
			this.areaPrices.append(createPricingBox(area, unblockedMailings, price, complete, false));
		}
		this.areaPrices.append(createPricingBox(TOTAL_TITLE, agentData['total-mailings'], agentData['total-price'], true, false));
	}

	/* Change Mailing List
	 * ---------------------
	 * Handles blocking or unblocking an address.
	 *
	 * @param checkbox DOMobject - blocked reason container
	 * @param block bool : true if blocking, false if unblocking
	 */
	_changeMailingList(checkbox, block) {
		const reason = (block) ? checkbox.html() : '';
		const change = (block) ? 1 : -1;
		this.numBlocked[checkbox.html()] += change;
		this.numBlocked['Total Blocked'] += change;
		this._updateBlockedCounts();
		let item = this.mailingList.get('address-id', this.currentCheckbox.parent()
											  					  .parent()
											  					  .siblings('.address-id-container')
											  					  .children('.address-id')
											  					  .html())[0];
		
		item.values({blocked : reason});
		this.currentCheckbox.prop('checked', block);
		let record = homeowners.findIndex((elem) => elem['address-id'] === item.values()['address-id']);
		homeowners[record]['blocked'] = reason;
		if (mlsAreas[currentArea]['mailing-complete']) {
			agentData['total-mailings'] -= this.unblockedMailings;
			agentData['total-price'] -= this.unblockedMailings * this.pricePerMailing;
		}
		this.unblockedMailings -= change;
		mlsAreas[currentArea]['unblocked-mailings'] = this.unblockedMailings;
		updatePricingBox($('.pricing-box.current'), this.unblockedMailings, this.pricePerMailing, false);
		updatePricingBox($('.pricing-box.total'), agentData['total-mailings'], agentData['total-price'], true);
		if (block) {
			$('#choose-reason').slideUp(200);
			$('#mailing-overlay').fadeOut(200);
		}
		this.approveList.show();
		this.completedCallback("Mailing List", false);
		this.completeAreaCallback(false);
	}

	/* Update */
	update() {
		this._initialize();
	}


}