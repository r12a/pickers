var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Parthian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'xpr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Parthian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'prtiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Parthian WF" ]


var template = {}
	template.title = 'Parthian'
	template.sample = "𐭅𐭕𐭀𐭅𐭍𐭉𐭆𐭍𐭄𐭋𐭉 𐭒𐭉𐭃𐭉𐭆𐭍 𐭀𐭋𐭇𐭀 𐭔𐭇𐭉𐭐𐭅𐭇𐭓 𐭌𐭋𐭓𐭉𐭍𐭌𐭋𐭀 𐭀𐭓𐭉𐭀𐭍𐭅 𐭀𐭍𐭀𐭓𐭉𐭀𐭍𐭌𐭍𐭅𐭔𐭉𐭇𐭓 𐭌𐭍 𐭉𐭀𐭆𐭕𐭍𐭏𐭓𐭉 𐭌𐭉𐭃𐭉𐭆𐭍𐭀𐭋𐭇𐭀 𐭀𐭓𐭕𐭇𐭔𐭕𐭂 𐭌𐭋𐭓𐭉𐭍𐭌𐭋𐭓𐭀"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'prti'
	template.scriptcode = 'Prti'
	template.fontLocale = "prti"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐭀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Parthian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Parthian"


var inputAids = []

