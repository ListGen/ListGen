/* Homeowner Site - Util
 * Author: bhuelga
 */

var localData = {
	'homeowners' : {
		'name' : 'Mike & Kristen',
		'address' : '16B E Carmel Valley Rd',
		'mls-area' : 'Carmel Valley'
	},
	'mls-area' : {
		'city' : 'Carmel Valley',
		'state' : 'CA',
		'zipcode' : '93953'
	},
	'agent-data' : {
		'name' : 'Kyle Morrison',
		'title' : 'Broker Associate',
		'dre' : '12345678',
		'phone-number' : '(831) 236-8909',
		'email' : 'kylemorrisonhomes@gmail.com',
		'accolades' : [{
			'name' : 'Highest Units Sold by Individual Agent',
			'date' : '2017'
			}],
		'picture' : '../images/kyle_morrison.jpg',
		'bio' : 'BIO HERE',
		'social-media' : {
			'facebook' : '#',
			'twitter' : '#',
			'linkedin' : '#',
			'instagram' : '#',
			'googleplus' : '#'
		},
		'collection' : {
			'listings' : [
				{'address' : '2715 Ribera Rd',
				 'city' : 'Carmel',
				 'state' : 'CA',
				 'zipcode' : '93953',
				 'xst' : 'Linder',
				 'mls-area' : 'Carmel Woods',
				 'list-price' : 5800000,
				 'original-price' : 5850000,
				 'sale-date' : '',
				 'dom' : 72,
				 'beds' : 5,
				 'full-baths ': 3,
				 'half-baths' : 2,
				 'sqft' : 3880,
				 'lot-size-sqft' : 5000,
				 'lot-size-acres' : .54,
				 'garage-spaces' : 3,
				 'stories' : 2,
				 'view' : 'Ocean',
				 'year-built' : 1998
				}
			],
			'pendings' : [

			],
			'solds' : [
			]
		},
		'pma' : {
			'q-front' : '',
			'q-back' : '',
			'mq-front' : '',
			'mq-back' : '',
		}
	}
}


const CHANNELS = {
	0 : 'map',
	1 : 'pma',
	2 : 'market-activity',
	3 : 'property-search',
	4 : 'favorite-search',
	5 : 'property-updates',
	6 : 'smart-marketing'
}