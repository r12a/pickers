var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'CPAGenizah WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "200"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'axp' // language to use for examples
	factoryDefaults.uifont = 'CPAGenizah WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'cpaPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "CPAGenizah WF" ]


var template = {}
	template.title = 'Christian Palestinian Aramaic'
	template.sample = "ܘܗܘܐ [ܣ]ܒܝܪ / ܖܚܬܪ [ܝܬ]ܗ̇ / ܘܫܪܝ ܩܨܝܚ / ܒܩܠܐ ܪܒܐ / ܘܐܒܪ ܟܖܢ ܃܁ / ܐܫܬܒܫܘ / ܖ̈ܚܡܝــــــ / ܐܫܬܒܫܘ / ܥܘ̈ܠܘ ܒܟܝܪ / ܐܡܪ ܖܝ / ܛܘܒܢܐ ܠܘܬܗ ܃ / ܟܘܠ ܡܝܢ̈ܝܐ / ܚܓ̈ܠܘ ܝܬܝ / ܘܒܫܝܡܗ ܖܡܪܐ / ܪܖܦܬ ܝܬܗܘܢ ܃܁"
	template.sampleSource = ''
	template.blocklocation= 'syrc'  // block directory
	template.noteslocation = 'syrc/axp' // location of script notes
	template.vocablocation = 'syrc/axp_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syrc-axp'
	template.scriptcode = 'Syrc'
	template.cursive = true
	template.fontLocale = 'syrc'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = 'ܐ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C'], ['SAM','\u070F']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Aramaic text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
]






var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = ""
    show.language = "Aramaic"


var inputAids = []

