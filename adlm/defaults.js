var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Adlam WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // line height of text area 
	factoryDefaults.language = 'fuf' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Adlam WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'adlamPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Adlam New WF", "Noto Sans Adlam WF", "Noto Sans Adlam Unjoined WF" ]

 
var template = {}
	template.title = 'Adlam character app'
	template.sample = "𞤑𞤵𞥅𞤤𞤢𞤤 𞤺𞤢𞤣𞤢𞤲𞤢𞤤 𞤋𞤲𞥆𞤢𞤥𞤢 𞤢𞥄𞤣𞤫𞥅𞤶𞤭 𞤬𞤮𞤬 𞤨𞤮𞤼𞤭⹁ 𞤲𞥋𞤣𞤭𞤥𞤯𞤭𞤣𞤭 𞤫 𞤶𞤭𞤦𞤭𞤲𞤢𞤲𞥆𞤣𞤫 𞤼𞤮 𞤦𞤢𞤲𞥆𞤺𞤫 𞤸𞤢𞤳𞥆𞤫𞥅𞤶𞤭. 𞤉𞤩𞤫 𞤲𞥋𞤺𞤮𞥅𞤣𞤭 𞤥𞤭𞥅𞤶𞤮 𞤫 𞤸𞤢𞤳𞥆𞤭𞤤𞤢𞤲𞤼𞤢𞥄𞤺𞤢𞤤 𞤫𞤼𞤫 𞤫𞤩𞤫 𞤨𞤮𞤼𞤭 𞤸𞤵𞥅𞤬𞤮 𞤲𞥋𞤣𞤭𞤪𞤣𞤫 𞤫 𞤲𞥋𞤣𞤫𞤪 𞤩 𞤭𞤴𞤲𞤺𞤵𞤴𞤵𞤥𞥆𞤢𞥄𞤺𞤵."
	template.sampleSource = 'UDHR https://unicode.org/udhr/d/udhr_fuf_adlm.html'
    template.blocklocation= 'adlm'  // block file directory
	template.noteslocation = 'adlm/fuf' // location of script notes
	template.vocablocation = 'adlm/fuf_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'adlm'
	template.scriptcode = 'Adlm'
	template.cursive = true
	template.fontLocale = "adlm"
	template.hints = true
	template.bicameral = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = '𞥋'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
//{"title":"Transl<br/>++", "alt":"Convert ajami text to a latin transliteration with vowels and other changes.", "code":"doTranscription('translitPlus')"},


/*{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = transcribetoIPA(input[0]);
latin = transcribetoLatin(input[0]);

if (ipa !== latin) ipa += ' (' + latin + ')';
notes = input[2]? input[2] : ''; 

add(getVocab(input[0], input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},*/
]

//if (ipa !== latin) notes += '|' + latin;


var pulldown = [
{"title":"Transcribe to IPA", "alt":"Convert Pular text to an approximate IPA transcription.", "code":"doTranscription('toIPA');"},

{"title":"Transcribe to Latin", "alt":"Convert Pular text to the Latin orthography.", "code":"doTranscription('toLatin');"},
]




var inputAids = [
{"title":"Shape-based lookup", "id":"showShapeLookup", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

{"title":"Hint at similar shapes", "id":"showShapeHints", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"id":"showRevTransSwitch", 
"title":"Default type-assist: Map keyboard to characters for easy input. Press ` to switch.", 
"desc":"Use ASCII characters to type Pular from the keyboard using a customised key mapping.",
"dataShortTitle":"T", "type":"palette", "initialCode":"mapstring=makeTypeAssistMap(cols.key); setUpTypeAssist(false, mapstring, mapstring)", 
},

{"title":"Type assist: IPA to Pular.", 
"desc":"Use an IPA keyboard mapping to type Pular from the keyboard.",
"dataShortTitle":"æ", "type":"palette",
"initialCode":"mapstring=makeComplexTypeAssistMap(cols.ipaLoc);setUpTypeAssist(false, mapstring, mapstring)"
},

{"title":"Type assist: Latin transcription to Pular.", 
"desc":"Use a  mapping from Latin to type Pular from the keyboard.",
"dataShortTitle":"t", "type":"palette", "initialCode":"mapstring=makeComplexTypeAssistMap(cols.transcription);setUpTypeAssist(false, mapstring, mapstring)"
},

//{"title":"Type assist: Map keys to a Pular keyboard.", 
//"desc":"Use a Pular keyboard mapping to type from the keyboard.",
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
