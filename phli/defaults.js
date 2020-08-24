var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Pahlavi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'pal' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Pahlavi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'phliPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Pahlavi WF" ]


var template = {}
	template.title = 'Inscriptional Pahlavi character app'
	template.sample = "𐭲𐭢𐭫𐭠𐭧𐭩 𐭦𐭭𐭤 𐭫𐭩 𐭬𐭦𐭣𐭩𐭮𐭭 𐭡𐭢𐭩 𐭱𐭧𐭯𐭥𐭧𐭥𐭩 𐭬𐭫𐭪𐭠𐭭 𐭬𐭫𐭪𐭠 𐭠𐭩𐭥𐭠𐭭 𐭥𐭠𐭭𐭩𐭥𐭠𐭭 𐭬𐭭𐭥 𐭰𐭲𐭥𐭩 𐭬𐭭 𐭩𐭦𐭲𐭠𐭭 𐭡𐭥𐭤 𐭬𐭦𐭣𐭩𐭮𐭭 𐭡𐭢𐭩 𐭠𐭥𐭲𐭠𐭭 𐭭𐭯𐭩 𐭡𐭢𐭩 𐭯𐭠𐭯𐭪𐭩 𐭬𐭫𐭪𐭠 𐭠𐭩𐭥𐭠𐭭"
	template.blocklocation= 'phli'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'phli'
	template.scriptcode = 'Phli'
	template.fontLocale = "phli"



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Pahlavi text to a latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand text to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = input[2]? input[2] : ''; 
notes = input[3]? input[3] : ''; 

add(getVocab(input[0], input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]



var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert hindi text to a latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Hindi<br/>to ISO", "alt":"Convert hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
//{"title":"ISO to<br/>Hindi", "alt":"Convert an ISO 15919 transcription to hindi text.", "code":"doTranscription('toDeva')"}

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Pahlavi text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Example", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Pahlavi from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Pahlavi from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
