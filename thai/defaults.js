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
	template.blocklocation= 'thai'  // blocklocation to use for examples
	template.noteslocation = 'thai' // location of script notes relevant to this app
	template.vocablocation = '/scripts/thai/th_vocab' // location of term database, full url
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'thai'
	template.scriptcode = 'Thai'
	template.fontLocale = 'thai'
	template.hints = true
	template.defaultSpace = '\u200B'
	
	privilegedKey = ' '  // § key assignment
	template.defaultSpace = '\u200B'
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011']]
	template.defaultCtrlkey = ' ฺ'
	template.ctrlkeys = [['VIRAMA','\u0E3A']]



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

{"title":"Thai<br>to IPA", "alt":"Convert Thai text to an approximate IPA transcription.", "code":"doTranscription('toIPA')", "warning":"Separate syllables with spaces before use. This only produces an <em>approximation</em> to an IPA transcription. Use it as a base and refine it by hand."},

{"title":"Remove<br>sp/hyph", "alt":"Remove spaces and hyphens.", "code":"add(condense(getHighlightedText(document.getElementById('output'))));document.getElementById('output').focus();"},
]



var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Thai from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Thai.", 
"desc":"Use an IPA keyboard mapping to type Thai from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: ISO transcription to Thai.", 
"desc":"Use a  mapping from ISO to type Thai from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Map keys to an Thai keyboard.", 
"desc":"Use a Thai keyboard mapping to type from the keyboard.",
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


//{"title":"Becker to Thai", "dataVar":"showBeckerTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"B", "type":"palette", "initialCode":"setUpTypeAssist(false, beckerCharacterMap, beckerCharacterMap)"},
]





// this indicates which items are to be described in the help
// options include: intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist – kbdAssist,latinAssist,togglePalette
var inputAidsHelp1 = 'intro,shapeLookup,shapeHints,typeAssist,ipaAssist,transAssist'
var inputAidsHelp2 = 'kbdAssist,latinAssist,togglePalette'
