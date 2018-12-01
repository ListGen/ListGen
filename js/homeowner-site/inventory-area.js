/* Homeowner Inventory
 * Author: bhuelga
 */

class InventoryArea {
	
	constructor() {
		this.inventory = $('#inventory');
		this._setEventListeners();
	}

	_setEventListeners() {
		// change between agent collection and search results
		$('.tab-link').click(function() {
			$('.tab-link').removeClass('active');
			$(this).addClass('active');
			if ($(this).html() === 'Search Results') {
				$('.inventory-selection').hide();
				$('#no-results').show();
			} else {
				$('.inventory-selection').show();
				$('#no-results').hide();
			}
		});

		// favorites and unfavorites a property
		$('.favorite-star').click(function() {
			const curr = $(this).html();
			if (curr === 'star')
				$(this).html('star_border');
			else
				$(this).html('star');
		});
	}


	/*   PUBLIC    */

	


}