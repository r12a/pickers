var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Menk Qagan Tig' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Menk Qagan Tig'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'mongoliangPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Mongolian Graphetic character picker'
	template.sample = '\uE2FD\uE26C\uE27E\uE27E\uE268 \uE2C7\uE26C\uE27E\uE27E\uE2B6\u202F\uE269 \uE289\uE2C7 \uE308\uE26C\uE2DA\uE326\uE27B \uE27B\uE27B\uE27E\uE325'
	template.blocklocation= 'mongolian'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mongoliang'


// ᮞᮊᮥᮙ᮪ᮔ ᮏᮜ᮪ᮙ ᮌᮥᮘᮢᮌ᮪ ᮊ ᮃᮜᮙ᮪ ᮓᮥᮑ ᮒᮨᮂᮞᮤᮖᮒ᮪ᮔ ᮙᮨᮛ᮪ᮓᮤᮊ ᮏᮩᮀ ᮘᮧᮌ ᮙᮛ᮪ᮒᮘᮒ᮪ ᮊᮒᮥᮒ᮪ ᮠᮊ᮪-ᮠᮊ᮪ ᮃᮔᮥ ᮞᮛᮥᮃ. ᮙᮛᮔᮨᮂᮔ ᮓᮤᮘᮨᮛᮨ ᮃᮊᮜ᮪ ᮏᮩᮀ ᮠᮒᮨ ᮔᮥᮛᮔᮤ, ᮎᮙ᮪ᮕᮥᮁ-ᮌᮅᮜ᮪ ᮏᮩᮀ ᮞᮞᮙᮔ ᮃᮚ ᮓᮤᮔ ᮞᮥᮙᮔᮨᮒ᮪ ᮓᮥᮓᮥᮜᮥᮛᮔ᮪. 


var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]

var controls = [
// {"title":"Sundanese<br/>to Latin", "alt":"Convert Sundanese text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
