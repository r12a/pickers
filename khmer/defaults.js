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



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Khmer text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Show<br/>syllables", "alt":"Attempt to split the text into syllables.", "code":"add(syllabify(getHighlightedText(_output)));_output.focus();", "warning":"Incomplete! You need to adjust."},

{"title":"Khmer to<br/>UNGEGN", "alt":"Convert Khmer text to a rough UNGEGN transcription.", "code":"doTranscription('toUNGEGN')", "warning":"Still in development. Separate syllables before use."},

{"title":"Khmer<br/>to IPA", "alt":"Convert Khmer text to a rough IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Still in development. Separate syllables before use."},

{"title":"Remove<br/>space/hyphen", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(_output)));_output.focus();"},
]




var inputAids = [
{"title":"Shape lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape"},

{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},

{"title":"Huffman to Khmer", "dataVar":"showHuffmanTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"H", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(huffmanCharacterMap);makeKbdEventList(huffmanCharacterMap);"},

{"title":"Gilbert to Khmer", "dataVar":"showGilbertTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"G", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(gilbertCharacterMap);makeKbdEventList(gilbertCharacterMap);"},

{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard"},
]


/*
var footnotes = `
<p>The <samp>Khmer to UNGEGN</samp>, and <samp>Khmer to IPA</samp> transcription tools, and the <samp>Show syllable</samp> tool are all still in development, and should be used with care!</p> 
`
*/