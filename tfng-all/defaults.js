var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Hapax Berbère' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ber' // language to use for examples
	factoryDefaults.uifont = 'Hapax Berbère'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tifinaghPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tifinagh WF" ]


var template = {}
	template.title = 'All Tifinagh character app'
	template.sample = "2. ⴽⵓ ⵢⴰⵏ ⴷⴰⵔⵙ ⵜⴰⴷⵔⴼⵉⵜⵏ ⴰⴷ ⵉⴼⴼⵖ ⵜⴰⵎⵓⵔⵜ, ⵜⵉⵏⵏⵙ ⵏⵖ ⵜⵉⵢⵢⴰⴹ, ⵏⵏⵙ ⵢⵉⵍⵉ ⴷⴰⵔⵙ ⵓⵣⵔⴼ ⴰⴷ ⴷⵉⵙ ⵢⵓⵔⵔⵉ."
	template.blocklocation= '/scripts/tifinagh/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'tifinagh'
	template.scriptcode = 'Tfng'
	template.fontLocale = 'tfng'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tifinagh text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Tifinagh text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Tifinagh from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Tifinagh from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
