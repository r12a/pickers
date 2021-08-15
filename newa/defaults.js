var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Newa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'new' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Newa WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'newaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Newa WF" ]

var template = {}
	template.title = 'Newa character app'
	template.sample = "𑐳𑐎𑐮𑐾𑑄 𑐩𑐣𑐹𑐟 𑐳𑑂𑐰𑐟𑐣𑑂𑐟𑑂𑐬 𑐰 𑐖𑑂𑐰𑐮𑐶𑐖𑑂𑐰𑑅 𑐁𑐟𑑂𑐩𑐳𑐩𑑂𑐩𑐵𑐣 𑐰 𑐰𑐵𑑄 𑐡𑐂𑐎𑐠𑑄 𑐧𑐸𑐂 𑑋 𑐂𑐥𑐶𑑄 𑐳𑑂𑐰𑐰𑐶𑐰𑐾𑐎 𑐰 𑐳𑐡𑑂𑐧𑐸𑐡𑑂𑐔𑐶 𑐡𑐫𑐵𑑅 𑐰𑐶𑐰𑐾𑐎𑐱𑐷𑐮 𑐖𑐸𑐂 𑐀𑐮𑐾 𑐠𑐰𑑄𑐠𑐰𑐫𑑂 𑐡𑐵𑐖𑐵𑐎𑐠𑑄 𑐴𑐣𑐵𑐧𑐣𑐵 𑐫𑐵𑐂 𑑋"
	template.blocklocation= 'newa'  // blocklocation to use for examples
	template.noteslocation = 'newa/' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'newa'
	template.scriptcode = 'Newa'
	template.fontLocale = "newa"
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Newa text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Newa text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Adds inherent vowels based on a very generalised rule. The result should be checked."},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/newa/new_vocab')"},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Newa from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},

{"title":"Type assist: IPA to Newar.", 
"desc":"Use an IPA keyboard mapping to type Newar from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: ISO transcription to Newa.", 
"desc":"Use a  mapping from ISO to type Newa from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

/*{"title":"Type assist: Map keys to an XXXXX keyboard.", 
"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},*/


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'
