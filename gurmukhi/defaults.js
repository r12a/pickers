var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Gurmukhi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'pa' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Gurmukhi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'armenianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Gurmukhi character picker'
	template.sample = "2. ਹਰੇਕ ਵਿਅਕਤੀ ਨੂੰ ਕਿਸੇ ਵੀ ਦੇਸ਼ ਨੂੰ ਛਡ ਕੇ ਜਾਣ ਦਾ ਹੱਕ ਹਾਸਲ ਹੈ ਅਤੇ ਇਸ ਵਿਚ ਉਸ ਦਾ ਆਪਣਾ ਮੁਲਕ ਵੀ ਸ਼ਾਮਲ ਹੈ ਅਤੇ ਉਸ ਨੂੰ ਆਪਣੇ ਮੁਲਕ ਪਰਤਣ ਦਾ ਹੱਕ ਵੀ ਹਾਸਲ ਹੈ ।"
	template.blocklocation= '/scripts/gurmukhi/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'gurmukhi'
	template.scriptcode = 'Guru'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Gurmukhi text to an ISO 15919 Latin transliteration.", "code":"doTranscription('transliterate')"},
]
