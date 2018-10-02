/* Templates - Mid-Quarter PMA
 * Author: bhuelga
 *
 * Holds all of the template information. Read in upon app launch.
 * Simply add a new object under the correct section to add a new template
 * to the creator.
 */

// number of pixels per inch
const inch = 92.65;
// number of pixels per half-page of PMA
const page = inch * 8.5;

const editSectionSizes = {
	'Attention Grabber' : {'height' : 1.625 * inch, 'width' : 3.25 * inch },
	'Front Graph' : {'height' : 4.25 * inch, 'width' : page },
	'Front Bar' : {'height' : .875 * inch, 'width' : 8 * inch },
	'Top Image' : {'height' : 1.325 * inch, 'width' : 1.325 * inch },
	'City Highlights' : {'height' : 3.25 * inch, 'width' : 6.5 * inch },
	'Area Highlights' : {'height' : 3.25 * inch, 'width' : 6.5 * inch },
	'Call To Action' : {'height' : 1.625 * inch, 'width' : 8 * inch },
	'Inside Bar' : {'height' : 1.375 * inch, 'width' : 7.875 * inch },
	'Listings And Sales' : {'height' : 9.125 * inch, 'width' : 7.125 * inch },
};

var TEMPLATES = 
{ 
	"mq" : {	
		"Outside" : {
			"static-sections" : [
				{
					"name" : "Agent Logo",
					"type" : "image",
					"agent-specific" : true,
					"coordinates" : [[.5 * inch, .5 * inch], [.5 * inch, page + .5 * inch]],
					"size" : [.5625 * inch, 2.75 * inch]
				},
				{
					"name" : "Brokerage Logo",
					"type" : "image",
					"agent-specific" : true,
					"coordinates" : [[1.0625 * inch, 1.875 * inch], [1.0625 * inch, page + 1.875 * inch]],
					"size" : [.5625 * inch, 1.375 * inch]
				},
				{
					"name" : "Return Address 1",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 12,
					"font-color" : 'black',
					"coordinates" : [[.875 * inch, page + 3.25 * inch]]
				},
				{
					"name" : "Return Address 2",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 12,
					"font-color" : 'black',
					"coordinates" : [[1.125 * inch, page + 3.25 * inch]]
				}, 
				{
					"name" : "Postage",
					"type" : "image",
					"agent-specific" : false,
					"src" : "../../../images/templates/postage.PNG",
					"coordinates" : [[.5 * inch, 7.125 * inch + page]],
					"size" : [inch, inch],
				},
				{
					"name" : "Front Website",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 12,
					"font-color" : 'black',
					"coordinates" : [[5 * inch, page + .5 * inch]]
				}
			],
			"edit-sections" : [
				{
					"name" : "Attention Grabber",
					"top" : 2 * inch, 
					"left" : page + .75 * inch,
					"height" : 1.625 * inch,
					"width" : 3.25 * inch,
					"edit-top" : -45,
					"edit-left" : 3.25 * inch + 5,
					"complete-btn-top" : -45,
					"complete-btn-left" : 0,
					'default-choice' : '../images/home-screen/house2.jpg',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house2.jpg',
										'../images/home-screen/house3.jpg',
										]
				},
				{
					"name" : "Front Graph",
					"top" : 5.5 * inch, 
					"left" : page,
					"height" : 4.25 * inch,
					"width" : page,
					"edit-top" : -45,
					"edit-left" : page + 5,
					"complete-btn-top" : -45,
					"complete-btn-left" : page - 300,
					'default-choice' : '../images/home-screen/house3.jpg',
					'system-choices' : ['../images/home-screen/house2.jpg',
										'../images/home-screen/house3.jpg',
										'../images/home-screen/house4.jpg',
										]
				},
				{
					"name" : "Front Bar",
					"top" : 10 * inch, 
					"left" : page + .25 * inch,
					"height" : .875 * inch,
					"width" : 8 * inch,
					"edit-top" : -420,
					"edit-left" : 8 * inch + 5,
					"complete-btn-top" : -45,
					"complete-btn-left" : 8 * inch - 300,
					'default-choice' : '../images/home-screen/house1.jpg',
					'system-choices' : ['../images/home-screen/house1.jpg',
										'../images/home-screen/house5.jpg',
										'../images/home-screen/house6.jpg',
										]
				},
				{
					"name" : "Top Image",
					"top" : .5 * inch, 
					"left" : 6.625 * inch,
					"height" : 1.325 * inch,
					"width" : 1.125 * inch,
					"edit-top" : 0,
					"edit-left" : -305,
					"complete-btn-top" : -45,
					"complete-btn-left" : -300 + 1.125 * inch,
					'default-choice' : '../images/home-screen/house6.jpg',
					'system-choices' : ['../images/home-screen/house6.jpg',
										'../images/home-screen/house5.jpg',
										'../images/home-screen/house4.jpg',
										]
				},
				{
					"name" : "City Highlights",
					"top" : 2 * inch, 
					"left" : 1.25 * inch,
					"height" : 3.25 * inch,
					"width" : 6.5 * inch,
					"edit-top" : -45,
					"edit-left" : -305,
					"complete-btn-top" : -45,
					"complete-btn-left" : 0,
					'default-choice' : '../images/home-screen/house4.jpg',
					'system-choices' : ['../images/home-screen/house5.jpg',
										'../images/home-screen/house6.jpg',
										'../images/home-screen/house4.jpg',
										]
				},
				{
					"name" : "Area Highlights",
					"top" : 5.5 * inch, 
					"left" : 1.25 * inch,
					"height" : 3.25 * inch,
					"width" : 6.5 * inch,
					"edit-top" : -45,
					"edit-left" : -305,
					"complete-btn-top" : -45,
					"complete-btn-left" : 0,
					'default-choice' : '../images/home-screen/house4.jpg',
					'system-choices' : ['../images/home-screen/house4.jpg',
										'../images/home-screen/house3.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				{
					"name" : "Call To Action",
					"top" : 8.875 * inch, 
					"left" : .25 * inch,
					"height" : 1.625 * inch,
					"width" : 8 * inch,
					"edit-top" : -350,
					"edit-left" : -305,
					"complete-btn-top" : -45,
					"complete-btn-left" : 0,
					'default-choice' : '../images/home-screen/house1.jpg',
					'system-choices' : ['../images/home-screen/house3.jpg',
										'../images/home-screen/house6.jpg',
										'../images/home-screen/house1.jpg',
										]
				}
			]
		},
		"Inside" : {
			"static-sections" : [
				{
					"name" : "Border",
					"type" : "image",
					"src" : "../../images/inside_border.PNG",
					"coordinates" : [[0, 0]],
					"size" : [11 * inch, 2 * page],

				}
			],
			"edit-sections" : [
				{
					"name" : "Inside Bar",
					"type" : "text",
					"top" : 9.5 * inch, 
					"left" : .5 * inch,
					"height" : 1.375 * inch,
					"width" : 7.875 * inch,
					"edit-top" : -370,
					"edit-left" : 7.875 * inch + 5,
					"complete-btn-top" : -45,
					"complete-btn-left" : 7.875 * inch - 300,
					'default-choice' : '../images/home-screen/house1.jpg',
					'system-choices' : ['../images/home-screen/house3.jpg',
										'../images/home-screen/house6.jpg',
										'../images/home-screen/house1.jpg',
										]
				},
				{
					"name" : "Listings And Sales",
					"type" : "listings",
					"top" : 1.75 * inch, 
					"left" : page + .5 * inch,
					"height" : 9.125 * inch,
					"width" : 7.125 * inch,
					"edit-top" : -45,
					"edit-left" : -305,
					"complete-btn-top" : -45,
					"complete-btn-left" : 0,
					'default-choice' : '../images/home-screen/house4.jpg',
					'system-choices' : ['../images/home-screen/house5.jpg',
										'../images/home-screen/house6.jpg',
										'../images/home-screen/house4.jpg',
										]
				}
			]
		}
	}
}
