var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Nastaliq Urdu WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ks' // language to use for examples
	factoryDefaults.uifont = 'Noto Nastaliq Urdu WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "22";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = 'none' // type of hint to show alongside characters in the grids



var thisPicker = 'kashmiriaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [  "Noto Nastaliq Urdu WF", "Awami Nastaliq WF", "Scheherazade New WF"]

var template = {}
	template.title = 'Kashmiri (Nastaliq)'
	template.sample = "سٲری اِنسان چھِ آزاد زامٕتؠ۔ وؠقار تہٕ حوٚقوٗق چھِ ہِوی۔ تِمَن چھُ سوچ سَمَج عَطا کَرنہٕ آمُت تہٕ تِمَن پَزِ بٲے بَرادٔری ہٕنْدِس جَذباتَس تَحَت اکھ أکِس اکار بَکار یُن ۔"
	template.sampleSource = ''
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/ks' // location of script notes
	template.vocablocation = 'arab/ks_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ks'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.fontLocale = 'arab-ks'
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
{"title":"Trans-<br/>literate", "alt":"Convert Arabic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
//{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Kashmiri text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},


{"title":"Make vocab", "alt":"Create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

{"title":"Vocab to Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'LOC'
    show.kbd = ""
    show.language = "Lepcha"


var inputAids = []


