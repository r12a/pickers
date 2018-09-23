var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Lanna Alif WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'nod' // language to use for examples
	factoryDefaults.uifont = 'Lanna Alif WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u0020";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'northernthaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Northern Thai character picker'
	template.sample = "ᨣᩢ᩠ᨶᩉᩮᩖᩨᨠᩥ᩠ᨶ ᨣᩢᩐᩢᩣᨡᩣ᩠ᨿᨸᩮ᩠ᨶᨦᩫ᩠ᨶ ᨠᩮ᩠ᨷᩉᩬᨾᩋᩬᨾᩅᩱᩢᨯ᩠᩶ᨦᨶᩦ᩶ ᨴᩩᨠᪧᨸᩦᨾᩣᨷᩢᨡᩣ᩠ᨯ ᨧᩥ᩠᩵ᨦᨠ᩠ᨴᩣᩴᩉᩨ᩶ᨡᩮᩢᩣᨻᩳ᩵ᨾᩯ᩵ᩃᩪᨠ ᨷᩢᨯᩱᩢᨠᩢᩢ᩠ᨶᩈᩢ᩠ᨦᩈᩢ᩠ᨠᨩᩮᩨᩬ"
	template.blocklocation= '/scripts/taitham/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'northernthai'
	template.scriptcode = 'Lana'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Northern Thai text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Trans-<br/>scribe", "alt":"Convert Northern Thai text to an approximate Latin transcription.", "code":"doTranscription('transcription')", "warning":"Still in development. Mostly useful for complex vowels."},
]

