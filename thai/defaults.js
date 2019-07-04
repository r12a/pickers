var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Thai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'th' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Thai WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "32";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'thaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Thai character picker'
	template.sample = "2. ทุกคนมีสิทธิที่จะออกจากประเทศใด ๆ ไป รวมทั้งประเทศของตนเองด้วย และที่จะกลับยังประเทศตน"
	template.blocklocation= '/scripts/thai/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'thai'
	template.scriptcode = 'Thai'




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thai text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert Thai text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Converts complex vowels closer to phonetics."},

//{"title":"Trans-<br/>literate", "alt":"Convert Thai text to an ISO 11940-1 Latin transcription.", "code":"doTranscription('toISO1')"},

//{"title":"Reverse<br/>translit.", "alt":"Convert Latin transliteration back to Burmese.", "code":"doTranscription('reverse')"},

{"title":"Thai to<br>ISO 11940", "alt":"Convert Thai text to an ISO 11940-2 Latin transcription.", "code":"doTranscription('toISO2')", "warning":"Separate syllables with spaces before use."},

{"title":"Transcribe<br>to IPA", "alt":"Convert Thai text to an approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Separate syllables with spaces before use."},

{"title":"Remove<br>sp/hyph", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},
]



var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"ISO to Thai", "dataVar":"showISO2Trans", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);"},

{"title":"Becker to Thai", "dataVar":"showBeckerTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"B", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(beckerCharacterMap);makeKbdEventList(beckerCharacterMap);"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"}
]
