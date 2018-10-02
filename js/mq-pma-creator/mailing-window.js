/* MQ PMA Creator - Main Window - Mailing Window
* Author: bhuelga
*/

class MailingWindow {

	/* Mailing Window */
	constructor(completedCallback) {
		this.completedCallback = completedCallback;

		this.mailingList = new List('homeowners', mailingListOptions);
		this._querySelectors();
		this._addEventListeners();
		this._initialize();
	}

	/* Query Selectors */
	_querySelectors() {
		this.tableHeaderIcons = $('th');
		this.blockLinks = $('.block-link');
		this.pastClients = $('#past-clients');
		this.clearSearch = $('#clear-search');
		this.approveList = $('#approve-list');

		this.areaPriceEq = $('#current-area-price');
		this.otherAreaPricesEq = $('#other-area-prices');
		this.areaPrice = $('#final-area-price');
		this.totalPrice = $('#final-total-price');
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
			const type = $($(e.currentTarget).children()[1]).html();
			if (type === 'Total Blocked') {
				this.mailingList.search(); 
				this.mailingList.filter(function(item) {
					return item.values().blocked !== '';
				});
			} else {
				this.mailingList.search(type, ['blocked']); 
			}

			$(e.currentTarget).addClass('active');
		});

		// opens up the past clients modal
		this.pastClients.click(() => {
			$('#mailing-overlay').fadeIn(500);
			$('#past-clients-modal').fadeIn(500);
		});

		// displays full mailing list
		this.clearSearch.click(() => { 
			this.mailingList.search(); 
			this.mailingList.filter();
			this.blockLinks.each(function() { $(this).removeClass('active') });
		});

		// approves the mailing list
		this.approveList.click(() => {
			this.completedCallback("Mailing List", true);
		});

		// chooses the reason for blocking an address
		$('.reason').click((e) => {
			const reason = $(e.target).html();
			this.numBlocked[reason]++;
			this._updateBlockedCounts();
			let item = this.mailingList.get('address-id', this.currentCheckbox.parent()
												  					  .parent()
												  					  .siblings('.address-id-container')
												  					  .children('.address-id')
												  					  .html());
			item.values({'blocked' : reason});
			this.currentCheckbox.prop('checked', true);
			$('#choose-reason').slideUp(200);
			$('#mailing-overlay').fadeOut(200);
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
		this.otherAreaPricesEq.html('');

		this.numBlocked = {
			'Blocked by Agent' : 0,
			'Blocked by Homeowner' : 0,
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
		// adds event listener to all checkboxes
		this._setOnChange();
		// updates the pricing list
		this._updatePricingBar();
	}

	/* Set On Change - private
	 * --------------------------------
	 * Sets the on change event listener to all checkboxes.
	 * Sets the row as blocked and prompts the user to pick a reason, or unblocks the address.
	 */
	_setOnChange() {
		this.blockChecks = $('input:checkbox');
		this.blockChecks.change((e) => {
			const checkbox = $(e.target);
			if (checkbox.is(':checked')) {
				this.currentCheckbox = checkbox;
				const position = checkbox.offset();
				$('#choose-reason').css('top', position.top - 50);
				$('#choose-reason').css('left', position.left + 40);
				$('#choose-reason').slideDown(200);
				$('#mailing-overlay').fadeIn(200);
			} else {
				const type = checkbox.next().next().html();
				this.numBlocked[type]--;
				this._updateBlockedCounts();
				checkbox.next().next().html('');
			}
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
			} else {
				// this.sendingMail++;
			}
			if (currentCheckbox.html() === 'Active Listing' || currentCheckbox.html() === 'Pending Listing') {
				const row = currentCheckbox.parent().parent().parent();
				row.addClass('disabled');
			}
		});
	}

	/* Update Blocked Counts - private
	 * --------------------------------
	 * Updates the counts in the sidebar to reflect the number of checked rows of that block type.
	 */
	_updateBlockedCounts() {
		this.blockLinks.each((index) => {
			let currCount = $($(this.blockLinks[index]).children()[0]);
			let currType = $($(this.blockLinks[index]).children()[1]).html();
			currCount.html(this.numBlocked[currType]);
		});
	}

	/* Update Pricing Bar - private
	 * --------------------------------
	 * Updates all area prices to reflect the local data.
	 */
	_updatePricingBar() {
		const numMailings = mlsAreas[currentArea]['num-mailings'];
		const areaPrice = mlsAreas[currentArea]['area-price'].toFixed(2);
		this.areaPriceEq.html('<li>' + numMailings + ' mailings &times; $1.60/mailing = <strong>$' + areaPrice + '</strong></li>');

		for (let area in mlsAreas) {
			if (area !== currentArea) {
				const mailings = mlsAreas[area]['num-mailings'];
				const price = mlsAreas[area]['area-price'].toFixed(2);
				this.otherAreaPricesEq.append($('<h4>' + area + '</h4>'));
				this.otherAreaPricesEq.append($('<li>' + mailings + ' mailings &times; $1.60/mailing = <strong>$' + price + '</strong></li>'));
			}
		}

		this.areaPrice.html('$' + areaPrice);
		this.totalPrice.html('$' + agentData['total-price'].toFixed(2));
	}


	/* Update */
	update() {
		this._initialize();
	}


}