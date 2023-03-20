var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Gurmukhi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'pa' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Gurmukhi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'gurmukhiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Gurmukhi WF" ]


var template = {}
	template.title = 'Gurmukhi character app'
	template.sample = "2. ਹਰੇਕ ਵਿਅਕਤੀ ਨੂੰ ਕਿਸੇ ਵੀ ਦੇਸ਼ ਨੂੰ ਛਡ ਕੇ ਜਾਣ ਦਾ ਹੱਕ ਹਾਸਲ ਹੈ ਅਤੇ ਇਸ ਵਿਚ ਉਸ ਦਾ ਆਪਣਾ ਮੁਲਕ ਵੀ ਸ਼ਾਮਲ ਹੈ ਅਤੇ ਉਸ ਨੂੰ ਆਪਣੇ ਮੁਲਕ ਪਰਤਣ ਦਾ ਹੱਕ ਵੀ ਹਾਸਲ ਹੈ ।"
	template.sampleSource = ''
	template.blocklocation= 'guru'  // block directory
	template.noteslocation = 'guru/pa' // location of script notes
	template.vocablocation = 'guru/pa_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'guru'
	template.scriptcode = 'Guru'
	template.fontLocale = 'guru'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u0A4D'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Gurmukhi text to an ISO 15919 Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]







var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'ISO'
    show.kbd = "Punjabi"
    show.language = "Punjabi"


var inputAids = []


