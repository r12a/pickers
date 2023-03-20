var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = ' Noto Sans Oriya WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'or' // language to use for examples
	factoryDefaults.uifont = ' Noto Sans Oriya WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'odiaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ " Noto Sans Oriya WF" ]


var template = {}
	template.title = 'Odia'
	template.sample = "ଭାରତୀୟ ମହାକାଶ ଗବେଷଣା ସଂସ୍ଥା ବା ଇସ୍ରୋ ହେଉଛି ଭାରତ ସରକାରଙ୍କ ପ୍ରମୁଖ ମହାକାଶ ପ୍ରାଧିକରଣ । ଏହା ପୃଥିବୀର ଛଅଟି ବଡ ସରକାରୀ ମହାକାଶ ପ୍ରାଧିକରଣ ମଧ୍ୟରୁ ଅନ୍ୟତମ ଯଥା ।"
	template.sampleSource = ''
	template.blocklocation= 'orya'  // block directory
	template.noteslocation = 'orya/or' // location of script notes
	template.vocablocation = 'orya/or_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'orya'
	template.scriptcode = 'Orya'
	template.fontLocale = "orya"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u0B4D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Oriya text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
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
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Oriya"


var inputAids = []

