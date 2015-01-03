var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

/**
 * @class n3rdtones
 * @description 7 modal scales of bass assistance
 */

var modes = [
	{ title: "Ionian", subtitle: "C-D-E-F-G-A-B-C" },
	{ title: "Dorian", subtitle: "D-E-F-G-A-B-C-D" },
	{ title: "Phrygian", subtitle: "E-F-G-A-B-C-D-E" },
	{ title: "Lydian", subtitle: "F-G-A-B-C-D-E-F" },
	{ title: "Mixolydian", subtitle: "G-A-B-C-D-E-F-G" },
	{ title: "Aeolian", subtitle: "A-B-C-D-E-F-G-A" },
	{ title: "Locrian", subtitle: "B-C-D-E-F-G-A-B" }
];

var modeList = new UI.Menu({
	sections:[{
		title:"7 Mode List",
		items: modes
	}]
});

modeList.show();

modeList.on('select', function(event) {

	var window = new UI.Window(); 
	var bgRect = new UI.Rect({
		position: new Vector2(10, 20),
		size: new Vector2(124, 60),
		backgroundColor: 'white'
	 });

 	window.add(bgRect);

  	var detail = new UI.Text({
		position: new Vector2(0, 0),
 		size: new Vector2(144, 168),
		font: 'gothic-18-bold',
    	text: modes[event.itemIndex].title,
 	});

  window.add(detail);

  // Show the new Card
  window.show();
});
