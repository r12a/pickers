var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Alkalami WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ha' // language to use for examples
	factoryDefaults.uifont = 'Alkalami Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "26";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'arabhaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade WF", "Alkalami WF", "Alkalami Light WF" ]


var template = {}
	template.title = 'Hausa (arabic)'
	template.sample = "رَایُوَا بَبَّنْ رَبُو نَا ، غُنْ مَسَاٻِى دُونْ شِدَیْنَا ، تَرْسَشِنْ أَیْكِى نَ ٻَرْنَا ، فَیْ دَ ٻُویٜ سِڟَیْدَ سُنَّا ، شِبِ أَللَّهْ بَادَكَنْغَرَا بَا"
	template.sampleSource = 'A verse from Aljiyu Namangi, Imfiraji, Part 3 (Verse 3), Omniglot http://www.omniglot.com/writing/hausa.htm'
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/ha' // location of script notes
	template.vocablocation = 'arab/ha_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ha'
	template.scriptcode = 'Arab'
	template.fontLocale = 'arab-ha'
	template.cursive = true
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = 'إ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Converts certain sequences of text to a single representation. The result is not a phonetically accurate transcription. It should be checked."},
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Hausa"


var inputAids = []

