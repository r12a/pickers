var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'XXXXXXXX' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'aii' // language to use for examples
	factoryDefaults.uifont = 'XXXXXXX'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'xxxxxxxPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'XXXXXXX character picker'
	template.sample = ""
    template.blocklocation= '/scripts/xxxxxxx/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'xxxxxxx'
	template.scriptcode = 'Xxxx'



var inputAids = [
{"title":"Show cursive forms", "dataVar":"showCursive", "dataLocn":"cursive", "dataShortTitle":"S", "type":"hint"},
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Xxxxxxxxxxxx", "dataVar":"xxxxxxxxx", "dataLocn":"xxxxxxxxx", "dataShortTitle":"XXXXXX", "type":"palette"},
]

var controls = [
{"title":"XXXXXXX<br/>to XXXXXX", "alt":"Xxxxxxxxxxxxxxxxxx.", "code":"doTranscription('XXXXXXX')"},
{"title":"XXXXXXX<br/>to XXXXXX", "alt":"Xxxxxxxxxxxxxxxxxx.", "code":"doTranscription('XXXXXXX')"},
{"title":"XXXXXXX<br/>to XXXXXX", "alt":"Xxxxxxxxxxxxxxxxxx.", "code":"doTranscription('XXXXXXX')"},
{"title":"XXXXXXX<br/>to XXXXXX", "alt":"Xxxxxxxxxxxxxxxxxx.", "code":"doTranscription('XXXXXXX')"},
]

