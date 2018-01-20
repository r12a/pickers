var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tamil WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ta' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tamil WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'tamilPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tamil character picker'
	template.sample = "2. தனது சொந்த நாடு உட்பட ஏதேனும் நாட்டை விட்டுச் செல்லவும் தத்தமது நாட்டுக்குத் திரும்பவும் ஒவ்வொருவருக்கும் உரிமையுண்டு."
	template.blocklocation= '/scripts/tamil/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tamil'
	template.scriptcode = 'Taml'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"ISO to Tamil", "dataVar":"showISOTrans", "dataLocn":"isotranscript", "dataShortTitle":"I", "type":"palette"}
//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Tamil<br>to ISO", "alt":"Convert Tamil text to an ISO Latin transcription.", "code":"doTranscription('toISO')"},
{"title":"ISO to<br/>Tamil", "alt":"Convert ISO latin text to Tamil transcription.", "code":"doTranscription('fromISO')"},
]

