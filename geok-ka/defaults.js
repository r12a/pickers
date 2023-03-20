var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'BGP 2017 DejaVu Serif WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "30";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.5"; // line height of text area 
	factoryDefaults.language = 'ka' // language to use for examples
	factoryDefaults.uifont = 'BGP 2017 DejaVu Sans WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'khutsuri'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Georgian WF", "Noto Serif Georgian WF", "BGP 2017 DejaVu Serif WF", "BGP 2017 DejaVu Sans WF" ]


var template = {}
	template.title = 'Khutsuri character app'
	template.sample = "Ⴋⴓⴞⴊⴈ 1. Ⴗⴅⴄⴊⴀ ⴀⴃⴀⴋⴈⴀⴌⴈ ⴈⴁⴀⴃⴄⴁⴀ ⴇⴀⴅⴈⴑⴓⴔⴀⴊⴈ ⴃⴀ ⴇⴀⴌⴀⴑⴜⴍⴐⴈ ⴖⴈⴐⴑⴄⴁⴈⴇⴀ ⴃⴀ ⴓⴔⴊⴄⴁⴈⴇ. Ⴋⴀⴇ ⴋⴈⴌⴈⴝⴄⴁⴓⴊⴈ ⴀⴕⴅⴇ ⴂⴍⴌⴄⴁⴀ ⴃⴀ ⴑⴈⴌⴃⴈⴑⴈ ⴃⴀ ⴄⴐⴇⴋⴀⴌⴄⴇⴈⴑ ⴋⴈⴋⴀⴐⴇ ⴓⴌⴃⴀ ⴈⴕⴚⴄⴍⴃⴌⴄⴌ ⴛⴋⴍⴁⴈⴑ ⴑⴓⴊⴈⴑⴉⴅⴄⴇⴄⴁⴈⴇ."
	template.sampleSource = 'https://unicode.org/udhr/d/udhr_kat.html'
	template.blocklocation= 'geor'  // block directory
	template.noteslocation = 'geor/ka' // location of script notes
	template.vocablocation = 'geor/ka_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'geok-ka'
	template.scriptcode = 'Geok'
	template.fontLocale = 'geor'
	template.hints = true
	template.bicameral = true

	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Georgian Khutsuri text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Georgian to National Tr", "alt":"Convert Khutsuri text to a national Georgian Latin transcription.", "code":"doTranscription('toNational')"},
]






var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'National Latin'
    show.kbd = "Khutsuri"
    show.language = "Khutsuri"


var inputAids = []

