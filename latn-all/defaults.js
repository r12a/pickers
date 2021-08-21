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
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.noteslocation = '' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-all'
	template.scriptcode = 'Latn'
	template.fontLocale = 'latn'
	template.hints = false



var controls = [
{"title":"Upper-<br>case", "alt":"Convert selection to uppercase.", "code":"add(getHighlightedText(document.getElementById('output')).toUpperCase());document.getElementById('output').focus();"},
{"title":"Lower-<br>case", "alt":"Convert selection to lowercase.", "code":"add(getHighlightedText(document.getElementById('output')).toLowerCase());document.getElementById('output').focus();"},
]


var inputAids = [
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = ''

