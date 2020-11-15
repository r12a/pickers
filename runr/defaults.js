var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Junicode WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.5"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'non' // language to use for examples
	factoryDefaults.uifont = 'Junicode WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'runicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Junicode WF" ]


var template = {}
	template.title = 'All Runic'
	template.sample = "ᚢᚴ᛬​ᛋᛁᛘ᛬​ᛚᛅᛁᚦ᛬​ᛅᛏ᛬​ᛁᚢᛚᚢᛘ᛬​ᚴᚢᚱᚦᚢᛋᚴ᛬​ᛘᛁᚾ᛬​ᚦᛅᚱ᛬​ᚢᚴᛅᛏᛁᚱ"
	template.blocklocation= '/scripts/runic/block'  // blocklocation to use for examples
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runic'
	template.scriptcode = 'Runr'
	template.fontLocale = 'runr'
	template.hints = false




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert runes to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Runic text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"LB/ST<br/>to Latin", "alt":"Transliterate Long Branch or Short Twig runes.", "code":"doTranscription('transliterateRunes')"},

{"title":"Medieval<br/>to Latin", "alt":"Transliterate Medieval runes.", "code":"doTranscription('transliterateMedievalRunes')"},

{"title":"AS/F<br/>to Latin", "alt":"Transliterate Anglo-Saxon/Frisian runes.", "code":"doTranscription('transliterateASRunes')"},

{"title":"Latin to<br/>LB", "alt":"Convert latin text to Long Branch Norwegian runes.", "code":"doTranscription('toLB')"},

{"title":"Latin to<br/>ST", "alt":"Convert latin text to Short Twig Norwegian runes.", "code":"doTranscription('toST')"},

{"title":"Latin to<br/>Medieval", "alt":"Convert latin text to Medieval Norwegian runes.", "code":"doTranscription('toMedieval')"},

{"title":"Latin to<br/>AS/F", "alt":"Convert latin text to Anglo-Saxon/Frisian runes.", "code":"doTranscription('toASF')"},

{"title":"Transcribe<br/>from NION", "alt":"Convert text from New Introduction to Old Norse to Unicode.", "code":"doTranscription('fromNItON')"},
]



var inputAids = [
{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

//{"title":"IPA characters", "dataVar":"showIPAChars", "dataLocn":"transcriptionPalette", "dataShortTitle":"I", "type":"palette", "initialCode":"setUpTypeAssist(false, ipaCharMap, ipaCharMap)", "desc":"Use ASCII characters to type Runic from an IPA transcription."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Runic from the keyboard via reverse transliteration."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
