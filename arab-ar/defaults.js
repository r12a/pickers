var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "36";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "ـ";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'arabicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade WF", "Noto Naskh Arabic WF" ]

var template = {}
	template.title = 'Modern Standard Arabic'
	template.sample = "2. يحق لكل فرد أن يغادر أية بلاد بما في ذلك بلده كما يحق له العودة إليه."
    template.blocklocation= 'arab'  // blocklocation to use for examples
	template.noteslocation = 'arab/arb' // location of script notes
	template.vocablocation = 'arab/arb_vocab' // location of term database (adds link to share menu)
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ar'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.initialInput = ''
	template.fontLocale = 'arab-arb'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '\u0627'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C'], ['CGJ','\u034F']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Arabic text to a Latin transliteration.", "code":"doTranscription('transliterate')"},


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

/*{"title":"Make vocab", "alt":"Expand a line to create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = removeVowels(input[0]);
meaning = input[1];
ipa = input[2]? input[2] : transcribetoIPA(input[0]);
alt = input[3]? input[3] : '(' + input[0] + ')';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
*/

{"title":"Remove vowels", "alt":"Remove harakat, etc. from the text.", "code":"add(removeVowels(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},

{"title":"Replace presentation forms", "alt":"Replaces all compatibility code points with regular code points. Particularly useful for detecting and removing Arabic presentation forms.", "code":"add(convertFromNFKC(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},

{"title":"Arabic to IPA", "alt":"Convert Arabic text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Requires fully vowelled text!<br>This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"Arabic to LOC", "alt":"Convert Arabic text to an Library of Congress Latin transcription.", "code":"doTranscription('toLOC')", "warning": "Full transcription requires fully vowelled text! The results should be checked for accuracy."},

{"title":"Arabic to ISO", "alt":"Convert Arabic text to an ISO Latin transcription.", "code":"doTranscription('toISO')", "warning": "Full transcription requires fully vowelled text! The results should be checked for accuracy."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = "Arabic"
    show.language = "Arabic"



var inputAids = []


