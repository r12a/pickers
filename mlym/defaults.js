var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Malayalam WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ml' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Malayalam WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'malayalamPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Malayalam WF" ]


var template = {}
	template.title = 'Malayalam character app'
	template.sample = "2. തന്റെ സ്വന്തം രാജ്യവും മറ്റേതൊരു രാജ്യവും വിടുന്നതിന്നും തന്റെ രാജ്യത്തേയ്ക്കു മടങ്ങിവരുന്നതിനുമുള്ള അധികാരം ഏതൊരാള്‍ക്കുമുള്ളതാണ്‌."
	template.sampleSource = ''
	template.blocklocation= 'mlym'  // block directory
	template.noteslocation = 'mlym/ml' // location of script notes
	template.vocablocation = 'mlym/ml_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mlym'
	template.scriptcode = 'Mlym'
	template.fontLocale = 'mlym'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u0D4D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Malayalam text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Make vocab", "alt":"Expand a line to create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : maptoipa(input[0]);
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

{"title":"Malayalam to ISO", "alt":"Convert Malayalam text to an ISO Latin transcription.", "warning":"The results should be checked for accuracy.", "code":"doTranscription('toISO')"},

{"title":"ISO to Malayalam", "alt":"Convert ISO latin text to Malayalam transcription.", "warning":"The results should be checked for accuracy.", "code":"doTranscription('toMalayalam')"},

{"title":"Malayalam to IPA", "alt":"Convert Malayalam text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toISO15919')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = ""
    show.language = "Malayalam"


var inputAids = []
