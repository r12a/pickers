var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Tifinagh SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'zgh' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tifinagh'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'neotifinaghPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tifinagh WF", "Noto Sans Tifinagh SIL WF" ]


var template = {}
	template.title = 'Neo-tifinagh'
	template.sample = "2. ⴽⵓ ⵢⴰⵏ ⴷⴰⵔⵙ ⵜⴰⴷⵔⴼⵉⵜⵏ ⴰⴷ ⵉⴼⴼⵖ ⵜⴰⵎⵓⵔⵜ, ⵜⵉⵏⵏⵙ ⵏⵖ ⵜⵉⵢⵢⴰⴹ, ⵏⵏⵙ ⵢⵉⵍⵉ ⴷⴰⵔⵙ ⵓⵣⵔⴼ ⴰⴷ ⴷⵉⵙ ⵢⵓⵔⵔⵉ."
	template.sampleSource = ''
	template.blocklocation= 'tfng'  // block directory
	template.noteslocation = 'tfng/zgh' // location of script notes
	template.vocablocation = 'tfng/zgh_vocab' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'tfng-zgh'
	template.scriptcode = 'Tfng'
	template.fontLocale = 'tfng-zgh'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u200D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['TFNCJ','\u2D7F']]
	template.moreKeys = [['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Neo-Tifinagh text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Tiginagh to IRCAM", "alt":"Convert Neo-Tifinagh text to an IRCAM transcription.", "code":"doTranscription('toIRCAM')","warning":"This still needs a little refinement."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Tifinagh"
    show.language = "Tifinagh"


var inputAids = []

