var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'dgr' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'tlichoPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF" ]


var template = {}
	template.title = 'Tłı̨chǫ (Dogrib) character app'
	template.sample = "Dıı  sah nàé t’à. Dıı deh nı̨ı̨lı̨. Dıı ndè nàgoèhdǫ-le nı̨dè Asıı ts’àgoèt’ǫ hǫı̨lı̨ ha nele."
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-dgr'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn'
	template.hints = false
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]




var controls = [
]



var pulldown = [
]








var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = 'Latin'
    show.ipa = true
    show.transc = ''
    show.kbd = "Tłı̨chǫ"
    show.language = "Tłı̨chǫ"


var inputAids = []

