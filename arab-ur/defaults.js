var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Nastaliq Urdu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // height of text area in px
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ur' // language to use for examples
	factoryDefaults.uifont = 'Noto Nastaliq Urdu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'urduPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Nastaliq Urdu WF", "Scheherazade WF", "Awami Nastaliq WF" ]


var template = {}
	template.title = 'Urdu character app'
	template.sample = "(۲) ہر شخص کو اس بات کا حق ہے کہ وہ ملک سے چلا جائے چاہے یہ ملک اس کا اپنا ہو۔ اور اسی طرح اسے ملک میں واپس آ جانے کا بھی حق ہے۔"
	template.sampleSource = ''
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/ur' // location of script notes
	template.vocablocation = 'arab/ur_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ur'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.fontLocale = 'arab-ur'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = 'ا'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Urdu text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make termbase<br>entry", "alt":`Create an entry for the termbase. Must start with vowelled-arabic and use | separator. Optional: meaning, ipa, transcription`, 

"code":`
_output=document.getElementById('output'); 
_output.value = _output.value.trim()
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0].trim();
meaning = input[1]? input[1].trim() : '';
ipa = input[2]? input[2].trim() : '';
transc = input[3]? input[3].trim() : '';
notes = input[4]? input[4].trim() : '';

if (notes === '') notes = removeVowels(input[0]);

add( term.trim()+'|'+meaning.trim()+'|'+ipa.trim()+'|'+transc.trim()+'|'+notes.trim()+'\\n');
add( notes.trim()+'|'+meaning.trim()+'|'+ipa.trim()+'|'+transc.trim()+'|'+term.trim()+'\\n');
`
},
]



var pulldown = [
{"title":"Make termbase entry", "alt":`Create an entry for the termbase. Must start with vowelled-arabic and use | separator. Optional: meaning, ipa, transcription`, 

"code":`
_output=document.getElementById('output'); 
_output.value = _output.value.trim()
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0].trim();
meaning = input[1]? input[1].trim() : '';
ipa = input[2]? input[2].trim() : '';
transc = input[3]? input[3].trim() : '';
notes = input[4]? input[4].trim() : '';

if (notes === '') notes = removeVowels(input[0]);

add( term.trim()+'|'+meaning.trim()+'|'+ipa.trim()+'|'+transc.trim()+'|'+notes.trim()+'\\n');
add( notes.trim()+'|'+meaning.trim()+'|'+ipa.trim()+'|'+transc.trim()+'|'+term.trim()+'\\n');
`
},


{"title":"Remove vowels", "alt":"Remove harakat, etc. from the text.", "code":"add(removeVowels(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Urdu from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Urdu.", 
"desc":"Use an IPA keyboard mapping to type Urdu from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: LOC transcription to Urdu.", 
"desc":"Use a  mapping from LOC to type Urdu from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to an Urdu keyboard.", 
"desc":"Use a Windows Urdu keyboard mapping to type from the keyboard.",
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
