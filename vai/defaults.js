var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Vai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'vai' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Vai WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'vai'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Vai WF" ]


var template = {}
	template.title = 'Vai'
	template.sample = "ꕉꕜꕮ ꔔꘋ ꖸ ꔰ ꗋꘋ ꕮꕨ ꔔꘋ ꖸ ꕎ ꕉꖸꕊ ꕴꖃ ꕃꔤꘂ ꗱ꘍ ꕉꖷ ꗪꗡ ꔻꔤ ꗏꗒꗡ ꕎ ꗪ ꕉꖸꕊ ꖏꕎ꘎ ꕉꕡ ꖏ ꗳꕮꕊ ꗏ ꕪ ꗓ ꕉꖷ ꕉꖸ ꕘꕞ ꗪ꘎ ꖏꖷ ꕉꖸꔧ ꖏ ꖸ ꕚꕌꘂ ꗷꔤ ꕞ ꘃꖷ ꘉꔧ ꗠꖻ ꕞ ꖴꘋ ꔳꕩ ꕉꖸ ꗳ꘎"
	template.sampleSource = ''
	template.blocklocation= 'vaii'  // block directory
	template.noteslocation = 'vaii/vai' // location of script notes
	template.vocablocation = 'vaii/vai_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'vai'
	template.scriptcode = 'Vaii'
	template.fontLocale = 'vaii'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>scribe", "alt":"Convert Vai text to a Latin transcription.", "code":"doTranscription('transliterate')"},
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
    show.language = "Vai"


var inputAids = []

