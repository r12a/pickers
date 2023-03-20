var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Yezidi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xlc' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Yezidi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'yezidiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Yezidi WF" ]


var template = {}
	template.title = 'Yezidi (draft)'
	template.sample = "𐺀𐺣𐺨 𐺠𐺨 𐺣𐺨𐺒 𐺦𐺡𐺨 𐺋𐺡𐺜 𐺁𐺣𐺦 𐺡𐺠𐺝 𐺄𐺀𐺣𐺣𐺑𐺦 𐺀𐺣𐺦 𐺝𐺦 𐺗𐺁𐺕𐺀𐺣𐺣𐺑𐺨 𐺁𐺣𐺀𐺡𐺄𐺀𐺠𐺡𐺦 𐺢𐺀𐺍𐺋 𐺄𐺀𐺝𐺣 𐺜𐺣𐺡𐺨 𐺧𐺀𐺓𐺨 𐺊𐺣𐺨 𐺆𐺣𐺨 𐺁𐺝𐺀𐺄𐺣𐺦 𐺣𐺄𐺨𐺀𐺢 𐺁𐺐𐺨𐺢𐺨 𐺣𐺠𐺆 𐺣𐺦𐺡𐺣𐺑𐺍𐺐"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'yezi'
	template.scriptcode = 'yezi'
	template.fontLocale = "yezi"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐺀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Yezidi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


/*{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

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
_output.focus();`},*/
]





var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Yezidi"


var inputAids = []


