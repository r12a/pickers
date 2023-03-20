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
	template.sampleSource = ''
	template.blocklocation= 'runic'  // block directory
	template.noteslocation = '' // location of script notes
	template.vocablocation = '' // location of term database
	template.direction = "bidi" // indicates whether this is a picker for a RTL script
	template.github = 'runr'
	template.scriptcode = 'Runr'
	template.fontLocale = 'runr'
	template.hints = false
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '᛬​'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011'], ['CGJ','\u034F'], ['RLO','\u202E'], ['PDF','\u202C']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert runes to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [

{"title":"LB/ST to Latin", "alt":"Transliterate Long Branch or Short Twig runes.", "code":"doTranscription('transliterateRunes')"},

{"title":"Medieval to Latin", "alt":"Transliterate Medieval runes.", "code":"doTranscription('transliterateMedievalRunes')"},

{"title":"AS/F to Latin", "alt":"Transliterate Anglo-Saxon/Frisian runes.", "code":"doTranscription('transliterateASRunes')"},

{"title":"Latin to LB", "alt":"Convert latin text to Long Branch Norwegian runes.", "code":"doTranscription('toLB')"},

{"title":"Latin to ST", "alt":"Convert latin text to Short Twig Norwegian runes.", "code":"doTranscription('toST')"},

{"title":"Latin to Medieval", "alt":"Convert latin text to Medieval Norwegian runes.", "code":"doTranscription('toMedieval')"},

{"title":"Latin to AS/F", "alt":"Convert latin text to Anglo-Saxon/Frisian runes.", "code":"doTranscription('toASF')"},

{"title":"Transcribe from NION", "alt":"Convert text from New Introduction to Old Norse to Unicode.", "code":"doTranscription('fromNItON')"},
]





var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = false
    show.transc = ''
    show.kbd = ""
    show.language = "Runic"


var inputAids = []

