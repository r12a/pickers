var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Aksara Bali WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ban' // language to use for examples
	factoryDefaults.uifont = 'Aksara Bali WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'balinesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Balinese character picker'
	template.sample = "ᬫᬓᬲᬫᬶᬫᬦᬸᬲᬦᬾᬓᬳᭂᬫ᭄ᬩᬲᬶᬦ᭄ᬫᬳᬃᬤᬶᬓᬮᬦ᭄ᬧᬢᭂᬄᬲᬚ᭄ᬭᭀᬦᬶᬂᬓᬳᬦᬦ᭄ᬮᬦ᭄ᬓ᭄ᬯᬲ᭟"
	template.blocklocation= 'balinese'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'balinese'
	template.scriptcode = 'Bali'



var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]

var controls = [
]
