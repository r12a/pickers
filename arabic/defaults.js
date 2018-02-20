var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "ـ";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'arabicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Arabic character picker'
	template.sample = "2. يحق لكل فرد أن يغادر أية بلاد بما في ذلك بلده كما يحق له العودة إليه."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arabic'
	template.scriptcode = 'Arab'



var inputAids = [
//{"title":"Show cursive forms", "dataVar":"showCursive", "dataLocn":"cursive", "dataShortTitle":"S", "type":"hint"},
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTransliteration", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
{"title":"IPA to Arabic", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"I", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Transcribe<br/>to LOC", "alt":"Convert Arabic text to an Library of Congress Latin transcription.", "code":"doTranscription('toLOC')"},
{"title":"Trans-<br/>literate", "alt":"Convert Arabic text to a Latin transliteration.", "code":"doTranscription('toISO')"},
]

