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




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Windows Urdu"
    show.language = "Urdu"


var inputAids = []

