var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Light WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'wo' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "-";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'woPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Light WF" ]


var template = {}
	template.title = 'Wolof character app'
	template.sample = "Doomi aadama yépp danuy juddu, yam ci tawfeex ci sag ak sañ-sañ. Nekk na it ku xam dëgg te ànd na ak xelam, te war naa jëflante ak nawleen, te teg ko ci wàllu mbokk."
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = 'latn/wo' // location of script notes
	template.vocablocation = 'latn/wo_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-wo'
	template.scriptcode = 'Latn'
	template.initialInput = 'showTranslit'
	template.fontLocale = 'latn-wo'
	template.hints = true
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
    show.transc = false
    show.kbd = ""
    show.language = "Wolof"


var inputAids = []

