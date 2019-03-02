var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Egyptian Hieroglyphs WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "45";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'egy' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Egyptian Hieroglyphs WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "20";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'egyptianPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Egyptian hieroglyph character picker'
	template.sample = "<-i-mn:n-R4:t*p->\\n𓍹𓇋𓏠𓐰𓈖𓊵𓐰𓏏𓐱𓊪𓍺"
    template.blocklocation= '/scripts/egyptianhieroglyphs/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'egyptian'
	template.scriptcode = 'Egyp'



var inputAids = [
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=true;makePalette(justLatinMap);makeKbdEventList(justLatinMap);"},
{"title":"Latin to Egyptian", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"window.latinOnly=false;makePalette(translitCharacterMap);makeKbdEventList(translitCharacterMap);"},
//{"title":"Capital Latin characters", "dataVar":"showLatinCapsTrans", "dataLocn":"latincapstranscript", "dataShortTitle":"C", "type":"palette"},
//{"title":"Latin to Egyptian", "dataVar":"showLOCTrans", "dataLocn":"loctranscript", "dataShortTitle":"L", "type":"palette"},
{"title":"Egyptian alphabet", "dataVar":"showAlphaTrans", "dataLocn":"alphatranscript", "dataShortTitle":"E", "type":"palette"},
]

var controls = [
{"title":"MdC to<br/>Unicode", "alt":"Convert Manuel de Codage transcriptions to Unicode.", "code":"doTranscription('mdcToHieroglyphs')"},
{"title":"MdC to<br/>WikiHiero", "alt":"Display Manuel de Codage transcriptions on WikiHiero page.", "code":"doWikiHiero()"},
{"title":"Unicode<br/>to MdC", "alt":"Convert Unicode to Manuel de Codage transcription.", "code":"doTranscription('hieroglyphsToMdC')"},
{"title":"Change<br/>Transliteration", "alt":"Convert one transcription to another.", "code":"document.getElementById('translitSelector').style.display = 'block';"},
{"title":"Phonetic<br/>look up", "alt":"Look up a Latin consonant or consonant sounds.", "code":"convertPhonemes()"},
]

