var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans NKo WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'nqo' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans NKo WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'nkoPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans NKo WF" ]


var template = {}
	template.title = 'N\'Ko character app'
    template.sample = " ߡߊ߲߬ߘߋ߲߬ ߛߊ߲ߘߊ ߘߏ߫ ߟߋ߬ ߞߊ߲߫ ߞߏ߫: ߌ ߓߊ߯ ߌ ߢߊ ߟߐ߬ ߕߋ߬ߟߋ ߘߐ߫ ߞߵߌ ߕߊ߯ ߦߙߐ ߡߊߝߟߍ߫߸ ߛߎ߫ ߕߍ߫ ߞߏ߬ ߌ ߡߊ߬. ߒ߬ߓߊ߬ ߊ߲ ߧߋ߫ ߒ߬ ߠߞߊߟߌߦߊ߫ ߛߊ߫ ߒ߬ ߘߌ߫ ߞߍ߫ ߒ߬ ߘߎߢߊߘߐߕߍ߯ ߢߐ߲߮ ߠߎ߬ ߘߐ߫ ߞߊ߬ ߞߍ߫ ߞߎߟߎ߲߫ ߞߋߟߋ߲߫ ߞߣߐ߫ ߏ߬ ߘߐ߫."
	template.sampleSource = ''
	template.blocklocation= 'nkoo'  // block directory
	template.noteslocation = 'nkoo/nqo' // location of script notes
	template.vocablocation = 'nkoo/nqo_vocab' // location of term database
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'nko'
	template.scriptcode = 'Nkoo'
	template.fontLocale = 'nkoo'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003'] ]
	template.defaultInvisible = 'ߑ'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u200C'], ['NBHY','\u2011'], 
	['RLM','\u200F'], ['LRM','\u200E'], ['ALM','\u061C']]
	template.moreKeys = [['RLI','\u2067'], ['LRI','\u2066'], ['FSI','\u2068'], 
	['PDI','\u2069'], ['RLO','\u202E'], ['LRO','\u202D'], ['PDF','\u202C'], 
	['CGJ','\u034F']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert N'Ko text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Converts sequences for foreign sounds to single Latin symbols. The result should be checked."},
]




var show = {}  // indicates which inputAids to use
    show.shape = true
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "N'K"
    show.language = "N'K"


var inputAids = []

