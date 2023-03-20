var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'East Syriac Adiabene WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "36";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.2"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'aii' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Syriac Eastern WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'aramaicPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Syriac Eastern WF", "Noto Sans Syriac Estrangela WF", "Noto Sans Syriac Western WF", "East Syriac Adiabene WF", "Estrangelo Edessa WF", "Serto Jerusalem WF" ]


var template = {}
	template.title = 'Assyrian Neo-Aramaic'
	template.sample = "ܐܸܢ ܦܵܝܫܝܼ ܒܘܼܓ̰ܪܹ̈ܐ، ܟܹܐ ܗܵܘܝܼ ܡܲܦܬܘܼܝܹܐ ܘܓܲܪܘܘܼܣܹܐ ܒܣܸܕܪܵܐ ܕܐܵܢ ܠܸܫܵܢܹ̈ܐ ܣܸܦܪ̈ܵܝܹܐ ܘܪܗܸܛܪ̈ܵܝܹܐ ܕܕܘܼܢܝܹܐ."
	template.sample = "ܟܠܲܝܗܝ ܐ݇ܢܵܫܹ̈ܐ ܦܝܼܫܹܐ ܝܢܵܐ ܒܸܪܝܵܐ ܚܹܐܪܹ̈ܐ ܘܫܵܘܝܸ̈ܐ ܒܐܝܼܩܵܪܵܐ ܘܲܒܙܸܕܩܹ̈ܐ. ܘܦܝܼܫܹܐ ܝܢܵܐ ܝܗܝܼܒܹܐ ܗܵܘܢܵܐ ܘܬܹܐܕܬܵܐ ܘܦܝܼܫܬܵܐ ܝܠܵܗ̇ ܣܒܝܼܪܬܵܐ ܡܸܢܲܝܗܝ ܕܦܵܠܚܝܼ ܚܲܕ ܥܲܡ ܗ̇ܘ ܐ݇ܚܹܪ݇ܢܵܐ ܒܲܚܕܵܐ ܪܘܼܚܵܐ ܕܐܲܚܘܼܬܵܐ."
	template.sampleSource = ''
	template.blocklocation= 'syrc'  // block directory
	template.noteslocation = 'syrc/aii' // location of script notes
	template.vocablocation = 'syrc/aii_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'syrc-aii'
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
{"title":"Trans-<br/>literate", "alt":"Convert Assyrian text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
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
    show.language = "Assyrian"


var inputAids = []

