var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Saysettha OT' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'lo' // language to use for examples
	factoryDefaults.uifont = 'Saysettha OT'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "-";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'laoPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Lao character picker'
	template.sample = "ຂໍ້ 2. ບຸກຄົນແຕ່ລະຄົນມີສິດທີ່ຈະຈາກປະເທດໃດປະເທດໜື່ງໄປ ນັບທັງປະເທດຂອງຕົນດ້ວຍ ແລະ ກັບຄືນມາໃນປະເທດຂອງຕົນໄດ້."
	template.blocklocation= '/scripts/lao/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lao'
	template.scriptcode = 'Laoo'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lao text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Transcribe", "alt":"Convert Lao text to an LOC Latin transcription.", "code":"doTranscription('toLOC')"},

{"title":"Split<br/>syllables", "alt":"Break text into syllabic units.", "code":"doTranscription('toSyllables')"},
]



var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"},

{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Simmala transliteration", "dataVar":"showSimTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"S", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(simmalaCharacterMap);makeKbdEventList(simmalaCharacterMap);"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
]
