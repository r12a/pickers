var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Doulos SIL' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'non' // language to use for examples
	factoryDefaults.uifont = 'Doulos SIL'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "" // type of hint to show alongside characters in the grids


var thisPicker = 'oldnorsePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Doulos SIL WF", "Junicode WF" ]


var template = {}
	template.title = 'Old Norse character app'
	template.sample = "Ok sem leið at jólum, gørðusk menn þar ókátir. Bǫðvarr spurði Hǫtt hverju þat sætti; hann sagði honum at dýr eitt hafi komit þar tvá vetr í samt, mikit ok ógurligt."
	template.blocklocation= '/scripts/latin/block'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'oldnorse'
	template.scriptcode = 'Latn'
	template.fontLocale = 'germ'
	template.hints = false




var controls = [
]



var pulldown = [
{"title":"Vocab to<br>Markup", "alt":"Convert a vocab entry to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},

{"title":"Old Norse<br/>to IPA", "alt":"Convert Old Norse text to a rough IPA transcription.", "code":"doTranscription('toIPA')"},

{"title":"Old Norse<br/>to LB runes", "alt":"Convert Old Norse text to a rough runic long-branch transcription.", "code":"doTranscription('toRunes')"},

{"title":"Old Norse<br/>to ST runes", "alt":"Convert Old Norse text to a rough runic short-twig transcription.", "code":"doTranscription('toShortRunes')"},

{"title":"Transcribe<br/>from NION", "alt":"Convert text from 'New Introduction to Old Norse' to Unicode.", "code":"doTranscription('fromNItON')"},

{"title":"Glossary<br/>lookup", "alt":"Look up Old Norse text in A New Introduction to Old Norse' to Unicode.", "code":"openGlossaryWindow(transcribe(getHighlightedText(_output),'toGloss'));_output.focus();"},
]



var inputAids = [
{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Old Norse from the keyboard."},

{"title":"More characters", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"M", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions, as well as normal letters."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."},

{"title":"Show case endings", "dataVar":"showCaseEndings", "dataLocn":"caseEndings", "dataShortTitle":"S", "type":"other", "desc":"Show information about case endings."},
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
