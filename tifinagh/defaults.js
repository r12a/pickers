var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Hapax Berbère' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ber' // language to use for examples
	factoryDefaults.uifont = 'Hapax Berbère'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'tifinaghPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tifinagh character picker'
	template.sample = "2. ⴽⵓ ⵢⴰⵏ ⴷⴰⵔⵙ ⵜⴰⴷⵔⴼⵉⵜⵏ ⴰⴷ ⵉⴼⴼⵖ ⵜⴰⵎⵓⵔⵜ, ⵜⵉⵏⵏⵙ ⵏⵖ ⵜⵉⵢⵢⴰⴹ, ⵏⵏⵙ ⵢⵉⵍⵉ ⴷⴰⵔⵙ ⵓⵣⵔⴼ ⴰⴷ ⴷⵉⵙ ⵢⵓⵔⵔⵉ."
	template.blocklocation= '/scripts/tifinagh/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'tifinagh'
	template.scriptcode = 'Tfng'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showNeoTrans", "dataLocn":"neotranscript", "dataShortTitle":"R", "type":"palette"},
{"title":"IPA to Tifinagh", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"I", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Neo-Tifinagh text to a Latin transliteration.", "code":"doTranscription('toIRCAM')"},
]

