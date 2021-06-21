var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Bassah Vah WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bsq' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bassah Vah WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bassPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bassah Vah WF" ]

 
var template = {}
	template.title = 'Bassa Vah character app'
	template.sample = "𖫞𖫫𖫰 𖫐𖫭𖫱𖫐-𖫗𖫭𖫰𖫞𖫭𖫰 𖫑𖫫𖫱 𖫔𖫬𖫱𖫞𖫬𖫱𖫭𖫱𖫐-𖫕𖫭𖫰  𖫔𖫪𖫰𖫐𖫬𖫲𖫐, 𖫞𖫫𖫰𖫬𖫱 𖫕𖫨𖫲𖫐𖫪𖫳𖫐-𖫕𖫪𖫱 𖫒𖫫𖫰𖫭𖫰𖫐 𖫛𖫩𖫰𖫞𖫩𖫰𖫬𖫲 𖫔𖫬𖫰𖫭𖫱𖫐-𖫛𖫨𖫲𖫐𖫵"
	template.blocklocation= 'bassavah'  // blocklocation to use for examples
	template.noteslocation = 'bassavah/' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bass'
	template.scriptcode = 'Bass'
	template.fontLocale = 'bass'
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bassah Vah text to a Latin transliteration.", "code":"doTranscription('transliterate')"},


{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Bassah Vah text.", "code":"doTranscription('revTransliterate')"},

]



var inputAids = [
{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes when you mouse over a character"},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Bassah Vah from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show Latin characters used for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Bassah Vah from the keyboard via reverse transliteration."},

]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
