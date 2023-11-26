var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ug' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "36";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'uighurPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade WF", "Noto Nastaliq Urdu WF" ]


var template = {}
	template.title = 'Uighur character app'
	template.sample = "2. ھەممە ئادەم ھەرقانداق دۆلەتتىن كېتىشكە، جوملىدىن ئۆز دۆلىتىدىن كېتىشكە ھوقۇقلۇق ھەمدە ئۆزىنىڭ دۆلىتىگە قايتىپ كېلىشكە ھوقۇقلۇق."
	template.sampleSource = ''
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/ug' // location of script notes
	template.vocablocation = 'arab/ug_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ug'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.fontLocale = 'arab-ug'
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
{"title":"Trans-<br/>literate", "alt":"Convert Uighur text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [

{"title":"Uighur to ULY", "alt":"Convert Uighur text to a ULY Latin transcription.", "code":"doTranscription('toULY')", "warning":"The results should be checked for accuracy."},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ULY'
    show.kbd = "Uighur"
    show.language = "Uighur"


var inputAids = []

