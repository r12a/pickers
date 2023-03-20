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
	template.sampleSource = ''
	template.blocklocation= 'latn'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'latn-non'
	template.scriptcode = 'Latn'
	template.fontLocale = 'germ'
	template.hints = false
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F']]




var controls = [
]



var pulldown = [

{"title":"Old Norse to IPA", "alt":"Convert Old Norse text to a rough IPA transcription.", "code":"doTranscription('toIPA')"},

{"title":"Old Norse to LB runes", "alt":"Convert Old Norse text to a rough runic long-branch transcription.", "code":"doTranscription('toRunes')"},

{"title":"Old Norse to ST runes", "alt":"Convert Old Norse text to a rough runic short-twig transcription.", "code":"doTranscription('toShortRunes')"},

{"title":"Transcribe from NION", "alt":"Convert text from 'New Introduction to Old Norse' to Unicode.", "code":"doTranscription('fromNItON')"},

{"title":"Glossary lookup", "alt":"Look up Old Norse text in A New Introduction to Old Norse' to Unicode.", "code":"openGlossaryWindow(transcribe(getHighlightedText(_output),'toGloss'));_output.focus();"},
]








var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = 'Latin'
    show.ipa = true
    show.transc = ''
    show.kbd = "Old Norse"
    show.language = "Old Norse"


// show case endings doesn't currently work
var inputAids = [
//{"title":"Show case endings", "dataVar":"showCaseEndings", "dataLocn":"caseEndings", "dataShortTitle":"S", "type":"other", "desc":"Show information about case endings."},
]
