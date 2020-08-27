var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Ugaritic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Ugaritic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'ugarPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Ugaritic WF" ]


var template = {}
	template.title = 'Ugaritic character app'
	template.sample = "𐎍𐎟𐎎𐎍𐎋𐎟𐎜𐎂𐎗𐎚 𐎀𐎈𐎊𐎟𐎗𐎂𐎎 𐎚𐎈𐎎𐎟𐎎𐎍𐎋𐎟𐎕𐎗𐎟𐎀𐎈𐎋 𐎊𐎌𐎍𐎎𐎟 𐎍𐎋𐎟𐎛𐎍𐎎 𐎚𐎙𐎗𐎋𐎟𐎚𐎌𐎍𐎎𐎋 𐎅𐎐𐎐𐎊𐎟𐎎𐎐 𐎌𐎍𐎎𐎟𐎉𐎎𐎐𐎊 𐎎𐎋𐎟𐎎𐎐𐎎𐎟𐎌𐎍𐎎 𐎗𐎂𐎎𐎟𐎉𐎉𐎁"
	template.blocklocation= 'ugar'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'ugar'
	template.scriptcode = 'Ugar'
	template.fontLocale = "ugar"



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Ugaritic text to a latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
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

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Ugaritic text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Ugaritic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Ugaritic from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
