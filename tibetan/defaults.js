var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tibetan Machine Uni WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bo' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tibetan WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
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




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tibetan text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
{"title":"Trans-<br/>scribe", "alt":"Convert Tibetan text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Reduces sanskrit, eg. dh̰ài → dʰī; ␣ → space."},

{"title":"Transcribe<br/>to Wylie", "alt":"Convert Tibetan text to a Latin (Wylie) transcription.", "code":"doTranscription('toWylie')"},

{"title":"Transcribe<br/>from Wylie", "alt":"Convert a Latin (Wylie) transcription to Tibetan text.", "code":"var converter = window.open('http://www.thlib.org/reference/transliteration/wyconverter.php', 'converter') ; converter.focus();"},
]



var inputAids = [
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"Wylie to Tibetan", "dataVar":"showWylieTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"W", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(wylieCharacterMap);makeKbdEventList(wylieCharacterMap);"},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}

{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
]
