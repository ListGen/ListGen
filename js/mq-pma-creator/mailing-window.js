/* MQ PMA Creator - Main Window - Mailing Window
* Author: bhuelga
*/

class MailingWindow {

	/* Mailing Window
	 * ---------------
	 * Controls the mailing list.
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
		this.mailingWindow = $('#mailing-window');
		this.tableHeaderIcons = $('th');
		this.tableRows = $('tr');
		this.blockLinks = $('.block-link');
		this.quickBlockLinks = $('.quick-block-link');
		this.pastClients = $('#past-clients');
		this.clearSearch = $('#clear-search');
		this.approveList = $('#approve-list');
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

		// quick blocks
		this.quickBlockLinks.click((e) => {
			const cutoff = $(e.target).find('span');
			this.tableRows.each((e) => {
				const date = e.target;
				const year = date.substr(date.length - 4);
				const currentYear = (new Date()).getFullYear();

			});
		});

		// opens up the past clients modal
		this.pastClients.click(() => {
			$('#past-clients-modal').addClass('active');
		});

		// displays full mailing list
		this.clearSearch.click(() => { 
			this.mailingList.search(); 
			this.mailingList.filter();
			this.blockLinks.each(function() { $(this).removeClass('active') });
		});

		// approves the mailing list
		this.approveList.click(() => {
			console.log("Approve Mailing List");
		});
	}

	/* Initialize Mailing List - private
	 * ---------------
	 * Initializes the mailing list with all counts of blocked addresses, pricing for the
	 * number of mailings being sent out.
	 */
	_initializeMailingList() {
		this.mailingList = new List('homeowners', mailingListOptions, localData['homeowners']);
		this.totalMail = 0;
		this.sendingMail = 0;
		this.numBlocked = {
			'Blocked by Agent' : 0,
			'Blocked by Homeowner' : 0,
			'Active Listing' : 0,
			'Pending Listing' : 0,
			'Real Estate Agent' : 0,
			'Returned Mail' : 0,
			'Total' : 0
		};

		$('.blocked').each((index) => {
			this.totalMail++;
			let currentCheckbox = $($('.blocked')[index]);
			if (currentCheckbox.html() !== '') {
				currentCheckbox.prev().prev().prop('checked', true);
				this.numBlocked[currentCheckbox.html()]++;
				this.numBlocked['Total']++;
			} else {
				this.sendingMail++;
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
				this._chooseBlockedReason(checkbox);
			} else {
				const type = checkbox.next().next().html();
				this.numBlocked[type]--;
				this._updateBlockedCounts();
				checkbox.next().next().html('');
			}

		});

		// populate name of MLS area
		$('#approve-list strong span').html('CARMEL&nbsp;HIGHLANDS');


	}

	/* Choose Blocked Reason - private
	 * --------------------------------
	 * Prompts the agent to choose a reason for blocking the mailing.
	 */
	_chooseBlockedReason(checkbox) {
		const position = checkbox.offset();
		$('#choose-reason').css('top', position.top - 50);
		$('#choose-reason').css('left', position.left + 40);
		$('#choose-reason').slideDown(200);
		$('.reason').click((e) => {
			const reason = $(e.target).html();
			$('#choose-reason').slideUp(200);
			this.numBlocked[reason]++;
			console.log(this.numBlocked);
			this._updateBlockedCounts();
			checkbox.next().next().html(reason);
			checkbox.prop('checked', true);
			$('.reason').off('click');
			$('body :not(.reason)').off('click');
		});
		$('body :not(.reason)').click(() => {
			$('#choose-reason').slideUp(200);
			checkbox.prop('checked', false);
			$('.reason').off('click');
			$('body :not(.reason)').off('click');
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


}