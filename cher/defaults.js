var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Cherokee WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'chr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Cherokee WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'cherokeePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Cherokee WF" ]


var template = {}
	template.title = 'Cherokee character app'
	template.sample = "2. ᏂᎦᏛ ᎠᏂᏴᏫ ᎤᏂᎲ ᎾᏍᎩ ᏚᏳᎪᏛ ᎤᏂᎩᏍᏗ ᏂᎦᎥᏉ ᎠᏰᎵ ᏂᎬᎾᏛᎢ, ᎤᏠᏯᏍᏗ ᎤᏩᏌ ᎤᏤᎵ ᎡᎥᎢ, ᎠᎴ ᎢᎦᎷᎯᏍᏗ ᎤᎾᎢ ᎤᏩᏌ ᎤᏤᎵ ᎠᏰᎵ ᏂᎬᎾᏛᎢ."
	template.blocklocation= '/scripts/cherokee/block'  // blocklocation to use for examples
	template.noteslocation = 'cherokee' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cher'
	template.scriptcode = 'Cher'
	template.fontLocale = 'cher'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Cherokee text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/cherokee/chr_vocab')"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "initialCode":"kbd=document.getElementById('alphabet'); if (kbd.style.display==='none') {kbd.style.display='block';} else {kbd.style.display='none';}", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Cherokee from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Cherokee.", 
"desc":"Use an IPA keyboard mapping to type Cherokee from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: LOC transcription to Cherokee.", 
"desc":"Use a  mapping from LOC to type Cherokee from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Cherokee keyboard.", 
"desc":"Use a Cherokee keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,shapeLookup'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'

