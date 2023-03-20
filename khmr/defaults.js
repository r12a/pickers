var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Khmer OS Battambang WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'km' // language to use for examples
	factoryDefaults.uifont = 'Khmer OS Battambang WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'khmerPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Khmer OS Battambang WF", "Noto Serif Khmer WF", "Noto Sans Khmer WF" ]

var template = {}
	template.title = 'Khmer character app'
	template.sample = "២. មនុស្សគ្រប់រូបមានសិទ្ធិចាកចេញពីប្រទេសណាមួយ រួមទាំងប្រទេសរបស់ខ្លួនផង និងមាន សិទ្ធិវិលត្រឡប់មកប្រទេសរបស់ខ្លួនវិញ។"
	template.sampleSource = ''
	template.blocklocation= 'khmr'  // block directory
	template.noteslocation = 'khmr/km' // location of script notes
	template.vocablocation = 'khmr/km_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'khmr'
	template.scriptcode = 'Khmr'
	template.fontLocale = 'khmr'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'], ['1/6SP','\u2006']]
	template.defaultInvisible = '\u17D2'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Khmer text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


]



var pulldown = [
{"title":"Make vocab", "alt":"Expand a line to create an entry for a vocab file.", 
"warning":"Remember to separate the syllables first!<br>IPA is supplied automatically, but needs to be checked.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : transcribeToIPA(input[0]);
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(condense(term), meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},


{"title":"Show syllables", "alt":"Attempt to split the text into syllables.", "code":"add(syllabify(getHighlightedText(_output)));_output.focus();", "warning":"Incomplete! You need to adjust."},

{"title":"Khmer to UNGEGN", "alt":"Convert Khmer text to a rough UNGEGN transcription.", "code":"doTranscription('toUNGEGN')", "warning":"Still in development. Separate syllables before use."},

{"title":"Khmer to IPA", "alt":"Convert Khmer text to a rough IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Still in development. Separate syllables before use."},

{"title":"Remove space/hyphen", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(_output)));_output.focus();"},
]



var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'UNGEGN'
    show.kbd = "Khmer"
    show.language = "Khmer"




var inputAids = [
{"title":"Huffman to Khmer", "dataVar":"showHuffmanTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"Huffman", "type":"palette", "initialCode":"setUpTypeAssist(false, huffmanCharacterMap, huffmanCharacterMap)"},

{"title":"Gilbert to Khmer", "dataVar":"showGilbertTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"Gilbert", "type":"palette", "initialCode":"setUpTypeAssist(false, gilbertCharacterMap, gilbertCharacterMap)"},

]





