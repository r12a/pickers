var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Thai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'th' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Thai WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'thaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Thai WF", "Noto Sans Thai WF" ]


var template = {}
	template.title = 'Thai character app'
	template.sample = "2. ทุกคนมีสิทธิที่จะออกจากประเทศใด ๆ ไป รวมทั้งประเทศของตนเองด้วย และที่จะกลับยังประเทศตน"
	template.sampleSource = ''
	template.blocklocation= 'thai'  // block directory
	template.noteslocation = 'thai/th' // location of script notes
	template.vocablocation = 'thai/th_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'thai'
	template.scriptcode = 'Thai'
	template.fontLocale = 'thai'
	template.hints = true
	template.defaultSpace = '\u200B'
	
	privilegedKey = ' '  // § key assignment
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]
	template.defaultCtrlkey = ' ฺ'
	template.ctrlkeys = [['VIRAMA','\u0E3A']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thai text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

/*{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", 
"warning":"Remember to separate the syllables first.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = condense(input[0]);
meaning = input[1];
ipa = input[2]? input[2] : toLatin(input[0],'ipa');
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},*/
]




var pulldown = [
{"title":"Thai to ISO 11940", "alt":"Convert Thai text to an ISO 11940-2 Latin transcription.", "code":"doTranscription('toISO2')", "warning":"Separate syllables with spaces before use. The results should be checked for accuracy."},

{"title":"Thai to IPA", "alt":"Convert Thai text to an approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Separate syllables with spaces before use. This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Remove sp/hyph", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = "Thai"
    show.language = "Thai"


var inputAids = []

