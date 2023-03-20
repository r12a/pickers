var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade New WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, px (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // line height of text area
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade New WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'arabicblockPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade New WF", "Noto Naskh Arabic WF" ]

 
var template = {}
	template.title = 'All Arabic character app'
	template.sample = "2. يَحِقُ لِكُلِ فَرْد أَن يُغَادِر أَيْةً بِلَاد بِمَا فِي ذَلِك بَلَدَه كَمَا يَحِقُ لَه العَودَة إِلَيه."
	template.blocklocation= 'arab'  // block directory
	template.noteslocation = 'arab/arb' // location of script notes
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arab-all'
	template.scriptcode = 'Arab'
	template.fontLocale = 'arab'
	template.hints = false
	
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





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = false
    show.latin = false
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = ""


var inputAids = []


var pulldown = [
]


var controls = [
]





// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = ''
