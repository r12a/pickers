var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Khmer OS Battambang WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.4"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'km' // language to use for examples
	factoryDefaults.uifont = 'Khmer OS Battambang WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "25";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'khmerPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Khmer character picker'
	template.sample = "២. មនុស្សគ្រប់រូបមានសិទ្ធិចាកចេញពីប្រទេសណាមួយ រួមទាំងប្រទេសរបស់ខ្លួនផង និងមាន សិទ្ធិវិលត្រឡប់មកប្រទេសរបស់ខ្លួនវិញ។"
	template.blocklocation= '/scripts/khmer/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'khmer'
	template.scriptcode = 'Khmr'



var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Huffman transcription", "dataVar":"showHuffmanTrans", "dataLocn":"huffmantranscript", "dataShortTitle":"H", "type":"palette"},
{"title":"Gilbert transcription", "dataVar":"showGilbertTrans", "dataLocn":"gilberttranscript", "dataShortTitle":"G", "type":"palette"}
]

var controls = [
{"title":"Khmer<br/>to IPA", "alt":"Convert Khmer text to a rough IPA transcription.", "code":"doTranscription('toIPA')"},
{"title":"Remove<br/>space/hyphen", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(_output)));_output.focus();"},
]
