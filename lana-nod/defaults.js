var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Lamphun WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'nod' // language to use for examples
	factoryDefaults.uifont = 'Lanna Alif WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u0020";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'northernthaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Lamphun WF", "Noto Serif Tai Tham WF", "Lanna Alif WF" ]


var template = {}
	template.title = 'Northern Thai character app'
	template.sample = "ᨣᩢ᩠ᨶᩉᩮᩖᩨᨠᩥ᩠ᨶ ᨣᩢᩐᩢᩣᨡᩣ᩠ᨿᨸᩮ᩠ᨶᨦᩫ᩠ᨶ ᨠᩮ᩠ᨷᩉᩬᨾᩋᩬᨾᩅᩱᩢᨯ᩠᩶ᨦᨶᩦ᩶ ᨴᩩᨠᪧᨸᩦᨾᩣᨷᩢᨡᩣ᩠ᨯ ᨧᩥ᩠᩵ᨦᨠ᩠ᨴᩣᩴᩉᩨ᩶ᨡᩮᩢᩣᨻᩳ᩵ᨾᩯ᩵ᩃᩪᨠ ᨷᩢᨯᩱ᩶ᨠᩢ᩠᩶ᨶᩈᩢ᩠ᨦᩈᩢ᩠ᨠᨩᩮᩬᩨ"
	template.blocklocation= '/scripts/taitham/block'  // blocklocation to use for examples
	template.noteslocation = 'taitham/northernthai' // location of script notes relevant to this app
	template.vocablocation = '/scripts/taitham/nod_vocab' // location of term database, full url
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lana-nod'
	template.scriptcode = 'Lana'
	template.fontLocale = 'lana-nod'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u1A60'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['SAKOT','\u1A60']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Northern Thai text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Translit<br/>++", "alt":"Transliterate but convert complex vowels to sounds.", "code":"doTranscription('transcription')", "warning":"Transliterates, but renders sound for complex vowels."},
]





var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Northern Thai text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Northern Thai from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Northern Thai.", 
"desc":"Use an IPA keyboard mapping to type Northern Thai from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: LOC transcription to Northern Thai.", 
//"desc":"Use a  mapping from LOC to type Northern Thai from the keyboard.",
//"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
//},

{"title":"Type assist: Map keys to a Northern Thai keyboard.", 
"desc":"Use a Northern Thai keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},

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
var inputAidsHelp1 = 'intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'
