var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Thai WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'th' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Thai WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'thaiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Thai WF", "Noto Sans Thai WF" ]


var template = {}
	template.title = 'Thai character app'
	template.sample = "2. ทุกคนมีสิทธิที่จะออกจากประเทศใด ๆ ไป รวมทั้งประเทศของตนเองด้วย และที่จะกลับยังประเทศตน"
	template.blocklocation= '/scripts/thai/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'thai'
	template.scriptcode = 'Thai'
	template.fontLocale = 'thai'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Thai text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", 
"warning":"Remember to separate the syllables first.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = condense(input[0]);
meaning = input[1];
ipa = input[2]? input[2] : toLatin(input[0],'ipa');
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]




var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert Thai text to a Latin transcription.", "code":"doTranscription('transcription')", "warning":"Converts complex vowels closer to phonetics."},

//{"title":"Trans-<br/>literate", "alt":"Convert Thai text to an ISO 11940-1 Latin transcription.", "code":"doTranscription('toISO1')"},

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Thai text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Thai to<br>ISO 11940", "alt":"Convert Thai text to an ISO 11940-2 Latin transcription.", "code":"doTranscription('toISO2')", "warning":"Separate syllables with spaces before use. The results should be checked for accuracy."},

{"title":"Thai<br>to IPA", "alt":"Convert Thai text to an approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Separate syllables with spaces before use. The results should be checked for accuracy."},

{"title":"Remove<br>sp/hyph", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/thai/th_vocab')"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Thai from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Thai from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."},

{"title":"ISO to Thai", "dataVar":"showISO2Trans", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, isoCharacterMap, isoCharacterMap)"},

{"title":"Becker to Thai", "dataVar":"showBeckerTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"B", "type":"palette", "initialCode":"setUpTypeAssist(false, beckerCharacterMap, beckerCharacterMap)"},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
