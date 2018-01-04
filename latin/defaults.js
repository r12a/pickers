var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'en' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'latinPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Latin & diacritic character picker'
	template.sample = "2. Paa ɛyʊ weyi, ɛwɛna waɖɛ se ɛkʊyɩ ɛjaɖɛ nɖɩ ɛwɛ ɖɩ-taa yɔ, paa pɩkɛ ɛ-ñɩnɖɛ, nɛ pɩmaɣ-ɩ ɖooye lɛ, ɛpɩsɩ. ïñƭèřñáƭïôñáℓ"
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latin'
	template.scriptcode = 'Latn'



var inputAids = [
]

var controls = [
]
