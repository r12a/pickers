var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Nabataean WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Nabataean WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'nbatPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Nabataean WF" ]


var template = {}
	template.title = 'Nabataean'
	template.sample = "𐢅𐢕𐢆 𐢚𐢂𐢛𐢀 𐢅𐢍 𐢗𐢃𐢅 𐢏𐢇𐢑𐢔 𐢁𐢖𐢍𐢀 𐢃𐢛 𐢈𐢁𐢑𐢔 𐢑𐢕𐢘𐢝𐢆 𐢈𐢍𐢑𐢅𐢆 𐢈𐢁𐢊𐢛𐢆 𐢁𐢝𐢅𐢚 𐢗𐢅 𐢗𐢑𐢒 𐢈𐢁𐢍𐢞𐢌 𐢚𐢃𐢛𐢀 𐢅𐢕𐢆 𐢊𐢛𐢒 𐢏𐢊𐢑𐢍𐢚𐢞 𐢊𐢛𐢓𐢀 𐢅𐢌 𐢓𐢊𐢛𐢒 𐢑𐢅𐢈𐢝𐢛𐢀 𐢃𐢕𐢃𐢋𐢈 𐢈𐢝𐢑𐢓𐢈"
	template.sampleSource = ''
	template.blocklocation= ''  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'nbat'
	template.scriptcode = 'Nbat'
	template.fontLocale = "nbat"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐢁'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]





var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Nabataean text to a latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Nabataean"


var inputAids = []

