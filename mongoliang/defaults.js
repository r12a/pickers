var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Graphetic prototype WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Graphetic prototype WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'mongoliangkbdPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Mongolian graphetic character picker'
	template.sample = 'ᠰᡠᡣᡣᡠ ᠪᡠᡣᡣᡡᢀ ᡥᡦ • ᡫᡠᢉᠷᡣ • ᢉᢉᠷᡣ'
	template.blocklocation= 'mongolian'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mongoliang'


// ᮞᮊᮥᮙ᮪ᮔ ᮏᮜ᮪ᮙ ᮌᮥᮘᮢᮌ᮪ ᮊ ᮃᮜᮙ᮪ ᮓᮥᮑ ᮒᮨᮂᮞᮤᮖᮒ᮪ᮔ ᮙᮨᮛ᮪ᮓᮤᮊ ᮏᮩᮀ ᮘᮧᮌ ᮙᮛ᮪ᮒᮘᮒ᮪ ᮊᮒᮥᮒ᮪ ᮠᮊ᮪-ᮠᮊ᮪ ᮃᮔᮥ ᮞᮛᮥᮃ. ᮙᮛᮔᮨᮂᮔ ᮓᮤᮘᮨᮛᮨ ᮃᮊᮜ᮪ ᮏᮩᮀ ᮠᮒᮨ ᮔᮥᮛᮔᮤ, ᮎᮙ᮪ᮕᮥᮁ-ᮌᮅᮜ᮪ ᮏᮩᮀ ᮞᮞᮙᮔ ᮃᮚ ᮓᮤᮔ ᮞᮥᮙᮔᮨᮒ᮪ ᮓᮥᮓᮥᮜᮥᮛᮔ᮪. 


var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]

var controls = [
{"title":"Vertical<br/>toggle", "alt":"Switch text area and selection areas to vertical glyphs.", "code":"toggleVertical('verticalToggle')"},
{"title":"Mongolian<br/>to Latin", "alt":"Convert Mongolian text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
