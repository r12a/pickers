var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Hanifi Rohingya WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'rhg' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Hanifi Rohingya WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'rohgPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Hanifi Rohingya WF" ]


var template = {}
	template.title = 'Hanifi Rohingya character app'
	template.sample = "𐴀𐴞𐴕𐴐𐴝𐴦𐴕 𐴁𐴠𐴒𐴧𐴟𐴕 𐴀𐴝𐴎𐴝𐴊𐴢 𐴀𐴝𐴌 𐴀𐴠𐴑𐴧𐴟 𐴉𐴟𐴥𐴖𐴝𐴙𐴕𐴝 𐴇𐴡𐴥𐴑 𐴀𐴝𐴌 𐴀𐴞𐴎𐴧𐴡𐴃𐴢 𐴓𐴡𐴌 𐴉𐴡𐴘𐴊𐴝 𐴀𐴡𐴥𐴘𐴧𐴠 ۔  𐴀𐴞𐴥𐴃𐴝𐴘𐴝𐴃𐴧𐴟 𐴀𐴝𐴈𐴡𐴓 𐴀𐴝𐴌 𐴁𐴟𐴎 𐴀𐴡𐴥𐴘𐴧𐴠 ، 𐴀𐴠𐴥𐴃𐴡𐴓𐴧𐴝 𐴀𐴞𐴥𐴃𐴝𐴌𐴝𐴃𐴧𐴟 𐴀𐴠𐴑 𐴀𐴡𐴕 𐴀𐴝𐴌 𐴀𐴠𐴑 𐴎𐴡𐴕 𐴓𐴡𐴘 𐴁𐴤𐴝𐴘𐴧𐴡 𐴋𐴧𐴡𐴙𐴓𐴧𐴝 𐴔𐴝𐴦𐴔𐴠𐴓𐴝 𐴒𐴡𐴌𐴡𐴥𐴕 𐴏𐴝𐴀𐴝 ۔"
	template.blocklocation= 'rohg'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'rohg'
	template.scriptcode = 'Rohg'
	template.fontLocale = "rohg"
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Rohingya text to a latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Transl<br/>++", "alt":"Convert Kashmiri text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},


{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", 

"code":`_output=document.getElementById('output'); 
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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Rohingya text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Newa from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
