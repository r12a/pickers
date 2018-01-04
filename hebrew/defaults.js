var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Hebrew WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "48";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.5"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'he' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Hebrew WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "36";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'hebrewPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Hebrew character picker'
    template.sample = "2. כל אדם זכאי לעזוב כל ארץ, לרבות ארצו, ולחזור אל ארצו."
    template.blocklocation= '/scripts/hebrew/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'hebrew'
	template.scriptcode = 'Hebr'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Academy transcription", "dataVar":"showAcadTrans", "dataLocn":"acadtranscript", "dataShortTitle":"A", "type":"palette"}
]

var controls = [
]
