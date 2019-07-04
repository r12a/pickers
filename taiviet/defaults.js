var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tai Heritage Pro WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'blt' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Viet WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'taivietPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Tai Viet character picker'
	template.sample = "ꪹꪕꪸꪉ ꪀꪱ ꪋꪴ ꫛ ꪎꪲꪉ ꪮꪮꪀ ꪣꪱ ꪻꪠ ꪁꪷ ꪻꪬ ꪼꪒ ꪕꪳ ꪕꪱꪉ ꪀꪾꪚ ꪹꪋꪷꪉ ꪝꪸꪉ ꪕꪮꪥ ꪩꪾ ꫛ ꪶꪔꪙ ꪠꪴ - ꪋꪴ ꪬꪺ ꫛ ꪻꪠ ꪁꪷ ꪻꪬ ꪣꪲ ꪁꪫꪸꪙ ꪎꪱꪉ ꪶꪎꪣ ꪩꪺꪉ ꪹꪥꪸꪒ ꫛ ꪀꪾꪚ ꪹꪥꪸꪒ ꪻꪊ ꪚꪴꪙ ꪀꪾꪚ ꪼꪒ ꪹꪚꪷꪉ ꪒꪲ ꪀꪾꪚ ꪫꪸꪀ ꪭꪰꪀ ꪵꪝꪉ ꪹꪏꪉ ꪹꪭꪙ ꪒꪸꪫ."
	template.blocklocation= '/scripts/taiviet/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'taiviet'
	template.scriptcode = 'Tavt'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Viet text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
]



var inputAids = [
//{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

//{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]
