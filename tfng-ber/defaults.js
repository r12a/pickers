var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tifinagh SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'zgh' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tifinagh'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'neotifinaghPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tifinagh WF", "Noto Sans Tifinagh SIL WF" ]


var template = {}
	template.title = 'Neo-tifinagh'
	template.sample = "2. ⴽⵓ ⵢⴰⵏ ⴷⴰⵔⵙ ⵜⴰⴷⵔⴼⵉⵜⵏ ⴰⴷ ⵉⴼⴼⵖ ⵜⴰⵎⵓⵔⵜ, ⵜⵉⵏⵏⵙ ⵏⵖ ⵜⵉⵢⵢⴰⴹ, ⵏⵏⵙ ⵢⵉⵍⵉ ⴷⴰⵔⵙ ⵓⵣⵔⴼ ⴰⴷ ⴷⵉⵙ ⵢⵓⵔⵔⵉ."
	template.sampleSource = ''
	template.blocklocation= 'tfng'  // block directory
	template.noteslocation = 'tfng/zgh' // location of script notes
	template.vocablocation = 'tfng/zgh_vocab' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'tfng-zgh'
	template.scriptcode = 'Tfng'
	template.fontLocale = 'tfng-zgh'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u200D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['TFNCJ','\u2D7F']]
	template.moreKeys = [['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Neo-Tifinagh text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Tiginagh to IRCAM", "alt":"Convert Neo-Tifinagh text to an IRCAM transcription.", "code":"doTranscription('toIRCAM')","warning":"This still needs a little refinement."},
]



var inputAids = [

{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Tifinagh from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Tifinagh.", 
"desc":"Use an IPA keyboard mapping to type Tifinagh from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: LOC transcription to XXXXXX.", 
//"desc":"Use a  mapping from LOC to type XXXXXX from the keyboard.",
//"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
//},

{"title":"Type assist: Map keys to a Tifinagh keyboard.", 
"desc":"Use a Tifinagh keyboard mapping to type from the keyboard.",
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
