/* Templates - Mid-Quarter PMA
 * Author: bhuelga
 *
 * Holds all of the template information. Read in upon app launch.
 * Simply add a new object under the correct section to add a new template
 * to the creator.
 */

// number of pixels per inch
const inch = 100;
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
	"mq-4" : {	
		"Outside" : {
			"static-sections" : [
				{
					"name" : "Agent Logo",
					"type" : "image",
					"agent-specific" : true,
					"coordinates" : [[.5 * inch, .5 * inch], [.5 * inch, page + .5 * inch]],
					"size" : [1 * inch, 2.5 * inch]
				},
				{
					"name" : "Return Address 1",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 14,
					"font-color" : "black",
					"font-family" : "Ubuntu",
					"capitalize" : false,
					"coordinates" : [[.875 * inch, 3.25 * inch]]
				},
				{
					"name" : "Return Address 2",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 14,
					"font-color" : "black",
					"font-family" : "Ubuntu",
					"capitalize" : false,
					"coordinates" : [[1.0625 * inch, 3.25 * inch]]
				}, 
				{
					"name" : "Postage",
					"type" : "image",
					"agent-specific" : false,
					"src" : "../../../images/templates/postage.PNG",
					"coordinates" : [[.5 * inch, 7.125 * inch]],
					"size" : [inch, inch],
				},
				{
					"name" : "Front Website",
					"type" : "text",
					"agent-specific" : true,
					"font-size" : 12,
					"font-color" : "black",
					"font-family" : "Ubuntu",
					"capitalize" : true,
					"coordinates" : [[4 * inch, .5 * inch]]
				}
			],
			"edit-sections" : [
				{
					"name" : "Attention Grabber",
					"top" : 2 * inch, 
					"left" : .75 * inch,
					"height" : 1.625 * inch,
					"width" : 3 * inch,
					"tools-data" : {
						"edit-height" : '500%',
						"edit-width" : '200%',
						"edit-top" : '-40%',
						"edit-left" : '105%',
						"complete-btn-height" : "30%",
						"complete-btn-width" : "100%",
						"complete-btn-left" : 0,
						"complete-btn-bottom" : '110%'
					},
					'uploadable' : true,
					'type' : 'image',
					'default-choice' : '../images/temp/attention-grabber-1.png',
					'system-choices' : ['../images/temp/attention-grabber-1.png',
										'../images/home-screen/house2.jpg',
										'../images/home-screen/house3.jpg',
										]
				},
				{
					"name" : "Front Graph",
					"top" : 4.25 * inch, 
					"left" : 0,
					"height" : 4.25 * inch,
					"width" : page,
					"tools-data" : {
						"edit-height" : '200%',
						"edit-width" : '100%',
						"edit-top" : '-22.5%',
						"edit-left" : '101%',
						"complete-btn-height" : '20%',
						"complete-btn-width" : '50%',
						"complete-btn-left" : '50%',
						"complete-btn-bottom" : '102.5%'
					},
					'uploadable' : false,
					'type' : 'image',
					'default-choice' : '../images/temp/front-graph-1.png',
					'system-choices' : ['../images/temp/front-graph-1.png',
										'../images/home-screen/house3.jpg',
										'../images/home-screen/house4.jpg',
										]
				},
				{
					"name" : "Front Bar",
					"top" : 8.875 * inch, 
					"left" : .25 * inch,
					"height" : 1.625 * inch,
					"width" : 8 * inch,
					"tools-data" : {
						"edit-height" : '400%',
						"edit-width" : '100%',
						"edit-top" : '-40%',
						"edit-left" : '102%',
						"complete-btn-height" : '30%',
						"complete-btn-width" : '50%',
						"complete-btn-left" : '50%',
						"complete-btn-bottom" : '110%'
					},
					'uploadable' : false,
					'type' : 'image',
					'default-choice' : '../images/temp/front-bar-1.png',
					'system-choices' : ['../images/temp/front-bar-1.png',
										'../images/home-screen/house5.jpg',
										'../images/home-screen/house6.jpg',
										]
				},
				{
					"name" : "Top Image",
					"top" : .5 * inch, 
					"left" : page + 6.75 * inch,
					"height" : 1.325 * inch,
					"width" : 1.125 * inch,
					"tools-data" : {
						"edit-height" : '500%',
						"edit-width" : '500%',
						"edit-top" : '30%',
						"edit-left" : '-510%',
						"complete-btn-height" : "75%",
						"complete-btn-width" : "250%",
						"complete-btn-left" : '-265%',
						"complete-btn-bottom" : '75%'
					},
					'uploadable' : true,
					'type' : 'image',
					'default-choice' : '../images/home-screen/house6.jpg',
					'system-choices' : ['../images/home-screen/house6.jpg',
										'../images/home-screen/house5.jpg',
										'../images/home-screen/house4.jpg',
										]
				},
				{
					"name" : "City Highlights",
					"top" : 3 * inch, 
					"left" : page + 1.25 * inch,
					"height" : 2.25 * inch,
					"width" : 6.5 * inch,
					"tools-data" : {
						"edit-height" : '200%',
						"edit-width" : '150%',
						"edit-top" : '-30%',
						"edit-left" : '-152.5%',
						"complete-btn-height" : "25%",
						"complete-btn-width" : "50%",
						"complete-btn-left" : 0,
						"complete-btn-bottom" : '105%'
					},
					'uploadable' : false,
					'type' : 'highlight-list',
					'default-choice' : ['Sentence 1', 'Sentence 2'],
					'system-choices' : ['Sentence 1',
										'Sentence 2',
										'Sentence 3',
										]
				},
				{
					"name" : "Area Highlights",
					"top" : 6.5 * inch, 
					"left" : page + 1.25 * inch,
					"height" : 2.25 * inch,
					"width" : 6.5 * inch,
					"tools-data" : {
						"edit-height" : '200%',
						"edit-width" : '150%',
						"edit-top" : '-30%',
						"edit-left" : '-152.5%',
						"complete-btn-height" : "25%",
						"complete-btn-width" : "50%",
						"complete-btn-left" : 0,
						"complete-btn-bottom" : '105%'
					},
					'uploadable' : false,
					'type' : 'highlight-list',
					'default-choice' : ['Sentence 1', 'Sentence 2', 'Sentence 3'],
					'system-choices' : ['Sentence 1',
										'Sentence 2',
										'Sentence 3',
										]
				},
				{
					"name" : "Call To Action",
					"top" : 8.875 * inch, 
					"left" : page + .25 * inch,
					"height" : 1.625 * inch,
					"width" : 8 * inch,
					"tools-data" : {
						"edit-height" : '400%',
						"edit-width" : '100%',
						"edit-top" : '-40%',
						"edit-left" : '-102%',
						"complete-btn-height" : '30%',
						"complete-btn-width" : '50%',
						"complete-btn-left" : '0',
						"complete-btn-bottom" : '110%'
					},
					'uploadable' : false,
					'type' : 'image',
					'default-choice' : '../images/temp/call-to-action-1.png',
					'system-choices' : ['../images/temp/call-to-action-1.png',
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
					"tools-data" : {
						"edit-height" : '400%',
						"edit-width" : '100%',
						"edit-top" : '-300%',
						"edit-left" : '102.5%',
						"complete-btn-height" : '50%',
						"complete-btn-width" : '50%',
						"complete-btn-left" : '51%',
						"complete-btn-bottom" : '110%'
					},
					'uploadable' : false,
					'type' : 'image',
					'default-choice' : '../images/temp/inside-bar-1.png',
					'system-choices' : ['../images/temp/inside-bar-1.png',
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
					"tools-data" : {
						"edit-height" : '109.5%',
						"edit-width" : '125%',
						"edit-top" : '-9.5%',
						"edit-left" : '-126%',
						"complete-btn-height" : '7.5%',
						"complete-btn-width" : "50%",
						"complete-btn-left" : '0',
						"complete-btn-bottom" : '102%'
					},
					'uploadable' : false,
					'type' : 'las-list',
					'default-choice' : ['Sentence 1', 'Sentence 2', 'Sentence 3'],
					'system-choices' : ['Sentence 1',
										'Sentence 2',
										'Sentence 3',
										]
				}
			]
		}
	}
}
