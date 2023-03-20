var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Tai Heritage Pro WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "28";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'blt' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Tai Viet WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'taivietPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Tai Heritage Pro WF", "Noto Sans Tai Viet WF" ]


var template = {}
	template.title = 'Tai Viet character app'
	template.sample = "ꪹꪕꪸꪉ ꪀꪱ ꪋꪴ ꫛ ꪎꪲꪉ ꪮꪮꪀ ꪣꪱ ꪻꪠ ꪁꪷ ꪻꪬ ꪼꪒ ꪕꪳ ꪕꪱꪉ ꪀꪾꪚ ꪹꪋꪷꪉ ꪝꪸꪉ ꪕꪮꪥ ꪩꪾ ꫛ ꪶꪔꪙ ꪠꪴ - ꪋꪴ ꪬꪺ ꫛ ꪻꪠ ꪁꪷ ꪻꪬ ꪣꪲ ꪁꪫꪸꪙ ꪎꪱꪉ ꪶꪎꪣ ꪩꪺꪉ ꪹꪥꪸꪒ ꫛ ꪀꪾꪚ ꪹꪥꪸꪒ ꪻꪊ ꪚꪴꪙ ꪀꪾꪚ ꪼꪒ ꪹꪚꪷꪉ ꪒꪲ ꪀꪾꪚ ꪫꪸꪀ ꪭꪰꪀ ꪵꪝꪉ ꪹꪏꪉ ꪹꪭꪙ ꪒꪸꪫ."
	template.sampleSource = ''
	template.blocklocation= 'tavt'  // block directory
	template.noteslocation = 'tavt/blt' // location of script notes
	template.vocablocation = 'tavt/blt_vocab' // location of term database
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'tavt'
	template.scriptcode = 'Tavt'
	template.fontLocale = 'tavt'
	template.hints = true
	
	template.defaultSpace = ' '
	template.spaces = [['SP', ' '], ['ZWSP', '\u200B'], ['NBSP','\u00A0'], 
	['NNBSP','\u202F'], ['EMSP','\u2003']]
	template.defaultInvisible = ''
	template.invisibles = [['ZWJ','\u200D'], ['ZWNJ','\u200C'], ['WJ','\u2060'], 
	['SHY','\u00AD'], ['NBHY','\u2011']]




var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Tai Viet text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]




var pulldown = [
]




var show = {}  // indicates which inputAids to use
    show.shape = false
    show.hints = false
    show.default = true
    show.latin = true
    show.ipa = true
    show.transc = 'Latin'
    show.kbd = "Tai Viet"
    show.language = "Tai Viet"


var inputAids = []

