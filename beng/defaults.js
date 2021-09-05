var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Bengali WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bn' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Bengali WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bengaliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bengali WF", "Noto Serif Bengali WF" ]


var template = {}
	template.title = 'Bengali'
	template.sample = "২. প্রত্যেকের‌ই নিজ দেশ সহ যে কোন দেশ পরিত্যাগ এবং স্বদেশে প্রত্যাবর্তনের অধিকার রয়েছে।"
	template.blocklocation= 'bengali'  // blocklocation to use for examples
	template.noteslocation = 'bengali' // location of script notes relevant to this app
	template.vocablocation = '/scripts/bengali/bn_vocab' // location of term database (adds link to share menu)
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'beng'
	template.scriptcode = 'Beng'
	template.fontLocale = 'beng'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '\u09CD'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bengali text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Bengali text.", "code":"doTranscription('revTransliterate')", "warning":"The selected text area content must follow the transliteration scheme developed for this app."},

//{"title":"Bengali<br/>to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Bengali to IPA", "alt":"Convert Bengali text to a very approximate IPA transcription.", "code":"doTranscription('transcription')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Bengali to ISO", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},

//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},

{"title":"Bengali to Radice", "alt":"Convert Bengali text to the Latin transcription used by Radice.", "code":"doTranscription('toRadice')"},

//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
// THE FORMER ALL NEED UPDATING

//{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/bengali/bn_vocab')"},
]


var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Bengali from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Bengali.", 
"desc":"Use an IPA keyboard mapping to type Bengali from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: ISO transcription to Bengali.", 
"desc":"Use a  mapping from ISO to type Bengali from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Radice transcription to Bengali.", 
"desc":"Use a  mapping from the transcription used by Radice to type Bengali from the keyboard.",
"dataShortTitle":"r", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.radice);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Bengali keyboard.", 
"desc":"Use a Bengali keyboard mapping to type from the keyboard.",
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
