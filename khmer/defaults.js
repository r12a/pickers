var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Khmer OS Battambang WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'km' // language to use for examples
	factoryDefaults.uifont = 'Khmer OS Battambang WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "25";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'khmerPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Khmer character app'
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
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Khmer from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Huffman to Khmer", "dataVar":"showHuffmanTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"H", "type":"palette", "initialCode":"setUpTypeAssist(false, huffmanCharacterMap, huffmanCharacterMap)"},

{"title":"Gilbert to Khmer", "dataVar":"showGilbertTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"G", "type":"palette", "initialCode":"setUpTypeAssist(false, gilbertCharacterMap, gilbertCharacterMap)"},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Khmer from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]


/*
var footnotes = `
<p>The <samp>Khmer to UNGEGN</samp>, and <samp>Khmer to IPA</samp> transcription tools, and the <samp>Show syllable</samp> tool are all still in development, and should be used with care!</p> 
`
*/