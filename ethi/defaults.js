var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ethiopic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'am' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ethiopic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'ethiopicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Ethiopic WF" ]


var template = {}
	template.title = 'All Ethiopic'
	template.sample = "፪/፡ እያንዳንዱ፡ሰው፡ከማንኛውም፡አገር፡ሆነ፡ከራሱ፡አገር፡ወጥቶ፡እንደገና፡ወደ፡አገሩ፡የመመለስ፡መብት፡አለው።"
	template.blocklocation= 'ethiopic'  // blocklocation to use for examples
	template.noteslocation = 'ethiopic/' // location of script notes relevant to this app
	template.vocablocation = '/scripts/ethiopic/am_vocab' // location of term database, full url
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ethi'
	template.scriptcode = 'Ethi'
	template.fontLocale = 'ethi'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '፡'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ethiopic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
//{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Ethiopic text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Extended repertoire", "dataVar":"showExtended", "dataLocn":"", "dataShortTitle":"E", "type":"code", "initialCode":"if(globals.showExtended){revealExtended(true)}else{revealExtended(false);}", "desc":"Show the extended repertoire of syllables."},


//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

/*{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type XXXXXX from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},*/

{"title":"Type assist: IPA to Amharic.", 
"desc":"Use an IPA keyboard mapping to type Amharic from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: LOC transcription to XXXXXX.", 
//"desc":"Use a  mapping from LOC to type XXXXXX from the keyboard.",
//"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
//},

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

{"title":"Show hints", "dataVar":"showRevealHints", "dataLocn":"", "dataShortTitle":"S", "type":"code", "initialCode":"if(globals.showRevealHints){revealHints(true)}else{revealHints(false);}", "desc":"Show transliterations alongside syllables to help find things."},

]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,ipaAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'
