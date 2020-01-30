var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BGP 2017 DejaVu Serif WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
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
 
 
var template = {}
	template.title = 'Khutsuri character app'
	template.sample = "Ⴋⴓⴞⴊⴈ 1. Ⴗⴅⴄⴊⴀ ⴀⴃⴀⴋⴈⴀⴌⴈ ⴈⴁⴀⴃⴄⴁⴀ ⴇⴀⴅⴈⴑⴓⴔⴀⴊⴈ ⴃⴀ ⴇⴀⴌⴀⴑⴜⴍⴐⴈ ⴖⴈⴐⴑⴄⴁⴈⴇⴀ ⴃⴀ ⴓⴔⴊⴄⴁⴈⴇ. Ⴋⴀⴇ ⴋⴈⴌⴈⴝⴄⴁⴓⴊⴈ ⴀⴕⴅⴇ ⴂⴍⴌⴄⴁⴀ ⴃⴀ ⴑⴈⴌⴃⴈⴑⴈ ⴃⴀ ⴄⴐⴇⴋⴀⴌⴄⴇⴈⴑ ⴋⴈⴋⴀⴐⴇ ⴓⴌⴃⴀ ⴈⴕⴚⴄⴍⴃⴌⴄⴌ ⴛⴋⴍⴁⴈⴑ ⴑⴓⴊⴈⴑⴉⴅⴄⴇⴄⴁⴈⴇ."
	// source: https://unicode.org/udhr/d/udhr_kat.html
	template.blocklocation= '/scripts/georgian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'geok-ka'
	template.scriptcode = 'Geok'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Georgian Khutsuri text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Khutsuri text.", "code":"doTranscription('revTransliterate')"},

{"title":"Georgian to<br/>National Tr", "alt":"Convert Khutsuri text to a national Georgian transcription.", "code":"doTranscription('toNational')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"makePalette(''); window.latinOnly=false;makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Georgian from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Georgian Natl transliteration", "dataVar":"showNationalTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"G", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(nationalCharacterMap);makeKbdEventList(nationalCharacterMap);", "desc":"Create Georgian text from characters in the Georgian National transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);", "desc":"Use ASCII characters to type Georgian from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]

