var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Scheherazade WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.uifont = 'Scheherazade WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "ـ";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'arabicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Arabic character app'
	template.sample = "2. يحق لكل فرد أن يغادر أية بلاد بما في ذلك بلده كما يحق له العودة إليه."
    template.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'arabic'
	template.scriptcode = 'Arab'
	template.cursive = true
	template.initialInput = ''



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Arabic text to a Latin transliteration.", "code":"doTranscription('transliterate')"},

//{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":"input=getHighlightedText(document.getElementById('output')).split('|'); if (typeof input[2]==='undefined') notes=input[0]; else notes=input[0]+' '+input[2]; add(getVocab(removeVowels(input[0]), input[1], notes, transcribetoIPA(input[0])));document.getElementById('output').focus();"},


{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = transcribetoIPA(input[0]);
ipa += ' (' + input[0] + ')';
notes = input[2]? input[2] : ''; 

add(getVocab(removeVowels(input[0]), input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},

//{"title":"⇨", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},

//{"title":"⇨", "alt":"Convert a vocab sequence to example markup.", "code":"items=getHighlightedText(document.getElementById('output')).split('|');str=items[0]+'/'+transliterate(items[0])+'/'+items[2]+'/'+items[1];makeExample(defaults.language,template.direction,str)"},
]
//onclick="makeExample(defaults.language,template.direction)" title="Create an example.">Make<br>example</button>

//doTranscription('transliterate')" title="Convert Arabic text to a Latin transliteration.">T


var pulldown = [
{"title":"Remove<br/>vowels", "alt":"Remove harakat, etc. from the text.", "code":"add(removeVowels(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},

{"title":"Transcribe<br/>to IPA", "alt":"Convert Arabic text to a rough IPA transcription.", "warning": "Requires fully vowelled text!<br>Result may need to be tweaked.", "code":"doTranscription('toIPA')"},

{"title":"Transcribe<br/>to LOC", "alt":"Convert Arabic text to an Library of Congress Latin transcription.", "warning": "Full transcription requires fully vowelled text!", "code":"doTranscription('toLOC')"},

{"title":"Transcribe<br/>to ISO", "alt":"Convert Arabic text to an ISO Latin transcription.", "code":"doTranscription('toISO')"},

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Arabic text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Example", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},
]





var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Arabic from the keyboard."},

{"title":"Latin type assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions, as well as normal letters."},

{"title":"IPA to Arabic", "dataVar":"showIPATrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, ipaCharacterMap, ipaCharacterMap)", "desc":"Create Arabic text from characters in an IPA transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Arabic from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]

