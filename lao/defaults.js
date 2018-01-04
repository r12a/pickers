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



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Simmala transcription", "dataVar":"showSimTrans", "dataLocn":"simtranscript", "dataShortTitle":"S", "type":"palette"}
]

var controls = [
//{"title":"ISO 15919<br/>to Bengali", "alt":"Convert ISO 15919 Latin transcription to Bengali.", "code":"doTranscription('toBeng')"},
//{"title":"Bengali to<br/>ISO 15919", "alt":"Convert Bengali text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO')"},
//{"title":"Radice<br/>to Bengali", "alt":"Convert Radice Latin transcription to Bengali.", "code":"doTranscription('rtoBeng')"},
//{"title":"Bengali to<br/>Radice", "alt":"Convert Bengali text to a Radice Latin transcription.", "code":"doTranscription('toRadice')"},
]
