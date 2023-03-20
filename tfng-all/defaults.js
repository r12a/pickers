var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Hapax Berbère' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ber' // language to use for examples
	factoryDefaults.uifont = 'Hapax Berbère'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tifinaghPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Tifinagh WF" ]


var template = {}
	template.title = 'All Tifinagh character app'
	template.sample = "2. ⴽⵓ ⵢⴰⵏ ⴷⴰⵔⵙ ⵜⴰⴷⵔⴼⵉⵜⵏ ⴰⴷ ⵉⴼⴼⵖ ⵜⴰⵎⵓⵔⵜ, ⵜⵉⵏⵏⵙ ⵏⵖ ⵜⵉⵢⵢⴰⴹ, ⵏⵏⵙ ⵢⵉⵍⵉ ⴷⴰⵔⵙ ⵓⵣⵔⴼ ⴰⴷ ⴷⵉⵙ ⵢⵓⵔⵔⵉ."
	template.sampleSource = ''
	template.blocklocation= 'tfng'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'tfng-all'
	template.scriptcode = 'Tfng'
	template.fontLocale = 'tfng'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tifinagh text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Tifinagh text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Tifinagh"


var inputAids = []

