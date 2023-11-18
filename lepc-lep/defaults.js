var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Mingzat WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lep' // language to use for examples
	factoryDefaults.uifont = 'Mingzat WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lepcPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Mingzat WF", "Noto Sans Lepcha WF" ]


var template = {}
	template.title = 'Lepcha'
	template.sample = "ᰣᰦᰣᰤᰧᰳᰶᰀᰦ ᰣᰫᰵᰀᰤᰩᰵ ᰣᰦᰛᰬ ᰝᰪᰉᰧ ᰣᰦᰓᰪ ᰣᰪ ᰣᰦᰕᰩ ᰚᰴ ᰋᰧᰀᰫᰵ ᰉᰧᰀᰫᰵᰠᰍᰪᰰ ᰜᰧᰓᰦᰮ ᰕ᰻"
	template.sampleSource = 'https://www.unicode.org/L2/L2003/03259-intro-lepcha.pdf'
	template.blocklocation= 'lepc'  // block directory
	template.noteslocation = 'lepc/lep' // location of script notes
	template.vocablocation = 'lepc/lep_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lepc-lep'
	template.scriptcode = 'Lepc'
	template.fontLocale = 'lepc'
	template.hints = true
	template.bicameral = false

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]


var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lepcha text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Lepcha"


var inputAids = []


