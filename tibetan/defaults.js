var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tibetan Machine Uni WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bo' // language to use for examples
	factoryDefaults.uifont = 'Tibetan Machine Uni WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u0020";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'tibetanPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tibetan character picker'
	template.sample = "༢ སྐྱེ་བོ་རེ་རེར་རང་ཡུལ་ཐེ་བས་ཡུལ་ལུང་གང་འདྲ་ཞིག་ནས་ཕྱིར་ཐོན་བྱེད་པའམ། ཡང་ན་རང་ཡུལ་དུ་ཕྱིར་ལོག་བྱེད་པའི་ཐོབ་ཐང་ཡོད༎"
	template.blocklocation= '/scripts/tibetan/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tibetan'
	template.scriptcode = 'Tibt'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Wylie transcription", "dataVar":"showWylieTrans", "dataLocn":"wylietranscript", "dataShortTitle":"W", "type":"palette"}
//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Transcribe<br/>to Wylie", "alt":"Convert Tibetan text to a Latin (Wylie) transcription.", "code":"doTranscription('toWylie')"},
{"title":"Transcribe<br/>from Wylie", "alt":"Convert a Latin (Wylie) transcription to Tibetan text.", "code":"var converter = window.open('http://www.thlib.org/reference/transliteration/wyconverter.php', 'converter') ; converter.focus();"},
]

