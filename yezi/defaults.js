var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Serif Yezidi WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xlc' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Yezidi WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'yezidiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Serif Yezidi WF" ]


var template = {}
	template.title = 'Yezidi (draft)'
	template.sample = "𐺀𐺣𐺨 𐺠𐺨 𐺣𐺨𐺒 𐺦𐺡𐺨 𐺋𐺡𐺜 𐺁𐺣𐺦 𐺡𐺠𐺝 𐺄𐺀𐺣𐺣𐺑𐺦 𐺀𐺣𐺦 𐺝𐺦 𐺗𐺁𐺕𐺀𐺣𐺣𐺑𐺨 𐺁𐺣𐺀𐺡𐺄𐺀𐺠𐺡𐺦 𐺢𐺀𐺍𐺋 𐺄𐺀𐺝𐺣 𐺜𐺣𐺡𐺨 𐺧𐺀𐺓𐺨 𐺊𐺣𐺨 𐺆𐺣𐺨 𐺁𐺝𐺀𐺄𐺣𐺦 𐺣𐺄𐺨𐺀𐺢 𐺁𐺐𐺨𐺢𐺨 𐺣𐺠𐺆 𐺣𐺦𐺡𐺣𐺑𐺍𐺐"
	template.blocklocation= ''  // blocklocation to use for examples
	template.noteslocation = '' // location of script notes relevant to this app
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'yezi'
	template.scriptcode = 'yezi'
	template.fontLocale = "yezi"
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '𐺀'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Yezidi text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


/*{"title":"Make<br/>vocab", "alt":"Create an entry for a vocab file.", 

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
_output.focus();`},*/
]





var pulldown = [

/*{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('translitPlus')", "warning":"Adds inherent vowels and palatalisation. The result should be checked."},

{"title":"XXXX to Latin", "alt":"Convert XXXX text to a Latin transcription.", "code":"doTranscription('transcription')"},

{"title":"XXXX to Latin", "alt":"Convert XXXX script text to the Latin orthography.", "code":"doTranscription('transcription')", "warning":"The result of this conversion needs to be checked for accuracy."},

{"title":"XXXX to Radice", "alt":"Convert XXXX text to the Latin transcription used by Radice.", "code":"doTranscription('transcription')"},

{"title":"XXXX<br/>to ISO", "alt":"Convert XXXX text to an ISO 15919 Latin transcription.", "code":"doTranscription('toISO15919')"},

{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toIPA')", "warning":"This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"XXXX<br/>to IPA", "alt":"Convert XXX text to an <em>approximate</em> IPA transcription.", "code":"doTranscription('toISO15919')", "warning":"Separate syllables with spaces before use! Full transcription requires fully vowelled text! This only produces an APPROXIMATION to an IPA transcription. Use it as a base and refine it by hand." },

{"title":"ISO to<br/>XXXX", "alt":"Convert an ISO 15919 transcription to XXXX text.", "code":"doTranscription('toDeva')"},*/
]




var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Yezidi from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Yezidi.", 
"desc":"Use an IPA keyboard mapping to type Yezidi from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Yezidi.", 
"desc":"Use a  mapping from Latin to type Yezidi from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

/*{"title":"Type assist: Map keys to a XXXXX keyboard.", 
"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
"dataShortTitle":"k", "type":"palette", 
"initialCode":"setUpTypeAssist(false, makeTypeAssistMap(cols.kbd), makeTypeAssistMap(cols.kbd)); document.getElementById('keyboard').style.display='block';"
},*/

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
var inputAidsHelp1 = 'intro,shapeLookup,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'

