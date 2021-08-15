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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Bassa Vah text.", "code":"doTranscription('revTransliterate')"},

]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Bassa from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Bassa.", 
"desc":"Use an IPA keyboard mapping to type Bassa from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Bassa.", 
"desc":"Use a  mapping from Latin to type Bassa from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: Map keys to a Bassa keyboard.", 
//"desc":"Use a Bassa keyboard mapping to type from the keyboard.",
//"dataShortTitle":"k", "type":"palette", 
//"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
//},

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
var inputAidsHelp2 = 'latinAssist,togglePalette'
