/* MQ PMA Creator - Util
 * Author: bhuelga
 */

// local data of session
var agentData = {
	'default-mls-area' : 'CARMEL HIGHLANDS',
	'mls-areas' : {
		'CARMEL HIGHLANDS' : {
			'page-version' : '4',
			'city' : 'CARMEL-BY-THE-SEA',
			'city-market' : 'SELLER\'S',
			'area-market' : 'BALANCED',
			'edit-sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'City Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Area Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Listings And Sales' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
			},
			'homeowners' : [
				{	
					'address-id' : '0000',
					'name' : 'Brandon Huelga',
					'mail-address-line-1' : '522 Hannon Ave',
					'mail-address-line-2' : 'Monterey, CA 93940',
					'site-address' : '522 Hannon Ave',
					'last-sale-price' : '$1,800,000',
					'last-sale-date' : '10/10/2018',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : 'Agent-Blocked',
					'past-client' : true,
					'parcel-number' : '111-332-494'
				},
				{	
					'address-id' : '0001',
					'name' : 'Kyle Morrison',
					'mail-address-line-1' : '12 Pine Lane',
					'mail-address-line-2' : 'Carmel Valley, CA 92924',
					'site-address' : '18B E Carmel Valley Rd',
					'last-sale-price' : '$2,200,000',
					'last-sale-date' : '2/07/2017',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : '',
					'past-client' : true,
					'parcel-number' : '434-461-888'
				},
				{	
					'address-id' : '0002',
					'name' : 'Bill Jones',
					'mail-address-line-1' : '1215 Santa Barbara Lane',
					'mail-address-line-2' : 'Santa Barbara, CA 13441',
					'site-address' : '1215 Santa Barbara Lane',
					'last-sale-price' : '$6,200,000',
					'last-sale-date' : '5/21/2012',
					'selling-agent' : 'Seamus Riley',
					'blocked' : 'Active Listing',
					'past-client' : false,
					'parcel-number' : '756-122-1252'
				},
				{	
					'address-id' : '0003',
					'name' : 'Tom Hanks',
					'mail-address-line-1' : '322 Hardy Rd',
					'mail-address-line-2' : 'Houston, TX 10220',
					'site-address' : '1992 Wilson Place',
					'last-sale-price' : '$10,875,000',
					'last-sale-date' : '6/23/1991',
					'selling-agent' : 'Meryl Streep',
					'blocked' : 'Returned Mail',
					'past-client' : false,
					'parcel-number' : '827-357-111'
				},
				{	
					'address-id' : '0004',
					'name' : 'Mario Luigi',
					'mail-address-line-1' : '12 1st Street',
					'mail-address-line-2' : 'New York, NY 33044',
					'site-address' : '1984 Rainbow Rd',
					'last-sale-price' : '$350,000',
					'last-sale-date' : '5/21/2013',
					'selling-agent' : 'Seamus Riley',
					'blocked' : '',
					'past-client' : false,
					'parcel-number' : '788-968-944'
				},
				{	
					'address-id' : '0005',
					'name' : 'Ellen Ripley',
					'mail-address-line-1' : '38 Cedar Ave',
					'mail-address-line-2' : 'Augusta, ME 33020',
					'site-address' : '72100 Newark Way',
					'last-sale-price' : '$200,050,000',
					'last-sale-date' : '5/25/1979',
					'selling-agent' : 'Ridley Scott',
					'blocked' : 'Homeowner-Blocked',
					'past-client' : false,
					'parcel-number' : '333-333-554'
				}
			],
			'Outside Page' : {
				'time-confirmed' : ''
			},
			'Inside Page' : {
				'time-confirmed' : ''
			},
			'listings-and-sales' : [
				{
					'address' : '2715 Ribera Rd',
					'price' : 5800000,
					'sqft' : 4206,
					'beds' : 5,
					'baths' : 3.5,
					'lot-size' : 5000,
					'dom' : 157,
					'garage-space' : 3,
					'mls-number' : 81705106,
					'cross-street' : 'HWY 1',
					'date' : '2/23/17',
					'src' : '../../images/pma-creator/las/2715RiberaRd.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : 'Ocean',
					'description' : 'With sweeping views of Carmel Bay, Point Lobos and Carmel River Beach, we invite you to come and experience this ever-changing seascape.'
				},
				{
					'address' : '2943 Cuesta Way',
					'price' : 2225000,
					'sqft' : 2971,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 16552,
					'dom' : 23,
					'garage-space' : 3,
					'mls-number' : 81725908,
					'cross-street' : 'Ribera',
					'date' : '9/4/18',
					'src' : '../../images/pma-creator/las/2943CuestaWay.jpg',
					'agents' : true,
					'type' : 'sold',
					'view' : 'Ocean',
					'description' : 'A short stroll to Carmel\'s Special Hidden Beach that inspired artists, painters, and locals offers a place to escape.'
				},
				{
					'address' : '27030 Meadow Way',
					'price' : 2395000,
					'sqft' : 2606,
					'beds' : 3,
					'baths' : 3,
					'lot-size' : 9901,
					'dom' : 76,
					'garage-space' : 2,
					'mls-number' : 81703226,
					'cross-street' : 'Ribera',
					'date' : '2/4/18',
					'src' : '../../images/pma-creator/las/27030MeadowWay.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Newly renovated in 2018; this single level 3 bedroom, 2 1/2 bath home is just a short walk to one of Carmel\'s most pristine beaches and fantastic walking trails.'
				},
				{
					'address' : '2975 Ribera Rd',
					'price' : 1595000,
					'sqft' : 2871,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 8398,
					'dom' : 14,
					'garage-space' : 2,
					'mls-number' : 81727291,
					'cross-street' : 'HWY 1',
					'date' : '6/6/17',
					'src' : '../../images/pma-creator/las/2975RiberaRd.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Enter this bright, airy Carmel Meadows home to soaring vaulted ceilings and a wall of windows showcasing dramatic views of Carmel mountains and the ever-changing sky.'
				},
				{
					'address' : '2507 16th Ave',
					'price' : 6995000,
					'sqft' : 4223,
					'beds' : 4,
					'baths' : 4,
					'lot-size' : 9596,
					'dom' : 48,
					'garage-space' : 2,
					'mls-number' : 81722429,
					'cross-street' : 'Rio',
					'date' : '6/8/18',
					'src' : '../../images/pma-creator/las/250716thAve.jpg',
					'agents' : true,
					'type' : 'sold',
					'view' : '-',
					'description' : 'The Best of Carmel Point- a gracious 4 bed 3.5 bath home located on a quiet street, large private lot that offers amazing indoor-outdoor space.'
				},
				{
					'address' : '26325 Isabella Ave',
					'price' : 8500000,
					'sqft' : 5268,
					'beds' : 4,
					'baths' : 4,
					'lot-size' : 13068,
					'dom' : 78,
					'garage-space' : 2,
					'mls-number' : 81718087,
					'cross-street' : 'Stewart',
					'date' : '7/10/18',
					'src' : '../../images/pma-creator/las/26325IsabellaAve.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Tucked into the heart of Carmel Point is this warm 5,300 sq.ft. home, perfect for entertaining and sharing memories with family.'
				},
				{
					'address' : '3044 Fifth St',
					'price' : 210000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Juniper',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house2.jpg',
					'agents' : true,
					'type' : 'pending',
					'view' : '-',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '3044 Sixth St',
					'price' : 930000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Freedom',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house5.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				}
			],
			'editor-complete' : false,
			'mailing-complete' : false,
			'total-complete' : false,
			'unblocked-mailings' : 0
		},
		'Spanish Bay' : {
			'page-version' : '4',
			'city' : 'PEBBLE BEACH',
			'city-market' : 'BUYERS\'S',
			'area-market' : 'SELLER\'S',
			'edit-sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'City Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Area Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Complete',
					'time-confirmed' : ''
				},
				'Listings And Sales' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Complete',
					'time-confirmed' : ''
				},
			},
			'homeowners' : [
				{	
					'address-id' : '0000',
					'name' : 'Steven Wilson',
					'mail-address-line-1' : '422 Oxford Way',
					'mail-address-line-2' : 'England, UK 23033',
					'site-address' : '422 Oxford Way',
					'last-sale-price' : '$7,000,000',
					'last-sale-date' : '12/10/2013',
					'selling-agent' : 'Michael Jones',
					'blocked' : '',
					'past-client' : false,
					'parcel-number' : '732-334-412'
				},
				{	
					'address-id' : '0001',
					'name' : 'Kyle Morrison',
					'mail-address-line-1' : '12 Pine Lane',
					'mail-address-line-2' : 'Carmel Valley, CA 92924',
					'site-address' : '18B E Carmel Valley Rd',
					'last-sale-price' : '$2,200,000',
					'last-sale-date' : '2/07/2017',
					'selling-agent' : 'Kyle Morrison',
					'blocked' : '',
					'past-client' : true,
					'parcel-number' : '304-009-800'
				},
				{	
					'address-id' : '0002',
					'name' : 'Bill Jones',
					'mail-address-line-1' : '1215 Santa Barbara Lane',
					'mail-address-line-2' : 'Santa Barbara, CA 13441',
					'site-address' : '1215 Santa Barbara Lane',
					'last-sale-price' : '$6,200,000',
					'last-sale-date' : '5/21/2012',
					'selling-agent' : 'Seamus Riley',
					'blocked' : '',
					'past-client' : false,
					'parcel-number' : '198-039-444'
				},
				{	
					'address-id' : '0003',
					'name' : 'Tom Hanks',
					'mail-address-line-1' : '38 Cedar Ave',
					'mail-address-line-2' : 'Augusta, ME 33020',
					'site-address' : '1992 Wilson Place',
					'last-sale-price' : '$10,000,000',
					'last-sale-date' : '6/23/1991',
					'selling-agent' : 'Meryl Streep',
					'blocked' : '',
					'past-client' : false,
					'parcel-number' : '123-124-142'
				},
				{	
					'address-id' : '0004',
					'name' : 'Steve Rodgers',
					'mail-address-line-1' : '12 Marvel Dr',
					'mail-address-line-2' : 'Los Angeles, CA 90212',
					'site-address' : '12 Marvel Dr',
					'last-sale-price' : '$300,000,000',
					'last-sale-date' : '5/28/2015',
					'selling-agent' : 'Tony Stark',
					'blocked' : 'Homeowner-Blocked',
					'past-client' : false,
					'parcel-number' : '566-665-452'
				}
			],
			'Outside Page' : {
				'time-confirmed' : ''
			},
			'Inside Page' : {
				'time-confirmed' : ''
			},
			'listings-and-sales' : [
				{
					'address' : '1223 Main St',
					'price' : 4500000,
					'sqft' : 3500,
					'beds' : 5,
					'baths' : 5,
					'lot-size' : 5000,
					'dom' : 62,
					'garage-space' : 2,
					'mls-number' : 155401,
					'cross-street' : 'Cedar',
					'date' : '2/23/17',
					'src' : '../../images/home-screen/house1.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : 'Ocean',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '2373 Main St',
					'price' : 2000000,
					'sqft' : 6000,
					'beds' : 8,
					'baths' : 2,
					'lot-size' : 10000,
					'dom' : 20,
					'garage-space' : 6,
					'mls-number' : 471193,
					'cross-street' : 'Cedar',
					'date' : '9/4/18',
					'src' : '../../images/home-screen/house2.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : 'Bay',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '8740 Second St',
					'price' : 1400000,
					'sqft' : 2000,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 4000,
					'dom' : 45,
					'garage-space' : 2,
					'mls-number' : 118339,
					'cross-street' : 'Olive',
					'date' : '2/4/18',
					'src' : '../../images/home-screen/house3.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : 'River',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '9001 Main St',
					'price' : 9000000,
					'sqft' : 8000,
					'beds' : 12,
					'baths' : 12,
					'lot-size' : 9000,
					'dom' : 74,
					'garage-space' : 8,
					'mls-number' : 446322,
					'cross-street' : 'Cedar',
					'date' : '6/6/17',
					'src' : '../../images/home-screen/house4.jpg',
					'agents' : false,
					'type' : 'pending',
					'view' : 'Ocean',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '3044 Third St',
					'price' : 350000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Pine',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house5.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : '-',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '3044 Fourth St',
					'price' : 220000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Oak',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house6.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : '-',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '3044 Fifth St',
					'price' : 210000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Juniper',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house2.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : '-',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				},
				{
					'address' : '3044 Sixth St',
					'price' : 930000,
					'sqft' : 1000,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 3000,
					'dom' : 192,
					'garage-space' : 1,
					'mls-number' : 766577,
					'cross-street' : 'Freedom',
					'date' : '6/8/18',
					'src' : '../../images/home-screen/house5.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : '-',
					'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ex lectus, eu scelerisque justo scelerisque non. Duis vestibulum risus ut pulvinar commodo. '
				}
			],
			'editor-complete' : false,
			'mailing-complete' : false,
			'total-complete' : false,
			'unblocked-mailings' : 0
		}
	},
	'personal-info' : {
		'First Name' : 'Kyle',
		'Last Name' : 'Morrison',
		'Agent Logo' : '../../images/templates/logo.PNG',
		'Brokerage Logo' : '../../images/templates/sothebys.png',
		'Return Address 1' : '16B E Carmel Valley Rd',
		'Return Address 2' : 'Carmel Valley, CA 93924',
		'Mailing Address 1' : '16B E Carmel Valley Rd',
		'Mailing Address 2' : 'Carmel Valley, CA 93924',
		'Website' : 'kylemorrisonhomes.com',
		'Phone Number' : '831-555-5555',
		'Email Address' : 'kyle@kylemorrison.com',
		'CC Digits' : 'XXXX',
		'DRE Number' : '04385564'
	},
	'total-mailings' : 0,
	'total-price' : 0,
	'total-complete' : false
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
	'Listings And Sales' : 'listings-and-sales',
	'Outside Page' : 'outside-page',
	'Inside Page' : 'inside-page'
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
	'listings-and-sales' : 'Listings And Sales',
	'outside-page' : 'Outside Page',
	'inside-page' : 'Inside Page'
}

