var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Thaana WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'dv' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Thaana WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'thaanaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Thaana WF" ]


var template = {}
	template.title = 'Thaana character app'
    template.sample = "2. ހަމަކޮންމެ މީހަކަށްމެ، އޭނާގެ އަމިއްލަ ޤައުމު ނުވަތަ އެހެން ޤައުމެއް ދޫކޮށް ދިއުމުގެ ޙައްޤާއި، އޭނާގެ އަމިއްލަ ޤައުމަށް އެނބުރި އައުމުގެ ޙައްޤު ލިބިގެންވެއެވެ."
	template.sampleSource = ''
	template.blocklocation= 'thaa'  // block directory
	template.noteslocation = 'thaa/dv' // location of script notes
	template.vocablocation = 'thaa/dv_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'thaa'
	template.scriptcode = 'Thaa'
	template.fontLocale = 'thaa'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = 'އ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thaana text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Transl<br/>++", "alt":"Convert Thaana text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Show gemination, prenasalisation, and reduce various word-finals."},
]



var pulldown = [
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Replaces text for prenasalisation and geminated consonants. Changes various word-final sequences to better match the phonetics. The result should be checked."},

{"title":"Thaana to Maldivian Latin", "alt":"Convert Thaana text to a Maldivian Latin transliteration.", "code":"doTranscription('toMaldivian')"},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Maldivian Latin'
    show.kbd = "Dhivehi"
    show.language = "Dhivehi"


var inputAids = []

