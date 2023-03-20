var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Pahlavi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'pal' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Pahlavi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'phliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Pahlavi WF" ]


var template = {}
	template.title = 'Inscriptional Pahlavi character app'
	template.sample = "𐭲𐭢𐭫𐭠𐭧𐭩 𐭦𐭭𐭤 𐭫𐭩 𐭬𐭦𐭣𐭩𐭮𐭭 𐭡𐭢𐭩 𐭱𐭧𐭯𐭥𐭧𐭥𐭩 𐭬𐭫𐭪𐭠𐭭 𐭬𐭫𐭪𐭠 𐭠𐭩𐭥𐭠𐭭 𐭥𐭠𐭭𐭩𐭥𐭠𐭭 𐭬𐭭𐭥 𐭰𐭲𐭥𐭩 𐭬𐭭 𐭩𐭦𐭲𐭠𐭭 𐭡𐭥𐭤 𐭬𐭦𐭣𐭩𐭮𐭭 𐭡𐭢𐭩 𐭠𐭥𐭲𐭠𐭭 𐭭𐭯𐭩 𐭡𐭢𐭩 𐭯𐭠𐭯𐭪𐭩 𐭬𐭫𐭪𐭠 𐭠𐭩𐭥𐭠𐭭"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'phli'
	template.scriptcode = 'Phli'
	template.fontLocale = "phli"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐭠'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Pahlavi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Pahlavi"


var inputAids = []
