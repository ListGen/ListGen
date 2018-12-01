class HomeownerSite {
	constructor() {
		this.homeownerTelevision = new HomeownerTelevision();
		this.inventoryArea = new InventoryArea();
		this._addEventListeners();
		this._initialize();
	}

	_initialize() {
		// $('.insert-homeowner-names').
	}

	_addEventListeners() {

		// expands welcome to splash screen
		$('#welcome').click(function() {
			if ($(this).parent().hasClass('expanded'))
				$('#modal-overlay').toggle();
			else
				setTimeout(function() {$('#modal-overlay').fadeToggle(1000); }, 200);
			$(this).parent().toggleClass('expanded');
		});

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

