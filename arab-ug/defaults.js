var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ug' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "36";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'uighurPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade WF" ]


var template = {}
	template.title = 'Uighur character app'
	template.sample = "2. ھەممە ئادەم ھەرقانداق دۆلەتتىن كېتىشكە، جوملىدىن ئۆز دۆلىتىدىن كېتىشكە ھوقۇقلۇق ھەمدە ئۆزىنىڭ دۆلىتىگە قايتىپ كېلىشكە ھوقۇقلۇق."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
    template.noteslocation = 'arabic/uighur' // location of script notes relevant to this app
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ug'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.fontLocale = 'arab-ug'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Uighur text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Uighur text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Uighur<br/>to ULY", "alt":"Convert Uighur text to a ULY Latin transcription.", "code":"doTranscription('toULY')", "warning":"The results should be checked for accuracy."},
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Uighur from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Uighur.", 
"desc":"Use an IPA keyboard mapping to type Uighur from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: ULY transcription to Uighur.", 
"desc":"Use a  mapping from ULY to type Uighur from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Uighur keyboard.", 
"desc":"Use a Uighur keyboard mapping to type from the keyboard.",
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
