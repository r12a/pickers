var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BabelStone Moon Runes WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "24";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'BabelStone Runic Berhtwald WF'; // font name  for selection area (a single font, no quotes)
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
	template.title = 'Tolkien Runes'
	template.sample = "ᚹᚣᚱᛗᛋᛏᚫᚾᛞ᛫ᛒᚣ᛫ᚦᛖ᛫ᚷᚱᛖᚣ᛫ᛋᛏᚩᚾᛖ᛫ᚹᚻᛁᛚᛖ᛫ᚦᛖ᛫ᚦᚱᚢᛋᚻ᛫ᛱᚾᚩᚳᛱᛋ᛫ᚫᚾᛞ᛫ᚦᛖ᛫ᛋᛖᛏᛏᛁᚾᚷ᛫ᛋᚢᚾ᛫ᚹᛁᚦ᛫ᚦᛖ᛫ᛚᚫᛋᛏ᛫ᛚᛁᚷᚻᛏ᛫ᚩᚠ᛫ᛞᚢᚱᛁᚾᛋ᛫ᛞᚫᚣ᛫ᚹᛁᛚᛚ᛫ᛋᚻᛁᚾᛖ᛫ᚢᛈᚩᚾ᛫ᚦᛖ᛫ᛱᛖᚣᚻᚩᛚᛖ  ᚦ⃞     ᛋᛗᚪᚢᚷ"
	// sample source: https://www.babelstone.co.uk/Fonts/MoonRunes.html
	template.blocklocation= '/scripts/runr/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr-en'
	template.scriptcode = 'Runr'
	template.fontLocale = "runr"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '᛫'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['RLO','\u202E'], ['PDF','\u202C']]



var controls = [
{"title":"Trans-<br>late", "alt":"Convert to a Latin transliteration but then apply additional orthographic transformations.", "code":"doTranscription('translitPlus')", "warning":"Expands some runes to more than one Latin letter."},

{"title":"Latin to<br/>Runic", "alt":"Convert Latin text to Hobbit runes.", "code":"doTranscription('toRunic')", "warning":"Converts ordinary Latin text to Hobbit runes."},
]





var pulldown = [
{"title":"Transliterate", "alt":"Convert Runic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]





var inputAids = [
{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Hobbit runes from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Hobbit runes.", 
"desc":"Use an IPA keyboard mapping to type Hobbit runes from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Hobbit runes.", 
"desc":"Use a  mapping from Latin to type Hobbit runes from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

/*{"title":"Type assist: Map keys to a XXXXX keyboard.", 
"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},*/

{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},

]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'

