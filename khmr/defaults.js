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
	template.blocklocation= '/scripts/khmer/block'  // blocklocation to use for examples
	template.noteslocation = 'khmer/' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'khmr'
	template.scriptcode = 'Khmr'
	template.fontLocale = 'khmr'
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Khmer text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},



{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", 
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

]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Show<br/>syllables", "alt":"Attempt to split the text into syllables.", "code":"add(syllabify(getHighlightedText(_output)));_output.focus();", "warning":"Incomplete! You need to adjust."},

{"title":"Khmer to<br/>UNGEGN", "alt":"Convert Khmer text to a rough UNGEGN transcription.", "code":"doTranscription('toUNGEGN')", "warning":"Still in development. Separate syllables before use."},

{"title":"Khmer<br/>to IPA", "alt":"Convert Khmer text to a rough IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Still in development. Separate syllables before use."},

{"title":"Remove<br/>space/hyphen", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(_output)));_output.focus();"},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/khmer/km_vocab')"},
]




var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Khmer from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Khmer.", 
"desc":"Use an IPA keyboard mapping to type Khmer from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: UNGEGN transcription to Khmer.", 
"desc":"Use a  mapping from UNGEGN to type Khmer from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to a Khmer keyboard.", 
"desc":"Use a Khmer keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},

{"title":"Huffman to Khmer", "dataVar":"showHuffmanTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"h", "type":"palette", "initialCode":"setUpTypeAssist(false, huffmanCharacterMap, huffmanCharacterMap)"},

{"title":"Gilbert to Khmer", "dataVar":"showGilbertTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"g", "type":"palette", "initialCode":"setUpTypeAssist(false, gilbertCharacterMap, gilbertCharacterMap)"},

{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]





// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'


/*
var footnotes = `
<p>The <samp>Khmer to UNGEGN</samp>, and <samp>Khmer to IPA</samp> transcription tools, and the <samp>Show syllable</samp> tool are all still in development, and should be used with care!</p> 
`
*/