// W x H in inches of PMA
const PMA_SIZE = [17, 11];

// colors 
const STATUS_COLORS = {
	'Incomplete' : 'rgb(204, 0, 0)',
	'Complete' : 'rgb(28, 232, 0)',
};

// heights for the main window depending on the step
const WINDOW_HEIGHTS = {
	'Editor' : 'auto',
	'Mailing List' : 1060,
	'Final Preview' : 5000,
	'Incomplete' : 1060
};

const EDIT_BREAKPOINTS = [2500, 1900, 1450, 1200, 800, 700, 550];

const POS_RATIOS = {
	2500 : 1,
	1900 : .82,
	1450 : .64,
	1200 : .45,
	800 : .36,
	700 : .27,
	550 : .18
}

// number of sections depending on type
const NUM_SECTIONS = {
	'mq-4' : 9
}

const NUM_SPREADS = {
	'mq-4' : 2
}

// price per mailing for each of the page versions
const PRICE_PER_MAILING = {
	'4' : 1.7,
	'5' : 1.9,
	'6' : 2.2
}

const SELECTION_LIMITS = {
	'city-highlights' : 3,
	'area-highlights' : 3,
	'listings-and-sales' : 6
}

const LAS_MESSAGES = {
	'listing' : 'JUST LISTED @ ',
	'pending' : 'SALE PENDING... @ ',
	'sold' : 'JUST SOLD @ '
}

