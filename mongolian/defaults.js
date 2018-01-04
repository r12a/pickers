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
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"},
{"title":"Variants show on hover", "dataVar":"showVariantsOnMouseover", "dataLocn":"", "dataShortTitle":"V", "type":"keyboard"}
]

var controls = [
//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},
//{"title":"Bengali to<br/>ISO 15919", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},
//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
//{"title":"Bengali to<br/>Radice", "alt":"Convert Bengali text to a Radice Latin transcription.", "code":"doTranscription('toRadice')"},
]
