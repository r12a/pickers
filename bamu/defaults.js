var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Bamum' // text area font name (a single font, no quotes)
	factoryDefaults.size = "35";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bax' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Bamum'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'bamumPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Bamum WF" ]


var template = {}
	template.title = 'Bamum character app'
	template.sample = "ꛦ-ꚳꛊꚤ ꚳꚣꚧ꛱ꛦꚧ꛱ ꚳ꛰ꚴꚢ ꛲ꛗ   ꛧ-ꚳꛊꚤ ꛄꚧ꛱ ꚳ꛰ꛤ꛰ ꚩꚤ ꛲ꛗ   ꛨ-ꛅꚧ꛱ ꛣꚠ ꚳꛊꚤꚳ ꛎꛦ ꛛꚧ꛱ ꛲ꛗ   ꛩ-꛲ꚣꛤ ꛅꚧ꛱ ꛇꛛꚧ꛱ ꛤ꛰ ꛨ ꚣꛤ ꛛꚧ꛱ ꛦ꛰ꚳ꛰   ꛪ-ꛕꚠꛤ ꛅꚧ ꛈ ꛅꚧ꛱ ꛖ ꚳ꛰ꛤ꛰ ꛲ꚱꛅ꛱"
	template.blocklocation= '/scripts/bamu/block'  // blocklocation to use for examples
	template.noteslocation = 'bamum/' // location of script notes relevant to this app
	// template.vocablocation = '/scripts/XXXX/XX_vocab' // location of term database, full url
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bamu'
	template.scriptcode = 'Bamu'
	template.fontLocale = 'bamu'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '꛰'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Bamum text to a one-to-one Latin transliteration.", 
"warning":"A transcription is supplied automatically, but needs to be checked.", 

"code":"console.log('calling');doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand a line to create an entry for a vocab file.", "code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = toLatin(input[0]);
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]



var pulldown = [

//{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Bamum text.", "code":"doTranscription('reverse')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Bamum<br/>to Latin", "alt":"Convert Bamum script text to the Latin orthography.", "code":"doTranscription('toLatin')", "warning":"The result of this conversion needs to be checked for accuracy."},
]




var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Bamum from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Bamoun.", 
"desc":"Use an IPA keyboard mapping to type Bamoun from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Bamoun.", 
"desc":"Use a  mapping from Latin to type Bamoun from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: Map keys to a XXXXX keyboard.", 
//"desc":"Use a XXXXXX XXXXXX keyboard mapping to type from the keyboard.",
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
var inputAidsHelp1 = 'intro,shapeLookup,typeAssist'
var inputAidsHelp2 = 'latinAssist,togglePalette'