const LAS_NAMES = {
	'listing' : 'LISTING',
	'pending' : 'PENDING SALE',
	'sold' : 'SALE'
}

const LAS_DATES = {
	'listing' : 'List Date',
	'pending' : 'Status Date',
	'sold' : 'Sale Date'
}

const LAS_COLORS = {
	'listing' : 'rgb(21, 175, 0)',
	'pending' : 'rgb(217, 162, 0)',
	'sold' : 'rgb(204, 0, 0)'
}

const LAS_SIZES = {
	4 : '25%',
	5 : '20%',
	6 : '16.67%',
	7 : '14.28%',
	8 : '12.5%'
}

function makeLASContainer(ls) {
	const status = LAS_MESSAGES[ls['type']];
	const pricePerSqft = (ls['price'] / ls['sqft']).toFixed(0).toLocaleString();
	const dateType = LAS_DATES[ls['type']];
	let choice = $('<div class="las-container">\
						<div class="las-image" style="background-image: url(' + ls['src'] + ')"></div>\
						<div class="house-info">\
							<div class="status-container"><span class="las-status">' + status + '<span class="las-price">$' + ls['price'].toLocaleString() + '</span></span></div>\
							<div class="address-container"><span class="las-address">' + ls['address'] + '</span><span class="las-cross-street"><strong>x</strong> street: ' + ls['cross-street'] + '</span></div>\
							<table>\
								<tbody>\
									<tr class="house-numbers line-1">\
										<td>MLS#: ' + ls['mls-number'] + '</td>\
										<td>DOM: ' + ls['dom'] + '</td>\
										<td>Price/sq ft: $' + pricePerSqft + '</td>\
										<td>' + dateType + ': ' + ls['date'] + '</td>\
									</tr>\
									<tr class="house-numbers line-2">\
										<td>' + ls['beds'] + ' Beds/' + ls['baths'] + ' Baths</td>\
										<td>' + ls['sqft'] + ' sq ft</td>\
										<td>Lot Size: ' + ls['lot-size'].toLocaleString() + '</td>\
										<td>' + ls['garage-space'] + ' garage space(s)</td>\
									</tr>\
								</tbody>\
							</table>\
							<div class="las-description">' + ls['description'] + '</div>\
						</div>\
					</div>');
	if (ls['agents']) choice.find('.status-container').append($('<span class="las-name">' + personalInfo['First Name'] + '\'s ' + LAS_NAMES[ls['type']] + '</span>'));
	choice.find('.las-status').css('color', LAS_COLORS[ls['type']]);
	choice.find('.las-name').css('background', LAS_COLORS[ls['type']]);
	return choice;
}

