var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Myanmar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'shn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Myanmar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'shanPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Shan character picker'
	template.sample = "တွၼ်ႈ 1 ၵူၼ်းၵူႊၵေႃႉၼႆႉ ပဵၼ်ဢၼ်ၵိူတ်ႇမႃးလူၺ်ႈၵုင်ႇမုၼ်ဢၼ်လွတ်ႈလႅဝ်းၽဵင်ႇပဵင်းၵၼ် လႄႈ သုၼ်ႇလႆႈဢၼ် လွတ်ႈလႅဝ်းၽဵင်ႇ ပဵင်းၵၼ်။"
	template.blocklocation= '/scripts/myanmar/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'shan'
	template.scriptcode = 'Mymr'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Balinese text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
]



var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"},

//{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
]
