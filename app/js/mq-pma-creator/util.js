/* MQ PMA Creator - Util
 * Author: bhuelga
 */

// local data of session
var localData = {
	'mlsAreas' : {
		'Carmel Highlands' : {
			'sections' : {
				'Attention Grabber' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Front Graph' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Front Bar' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Top Image' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'City Highlights' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Area Highlights' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Call To Action' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Inside Bar' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				'Listings And Sales' : {
					'status' : 'Incomplete',
					'default-choice' : '',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										'../images/home-screen/house1.jpg',
										]
				},

			}
		},
		'Pebble Beach' : {

		}
	},
	'homeowners' : [
		{	
			'address-id' : '0000',
			'name' : 'Brandon Huelga',
			'address' : '531 Lasuen Mall',
			'last-sale-price' : 1.8,
			'last-sale-date' : '10/10/2018',
			'selling-agent' : 'Kyle Morrison',
			'blocked' : 'Blocked by Agent'
		},
		{	
			'address-id' : '0001',
			'name' : 'Kyle Morrison',
			'address' : '18B E Carmel Valley Rd',
			'last-sale-price' : 2.2,
			'last-sale-date' : '2/07/2017',
			'selling-agent' : 'Kyle Morrison',
			'blocked' : ''
		},
		{	
			'address-id' : '0002',
			'name' : 'Bill Jones',
			'address' : '1215 Santa Barbara Lane',
			'last-sale-price' : 6.2,
			'last-sale-date' : '5/21/2012',
			'selling-agent' : 'Seamus Riley',
			'blocked' : 'Active Listing'
		},
		{	
			'address-id' : '0003',
			'name' : 'Tom Hanks',
			'address' : '1992 Wilson Place',
			'last-sale-price' : 10.875,
			'last-sale-date' : '6/23/1991',
			'selling-agent' : 'Meryl Streep',
			'blocked' : 'Returned Mail'
		},
		{	
			'address-id' : '0004',
			'name' : 'Mario Luigi',
			'address' : '1984 Rainbow Rd',
			'last-sale-price' : .35,
			'last-sale-date' : '5/21/2013',
			'selling-agent' : 'Seamus Riley',
			'blocked' : ''
		},
		{	
			'address-id' : '0005',
			'name' : 'Ellen Ripley',
			'address' : '7 Nostrodamus',
			'last-sale-price' : 22000,
			'last-sale-date' : '5/25/1979',
			'selling-agent' : 'Ridley Scott',
			'blocked' : 'Blocked by Homeowner'
		}
	],
};

// section names to ids
const NAME_TO_ID = {
	'Attention Grabber' : 'attention-grabber',
	'Front Graph' : 'front-graph',
	'Front Bar' : 'front-bar',
	'Top Image' : 'top-image',
	'City Highlights' : 'city-highlights',
	'Area Highlights' : 'area-highlights',
	'Call To Action' : 'call-to-action',
	'Inside Bar' : 'inside-bar',
	'Listings And Sales' : 'listings-and-sales'
}

// section ids to names
const ID_TO_NAME = {
	'attention-grabber' : 'Attention Grabber',
	'front-graph' : 'Front Graph',
	'front-bar' : 'Front Bar',
	'top-image' : 'Top Image',
	'city-highlights' : 'City Highlights',
	'area-highlights' : 'Area Highlights',
	'call-to-action' : 'Call To Action',
	'inside-bar' : 'Inside Bar',
	'listings-and-sales' : 'Listings And Sales'
}

// W x H in inches of PMA
const PMA_SIZE = [17, 11];

// colors 
const STATUS_COLORS = {
	'Incomplete' : '#8A8A8A',
	'complete' : '#33C451',
};

// toggle switch html
const switchHTML = '<div class="complete">Complete</div>';

// mailing list options
const mailingListOptions = {
	valueNames : ['address-id', 'blocked', 'name', 'address', 'last-sale-price', 'last-sale-date', 'selling-agent'],
	item: '<tr><td class="address-id"></td><td class="blocked-container"><label class="check-container"><input class="block-check" type="checkbox"/><span class="checkmark"></span><span class="blocked"></span></label></td><td class="name"></td><td class="address"></td><td class="last-sale-price"></td><td class="last-sale-date"></td><td class="selling-agent"></td></tr>'
};

/* Crop
 * Returns a cropped canvas given a canvas and crop region.
 *
 * @param a object : {x: number, y: number} - left top corner
 * @param b object : {x: number, y: number} - bottom right corner
 */
function crop(can, a, b) {
    const ctx = can.getContext('2d');
    const imageData = ctx.getImageData(a.x, a.y, b.x, b.y);
  
    let newCan = document.createElement('canvas');
    newCan.width = b.x - a.x;
    newCan.height = b.y - a.y;
    const newCtx = newCan.getContext('2d');
  
    newCtx.putImageData(imageData, 0, 0);
  
    return newCan;    
 }

 function addTooltip(container, message) {
 	container.addClass('tooltip');
 	container.append($('<div class="tooltiptext">' + message + '</div>'));
 }