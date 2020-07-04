var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Osage WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'osa' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Osage WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'osagePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Osage character app'
	template.sample = "𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓷𐓣͘ 𐓘𐓵𐓟 𐓘𐓬𐓘—𐓤𐓘𐓸𐓘 𐓤𐓯𐓣 𐓘𐓵𐓟 𐓘𐓬𐓘, 𐓪𐓬𐓸𐓘. 𐓏𐓟𐓲’𐓘 𐓷𐓣͘ 𐓣𐓵𐓘𐓬𐓟. 𐓏𐓘𐓲’𐓘 𐓘𐓤𐓸𐓘 “𐒼𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘,” 𐓘𐓤𐓸𐓘. 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓬𐓘, “𐓍𐓣𐓟 𐓵𐓣𐓟 𐓤𐓪𐓰𐓘𐓡𐓘 𐓨𐓘𐓵𐓣͘ 𐓷𐓣𐓩𐓘͘𐓮𐓰𐓘 𐓰𐓛͘ 𐓨𐓣͘𐓤𐓯𐓟,” 𐒻𐓲𐓣𐓤𐓪 𐓰𐓘͘𐓤𐓘 𐓘𐓪𐓘 𐓟𐓤𐓣𐓟 𐓘𐓬𐓘."
	template.blocklocation= '/scripts/osage/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'osge'
	template.scriptcode = 'Osge'



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Osage text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand text to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = transcribetoIPA(input[0]);
notes = input[2]? input[2] : ''; 

add(getVocab(input[0], input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

//{"title":"Reverse<br/>translit.", "alt":"Convert Latin transliterated text to Armenian.", "code":"doTranscription('reverse')"},
//{"title":"XXXXXXXXXX<br/>to XXXXXXXXXX", "alt":"XXXXXXXXXX.", "code":"doTranscription('XXXXXXXXXX')"},
]



var pulldown = [
{"title":"Upper-<br>case", "alt":"Convert selection to uppercase.", "code":"add(getHighlightedText(document.getElementById('output')).toUpperCase());document.getElementById('output').focus();"},
{"title":"Lower-<br>case", "alt":"Convert selection to lowercase.", "code":"add(getHighlightedText(document.getElementById('output')).toLowerCase());document.getElementById('output').focus();"},

{"title":"Osage to IPA", "alt":"Convert Osage text to an approximate phonetic transcription.", "code":"doTranscription('toIPA')"},

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Osage text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Example", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap);", "desc":"Use ASCII characters to type Armenian from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Armenian", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, isoCharacterMap, isoCharacterMap)", "desc":"Create Armenian text from characters in the ISO 9985 transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Armenian from the keyboard via reverse transliteration."},
]


