var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ug' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'uighurPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Uighur character picker'
	template.sample = "2. ھەممە ئادەم ھەرقانداق دۆلەتتىن كېتىشكە، جوملىدىن ئۆز دۆلىتىدىن كېتىشكە ھوقۇقلۇق ھەمدە ئۆزىنىڭ دۆلىتىگە قايتىپ كېلىشكە ھوقۇقلۇق."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'uighur'
	template.scriptcode = 'Arab'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Uighur text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Uighur<br/>to ULY", "alt":"Convert Uighur text to a ULY Latin transcription.", "code":"doTranscription('toULY')"},
]



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"ULY to Uighur", "dataVar":"showULYTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"U", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(ulyCharacterMap);makeKbdEventList(ulyCharacterMap);"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]
