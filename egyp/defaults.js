var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Egyptian Hieroglyphs WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'egy' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Egyptian Hieroglyphs WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'egyptianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
  
var webFonts = [ "Noto Sans Egyptian Hieroglyphs WF" ]

 
var template = {}
	template.title = 'Egyptian hieroglyphs'
	template.sample = "<-i-mn:n-R4:t*p->\\n𓍹𓇋𓏠𓐰𓈖𓊵𓐰𓏏𓐱𓊪𓍺"
	template.sampleSource = ''
    template.blocklocation= 'egyp'  // block file directory
	template.noteslocation = 'egyp/egy' // location of script notes
	template.vocablocation = 'egyp/egy_vocab' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'egyp'
	template.scriptcode = 'Egyp'
	template.cursive = false
	template.fontLocale = "egyp"
	template.hints = true
	template.bicameral = false
	
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
//{"title":"Trans-<br/>literate", "alt":"Convert ajami text to a Latin transliteration.", "code":"doTranscription('transliterate')"},
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
_output.focus();`},
{"title":"MdC to<br/>WikiHiero", "alt":"Display Manuel de Codage transcriptions on WikiHiero page.", "code":"doWikiHiero()"},
{"title":"MdC to<br/>Unicode", "alt":"Convert Manuel de Codage transcriptions to Unicode.", "code":"doTranscription('mdcToHieroglyphs')"},
{"title":"Unicode<br/>to MdC", "alt":"Convert Unicode to Manuel de Codage transcription.", "code":"doTranscription('hieroglyphsToMdC')"},
{"title":"Change<br/>Transliteration", "alt":"Convert one transcription to another.", "code":"document.getElementById('translitSelector').style.display = 'block';"},
{"title":"Phonetic<br/>look up", "alt":"Look up a Latin consonant or consonant sounds.", "code":"convertPhonemes()"},*/
{"title":"Unicode<br>to MdC", "alt":"Convert Unicode to Manuel de Codage transcription.", "code":"doTranscription('hieroglyphsToMdC')"},
{"title":"MdC to<br>Unicode", "alt":"Convert Manuel de Codage transcriptions to Unicode.", "code":"doTranscription('mdcToHieroglyphs')"},
{"title":"MdC to<br>WikiHiero", "alt":"Display Manuel de Codage transcriptions on WikiHiero page.", "code":"doWikiHiero()"},
]

//if (ipa !== latin) notes += '|' + latin;


var pulldown = [
{"title":"MdC to WikiHiero", "alt":"Display Manuel de Codage transcriptions on WikiHiero page.", "code":"doWikiHiero()"},
{"title":"MdC to Unicode", "alt":"Convert Manuel de Codage transcriptions to Unicode.", "code":"doTranscription('mdcToHieroglyphs')"},
{"title":"Unicode to MdC", "alt":"Convert Unicode to Manuel de Codage transcription.", "code":"doTranscription('hieroglyphsToMdC')"},
{"title":"Change Transliteration", "alt":"Convert one transcription to another.", "code":"document.getElementById('translitSelector').style.display = 'block';"},
{"title":"Phonetic look up", "alt":"Look up a Latin consonant or consonant sounds.", "code":"convertPhonemes()"},
]


var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = "Egyptian"



var inputAids = [
//{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Latin to Egyptian", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"I-consonants", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
//{"title":"Capital Latin characters", "dataVar":"showLatinCapsTrans", "dataLocn":"latincapstranscript", "dataShortTitle":"C", "type":"palette"},
//{"title":"Latin to Egyptian", "dataVar":"showLOCTrans", "dataLocn":"loctranscript", "dataShortTitle":"L", "type":"palette"},
//{"title":"Egyptian alphabet", "dataVar":"showAlphaTrans", "dataLocn":"alphatranscript", "dataShortTitle":"E", "type":"palette"},
]


