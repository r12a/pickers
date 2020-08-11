var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Bamum' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bax' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bamum'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'bamumPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bamum WF" ]


var template = {}
	template.title = 'Bamum character app'
	template.sample = "ꛦ-ꚳꛊꚤ ꚳꚣꚧ꛱ꛦꚧ꛱ ꚳ꛰ꚴꚢ ꛲ꛗ   ꛧ-ꚳꛊꚤ ꛄꚧ꛱ ꚳ꛰ꛤ꛰ ꚩꚤ ꛲ꛗ   ꛨ-ꛅꚧ꛱ ꛣꚠ ꚳꛊꚤꚳ ꛎꛦ ꛛꚧ꛱ ꛲ꛗ   ꛩ-꛲ꚣꛤ ꛅꚧ꛱ ꛇꛛꚧ꛱ ꛤ꛰ ꛨ ꚣꛤ ꛛꚧ꛱ ꛦ꛰ꚳ꛰   ꛪ-ꛕꚠꛤ ꛅꚧ ꛈ ꛅꚧ꛱ ꛖ ꚳ꛰ꛤ꛰ ꛲ꚱꛅ꛱"
	template.blocklocation= '/scripts/bamu/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bamu'
	template.scriptcode = 'Bamu'
	template.fontLocale = 'bamu'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bamum text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

//{"title":"XXXXXXXXXX<br/>to XXXXXXXXXX", "alt":"XXXXXXXXXX.", "code":"doTranscription('XXXXXXXXXX')", "warning":"Still in development. Separate syllables before use."},
]



var pulldown = [
{"title":"Reverse transcription", "alt":"Convert Latin transliterated text to Bamum.", "code":"doTranscription('reverse')"},
]




var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"makePalette(''); window.latinOnly=false;makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type XXXX from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},
]

