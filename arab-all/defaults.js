var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade New WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, px (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // line height of text area
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade New WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'arabicblockPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Scheherazade New WF", "Noto Naskh Arabic WF" ]

 
var template = {}
	template.title = 'All Arabic character app'
	template.sample = "2. يَحِقُ لِكُلِ فَرْد أَن يُغَادِر أَيْةً بِلَاد بِمَا فِي ذَلِك بَلَدَه كَمَا يَحِقُ لَه العَودَة إِلَيه."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arabicblock'
	template.scriptcode = 'Arab'
	template.fontLocale = 'arab'
	template.hints = false



var inputAids = [
]

var controls = [
]

