var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BabelStone Moon Runes WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "24";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Junicode WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'runrenPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "BabelStone Moon Runes WF", "BabelStone Runic Berhtwald WF" ]


var template = {}
	template.title = 'Hobbit Runes'
	template.sample = "ᚹᚣᚱᛗᛋᛏᚫᚾᛞ᛫ᛒᚣ᛫ᚦᛖ᛫ᚷᚱᛖᚣ᛫ᛋᛏᚩᚾᛖ᛫ᚹᚻᛁᛚᛖ᛫ᚦᛖ᛫ᚦᚱᚢᛋᚻ᛫ᛱᚾᚩᚳᛱᛋ᛫ᚫᚾᛞ᛫ᚦᛖ᛫ᛋᛖᛏᛏᛁᚾᚷ᛫ᛋᚢᚾ᛫ᚹᛁᚦ᛫ᚦᛖ᛫ᛚᚫᛋᛏ᛫ᛚᛁᚷᚻᛏ᛫ᚩᚠ᛫ᛞᚢᚱᛁᚾᛋ᛫ᛞᚫᚣ᛫ᚹᛁᛚᛚ᛫ᛋᚻᛁᚾᛖ᛫ᚢᛈᚩᚾ᛫ᚦᛖ᛫ᛱᛖᚣᚻᚩᛚᛖ  ᚦ⃞     ᛋᛗᚪᚢᚷ"
	// sample source: https://www.babelstone.co.uk/Fonts/MoonRunes.html
	template.blocklocation= '/scripts/runr/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr-en'
	template.scriptcode = 'Runr'
	template.fontLocale = "runr"
	template.hints = true



var controls = [
{"title":"Trans-<br>late+", "alt":"Convert to a Latin transliteration but then apply additional orthographic transformations.", "code":"doTranscription('translitPlus')", "warning":"Expands some runes to more than one Latin letter."},

{"title":"Latin to<br/>Runic", "alt":"Convert Latin text to Hobbit runes.", "code":"doTranscription('toRunic')", "warning":"Converts ordinary Latin text to Hobbit runes."},
]





var pulldown = [
{"title":"Trans-<br/>literate", "alt":"Convert Runic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Runic text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

]





var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard via reverse transliteration."},

]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

