var UI = require('ui');
var Vector2 = require('vector2');
var Settings = require('settings');
var ajax = require('ajax');
var modeCollection = require('modeCollection');


/**
 * @class n3rdtones
 * @description 7 modal scales of bass assistance
 */

var modes = [
	{ 
		title: "Ionian", 
		subtitle: "C-D-E-F-G-A-B-C",
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Dorian", 
		subtitle: "D-E-F-G-A-B-C-D", 
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Phrygian", 
		subtitle: "E-F-G-A-B-C-D-E", 
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Lydian", 
		subtitle: "F-G-A-B-C-D-E-F", 
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Mixolydian", 
		subtitle: "G-A-B-C-D-E-F-G",
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Aeolian", 
		subtitle: "A-B-C-D-E-F-G-A", 
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	},
	{ 
		title: "Locrian", 
		subtitle: "B-C-D-E-F-G-A-B", 
		fretboard: [
			{ A: [3,5] },
			{ D: [2,3,5] },
			{ G: [2,4,5] }
		]
	}
];

var modeList = new UI.Menu({
	sections:[{
		title:"7 Mode List",
		items: modes
	}]
});

modeList.show();

modeList.on('select', function(event) {

	var window = new UI.Window(),
		bgRect = new UI.Rect({
			position: new Vector2(10, 30),
			size: new Vector2(124, 60),
			backgroundColor: 'white'
	 	}),
		index = event.itemIndex;

 	window.add(bgRect);

  	var modeTitle = new UI.Text({
		position: new Vector2(10, 10),
 		size: new Vector2(144, 168),
		font: 'gothic-18-bold',
    	text: modes[item].title + " Mode",
 	});
  	/*var modeDetail = new UI.Text({
		position: new Vector2(10, 40),
 		size: new Vector2(144, 168),
		font: 'gothic-18-bold',
    	text: modes[item].subtitle,
 	});*/
	
	
  window.add(modeTitle);
  //window.add(modeDetail);

  window.show();
});
