var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Junicode WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "3"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'non' // language to use for examples
	factoryDefaults.uifont = 'Junicode WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'runicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Runic character picker'
	template.sample = "ᚢᚴ᛬​ᛋᛁᛘ᛬​ᛚᛅᛁᚦ᛬​ᛅᛏ᛬​ᛁᚢᛚᚢᛘ᛬​ᚴᚢᚱᚦᚢᛋᚴ᛬​ᛘᛁᚾ᛬​ᚦᛅᚱ᛬​ᚢᚴᛅᛏᛁᚱ"
	template.blocklocation= '/scripts/runic/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runic'
	template.scriptcode = 'Runr'



var inputAids = [
{"title":"Transliteration characters", "dataVar":"showTranslitTrans", "dataLocn":"translittranscript", "dataShortTitle":"T", "type":"palette"},
{"title":"IPA characters", "dataVar":"showIPATrans", "dataLocn":"ipatranscript", "dataShortTitle":"I", "type":"palette"}
]

var controls = [
{"title":"Transliterate<br/>LB/ST runes", "alt":"Transliterate Long Branch or Short Twig runes.", "code":"doTranscription('transliterateRunes')"},
{"title":"Transliterate<br/>Medieval runes", "alt":"Transliterate Medieval runes.", "code":"doTranscription('transliterateMedievalRunes')"},
{"title":"Transliterate<br/>AS/F runes", "alt":"Transliterate Anglo-Saxon/Frisian runes.", "code":"doTranscription('transliterateASRunes')"},
{"title":"Latin to<br/>LB runes", "alt":"Convert latin text to Long Branch Norwegian runes.", "code":"doTranscription('toLB')"},
{"title":"Latin to<br/>ST runes", "alt":"Convert latin text to Short Twig Norwegian runes.", "code":"doTranscription('toST')"},
{"title":"Latin to<br/>Medieval runes", "alt":"Convert latin text to Medieval Norwegian runes.", "code":"doTranscription('toMedieval')"},
{"title":"Latin to<br/>AS/F runes", "alt":"Convert latin text to Anglo-Saxon/Frisian runes.", "code":"doTranscription('toASF')"},
{"title":"Transcribe<br/>from NION", "alt":"Convert text from New Introduction to Old Norse to Unicode.", "code":"doTranscription('fromNItON')"},
]
