var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Thaana WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'dv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Thaana WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'thaanaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Thaana character picker'
    template.sample = "2. ހަމަކޮންމެ މީހަކަށްމެ، އޭނާގެ އަމިއްލަ ޤައުމު ނުވަތަ އެހެން ޤައުމެއް ދޫކޮށް ދިއުމުގެ ޙައްޤާއި، އޭނާގެ އަމިއްލަ ޤައުމަށް އެނބުރި އައުމުގެ ޙައްޤު ލިބިގެންވެއެވެ."
    template.blocklocation= '/scripts/thaana/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'thaana'
	template.scriptcode = 'Thaa'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
{"title":"Maldivian Latin to Thaana", "dataVar":"showMLTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"M", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(mlCharacterMap);makeKbdEventList(mlCharacterMap);"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thaana text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
{"title":"Trans-<br/>scribe", "alt":"Convert Thaana text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Show gemination, prenasalisation, and reduce various word-finals."},
{"title":"Thaana to<br/>Maldivian Latin", "alt":"Convert Thaana text to a Maldivian Latin transliteration.", "code":"doTranscription('toMaldivian')"},
]