// month number to abbreviation
const MONTHS = {
	0 : 'Jan',
	1 : 'Feb',
	2 : 'Mar',
	3 : 'Apr',
	4 : 'May',
	5 : 'Jun',
	6 : 'Jul',
	7 : 'Aug',
	8 : 'Sep',
	9 : 'Oct',
	10 : 'Nov',
	11 : 'Dec'
}

// mailing list options
const mailingListOptions = {
	valueNames : ['address-id', 'parcel-number', 'blocked', 'name', 'mail-address-line-1', 'mail-address-line-2', 'site-address', 'last-sale-price', 'last-sale-date', 'selling-agent'],
	item: `<tr>
				<td><button class="edit-btn">EDIT</button</td>
			    <td class="address-id-container">
			        <div class="address-id"></div>
			        <strong class="parcel-number"></strong>
			    </td>
			    <td class="blocked-container">
			        <label class="check-container">
			            <input class="block-check" type="checkbox"/>
			            <span class="checkmark"><i class="material-icons">close</i></span>
			            <span class="blocked"></span>
		            </label>
	            </td>
	            <td class="name"></td>
	            <td class="mailing-address-container">
	            	<div class="mail-address-line-1"></div>
	            	<div class="mail-address-line-2"></div>
	            </td>
	            <td class="site-address"></td>
	            <td class="last-sale-price"></td>
	            <td class="last-sale-date"></td>
	            <td class="selling-agent"></td>
           </tr>`
};

