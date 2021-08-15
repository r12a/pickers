var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Mongolian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "400"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'mn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Mongolian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'mongolianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Mongolian WF" ]


var template = {}
	template.title = 'Mongolian character app'
	template.sample = "ᠣᠩᠭᠤᠯ ᠦᠰᠦᠭ ᠦᠨ ᠵᠥᠪ ᠪᠢᠴᠢᠯᠭᠡ ᠶᠢᠨ ᠳᠦᠷᠢᠮ ᠳᠦ᠂ ᠦᠭᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠳᠦ ᠳᠠᠭᠠᠪᠤᠷᠢ ᠵᠠᠯᠭᠠᠬᠤ ᠳᠤ ᠵᠠᠷᠢᠮ ᠦᠭᠡ ᠶᠢᠨ ᠡᠴᠦᠰ ᠦᠨ ᠠᠪᠢᠶ᠎ᠠ ᠨᠢ ᠭᠡᠭᠡᠭᠳᠡᠳᠡᠭ᠂ ᠡᠭᠦᠨ ᠢ ᠠᠪᠢᠶ᠎ᠠ ᠭᠡᠭᠡᠭᠳᠡᠬᠦ ᠦᠵᠡᠭᠳᠡᠯ ᠭᠡᠨ᠎ᠡ᠃ "
	template.blocklocation= '/scripts/mongolian/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'mong-mn'
	template.scriptcode = 'Mong'
	template.fontLocale = 'mong'
	template.hints = true




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Mongolian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Mongolian text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Mongolian<br/>to JSM", "alt":"Convert Mongolian text to a Joint Sino-Mongolian transcription.", "code":"doTranscription('toJSM')"},

{"title":"Toggle<br/>direction", "alt":"Switch direction of input area between vertical &amp; horizontal.", "code":"toggleDirectionality()"},

//{"title":"Cyrillic<br/>to Mongolian", "alt":"Convert Mongolian text in Cyrillic to Traditional Mongolian.", "code":"doTranscription('cyrlToMong')"},

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/mongolian/mn_vocab')"},
]



var inputAids = [
//{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Mongolian from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Mongolian.", 
"desc":"Use an IPA keyboard mapping to type Mongolian from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: LOC transcription to Mongolian.", 
"desc":"Use a  mapping from LOC to type Mongolian from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to an Mongolian keyboard.", 
"desc":"Use a Mongolian keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},


{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},

{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},



//{"title":"JSM to Mongolian", "dataVar":"showJSMCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"J", "type":"palette", "initialCode":"setUpTypeAssist(false, jsmCharacterMap, jsmCharacterMap)", "desc":"Produce Mongolian text from a JSM transcription."},

//{"title":"Variants show on hover", "dataVar":"showVariantsOnMouseover", "dataLocn":"", "dataShortTitle":"V", "type":"keyboard"},
]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'

