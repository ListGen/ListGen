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
	}
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
const switchHTML = '<label class="switch switch-light switch-holo" onclick=""><input type="checkbox"><span><span class="incomplete">Incomplete</span><span class="complete">Complete</span><a></a></span></label>'

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

// saves outside PMA
function savePMA() {
	const outside = $('#outside')[0].toDataURL();
	const inside = $('#inside')[0].toDataURL();
	const pdf = new jsPDF({
	                        orientation: canvas.width >= canvas.height ? 'landscape' : 'portrait',
	                        unit: 'in',
	                        format: PMA_SIZE
	                    });
	pdf.addImage(outside, 'PNG', 0, 0);
	pdf.addPage();
	pdf.addImage(inside, 'PNG', 0, 0);
	pdf.save("canvas.pdf");
}
