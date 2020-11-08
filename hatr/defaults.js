var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Hatran WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mis-Hatr' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Hatran WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'hatrPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Hatran WF" ]


var template = {}
	template.title = 'Hatran character app'
	template.sample = "𐣮𐣫𐣬𐣠 𐣣𐣩 𐣴𐣬𐣴𐣯𐣲𐣡 𐣪𐣬𐣣𐣠 𐣡𐣣 𐣠𐣣𐣩 𐣣𐣩 𐣠𐣲𐣩𐣬 𐣫𐣤 𐣯𐣲𐣡𐣴𐣬𐣠 𐣡𐣣 𐣠𐣧𐣵𐣤 𐣯𐣫 𐣧𐣩𐣤𐣩 𐣥𐣯𐣫 𐣧𐣩𐣠 𐣡𐣭𐣩𐣤𐣩 𐣣𐣩 𐣪𐣬𐣣𐣠 𐣥𐣯𐣫 𐣧𐣩𐣠 𐣬𐣭 𐣣𐣩 𐣣𐣧𐣬 𐣫𐣤 𐣪𐣫𐣤 𐣡𐣠𐣣𐣣 𐣣 𐣼𐣿𐣽𐣼𐣻"
	template.blocklocation= 'hatr'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'hatr'
	template.scriptcode = 'Hatr'
	template.fontLocale = "hatr" 
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Hatran text to a latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Create a line for a vocab file.", "code":`_output=document.getElementById('output');
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]



var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert hindi text to a latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Hindi<br/>to ISO", "alt":"Convert hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
//{"title":"ISO to<br/>Hindi", "alt":"Convert an ISO 15919 transcription to hindi text.", "code":"doTranscription('toDeva')"}

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Hatran text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Hatran from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Hatran from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
