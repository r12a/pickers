var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Myanmar3 WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'my' // language to use for examples
	factoryDefaults.uifont = 'Myanmar3 WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'burmesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Burmese character picker'
	template.sample = "(၂) လူတိုင်းတွင် မိမိနေထိုင်ရာ တိုင်းပြည်မှ လည်းကောင်း၊ အခြားတိုင်းပြည်မှလည်းကောင်း ထွက်ခွာ သွားပိုင်ခွင့်ရှိသည့်အပြင်၊ မိမိ၏ တိုင်းပြည်သို့ ပြန်လာ ပိုင်ခွင့်လည်းရှိသည်။"
	template.blocklocation= '/scripts/myanmar/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'burmese'
	template.scriptcode = 'Mymr'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transliteration", "dataShortTitle":"R", "type":"palette"},
{"title":"MLC to Burmese", "dataVar":"showISOTrans", "dataLocn":"mlctranscript", "dataShortTitle":"M", "type":"palette"},
{"title":"Mesher to Burmese", "dataVar":"showMesherTrans", "dataLocn":"meshertranscript", "dataShortTitle":"M", "type":"palette"},
{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]

var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Balinese text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
{"title":"MLC<br/>transcript", "alt":"Convert Burmese text to an MLC Latin transcription.", "code":"doTranscription('toMLC')"},
{"title":"IPA<br/>transcript", "alt":"Convert Burmese text to an *approximation* to an IPA transcription.", "code":"doTranscription('toIPA')"},
{"title":"Split<br/>syllables", "alt":"Split the text into syllables.", "code":"add(splitSyllables(getHighlightedText(document.getElementById('output')))); return false;"},
]
