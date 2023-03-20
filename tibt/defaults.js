var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tibetan Machine Uni WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bo' // language to use for examples
	factoryDefaults.uifont = 'Noto Serif Tibetan WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'tibetanPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Tibetan Machine Uni WF", "Noto Serif Tibetan WF" ]


var template = {}
	template.title = 'Tibetan character app'
	template.sample = "༢ སྐྱེ་བོ་རེ་རེར་རང་ཡུལ་ཐེ་བས་ཡུལ་ལུང་གང་འདྲ་ཞིག་ནས་ཕྱིར་ཐོན་བྱེད་པའམ། ཡང་ན་རང་ཡུལ་དུ་ཕྱིར་ལོག་བྱེད་པའི་ཐོབ་ཐང་ཡོད༎"
	template.sampleSource = ''
	template.blocklocation= 'tibt'  // block directory
	template.noteslocation = 'tibt/bo' // location of script notes
	template.vocablocation = 'tibt/bo_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tibt'
	template.scriptcode = 'Tibt'
	template.fontLocale = 'tibt'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = '་'
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tibetan text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]






var pulldown = [

{"title":"Translit+", "alt":"Convert to a Latin transliteration but then apply additional phonetic transformations.", "code":"doTranscription('transcription')", "warning":"Converts sequences representing foreign sounds to a single symbol, and the tsek to a space. The result should be checked."},

{"title":"Tibetan to Wylie", "alt":"Convert Tibetan text to a Latin (Wylie) transcription.", "code":"doTranscription('toWylie')"},

{"title":"Wylie to Tibetan", "alt":"Convert a Latin (Wylie) transcription to Tibetan text.", "code":"var converter = window.open('http://www.thlib.org/reference/transliteration/wyconverter.php', 'converter') ; converter.focus();"},
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = true
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Wylie'
    show.kbd = ""
    show.language = "Tibetan"


var inputAids = []

