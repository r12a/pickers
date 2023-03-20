var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Junicode WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'ang' // language to use for examples
	factoryDefaults.uifont = 'Junicode WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'runrangPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Junicode WF" ]


var template = {}
	template.title = 'Anglo-Saxon Runes'
	template.sample = "ᚫᛣᚱᛁᛋᛏ ᚹᚫᛋ ᚩᚾ ᚱᚩᛞᛁ ᚻᚹᛖᚦᚱᚫ   ᚦᛖᚱ ᚠᚢᛋᚫ ᚠᛠᚱᚱᚪᚾ ᛣᚹᚩᛗᚢ   ᚫᚦᚦᛁᛚᚫ ᛏᛁᛚ ᚪᚾᚢᛗ   ᛁᚳ ᚦᚫᛏ ᚪᛚ ᛒᛁᚻ"
	// sample source: Ruthwell Cross, in https://en.wikipedia.org/wiki/Ruthwell_Cross
	template.sampleSource = ''
	template.blocklocation= 'runic'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr-ang'
	template.scriptcode = 'Runr'
	template.fontLocale = "runr"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['RLO','\u202E'], ['PDF','\u202C']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Runic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Changes eᵃ to e͡a. This function provides only a general indication of the transliterated Runic."},

{"title":"Latin to Runic", "alt":"Convert latin text to Anglo-Saxon/Frisian runes.", "code":"doTranscription('toASF')", "warning":"Symbols used in the various sources can vary, so the result needs to be checked for appropriateness."},
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Anglo-Saxon"


var inputAids = []
