var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Hebrew WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'he' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Hebrew WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "30";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hebrewPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Hebrew WF" ]


var template = {}
	template.title = 'Hebrew character app'
    template.sample = "כל בני אדם נולדו בני חורין ושווים בערכם ובזכויותיהם. כולם חוננו בתבונה ובמצפון, לפיכך חובה עליהם לנהוג איש ברעהו ברוח של אחוה."
	template.sampleSource = ''
	template.blocklocation= 'hebr'  // block directory
	template.noteslocation = 'hebr/he' // location of script notes
	template.vocablocation = 'hebr/he_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'hebr'
	template.scriptcode = 'Hebr'
	template.fontLocale = 'hebr'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = 'א'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Hebrew text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Remove vowels", "alt":"Remove points from the text.", "code":"add(removeVowels(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},

{"title":"Make vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output')
input=replaceSlash(getHighlightedText(_output),'|').split('|')
if (! hasHighlight(_output)) _output.value=''; 

term = removeVowels(input[0]);
meaning = input[1];
ipa = input[2]? input[2] : '';
if (input[0] !== term) alt = input[0]? input[0] : '';
else alt = ''
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Academy'
    show.kbd = "Hebrew"
    show.language = "Hebrew"


var inputAids = []



