var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Junicode WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'ang' // language to use for examples
	factoryDefaults.uifont = 'Junicode WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'runrangPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Junicode WF" ]


var template = {}
	template.title = 'Anglo-Saxon Runes'
	template.sample = "ᚫᛣᚱᛁᛋᛏ ᚹᚫᛋ ᚩᚾ ᚱᚩᛞᛁ ᚻᚹᛖᚦᚱᚫ   ᚦᛖᚱ ᚠᚢᛋᚫ ᚠᛠᚱᚱᚪᚾ ᛣᚹᚩᛗᚢ   ᚫᚦᚦᛁᛚᚫ ᛏᛁᛚ ᚪᚾᚢᛗ   ᛁᚳ ᚦᚫᛏ ᚪᛚ ᛒᛁᚻ"
	// sample source: Ruthwell Cross, in https://en.wikipedia.org/wiki/Ruthwell_Cross
	template.blocklocation= '/scripts/runr/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr-ang'
	template.scriptcode = 'Runr'
	template.fontLocale = "runr"
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Runic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '('+transliterateASRunes(term)+')';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]





var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to XXXX text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Changes eᵃ to e͡a. This function provides only a general indication of the transliterated Runic."},

{"title":"Latin to<br/>Runic", "alt":"Convert latin text to Anglo-Saxon/Frisian runes.", "code":"doTranscription('toASF')", "warning":"Symbols used in the various sources can vary, so the result needs to be checked for appropriateness."},
]





var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard via reverse transliteration."},

]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

