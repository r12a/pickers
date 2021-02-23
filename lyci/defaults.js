var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Lycian WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area
	factoryDefaults.language = 'xlc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Lycian WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'lycianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Lycian WF" ]


var template = {}
	template.title = 'Lycian'
	template.sample = "𐤠𐤨𐤯𐤦𐤫 𐤫𐤵𐤲𐤦𐤳 𐤲𐤤𐤩𐤷𐤨 𐤱𐤶𐤫𐤳𐤷𐤦𐤱𐤦𐤣 𐤱𐤠𐤨𐤪𐤷 𐤠𐤭𐤯𐤦𐤪𐤰𐤮 𐤦𐤡𐤮𐤦𐤪𐤳𐤦𐤳 𐤠𐤭𐤯𐤦𐤪𐤰𐤨 𐤨𐤰𐤩𐤰𐤪𐤳𐤦𐤳 𐤠𐤠𐤭𐤠𐤷 𐤡𐤦𐤭𐤠𐤷𐤨 𐤨𐤷𐤦𐤣𐤠𐤷 𐤨𐤬𐤱𐤰𐤷𐤨 𐤲𐤦𐤭𐤠𐤷 𐤲𐤤𐤩𐤷𐤨 𐤡𐤦𐤩𐤷 𐤥𐤹𐤡𐤠𐤲𐤶𐤫𐤯"
	template.blocklocation= 'lyci'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'lyci'
	template.scriptcode = 'lyci'
	template.fontLocale = "lyci"
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Lycian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},


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
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Lycian text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

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
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Lycian from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"ISO to Hindi", "dataVar":"showISOCharMap", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(isoCharacterMap);makeKbdEventList(isoCharacterMap);", "desc":"Create XXXX text from characters in the XXXX transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Lycian from the keyboard via reverse transliteration."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}

