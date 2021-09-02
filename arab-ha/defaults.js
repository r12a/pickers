var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Alkalami WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ha' // language to use for examples
	factoryDefaults.uifont = 'Alkalami Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'arabhaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade WF", "Alkalami WF", "Alkalami Light WF" ]


var template = {}
	template.title = 'Hausa (arabic)'
	template.sample = "رَایُوَا بَبَّنْ رَبُو نَا ، غُنْ مَسَاٻِى دُونْ شِدَیْنَا ، تَرْسَشِنْ أَیْكِى نَ ٻَرْنَا ، فَیْ دَ ٻُویٜ سِڟَیْدَ سُنَّا ، شِبِ أَللَّهْ بَادَكَنْغَرَا بَا"
	template.sampleSource = 'A verse from Aljiyu Namangi, Imfiraji, Part 3 (Verse 3), Omniglot http://www.omniglot.com/writing/hausa.htm'
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
    template.noteslocation = 'arabic/hausa' // location of script notes relevant to this app
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ha'
	template.scriptcode = 'Arab'
	template.fontLocale = 'arab-ha'
	template.cursive = true
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = 'إ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Hausa text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Converts certain sequences of text to a single representation. The result is not a phonetically accurate transcription. It should be checked."},
]







var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Hausa from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Hausa.", 
"desc":"Use an IPA keyboard mapping to type Hausa from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Hausa transcription to Hausa.", 
"desc":"Use a  mapping from Latin to type Hausa from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: Map keys to a XXXXX keyboard.", 
//"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
//"dataShortTitle":"k", "type":"palette", 
//"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
//},

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
var inputAidsHelp2 = 'latinAssist,togglePalette'

