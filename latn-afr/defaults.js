var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Adelle Sans EXT Light WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'latnAfrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Gentium Plus WF", "Adelle Sans EXT Light WF", "Noto Sans Light WF" ]


var template = {}
	template.title = 'Pan-African Latin character app'
	template.sample = "Bánlʊrʊ́ʊ ɩrʊ́ báa weení na kezéńbíídi gɛ bɩka bɛdɛ́ɛ ɖɔɔzɩ́tɩ na yíkowá kɛgɛ́ɛ ɖéyí-ɖéyí gɛ. Bɔwɛná laakárɩ na ɩrʊ́tɩ bɩka bɩɩbɔ́ɔ́zɩ bɔcɔɔná ɖamá koobíre cɔwʊrɛ." // from https://unicode.org/udhr/d/udhr_kdh.html
	template.blocklocation= 'latin'  // blocklocation to use for examples
	template.noteslocation = '' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-afr'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn-afr'
	template.hints = false
	template.bicameral = true

	
	privilegedKey = ''  // § key assignment
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]
	template.defaultCtrlkey = ''
	template.ctrlkeys = []



var controls = [
]



var pulldown = [
]


var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type African characters from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

/*{"title":"Type assist: IPA to XXXXXX.", 
"desc":"Use an IPA keyboard mapping to type XXXXXX from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to XXXXXX.", 
"desc":"Use a  mapping from Latin to type XXXXXX from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a XXXXX keyboard.", 
"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},*/

{"id":"showLatinTransSwitch", "title":"Type-assist: More characters, needed for transcriptions.", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"M", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,typeAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'
