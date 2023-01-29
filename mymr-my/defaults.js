var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Myanmar WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'my' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Myanmar WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'burmesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Myanmar WF", "Noto Sans Myanmar WF", "Myanmar3 WF", "Tharlon WF" ]


var template = {}
	template.title = 'Burmese character app'
	template.sample = "(၂) လူတိုင်းတွင် မိမိနေထိုင်ရာ တိုင်းပြည်မှ လည်းကောင်း၊ အခြားတိုင်းပြည်မှလည်းကောင်း ထွက်ခွာ သွားပိုင်ခွင့်ရှိသည့်အပြင်၊ မိမိ၏ တိုင်းပြည်သို့ ပြန်လာ ပိုင်ခွင့်လည်းရှိသည်။"
	template.sampleSource = ''
	template.blocklocation= 'mymr'  // block directory
	template.noteslocation = 'mymr/my' // location of script notes
	template.vocablocation = 'mymr/my_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mymr-my'
	template.scriptcode = 'Mymr'
	template.fontLocale = 'mymr'
	template.hints = true
	
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u103A'  // § key assignment
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['VIRAMA','\u1039']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Burmese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Reverse<br/>translit.", "alt":"Convert Latin transliteration back to Burmese.", "code":"doTranscription('reverse')"},
]



var pulldown = [
{"title":"Split syllables", "alt":"Split the text into syllables.", "code":"add(splitSyllables(getHighlightedText(document.getElementById('output')))); return false;"},

{"title":"Burmese to MLC", "alt":"Convert Burmese text to an MLC Latin transcription.", "code":"doTranscription('toMLC')", "warning":"The results should be checked for accuracy."},

{"title":"Burmese to IPA", "alt":"Convert Burmese text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Burmese from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Burmese.", 
"desc":"Use an IPA keyboard mapping to type Burmese from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: LOC transcription to Burmese.", 
"desc":"Use a  mapping from LOC to type Burmese from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Mesher to Burmese", "dataVar":"showMesherTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"m", "type":"palette", "initialCode":"setUpTypeAssist(false, mesherCharacterMap, mesherCharacterMap)", "desc":"Use ASCII characters to type Burmese from the keyboard via the transcription used in Mesher's book."},

{"title":"Type assist: Map keys to a Burmese keyboard.", 
"desc":"Use a Burmese keyboard mapping to type from the keyboard.",
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
