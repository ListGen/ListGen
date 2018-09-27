/* MQ PMA Creator - Util
 * Author: bhuelga
 */

// local data of session
var agentData = {
	'defaultMLSArea' : 'CARMEL HIGHLANDS',
	'mlsAreaNames' : ['CARMEL HIGHLANDS', 'PEBBLE BEACH'],
	'mlsAreas' : {
		'CARMEL HIGHLANDS' : {
			'sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'City Highlights' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Area Highlights' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Listings And Sales' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
			},
			'homeowners' : [
				{	
					'address-id' : '0000',
					'name' : 'Brandon Huelga',
					'address' : '531 Lasuen Mall',
					'last-sale-price' : 1.8,
					'last-sale-date' : '10/10/2018',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : 'Blocked by Agent',
					'past-client' : true
				},
				{	
					'address-id' : '0001',
					'name' : 'Kyle Morrison',
					'address' : '18B E Carmel Valley Rd',
					'last-sale-price' : 2.2,
					'last-sale-date' : '2/07/2017',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : '',
					'past-client' : true
				},
				{	
					'address-id' : '0002',
					'name' : 'Bill Jones',
					'address' : '1215 Santa Barbara Lane',
					'last-sale-price' : 6.2,
					'last-sale-date' : '5/21/2012',
					'selling-agent' : 'Seamus Riley',
					'blocked' : 'Active Listing',
					'past-client' : false

				},
				{	
					'address-id' : '0003',
					'name' : 'Tom Hanks',
					'address' : '1992 Wilson Place',
					'last-sale-price' : 10.875,
					'last-sale-date' : '6/23/1991',
					'selling-agent' : 'Meryl Streep',
					'blocked' : 'Returned Mail',
					'past-client' : false

				},
				{	
					'address-id' : '0004',
					'name' : 'Mario Luigi',
					'address' : '1984 Rainbow Rd',
					'last-sale-price' : .35,
					'last-sale-date' : '5/21/2013',
					'selling-agent' : 'Seamus Riley',
					'blocked' : '',
					'past-client' : false
				},
				{	
					'address-id' : '0005',
					'name' : 'Ellen Ripley',
					'address' : '7 Nostrodamus',
					'last-sale-price' : 22000,
					'last-sale-date' : '5/25/1979',
					'selling-agent' : 'Ridley Scott',
					'blocked' : 'Blocked by Homeowner',
					'past-client' : false
				}
			],
			'sectionsComplete' : 0,
			'totalComplete' : false,
			'numMailings' : 2,
			'areaPrice' : 3.2
		},
		'PEBBLE BEACH' : {
			'sections' : {
				'Attention Grabber' : {
					'selection' : '../images/home-screen/house6.jpg',
					'status' : 'Incomplete'
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'City Highlights' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Area Highlights' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
				'Listings And Sales' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete'
				},
			},
			'homeowners' : [
				{	
					'address-id' : '0000',
					'name' : 'Steven Wilson',
					'address' : '422 Oxford Way',
					'last-sale-price' : 7.0,
					'last-sale-date' : '12/10/2013',
					'selling-agent' : 'Michael Jones',
					'blocked' : '',
					'past-client' : false
				},
				{	
					'address-id' : '0001',
					'name' : 'Kyle Morrison',
					'address' : '18B E Carmel Valley Rd',
					'last-sale-price' : 2.2,
					'last-sale-date' : '2/07/2017',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : '',
					'past-client' : true
				},
				{	
					'address-id' : '0002',
					'name' : 'Bill Jones',
					'address' : '1215 Santa Barbara Lane',
					'last-sale-price' : 6.2,
					'last-sale-date' : '5/21/2012',
					'selling-agent' : 'Seamus Riley',
					'blocked' : '',
					'past-client' : false

				},
				{	
					'address-id' : '0003',
					'name' : 'Tom Hanks',
					'address' : '1992 Wilson Place',
					'last-sale-price' : 10.875,
					'last-sale-date' : '6/23/1991',
					'selling-agent' : 'Meryl Streep',
					'blocked' : '',
					'past-client' : false

				},
				{	
					'address-id' : '0004',
					'name' : 'Steve Rodgers',
					'address' : '12 Marvel Dr',
					'last-sale-price' : 300,
					'last-sale-date' : '5/28/2015',
					'selling-agent' : 'Tony Stark',
					'blocked' : 'Blocked by Homeowner',
					'past-client' : false
				}
			],
			'sectionsComplete' : 0,
			'editComplete' : false,
			'mailingComplete' : false,
			'previewComplete' : false,
			'numMailings' : 4,
			'areaPrice' : 6.4
		}
	},
	'logo' : '',
	'brokerage-logo' : '',
	'return-address' : '',
	'website' : '',
	'phone-number' : '',
	'email-addresses' : '',
	'totalAddresses' : 8,
	'totalMailings' : 6,
	'totalPrice' : 9.60
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

// price per mailing standard PMA
const mailingPrice = 1.6;

// W x H in inches of PMA
const PMA_SIZE = [17, 11];

// colors 
const STATUS_COLORS = {
	'Incomplete' : '#FF3A38',
	'Complete' : '#33C451',
};

const WINDOW_HEIGHTS = {
	'Editor' : 'auto',
	'Mailing List' : 1000,
	'Final Preview' : 5000,
	'Incomplete' : 1000
};

// mailing list options
const mailingListOptions = {
	valueNames : ['address-id', 'blocked', 'name', 'address', 'last-sale-price', 'last-sale-date', 'selling-agent'],
	item: `<tr>
			   <td class="address-id-container">
			       <div class="address-id"></div>
			       <strong class="lookup-number"></strong>
			   </td>
			   <td class="blocked-container">
			       <label class="check-container">
			           <input class="block-check" type="checkbox"/>
			           <span class="checkmark"><i class="material-icons">close</i></span>
			           <span class="blocked"></span>
		           </label>
	           </td>
	           <td class="name"></td>
	           <td class="address"></td>
	           <td class="last-sale-price"></td>
	           <td class="last-sale-date"></td>
	           <td class="selling-agent"></td>
           </tr>`
};

function drawImageOnCanvas(img) {
	let imgData = new Image();
	let context = img.data('canvas').getContext('2d');

	imgData.onload = () => {
		context.drawImage(imgData, img.data('left'), img.data('top'), 
						  img.data('width'), img.data('height'));
	};

	imgData.src = img.attr('src');
	return imgData;
}

function addTooltip(container, message) {
	container.addClass('tooltip');
	container.append($('<div class="tooltiptext">' + message + '</div>'));
}

function updateCurrentAreaText() { $('.insert-current-area').html(currentArea); }
function updateCurrentStepText() { $('.insert-current-step').html(currentStep); }