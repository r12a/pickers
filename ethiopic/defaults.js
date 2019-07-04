var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ethiopic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'am' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ethiopic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'ethiopicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Ethiopic character picker'
	template.sample = "፪/፡ እያንዳንዱ፡ሰው፡ከማንኛውም፡አገር፡ሆነ፡ከራሱ፡አገር፡ወጥቶ፡እንደገና፡ወደ፡አገሩ፡የመመለስ፡መብት፡አለው።"
	template.blocklocation= 'ethiopic'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'ethiopic'
	template.scriptcode = 'Ethi'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ethiopic text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>translit.", "alt":"Convert Latin transliteration back to Ethiopic.", "code":"doTranscription('reverse')"},
]



var inputAids = [
{"title":"Show hints", "dataVar":"showRevealHints", "dataLocn":"", "dataShortTitle":"S", "type":"code", "initialCode":"if(globals.showRevealHints){revealHints(true)}else{revealHints(false);}"},

{"title":"Extended repertoire", "dataVar":"showExtended", "dataLocn":"", "dataShortTitle":"E", "type":"code", "initialCode":"if(globals.showExtended){revealExtended(true)}else{revealExtended(false);}"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
]
