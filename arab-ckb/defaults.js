var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade New WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "200"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'ckb' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade New WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "◌";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'ckbPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade New WF" ]


var template = {}
	template.title = 'Sorani'
	template.sample = "هەموو مرۆڤ ئازاد و دوەقار و مافان دە وەکهەڤ تێن دنیایێ. ئەو خوەدی هش و شوئوورن و دڤێ لهەمبەر هەڤ بزهنیەتەکە براتیێ بلڤن."
	template.sampleSource = 'https://www.omniglot.com/writing/kurdish.htm'
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/ckb' // location of script notes
	template.vocablocation = 'arab/ckb_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-ckb'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.fontLocale = "arab"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'],  
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]

	

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Sorani Arabic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]





var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Sorani"


var inputAids = []

