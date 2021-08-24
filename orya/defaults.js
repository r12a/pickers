var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = ' Noto Sans Oriya WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'or' // language to use for examples
	factoryDefaults.uifont = ' Noto Sans Oriya WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'odiaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ " Noto Sans Oriya WF" ]


var template = {}
	template.title = 'Odia'
	template.sample = "ଭାରତୀୟ ମହାକାଶ ଗବେଷଣା ସଂସ୍ଥା ବା ଇସ୍ରୋ ହେଉଛି ଭାରତ ସରକାରଙ୍କ ପ୍ରମୁଖ ମହାକାଶ ପ୍ରାଧିକରଣ । ଏହା ପୃଥିବୀର ଛଅଟି ବଡ ସରକାରୀ ମହାକାଶ ପ୍ରାଧିକରଣ ମଧ୍ୟରୁ ଅନ୍ୟତମ ଯଥା ।"
	template.blocklocation= 'oriya'  // blocklocation to use for examples
	template.noteslocation = 'oriya/' // location of script notes relevant to this app
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'orya'
	template.scriptcode = 'Orya'
	template.fontLocale = "orya"
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Oriya text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},

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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Oriya text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

/*
{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Adds inherent vowels and palatalisation. The result should be checked."},

{"title":"XXXX to Latin", "alt":"Convert XXXX text to a Latin transcription.", "code":"doTranscription('transcription')"},

{"title":"XXXX to Latin", "alt":"Convert XXXX script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},

{"title":"XXXX to Radice", "alt":"Convert XXXX text to the Latin transcription used by Radice.", "code":"doTranscription('transcription')"},

{"title":"XXXX<br/>to ISO", "alt":"Convert XXXX text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO15919')"},

{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toISO15919')", "warning":"Separate syllables with spaces before use! Full transcription requires fully vowelled text! This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"ISO to<br/>XXXX", "alt":"Convert an ISO 15919 transcription to XXXX text.", "code":"doTranscription('toDeva')"},
*/

{"title":"Find vocab", "alt":"Search for examples containing the highlighted text", "code":"openVocabWindow('/scripts/oriya/or_vocab')"},
]


//, "warning":"The results should be checked for accuracy."


var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type XXXXXX from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"id":"showLatinTransSwitch", "title":"Type-assist: Latin characters needed for transcriptions", 
"desc":"Show characters needed for IPA or other transcriptions and transliterations.",
"dataShortTitle":"L", "type":"palette", 
"initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)"
},

{"title":"Type assist: IPA to Oriya.", 
"desc":"Use an IPA keyboard mapping to type Oriya from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Oriya.", 
"desc":"Use a  mapping from Latin to type Oriya from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

/*{"title":"Type assist: Map keys to an Oriya keyboard.", 
"desc":"Use an Oriya keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},*/


{"id":"togglePalette", "title":"Show/hide the type-assist palette. ~ also works.", 
"desc":"Show or hide the palette used for type-assist input.",
"dataShortTitle":"P", "type":"toggle", "initialCode":"palette=document.getElementById('transcriptionPalette'); if (palette.style.display==='none') {palette.style.display='block';} else {palette.style.display='none';}"
},
]




// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'

