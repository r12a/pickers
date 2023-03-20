var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Hiragino Mincho Pro' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'ja' // language to use for examples
	factoryDefaults.uifont = 'Hiragino Kaku Gothic Pro'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'japanesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "" ]


var template = {}
	template.title = 'Japanese'
	template.sample = "第１条　すべての人間は、生まれながらにして自由であり、かつ、尊厳と権利とについて平等である。人間は、理性と良心とを授けられており、互いに同胞の精神をもって行動しなければならない。"
	template.sampleSource = ''
	template.blocklocation= 'jpan'  // block directory
	template.noteslocation = 'jpan/index' // location of script notes
	template.vocablocation = 'jpan/ja_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'jpan'
	template.scriptcode = 'Jpan'
	template.fontLocale = "jpan"
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['IDSP','\u3000']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'],  
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]



var controls = [
{"title":"Lookup<br>Characters", "alt":"Find information about a kanji or other character.", "code":"doTranscription('lookupHan')"},
]





var pulldown = [
{"title":"Romaji to Kanji", "alt":"Find kanji characters from romaji.", "code":"doTranscription('romajiToHan')"},

{"title":"Toggle direction", "alt":"Switch direction of input area between vertical &amp; horizontal.", "code":"toggleDirectionality()"},

{"title":"English to Kanji", "alt":"Find kanji characters from english prompts.", "code":"doTranscription('englishToHan')"},

{"title":"Make ruby", "alt":"Make HTML ruby markup from the highlighted text.", "code":"makeRuby(defaults.language,template.direction)"},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = "Japanese"


var inputAids = []



