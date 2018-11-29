class HomeownerSite {
	constructor() {
		this.homeownerTelevision = new HomeownerTelevision();
		this.inventoryArea = new InventoryArea();
		this._addEventListeners();
	}

	_addEventListeners() {

		// changes channel on television
		$('.nav-channel').click((e) => {
			$('.nav-channel').removeClass('active');
			$(e.currentTarget).addClass('active');
			this.homeownerTelevision.setChannel($('.nav-channel').index(e.currentTarget));
			$('html, body').animate({ scrollTop: 0 }, 500);	
		})
		
		// opens contact modal
		$('#contact-button').click(function() {
			$('#contact-modal').fadeIn(300);
			$('#modal-overlay').fadeIn(300);
		});

		// closes modals
		$('#modal-overlay').click(function() {
			$('.modal').fadeOut(300);
			$('#modal-overlay').fadeOut(300);
		});
	}
}


// Starts Site
$(document).ready(() => {
	const homeownerSite = new HomeownerSite();
});

