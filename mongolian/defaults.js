var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mongolian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "4"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mongolian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'mongolianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mongolian WF" ]


var template = {}
	template.title = 'Mongolian character app'
	template.sample = "ᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠦᠨ ᠵᠥᠪ ᠪᠢᠴᠢᠯᠭᠡ ᠶᠢᠨ ᠳᠦᠷᠢᠮ ᠳᠦ᠂ ᠦᠭᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠳᠦ ᠳᠠᠭᠠᠪᠤᠷᠢ ᠵᠠᠯᠭᠠᠬᠤ ᠳᠤ ᠵᠠᠷᠢᠮ ᠦᠭᠡ ᠶᠢᠨ ᠡᠴᠦᠰ ᠦᠨ ᠠᠪᠢᠶ᠎ᠠ ᠨᠢ ᠭᠡᠭᠡᠭᠳᠡᠳᠡᠭ᠂ ᠡᠭᠦᠨ ᠢ ᠠᠪᠢᠶ᠎ᠠ ᠭᠡᠭᠡᠭᠳᠡᠬᠦ ᠦᠵᠡᠭᠳᠡᠯ ᠭᠡᠨ᠎ᠡ᠃ "
	template.blocklocation= '/scripts/mongolian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mongolian'
	template.scriptcode = 'Mong'
	template.fontLocale = 'mong'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mongolian text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Mongolian<br/>to JSM", "alt":"Convert Mongolian text to a Joint Sino-Mongolian transcription.", "code":"doTranscription('toJSM')"},

{"title":"Toggle<br/>direction", "alt":"Switch direction of input area between vertical &amp; horizontal.", "code":"toggleDirectionality()"},

//{"title":"Cyrillic<br/>to Mongolian", "alt":"Convert Mongolian text in Cyrillic to Traditional Mongolian.", "code":"doTranscription('cyrlToMong')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Mongolian from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"JSM to Mongolian", "dataVar":"showJSMCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"J", "type":"palette", "initialCode":"setUpTypeAssist(false, jsmCharacterMap, jsmCharacterMap)", "desc":"Produce Mongolian text from a JSM transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Mongolian from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."},

{"title":"Variants show on hover", "dataVar":"showVariantsOnMouseover", "dataLocn":"", "dataShortTitle":"V", "type":"keyboard"},

]

