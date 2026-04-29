var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Hatran WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mis-Hatr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Hatran WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hatrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Hatran WF" ]


var template = {}
	template.title = 'Hatran'
	template.sample = "𐣮𐣫𐣬𐣠 𐣣𐣩 𐣴𐣬𐣴𐣯𐣲𐣡 𐣪𐣬𐣣𐣠 𐣡𐣣 𐣠𐣣𐣩 𐣣𐣩 𐣠𐣲𐣩𐣬 𐣫𐣤 𐣯𐣲𐣡𐣴𐣬𐣠 𐣡𐣣 𐣠𐣧𐣵𐣤 𐣯𐣫 𐣧𐣩𐣤𐣩 𐣥𐣯𐣫 𐣧𐣩𐣠 𐣡𐣭𐣩𐣤𐣩 𐣣𐣩 𐣪𐣬𐣣𐣠 𐣥𐣯𐣫 𐣧𐣩𐣠 𐣬𐣭 𐣣𐣩 𐣣𐣧𐣬 𐣫𐣤 𐣪𐣫𐣤 𐣡𐣠𐣣𐣣 𐣣 𐣼𐣿𐣽𐣼𐣻"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'hatr'
	template.scriptcode = 'Hatr'
	template.fontLocale = "hatr" 
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐣠'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Hatran text to a latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Hatran"


var inputAids = []



