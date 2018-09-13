/* Templates - Mid-Quarter PMA
 * Author: bhuelga
 *
 * Holds all of the template information. Read in upon app launch.
 * Simply add a new object under the correct section to add a new template
 * to the creator.
 */

// number of pixels per inch / half-page of PMA
const inch = 92.65;
const page = inch * 8.5;

var templates = 
{ 
	"mq" : {	
		"Outside" : {
			"static-sections" : [
				{
					"name" : "Agent Logo",
					"type" : "image",
					"src" : "../../images/km-homes.PNG",
					"coordinates" : [.5 * inch, .5 * inch],
					"size" : [1.125 * inch, 2.75 * inch]
				},
				{
					"name" : "Return Address 1",
					"type" : "text",
					"text" : "P. O. Box 222400",
					"font-size" : 11,
					"font-color" : 'black',
					"coordinates" : [.875 * inch, 3.25 * inch]
				},
				{
					"name" : "Return Address 2",
					"type" : "text",
					"text" : "Carmel, CA 93923",
					"font-size" : 10,
					"font-color" : 'black',
					"coordinates" : [1.125 * inch, 3.25 * inch]
				}, 
				{
					"name" : "Postage",
					"type" : "image",
					"src" : "",
					"coordinates" : [0, 0],
					"size" : [0, 0],
				},
				{
					"name" : "Front Website",
					"type" : "text",
					"text" : "KYLEMORRISONHOMES.COM",
					"font-size" : 12,
					"font-color" : 'black',
					"coordinates" : [5 * inch, .5 * inch]
				}
			],
			"edit-sections" : [
				{
					"name" : "Attention Grabber",
					"top" : 2 * inch, 
					"left" : .75 * inch,
					"height" : 1.625 * inch,
					"width" : 3.25 * inch,
					"edit-top" : -35,
					"edit-left" : 3.25 * inch + 5,
					"toggle-top" : -35,
					"toggle-left" : 0
				},
				{
					"name" : "Front Graph",
					"top" : 5.5 * inch, 
					"left" : 0,
					"height" : 4.25 * inch,
					"width" : page,
					"edit-top" : -35,
					"edit-left" : page + 5,
					"toggle-top" : -35,
					"toggle-left" : page - 300
				},
				{
					"name" : "Front Bar",
					"top" : 10 * inch, 
					"left" : .25 * inch,
					"height" : .875 * inch,
					"width" : 8 * inch,
					"edit-top" : -420,
					"edit-left" : 8 * inch + 5,
					"toggle-top" : -35,
					"toggle-left" : 8 * inch - 300
				},
				{
					"name" : "Top Image",
					"top" : .5 * inch, 
					"left" : page + 6.625 * inch,
					"height" : 1.325 * inch,
					"width" : 1.125 * inch,
					"edit-top" : 0,
					"edit-left" : -305,
					"toggle-top" : -35,
					"toggle-left" : -300 + 1.125 * inch
				},
				{
					"name" : "City Highlights",
					"top" : 2 * inch, 
					"left" : page + 1.25 * inch,
					"height" : 3.25 * inch,
					"width" : 6.5 * inch,
					"edit-top" : -35,
					"edit-left" : -305,
					"toggle-top" : -35,
					"toggle-left" : 0
				},
				{
					"name" : "Area Highlights",
					"top" : 5.5 * inch, 
					"left" : page + 1.25 * inch,
					"height" : 3.25 * inch,
					"width" : 6.5 * inch,
					"edit-top" : -35,
					"edit-left" : -305,
					"toggle-top" : -35,
					"toggle-left" : 0
				},
				{
					"name" : "Call To Action",
					"top" : 8.875 * inch, 
					"left" : page + .25 * inch,
					"height" : 1.625 * inch,
					"width" : 8 * inch,
					"edit-top" : -350,
					"edit-left" : -305,
					"toggle-top" : -35,
					"toggle-left" : 0
				}
			]
		},
		"Inside" : {
			"static-sections" : [
				{
					"name" : "Border",
					"type" : "image",
					"src" : "../../images/inside_border.PNG",
					"coordinates" : [0, 0],
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
					"toggle-top" : -35,
					"toggle-left" : 7.875 * inch - 300
				},
				{
					"name" : "Listings And Sales",
					"type" : "listings",
					"top" : 1.75 * inch, 
					"left" : page + .5 * inch,
					"height" : 9.125 * inch,
					"width" : 7.125 * inch,
					"edit-top" : -35,
					"edit-left" : -305,
					"toggle-top" : -35,
					"toggle-left" : 0
				}
			]
		}
	}
}
