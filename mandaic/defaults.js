var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Mandaic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mid' // language to use for examples
	factoryDefaults.uifont = 'Mandaic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'mandaicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Mandaic character picker'
	template.sample = "ࡊࡋ ࡁࡓ ࡀࡍࡀࡔࡀ ࡌࡉࡕࡋࡉࡓ ࡔࡀࡅࡉࡀ ࡁࡏࡒࡀࡓࡀ ࡅࡀࡂࡓࡉࡀ࡞"
	template.blocklocation= 'mandaic'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'mandaic'
	template.scriptcode = 'Mand'


// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 


var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Transcription to Mandaic", "dataVar":"showLatinToMand", "dataLocn":"toMandaicPallet", "dataShortTitle":"T", "type":"palette"}
]

var controls = [
{"title":"Transliterate<br/>Mandaic", "alt":"Convert Mandaic text to a Latin transliteration.", "code":"doTranscription('toLatinTranslit')"},
{"title":"Transcribe<br/>Mandaic", "alt":"Convert Mandaic text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]
