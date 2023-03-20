var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ugaritic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ugaritic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'ugarPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Ugaritic WF" ]


var template = {}
	template.title = 'Ugaritic character app'
	template.sample = "𐎍𐎟𐎎𐎍𐎋𐎟𐎜𐎂𐎗𐎚 𐎀𐎈𐎊𐎟𐎗𐎂𐎎 𐎚𐎈𐎎𐎟𐎎𐎍𐎋𐎟𐎕𐎗𐎟𐎀𐎈𐎋 𐎊𐎌𐎍𐎎𐎟 𐎍𐎋𐎟𐎛𐎍𐎎 𐎚𐎙𐎗𐎋𐎟𐎚𐎌𐎍𐎎𐎋 𐎅𐎐𐎐𐎊𐎟𐎎𐎐 𐎌𐎍𐎎𐎟𐎉𐎎𐎐𐎊 𐎎𐎋𐎟𐎎𐎐𐎎𐎟𐎌𐎍𐎎 𐎗𐎂𐎎𐎟𐎉𐎉𐎁"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'ugar'
	template.scriptcode = 'Ugar'
	template.fontLocale = "ugar"
	template.hints = true
	
	template.defaultSpace = '\u{1039F}'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['WDIV','\u{1039F}'] ]
	template.defaultInvisible = '𐎟'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ugaritic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Ugaritic"


var inputAids = []

