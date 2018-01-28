var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Times New Roman' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ru' // language to use for examples
	factoryDefaults.uifont = 'Times New Roman'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'russianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Russian character picker'
	template.sample = "Статья 1 Все люди рождаются свободными и равными в своем достоинстве и правах. Они наделены разумом и совестью и должны поступать в отношении друг друга в духе братства."
	template.blocklocation= '/scripts/cyrillic/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'cyrillic'
	template.scriptcode = 'Cyrl'



var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Latin to Russian", "dataVar":"showNeoTrans", "dataLocn":"neotranscript", "dataShortTitle":"L", "type":"palette"},
]

var controls = [
{"title":"Russian<br/>to Latin", "alt":"Convert Russian text to a Latin transliteration.", "code":"doTranscription('toTranslit')"},
]

