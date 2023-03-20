var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Phoenician WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'phn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Phoenician WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'phnxPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Phoenician WF" ]


var template = {}
	template.title = 'Phoenician character app'
	template.sample = "𐤀𐤍𐤊 𐤟 𐤌𐤔𐤏 𐤟 𐤁𐤍 𐤟 𐤊𐤌𐤔𐤌𐤋𐤊 𐤟 𐤌𐤋𐤊 𐤟 𐤌𐤀𐤁 𐤟 𐤄𐤃𐤉𐤁𐤍𐤉 | 𐤊𐤁𐤉 𐤟 𐤌𐤋𐤊 𐤟 𐤏𐤋 𐤟 𐤌𐤀𐤁 𐤟 𐤔𐤋𐤔𐤍 𐤟 𐤔𐤕 𐤟 𐤅𐤀𐤍𐤊 𐤟 𐤌𐤋𐤊𐤕𐤉 𐤟 𐤀𐤇𐤓 𐤟 𐤀𐤁𐤉 |"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'phnx'
	template.scriptcode = 'Phnx'
	template.fontLocale = "phnx"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐤟'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Phoenician text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Phoenician"


var inputAids = []

