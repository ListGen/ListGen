/* MQ PMA Creator - Util
 * Author: bhuelga
 */

// local data of session
var agentData = {
	'default-mls-area' : 'NORTHWEST CARMEL',
	'mls-areas' : {
		'NORTHWEST CARMEL' : {
			'page-version' : '4',
			'city' : 'CARMEL-BY-THE-SEA',
			'city-market' : 'SELLER\'S',
			'area-market' : 'BALANCED',
			'edit-sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'City Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Area Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Listings And Sales' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
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
					'past-client' : 'Pending',
					'parcel-number' : '732-334-412',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : '',
					'parcel-number' : '304-009-800',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Listing',
					'parcel-number' : '198-039-444',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Sold',
					'parcel-number' : '123-124-142',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'past-client' : '',
					'parcel-number' : '566-665-452',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'date' : '10/23/18',
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
					'view' : 'Mountain',
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
					'date' : '6/6/18',
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
					'address' : '26077 Scenic Rd',
					'price' : 10950000,
					'sqft' : 3389,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 6098,
					'dom' : 269,
					'garage-space' : 1,
					'mls-number' : 81690484,
					'cross-street' : 'Santa Lucia',
					'date' : '10/6/18',
					'src' : '../../images/pma-creator/las/26077ScenicRd.jpg',
					'agents' : true,
					'type' : 'pending',
					'view' : 'Ocean',
					'description' : 'Offering an incredible combination of style, quality, and views, this Eric Miller designed residence was built in 2000 and is approximately 3,389 square feet on an oversized 6,000 sq. ft. lot on Carmel Point.'
				},
				{
					'address' : '26314 Ocean View Ave',
					'price' : 7500000,
					'sqft' : 3370,
					'beds' : 4,
					'baths' : 3.5,
					'lot-size' : 5898,
					'dom' : 136,
					'garage-space' : 2,
					'mls-number' : 81709593,
					'cross-street' : 'Stewart',
					'date' : '7/22/18',
					'src' : '../../images/pma-creator/las/26314OceanViewAve.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'Crafted in 2010, Maison de Lumiere, is truly a world-class residence. The exterior is defined by the multiple zinc barrel roofs of the spacious 4000+SF structure.'
				},
				{
					'address' : '26147 Carmelo St',
					'price' : 2988888,
					'sqft' : 3331,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 323,
					'garage-space' : 2,
					'mls-number' : 81711716,
					'cross-street' : '16th Ave',
					'date' : '12/22/17',
					'src' : '../../images/pma-creator/las/26147CarmeloSt.jpg',
					'agents' : false,
					'type' : 'pending',
					'view' : '-',
					'description' : 'Privately set behind a gated entrance, on an over-sized lot, the home has excellent proximity to both Carmel beaches and an easy walk to downtown Carmel.'
				},
				{
					'address' : '2713 15th Ave',
					'price' : 2099000,
					'sqft' : 2215,
					'beds' : 3,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 104,
					'garage-space' : 2,
					'mls-number' : 81714497,
					'cross-street' : 'Monte Verde',
					'date' : '5/29/18',
					'src' : '../../images/pma-creator/las/271315thAve.jpg',
					'agents' : true,
					'type' : 'listing',
					'view' : '-',
					'description' : 'This Carmel Point home, located just a few blocks away from Carmel River Beach, has been redesigned and remodeled with a modern-day touch.'
				},
				{
					'address' : '26185 Dolores St',
					'price' : 3595000,
					'sqft' : 2421,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Franciscan',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/26185DoloresSt.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
				},
				{
					'address' : '26040 Ridewood Rd',
					'price' : 3525000,
					'sqft' : 1825,
					'beds' : 3,
					'baths' : 2.5,
					'lot-size' : 7530,
					'dom' : 238,
					'garage-space' : 1,
					'mls-number' : 81720150,
					'cross-street' : 'Mission',
					'date' : '7/1/18',
					'src' : '../../images/pma-creator/las/26040RidgewoodRd.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Perfectly appointed in one of Carmels most coveted neighborhoods, this quintessential 3 bedroom 2.5 bath cottage offers a rare combination of elegance, style and privacy.'
				},
				{
					'address' : '26182 Mission Fields Rd',
					'price' : 1199000,
					'sqft' : 1844,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 13068,
					'dom' : 59,
					'garage-space' : 1,
					'mls-number' : 81728821,
					'cross-street' : 'Oliver',
					'date' : '9/1/18',
					'src' : '../../images/pma-creator/las/26512MissionFieldsRd.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Mountain',
					'description' : 'A lovely garden will lead you to this beautiful Carmel home, perched atop a hill at the mouth of the Valley is your own escape haven where you can relax and enjoy peace and tranquility.'
				},
				{
					'address' : '3508 Lazarro Dr',
					'price' : 1690000,
					'sqft' : 2581,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Mesa',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/3508LazarroDr.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
				}
			],
			'editor-complete' : false,
			'mailing-complete' : false,
			'total-complete' : false,
			'unblocked-mailings' : 0
		},
		'SOUTHWEST CARMEL' : {
			'page-version' : '4',
			'city' : 'CARMEL-BY-THE-SEA',
			'city-market' : 'BUYERS\'S',
			'area-market' : 'SELLER\'S',
			'edit-sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'City Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Area Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Listings And Sales' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
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
					'past-client' : 'Pending',
					'parcel-number' : '732-334-412',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : '',
					'parcel-number' : '304-009-800',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Listing',
					'parcel-number' : '198-039-444',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Sold',
					'parcel-number' : '123-124-142',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'past-client' : '',
					'parcel-number' : '566-665-452',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'date' : '10/23/18',
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
					'view' : 'Mountain',
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
					'date' : '6/6/18',
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
					'address' : '26077 Scenic Rd',
					'price' : 10950000,
					'sqft' : 3389,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 6098,
					'dom' : 269,
					'garage-space' : 1,
					'mls-number' : 81690484,
					'cross-street' : 'Santa Lucia',
					'date' : '10/6/18',
					'src' : '../../images/pma-creator/las/26077ScenicRd.jpg',
					'agents' : true,
					'type' : 'pending',
					'view' : 'Ocean',
					'description' : 'Offering an incredible combination of style, quality, and views, this Eric Miller designed residence was built in 2000 and is approximately 3,389 square feet on an oversized 6,000 sq. ft. lot on Carmel Point.'
				},
				{
					'address' : '26314 Ocean View Ave',
					'price' : 7500000,
					'sqft' : 3370,
					'beds' : 4,
					'baths' : 3.5,
					'lot-size' : 5898,
					'dom' : 136,
					'garage-space' : 2,
					'mls-number' : 81709593,
					'cross-street' : 'Stewart',
					'date' : '7/22/18',
					'src' : '../../images/pma-creator/las/26314OceanViewAve.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'Crafted in 2010, Maison de Lumiere, is truly a world-class residence. The exterior is defined by the multiple zinc barrel roofs of the spacious 4000+SF structure.'
				},
				{
					'address' : '26147 Carmelo St',
					'price' : 2988888,
					'sqft' : 3331,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 323,
					'garage-space' : 2,
					'mls-number' : 81711716,
					'cross-street' : '16th Ave',
					'date' : '12/22/17',
					'src' : '../../images/pma-creator/las/26147CarmeloSt.jpg',
					'agents' : false,
					'type' : 'pending',
					'view' : '-',
					'description' : 'Privately set behind a gated entrance, on an over-sized lot, the home has excellent proximity to both Carmel beaches and an easy walk to downtown Carmel.'
				},
				{
					'address' : '2713 15th Ave',
					'price' : 2099000,
					'sqft' : 2215,
					'beds' : 3,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 104,
					'garage-space' : 2,
					'mls-number' : 81714497,
					'cross-street' : 'Monte Verde',
					'date' : '5/29/18',
					'src' : '../../images/pma-creator/las/271315thAve.jpg',
					'agents' : true,
					'type' : 'listing',
					'view' : '-',
					'description' : 'This Carmel Point home, located just a few blocks away from Carmel River Beach, has been redesigned and remodeled with a modern-day touch.'
				},
				{
					'address' : '26185 Dolores St',
					'price' : 3595000,
					'sqft' : 2421,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Franciscan',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/26185DoloresSt.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
				},
				{
					'address' : '26040 Ridewood Rd',
					'price' : 3525000,
					'sqft' : 1825,
					'beds' : 3,
					'baths' : 2.5,
					'lot-size' : 7530,
					'dom' : 238,
					'garage-space' : 1,
					'mls-number' : 81720150,
					'cross-street' : 'Mission',
					'date' : '7/1/18',
					'src' : '../../images/pma-creator/las/26040RidgewoodRd.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Perfectly appointed in one of Carmels most coveted neighborhoods, this quintessential 3 bedroom 2.5 bath cottage offers a rare combination of elegance, style and privacy.'
				},
				{
					'address' : '26182 Mission Fields Rd',
					'price' : 1199000,
					'sqft' : 1844,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 13068,
					'dom' : 59,
					'garage-space' : 1,
					'mls-number' : 81728821,
					'cross-street' : 'Oliver',
					'date' : '9/1/18',
					'src' : '../../images/pma-creator/las/26512MissionFieldsRd.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Mountain',
					'description' : 'A lovely garden will lead you to this beautiful Carmel home, perched atop a hill at the mouth of the Valley is your own escape haven where you can relax and enjoy peace and tranquility.'
				},
				{
					'address' : '3508 Lazarro Dr',
					'price' : 1690000,
					'sqft' : 2581,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Mesa',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/3508LazarroDr.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
				}
			],
			'editor-complete' : false,
			'mailing-complete' : false,
			'total-complete' : false,
			'unblocked-mailings' : 0
		},
		'HATTON FIELDS' : {
			'page-version' : '4',
			'city' : 'CARMEL-BY-THE-SEA',
			'city-market' : 'BUYERS\'S',
			'area-market' : 'SELLER\'S',
			'edit-sections' : {
				'Attention Grabber' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Graph' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Front Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Top Image' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'City Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Area Highlights' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Call To Action' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Inside Bar' : {
					'selection' : '',
					'confirmed-selection' : '',
					'status' : 'Incomplete',
					'time-confirmed' : ''
				},
				'Listings And Sales' : {
					'selection' : [],
					'confirmed-selection' : [],
					'status' : 'Incomplete',
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
					'past-client' : 'Pending',
					'parcel-number' : '732-334-412',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : '',
					'parcel-number' : '304-009-800',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Listing',
					'parcel-number' : '198-039-444',
					'ps' : '',
					'homeowner-tag' : ''
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
					'past-client' : 'Sold',
					'parcel-number' : '123-124-142',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'past-client' : '',
					'parcel-number' : '566-665-452',
					'ps' : '',
					'homeowner-tag' : 'Friend'
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
					'date' : '10/23/18',
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
					'view' : 'Mountain',
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
					'date' : '6/6/18',
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
					'address' : '26077 Scenic Rd',
					'price' : 10950000,
					'sqft' : 3389,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 6098,
					'dom' : 269,
					'garage-space' : 1,
					'mls-number' : 81690484,
					'cross-street' : 'Santa Lucia',
					'date' : '10/6/18',
					'src' : '../../images/pma-creator/las/26077ScenicRd.jpg',
					'agents' : true,
					'type' : 'pending',
					'view' : 'Ocean',
					'description' : 'Offering an incredible combination of style, quality, and views, this Eric Miller designed residence was built in 2000 and is approximately 3,389 square feet on an oversized 6,000 sq. ft. lot on Carmel Point.'
				},
				{
					'address' : '26314 Ocean View Ave',
					'price' : 7500000,
					'sqft' : 3370,
					'beds' : 4,
					'baths' : 3.5,
					'lot-size' : 5898,
					'dom' : 136,
					'garage-space' : 2,
					'mls-number' : 81709593,
					'cross-street' : 'Stewart',
					'date' : '7/22/18',
					'src' : '../../images/pma-creator/las/26314OceanViewAve.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'Crafted in 2010, Maison de Lumiere, is truly a world-class residence. The exterior is defined by the multiple zinc barrel roofs of the spacious 4000+SF structure.'
				},
				{
					'address' : '26147 Carmelo St',
					'price' : 2988888,
					'sqft' : 3331,
					'beds' : 4,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 323,
					'garage-space' : 2,
					'mls-number' : 81711716,
					'cross-street' : '16th Ave',
					'date' : '12/22/17',
					'src' : '../../images/pma-creator/las/26147CarmeloSt.jpg',
					'agents' : false,
					'type' : 'pending',
					'view' : '-',
					'description' : 'Privately set behind a gated entrance, on an over-sized lot, the home has excellent proximity to both Carmel beaches and an easy walk to downtown Carmel.'
				},
				{
					'address' : '2713 15th Ave',
					'price' : 2099000,
					'sqft' : 2215,
					'beds' : 3,
					'baths' : 3,
					'lot-size' : 5998,
					'dom' : 104,
					'garage-space' : 2,
					'mls-number' : 81714497,
					'cross-street' : 'Monte Verde',
					'date' : '5/29/18',
					'src' : '../../images/pma-creator/las/271315thAve.jpg',
					'agents' : true,
					'type' : 'listing',
					'view' : '-',
					'description' : 'This Carmel Point home, located just a few blocks away from Carmel River Beach, has been redesigned and remodeled with a modern-day touch.'
				},
				{
					'address' : '26185 Dolores St',
					'price' : 3595000,
					'sqft' : 2421,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Franciscan',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/26185DoloresSt.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
				},
				{
					'address' : '26040 Ridewood Rd',
					'price' : 3525000,
					'sqft' : 1825,
					'beds' : 3,
					'baths' : 2.5,
					'lot-size' : 7530,
					'dom' : 238,
					'garage-space' : 1,
					'mls-number' : 81720150,
					'cross-street' : 'Mission',
					'date' : '7/1/18',
					'src' : '../../images/pma-creator/las/26040RidgewoodRd.jpg',
					'agents' : false,
					'type' : 'sold',
					'view' : '-',
					'description' : 'Perfectly appointed in one of Carmels most coveted neighborhoods, this quintessential 3 bedroom 2.5 bath cottage offers a rare combination of elegance, style and privacy.'
				},
				{
					'address' : '26182 Mission Fields Rd',
					'price' : 1199000,
					'sqft' : 1844,
					'beds' : 2,
					'baths' : 3,
					'lot-size' : 13068,
					'dom' : 59,
					'garage-space' : 1,
					'mls-number' : 81728821,
					'cross-street' : 'Oliver',
					'date' : '9/1/18',
					'src' : '../../images/pma-creator/las/26512MissionFieldsRd.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Mountain',
					'description' : 'A lovely garden will lead you to this beautiful Carmel home, perched atop a hill at the mouth of the Valley is your own escape haven where you can relax and enjoy peace and tranquility.'
				},
				{
					'address' : '3508 Lazarro Dr',
					'price' : 1690000,
					'sqft' : 2581,
					'beds' : 3,
					'baths' : 4,
					'lot-size' : 5860,
					'dom' : 128,
					'garage-space' : 1,
					'mls-number' : 81710967,
					'cross-street' : 'Mesa',
					'date' : '6/11/18',
					'src' : '../../images/pma-creator/las/3508LazarroDr.jpg',
					'agents' : false,
					'type' : 'listing',
					'view' : 'Bay',
					'description' : 'This Mid-Century Modern home enjoys beautiful views of Point Lobos, Carmel River State Beach and the ocean beyond.'
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
		'DRE Number' : '04385564',
		'Brokerage' : 'Sotheby\'s International Realty'
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

const HO_PRIMARY_TAGS = [
	'SOLD',
	'LISTING',
	'PENDING'
];

const HO_SECONDARY_TAGS = [
	'FRIEND',
	'PROSPECT',
	'RELATIVE'
]

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
	valueNames : ['address-id', 'parcel-number', 'blocked', 'name', 'mail-address-line-1', 'mail-address-line-2', 'site-address', 'last-sale-price', 'last-sale-date', 'selling-agent', 'ps', 'homeowner-tag', 'past-client'],
	item: `<tr>
				<td><div class="btn-container"><button class="edit-btn"><i class="material-icons">edit</i></button><button class="ps-btn">P.S.</button><div></td>
			    <td class="check-td">
			    	<label class="check-container">
			            <input class="tag-check" type="checkbox"/>
			            <span class="checkmark positive"><i class="material-icons">check</i></span>
			            <div class="past-client"></div>
			            <div class="homeowner-tag"></div>
		            </label>
			    </td>
			    <td class="check-td">
			        <label class="check-container">
			            <input class="block-check" type="checkbox"/>
			            <span class="checkmark negative"><i class="material-icons">close</i></span>
			            <div class="blocked hoValue"></div>
			            <div class="address-id"></div>
		            </label>
	            </td>
	            <td>
	            	<span class="name hoValue"></span>
	            </td>
	            <td class="address-container">
	            	<div class="mail-address-line-1"></div>
	            	<div class="mail-address-line-2"></div>
	            </td>
	            <td class="address-container">
	            	<div class="site-address hoValue"></div>
	            	<strong class="parcel-number"></strong>
            	</td>
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

// displays a helpful splash message for 'delay' seconds on the top of the screen.
function makeSplashMessage(message, delay=4500) {
	if (splashMessagePresent) return;
	splashMessagePresent = true;
	$('#splash-message').html(message);
	$('#splash-message').fadeIn(500);
	$('#splash-message').delay(delay).fadeOut(500);
	setTimeout(() => splashMessagePresent = false, delay);
}


// displays a helpful splash alert that must be manually dismissed
function makeSplashAlert(message) {
	if (splashMessagePresent) return;
	splashMessagePresent = true;
	$('#splash-alert div').html(message);
	$('#splash-alert').fadeIn(500);
	$('#splash-overlay').fadeIn(500);
}

$('#splash-overlay').click(() => {
	splashMessagePresent = false;
	$('#splash-alert').fadeOut(500);
	$('#splash-overlay').fadeOut(500);
});

$('#splash-alert button').click(() => {
	splashMessagePresent = false;
	$('#splash-alert').fadeOut(500);
	$('#splash-overlay').fadeOut(500);
});

function addTooltip(container, message) {
	container.addClass('tooltip');
	container.append($('<div class="tooltiptext">' + message + '</div>'));
}

function toTitleCase(str) {
	let splitStr = str.toLowerCase().split(' ');
   	for (let i = 0; i < splitStr.length; i++) {
       	splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   	}
   	return splitStr.join(' '); 
}


function updateTextAreas() {
	$('.insert-current-area').html(currentArea);
	$('.insert-current-city').html(currentCity);
	$('.insert-current-step').html(currentStep); 
	$('.insert-current-version').html(currentVersion);
	$('.insert-current-period').html(currentPeriod);
	$('.insert-current-city-market').html(cityMarket);
	$('.insert-current-area-market').html(areaMarket);
	$('.insert-name').html(personalInfo['Name']);
	$('.insert-email').html(personalInfo['Email Address']);
	$('.insert-dre').html(personalInfo['DRE Number']);
	$('.insert-website').html(personalInfo['Website']);
	$('.insert-brokerage').html(personalInfo['Brokerage']);
	$('.insert-phone-number').html(personalInfo['Phone Number']);
}