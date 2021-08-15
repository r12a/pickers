var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Estrangelo Edessa WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'syr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Syriac Estrangela'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'syriacPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Syriac Eastern WF", "Noto Sans Syriac Estrangela WF", "Noto Sans Syriac Western WF", "East Syriac Adiabene WF", "Estrangelo Edessa WF", "Serto Jerusalem WF" ]


var template = {}
	template.title = 'Syriac character app'
    template.sample = "ܘܐ̄ܢܵܫ̈ܝܼܢ ܐܵܡܪܝܼܢ ܕܲܐܟܙܢܵܐ ܩܲܕ݂ܡܵܝܲܬ݂ ܪܟ݂ܲܒ݂ ܐܵܬ݂ܘ̈ܵܬ݂ܲܐ ܥܸܒ݂ܪ̈ܵܝܵܬ݂ܲܐ ܘܲܒ݂ܗܹܝܢ ܣܡ ܢܡܘܣܐ ܆ ܗܟܢܐ ܘܫܝܠܡܘܢ ܪܟܒ ܐܬܘ̈ܬܐ ܕܣܦܪ̈ܐ ܐܚܪ̈ܢܐ ܘܝܗ̣ܒ ܠܥܡ̈ܡܐ ܕܐܬܝܩܪ ܡܢܗܘܢ ܂"
    template.blocklocation= '/scripts/syriac/block'  // blocklocation to use for examples
    template.noteslocation = 'syriac/' // location of script notes relevant to this app
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syrc'
	template.scriptcode = 'Syrc'
	template.cursive = true
	template.fontLocale = 'syrc'
	template.hints = true


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Syriac text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]


var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Syriac from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Syriac.", 
"desc":"Use an IPA keyboard mapping to type Syriac from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Syriac.", 
"desc":"Use a  mapping from Latin to type Syriac from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Syriac keyboard.", 
"desc":"Use a Syriac keyboard mapping to type from the keyboard.",
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

