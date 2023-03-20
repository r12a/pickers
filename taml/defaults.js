var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Tamil WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ta' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tamil WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tamilPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Tamil WF", "Noto Sans Tamil WF" ]


var template = {}
	template.title = 'Tamil character app'
	template.sample = "2. தனது சொந்த நாடு உட்பட ஏதேனும் நாட்டை விட்டுச் செல்லவும் தத்தமது நாட்டுக்குத் திரும்பவும் ஒவ்வொருவருக்கும் உரிமையுண்டு."
	template.sampleSource = ''
	template.blocklocation= 'taml'  // block directory
	template.noteslocation = 'taml/ta' // location of script notes
	template.vocablocation = 'taml/ta_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'taml'
	template.scriptcode = 'Taml'
	template.fontLocale = 'taml'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '\u0E3A'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br>literate", "alt":"Convert Tamil text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')", "warning":"Produce a codepoint-by-codepoint, reversible Latin transliteration."},
]





var pulldown = [
{"title":"Make vocab", "alt":"Expand a line to create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '(' + transcribeToISO(input[0]) + ')';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Normalises text, adds inherent vowels, and simplifies some sequences. The result should be checked."},

{"title":"Tamil to ISO", "alt":"Convert Tamil text to an ISO Latin transcription.", "code":"doTranscription('toISO')", "warning":"The results should be checked for accuracy."},

//{"title":"Tamil<br>to IPA", "alt":"Convert Tamil text to an phonetic transcription.", "code":"doTranscription('toIPA')"},

{"title":"ISO to Tamil", "alt":"Convert ISO latin text to Tamil transcription.", "code":"doTranscription('fromISO')", "warning":"The results should be checked for accuracy."},
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = "Tamil"
    show.language = "Tamil"


var inputAids = []

