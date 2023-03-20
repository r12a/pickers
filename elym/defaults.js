var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Elymaic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area 
	factoryDefaults.language = 'xly' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Elymaic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'elymPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Elymaic WF" ]


var template = {}
	template.title = 'Elymaic character app'
	template.sample = "𐿱𐿫𐿬𐿠 𐿦𐿭𐿤 𐿶 𐿥𐿳𐿥𐿣 𐿭𐿠 𐿮𐿩𐿡 𐿪𐿥𐿳𐿮𐿩𐿠 𐿡𐿳 𐿡𐿫𐿣𐿥𐿴𐿠 𐿶 𐿳𐿡𐿠𐿭𐿩 𐿥𐿠𐿮𐿩𐿳𐿩𐿠 𐿥𐿠𐿵𐿩𐿨𐿪𐿠 𐿶 𐿡𐿵𐿳𐿯𐿠𐿡𐿳 𐿡𐿠𐿮𐿩 𐿭𐿠𐿮𐿩𐿡 𐿪𐿥𐿳𐿮𐿠"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'elym'
	template.scriptcode = 'Elym'
	template.fontLocale = "elym"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐡀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Elymaic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Elymaic"


var inputAids = []



