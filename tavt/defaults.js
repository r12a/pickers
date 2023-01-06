var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tai Heritage Pro WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'blt' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Viet WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'taivietPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Tai Heritage Pro WF", "Noto Sans Tai Viet WF" ]


var template = {}
	template.title = 'Tai Viet character app'
	template.sample = "ꪹꪕꪸꪉ ꪀꪱ ꪋꪴ ꫛ ꪎꪲꪉ ꪮꪮꪀ ꪣꪱ ꪻꪠ ꪁꪷ ꪻꪬ ꪼꪒ ꪕꪳ ꪕꪱꪉ ꪀꪾꪚ ꪹꪋꪷꪉ ꪝꪸꪉ ꪕꪮꪥ ꪩꪾ ꫛ ꪶꪔꪙ ꪠꪴ - ꪋꪴ ꪬꪺ ꫛ ꪻꪠ ꪁꪷ ꪻꪬ ꪣꪲ ꪁꪫꪸꪙ ꪎꪱꪉ ꪶꪎꪣ ꪩꪺꪉ ꪹꪥꪸꪒ ꫛ ꪀꪾꪚ ꪹꪥꪸꪒ ꪻꪊ ꪚꪴꪙ ꪀꪾꪚ ꪼꪒ ꪹꪚꪷꪉ ꪒꪲ ꪀꪾꪚ ꪫꪸꪀ ꪭꪰꪀ ꪵꪝꪉ ꪹꪏꪉ ꪹꪭꪙ ꪒꪸꪫ."
	template.sampleSource = ''
	template.blocklocation= 'tavt'  // block directory
	template.noteslocation = 'tavt/blt' // location of script notes
	template.vocablocation = 'tavt/blt_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tavt'
	template.scriptcode = 'Tavt'
	template.fontLocale = 'tavt'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Viet text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Tai Viet from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Tai Viet.", 
"desc":"Use an IPA keyboard mapping to type Tai Viet from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Tai Viet.", 
"desc":"Use a  mapping from Latin to type Tai Viet from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Tai Viet keyboard.", 
"desc":"Use a Tai Viet keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'
