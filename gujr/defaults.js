var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Gujarati WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // line height of text area 
	factoryDefaults.language = 'gu' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Gujarati WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'gujaratiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Gujarati WF" ]


var template = {}
	template.title = 'Gujarati character app'
	template.sample = "અનુચ્છેદ ૧: પ્રતિષ્ઠા અને અધિકારોની દૃષ્ટિએ સર્વ માનવો જન્મથી સ્વતંત્ર અને સમાન હોય છે."
	template.sampleSource = ''
	template.blocklocation= 'gujr'  // block directory
	template.noteslocation = 'gujr/gu' // location of script notes
	template.vocablocation = 'gujr/gu_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'gujr'
	template.scriptcode = 'Gujr'
	template.fontLocale = 'gujr'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '\u0ACD'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Gujarati text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

]



var pulldown = [
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Gujarati"
    show.language = "Gujarati"


var inputAids = []


