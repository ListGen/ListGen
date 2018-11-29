class InventoryArea {
	
	constructor() {
		this.inventory = $('#inventory');
		this._setEventListeners();
	}

	_setEventListeners() {
		
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