var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mongolian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "4"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mongolian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'mongolianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Mongolian character picker'
	template.sample = "ᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠦᠨ ᠵᠥᠪ ᠪᠢᠴᠢᠯᠭᠡ ᠶᠢᠨ ᠳᠦᠷᠢᠮ ᠳᠦ᠂ ᠦᠭᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠳᠦ ᠳᠠᠭᠠᠪᠤᠷᠢ ᠵᠠᠯᠭᠠᠬᠤ ᠳᠤ ᠵᠠᠷᠢᠮ ᠦᠭᠡ ᠶᠢᠨ ᠡᠴᠦᠰ ᠦᠨ ᠠᠪᠢᠶ᠎ᠠ ᠨᠢ ᠭᠡᠭᠡᠭᠳᠡᠳᠡᠭ᠂ ᠡᠭᠦᠨ ᠢ ᠠᠪᠢᠶ᠎ᠠ ᠭᠡᠭᠡᠭᠳᠡᠬᠦ ᠦᠵᠡᠭᠳᠡᠯ ᠭᠡᠨ᠎ᠡ᠃ "
	template.blocklocation= '/scripts/mongolian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mongolian'
	template.scriptcode = 'Mong'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
{"title":"JSM to Mongolian", "dataVar":"showJSMCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"S", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(jsmCharacterMap);makeKbdEventList(jsmCharacterMap);"},
{"title":"Variants show on hover", "dataVar":"showVariantsOnMouseover", "dataLocn":"", "dataShortTitle":"V", "type":"keyboard"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mongolian text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
{"title":"Mongolian<br/>to JSM", "alt":"Convert Mongolian text to a Joint Sino-Mongolian transcription.", "code":"doTranscription('toJSM')"},
//{"title":"Cyrillic<br/>to Mongolian", "alt":"Convert Mongolian text in Cyrillic to Traditional Mongolian.", "code":"doTranscription('cyrlToMong')"},
]
