/* Homeowner Television
 * Author: bhuelga
 */

class HomeownerTelevision {
	
	constructor() {
		this.television = $('#tv');
		this._setEventListeners();
	}

	_setEventListeners() {
		// expands and contracts TV
		$('#tv-options').click(function() {
			const delay = 500;
			if ($('#tv').hasClass('expanded')) {
				$('#agent-info').delay(delay).animate({width: 'toggle'}, delay);
				$('#channel-menu').delay(delay).animate({width: 'toggle'}, delay);
				$('#tv-container').animate({width: '60%'}, delay);
				$('#main-container').animate({height: '600px'}, delay);
				$('#tv-options i').html('fullscreen');
			} else {
				$('#agent-info').animate({width: 'toggle'}, delay);
				$('#channel-menu').animate({width: 'toggle'}, delay);
				$('#tv-container').animate({width: '100%'}, delay);
				$('#main-container').animate({height: '1000px'}, delay);
				$('#tv-options i').html('fullscreen_exit');
			}
			
			$('#tv').toggleClass('expanded');
		});
	}


	/*   PUBLIC    */

	/* Set Channel
	 * -----------
	 * Changes the channel of the central TV.
	 */
	setChannel(channel) {
		this.television.removeClass();
		this.television.addClass(CHANNELS[channel]);
	}


}