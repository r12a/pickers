var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BGP 2017 DejaVu Serif WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'ka' // language to use for examples
	factoryDefaults.uifont = 'BGP 2017 DejaVu Sans WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'khutsuri'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Georgian WF", "Noto Serif Georgian WF", "BGP 2017 DejaVu Serif WF", "BGP 2017 DejaVu Sans WF" ]


var template = {}
	template.title = 'Khutsuri character app'
	template.sample = "Ⴋⴓⴞⴊⴈ 1. Ⴗⴅⴄⴊⴀ ⴀⴃⴀⴋⴈⴀⴌⴈ ⴈⴁⴀⴃⴄⴁⴀ ⴇⴀⴅⴈⴑⴓⴔⴀⴊⴈ ⴃⴀ ⴇⴀⴌⴀⴑⴜⴍⴐⴈ ⴖⴈⴐⴑⴄⴁⴈⴇⴀ ⴃⴀ ⴓⴔⴊⴄⴁⴈⴇ. Ⴋⴀⴇ ⴋⴈⴌⴈⴝⴄⴁⴓⴊⴈ ⴀⴕⴅⴇ ⴂⴍⴌⴄⴁⴀ ⴃⴀ ⴑⴈⴌⴃⴈⴑⴈ ⴃⴀ ⴄⴐⴇⴋⴀⴌⴄⴇⴈⴑ ⴋⴈⴋⴀⴐⴇ ⴓⴌⴃⴀ ⴈⴕⴚⴄⴍⴃⴌⴄⴌ ⴛⴋⴍⴁⴈⴑ ⴑⴓⴊⴈⴑⴉⴅⴄⴇⴄⴁⴈⴇ."
	// source: https://unicode.org/udhr/d/udhr_kat.html
	template.blocklocation= '/scripts/georgian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'geok-ka'
	template.scriptcode = 'Geok'
	template.fontLocale = 'geor'
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Georgian Khutsuri text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Khutsuri text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Georgian to<br/>National Tr", "alt":"Convert Khutsuri text to a national Georgian Latin transcription.", "code":"doTranscription('toNational')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Georgian from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Georgian from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."},

{"title":"National Latin transliteration to Georgian", "dataVar":"showNationalTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"N", "type":"palette", "initialCode":"setUpTypeAssist(false, nationalCharacterMap, nationalCharacterMap)", "desc":"Create Georgian text from characters in the Georgian National transcription."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

