var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'fa' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "ـ";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'persianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Persian character picker'
    template.sample = "(۲) هر کس حق دارد هر کشوری و از جمله کشور خود را ترک کند یا به کشور خود باز گردد."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'persian'
	template.scriptcode = 'Arab'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Latin to Persian", "dataVar":"showLOCTrans", "dataLocn":"loctranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"IPA to Persian", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"I", "type":"palette"}
]

var controls = [
{"title":"Transcribe<br/>to UN", "alt":"Convert Persian text to an UN Latin transcription.", "code":"doTranscription('toUN')"},
]
