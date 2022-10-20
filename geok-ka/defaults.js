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
	template.sampleSource = 'https://unicode.org/udhr/d/udhr_kat.html'
	template.blocklocation= 'georgian'  // block directory
	template.noteslocation = 'georgian/ka' // location of script notes
	template.vocablocation = 'georgian/ka_vocab' // location of term database
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
{"title":"Georgian to National Tr", "alt":"Convert Khutsuri text to a national Georgian Latin transcription.", "code":"doTranscription('toNational')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Khutsuri from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Khutsuri.", 
"desc":"Use an IPA keyboard mapping to type Khutsuri from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: National Latin transcription to Khutsuri.", 
"desc":"Use a  mapping from National Latin transcription to type Khutsuri from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Khutsuri keyboard.", 
"desc":"Use a Khutsuri keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'