/* Returns the current date and time in a readable fashion - rounded to the minute */
function getDateAndTime() {
	const date = new Date();
	const day = date.getDate();
	const month = MONTHS[date.getMonth()];
	const year = date.getFullYear();
	let hour = date.getHours();
	let minute = date.getMinutes();
	if (hour < 10) hour = '0' + hour;
	if (minute < 10) minute = '0' + minute;
	return month + ' ' + day + ', ' + year + ' at ' + hour + ':' + minute;
}

// Title of the total pricing box
const TOTAL_TITLE = 'Total All Approved Mailings';

/* Creates a box holding all pricing information of the current area */
function createPricingBox(area, numMailings, price, complete, current) {
	const total = (area === TOTAL_TITLE);
	const approved = (complete) ? 'Mailing List Approved' : 'Mailing List Not Approved';
	const totalPrice = (total) ? price : numMailings * price;
	let div = $('<div class="pricing-box"></div>');
	div.append($('<strong class="title">' + area + '</strong>'));
	div.append($('<div class="num-mailings"><strong>' + numMailings + '</strong> mailings</div>'));
	if (!total) div.append($('<div>&times;</div>'));
	if (!total) div.append($('<div class="price"><strong>$' + price.toFixed(2) + '</strong> / mailing</div>'));
	div.append($('<div class="total">Total: <strong>$' + totalPrice.toFixed(2) + '</strong></div>'));
	if (!total) div.append($('<div class="approved"><strong>' + approved + '</strong></div>'));
	if (complete) div.addClass('complete');
	if (current) div.addClass('current');
	if (total) div.addClass('total');
	return div;
}

