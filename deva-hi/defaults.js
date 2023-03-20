var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Devanagari WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // line height of text area 
	factoryDefaults.language = 'hi' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Devanagari WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hindiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Devanagari WF" ]


var template = {}
	template.title = 'Hindi character app'
	template.sample = "(२) प्रत्येक व्यक्ति को अपने या पराये किसी भी देश को छोड़नो और अपने देश को वापस आनो का अधिकार है ।"
	template.sampleSource = ''
	template.blocklocation= 'deva'  // block directory
	template.noteslocation = 'deva/hi' // location of script notes
	template.vocablocation = 'deva/hi_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'deva-hi'
	template.scriptcode = 'Deva'
	template.fontLocale = 'deva-hi'
	template.hints = true
	template.spaces = [['SP', ' '], ['NBSP','\u00A0'], ['NNBSP','\u202F']]
	template.invisibles = [['HALANT','\u094D'], ['ZWJ','\u200D'], ['ZWNJ','\u200C']]
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '\u094D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Hindi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then make other changes.", "code":"doTranscription('transcription')", "warning":"The result should be checked, especially for inherent vowels that are pronounced at the end of a word."},

{"title":"Hindi to ISO", "alt":"Convert Hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')", "warning":"The result should be checked, especially for inherent vowels that are pronounced at the end of a word."},

{"title":"ISO to Hindi", "alt":"Convert an ISO 15919 transcription to Hindi text.", "code":"doTranscription('toDeva')"},
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = "Hindi"
    show.language = "Hindi"


var inputAids = []



