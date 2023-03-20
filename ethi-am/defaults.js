var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ethiopic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'am' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ethiopic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'amharicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Ethiopic WF" ]


var template = {}
	template.title = 'Amharic'
	template.sample = "፪/፡ እያንዳንዱ፡ሰው፡ከማንኛውም፡አገር፡ሆነ፡ከራሱ፡አገር፡ወጥቶ፡እንደገና፡ወደ፡አገሩ፡የመመለስ፡መብት፡አለው።"
	template.sampleSource = ''
	template.blocklocation= 'ethi'  // block directory
	template.noteslocation = 'ethi/am' // location of script notes
	template.vocablocation = 'ethi/am_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ethi'
	template.scriptcode = 'Ethi'
	template.fontLocale = 'ethi'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '፡'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ethiopic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Amharic"


var inputAids = []




