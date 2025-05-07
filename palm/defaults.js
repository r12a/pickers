var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Palmyrene WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Palmyrene WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'palmPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Palmyrene WF" ]


var template = {}
	template.title = 'Palmyrene character app'
	template.sample = "𐡲𐡫𐡬 𐡩𐡥𐡫𐡩𐡯 𐡠𐡥𐡴𐡫𐡩𐡯 𐡦𐡡𐡣𐡫𐡠 𐡡𐡴 𐡬𐡫𐡪𐡥 𐡡𐡴 𐡬𐡫𐡪𐡥 𐡮𐡵𐡥𐡬 𐡣𐡩 𐡤𐡥𐡠 𐡠𐡯𐡨𐡴𐡨𐡢 𐡫𐡳𐡫𐡮𐡩𐡠 𐡡𐡬𐡩𐡶𐡥𐡩𐡶𐡠 𐡣𐡩 𐡠𐡫𐡤𐡠 𐡠𐡫𐡪𐡯𐡮𐡣𐡴𐡥𐡯 𐡳𐡯𐡴"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'palm'
	template.scriptcode = 'Palm'
	template.fontLocale = "palm"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐡠'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Palmyrene text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Palmyrene"


var inputAids = []

