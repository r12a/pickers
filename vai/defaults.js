var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Vai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'vai' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Vai WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'vai'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Vai character picker'
	template.sample = "ꕉꕜꕮ ꔔꘋ ꖸ ꔰ ꗋꘋ ꕮꕨ ꔔꘋ ꖸ ꕎ ꕉꖸꕊ ꕴꖃ ꕃꔤꘂ ꗱ꘍ ꕉꖷ ꗪꗡ ꔻꔤ ꗏꗒꗡ ꕎ ꗪ ꕉꖸꕊ ꖏꕎ꘎ ꕉꕡ ꖏ ꗳꕮꕊ ꗏ ꕪ ꗓ ꕉꖷ ꕉꖸ ꕘꕞ ꗪ꘎ ꖏꖷ ꕉꖸꔧ ꖏ ꖸ ꕚꕌꘂ ꗷꔤ ꕞ ꘃꖷ ꘉꔧ ꗠꖻ ꕞ ꖴꘋ ꔳꕩ ꕉꖸ ꗳ꘎"
	template.blocklocation= '/scripts/vai/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'vai'
	template.scriptcode = 'Vaii'



var controls = [
{"title":"Trans-<br/>scribe", "alt":"Convert Vai text to a Latin transcription.", "code":"doTranscription('transliterate')"},

//{"title":"XXXXXXXXXX<br/>to XXXXXXXXXX", "alt":"XXXXXXXXXX.", "code":"doTranscription('XXXXXXXXXX')", "warning":"Still in development. Separate syllables before use."},
]



var pulldown = [
{"title":"Reverse transcription", "alt":"Convert Latin transliterated text to Vai.", "code":"doTranscription('reverse')"},
]




var inputAids = [
//{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},

//{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

