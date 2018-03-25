var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Devanagari WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'hi' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Devanagari WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'devanagariPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Devanagari character picker'
	template.sample = "(२) प्रत्येक व्यक्ति को अपने या पराये किसी भी देश को छोड़नो और अपने देश को वापस आनो का अधिकार है ।"
	template.blocklocation= 'devanagari'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'devanagari'
	template.scriptcode = 'Deva'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Devanagari<br/>to ISO 15919", "alt":"Convert devanagari text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
{"title":"ISO 15919 to<br/>Devanagari", "alt":"Convert an ISO 15919 transcription to devanagari text.", "code":"doTranscription('toDeva')"}
]
