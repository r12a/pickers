var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Light WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'latinPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF", "Noto Sans Light WF" ]


var template = {}
	template.title = 'Latin & diacritic character app'
	template.sample = "2. Paa ɛyʊ weyi, ɛwɛna waɖɛ se ɛkʊyɩ ɛjaɖɛ nɖɩ ɛwɛ ɖɩ-taa yɔ, paa pɩkɛ ɛ-ñɩnɖɛ, nɛ pɩmaɣ-ɩ ɖooye lɛ, ɛpɩsɩ. ïñƭèřñáƭïôñáł"
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-all'
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
{"title":"Upper-<br>case", "alt":"Convert selection to uppercase.", "code":"add(getHighlightedText(document.getElementById('output')).toUpperCase());document.getElementById('output').focus();"},
{"title":"Lower-<br>case", "alt":"Convert selection to lowercase.", "code":"add(getHighlightedText(document.getElementById('output')).toLowerCase());document.getElementById('output').focus();"},
]


var pulldown = [
]





var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = false
    show.latin = false
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = ""


var inputAids = []

