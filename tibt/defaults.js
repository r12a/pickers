var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tibetan Machine Uni WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bo' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Tibetan WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tibetanPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Tibetan Machine Uni WF", "Noto Serif Tibetan WF" ]


var template = {}
	template.title = 'Tibetan character app'
	template.sample = "༢ སྐྱེ་བོ་རེ་རེར་རང་ཡུལ་ཐེ་བས་ཡུལ་ལུང་གང་འདྲ་ཞིག་ནས་ཕྱིར་ཐོན་བྱེད་པའམ། ཡང་ན་རང་ཡུལ་དུ་ཕྱིར་ལོག་བྱེད་པའི་ཐོབ་ཐང་ཡོད༎"
	template.blocklocation= 'tibetan'  // blocklocation to use for examples
	template.noteslocation = 'tibetan/' // location of script notes relevant to this app
	template.vocablocation = '/scripts/tibetan/bo_vocab' // location of term database, full url
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tibt'
	template.scriptcode = 'Tibt'
	template.fontLocale = 'tibt'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '་'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tibetan text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]






var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Tibetan text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Converts sequences representing foreign sounds to a single symbol, and the tsek to a space. The result should be checked."},

{"title":"Tibetan<br/>to Wylie", "alt":"Convert Tibetan text to a Latin (Wylie) transcription.", "code":"doTranscription('toWylie')"},

{"title":"Wylie to<br/>Tibetan", "alt":"Convert a Latin (Wylie) transcription to Tibetan text.", "code":"var converter = window.open('http://www.thlib.org/reference/transliteration/wyconverter.php', 'converter') ; converter.focus();"},
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Tibetan from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Tibetan.", 
"desc":"Use an IPA keyboard mapping to type Tibetan from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Wylie transcription to Tibetan.", 
"desc":"Use a  mapping from Wylie to type Tibetan from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

/*{"title":"Type assist: Map keys to a Tibetan keyboard.", 
"desc":"Use a Tibetan keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'