/* Updates the pricing box with a new number of mailings and total cost */
function updatePricingBox(box, numMailings, price, complete) {
	const approved = (complete) ? 'Mailing List Approved' : 'Mailing List Not Approved';
	const total = box.hasClass('total');
	const totalPrice = (total) ? price : numMailings * price;
	if (complete) 
		box.addClass('complete');
	else
		box.removeClass('complete');
	box.children('.num-mailings').html('<strong>' + numMailings + '</strong> mailings');
	box.children('.total').html('Total: <strong>$' + totalPrice.toFixed(2) + '</strong>');
	if (!total) box.children('.approved').html('<strong>' + approved + '</strong>');
}

var splashMessagePresent = false;

const SPLASH = {
	'start' : 'Welcome to the Precision Market Analysis Creator! To start, click on the sections below to customize this mailing.',
	'highlights-confirm' : 'You must choose exactly <strong>3</strong> highlights to use in this section.',
	'las-confirm' : 'You must choose exactly <strong>6</strong> listings or sales in this section.',
	'area-complete' : 'You have completed this area! Click <strong>Continue</strong> below.'
}

// displays a helpful splash message for 2 seconds on the top of the screen.
function makeSplashMessage(message, delay=4500) {
	if (splashMessagePresent) return;
	splashMessagePresent = true;
	$('#splash-message').html(message);
	$('#splash-message').fadeIn(500);
	$('#splash-message').delay(delay).fadeOut(500);
	setTimeout(() => splashMessagePresent = false, delay);

}

function addTooltip(container, message) {
	container.addClass('tooltip');
	container.append($('<div class="tooltiptext">' + message + '</div>'));
}


function updateTextAreas() {
	$('.insert-current-area').html(currentArea);
	$('.insert-current-city').html(currentCity);
	$('.insert-current-step').html(currentStep); 
	$('.insert-current-version').html(currentVersion);
	$('.insert-current-period').html(currentPeriod);
	$('.insert-current-city-market').html(cityMarket);
	$('.insert-current-area-market').html(areaMarket);
	$('.insert-email').html(personalInfo['Email Address']);
	$('.insert-website').html(personalInfo['Website']);
	$('.insert-phone-number').html(personalInfo['Phone Number']);
}