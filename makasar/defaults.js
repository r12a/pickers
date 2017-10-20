var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'MakasarGraphite' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mak' // language to use for examples
	factoryDefaults.uifont = 'MakasarGraphite WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'makasarPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Makasar character picker'
	template.sample = "𑻯𑻱𑻦𑻴𑻷𑻪𑻦𑻵𑻠𑻱𑻳𑻷𑻨𑻳𑻣𑻶𑻦𑻵𑻭𑻪𑻳𑻷𑻱𑻨𑻨𑻸29𑻣𑻭𑻠𑻭𑻷𑻪𑻠𑻭𑻴𑻯𑻣𑻴𑻮𑻶𑻨𑻷𑻱𑻰𑻮𑻣𑻷𑻨𑻤𑻠𑻭𑻳𑻠𑻭𑻱𑻵𑻢𑻷  𑻨𑻴𑻲𑻮𑻶𑻱𑻳𑻠𑻯𑻴𑻢𑻰𑻵𑻷  𑻪𑻶𑻣𑻮𑻶𑻶𑻭𑻶𑻷"
	template.blocklocation= 'makasar'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'makasar'


// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 


var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"}
]

var controls = [
{"title":"Makasar<br/>to Latin", "alt":"Convert Makasar text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
